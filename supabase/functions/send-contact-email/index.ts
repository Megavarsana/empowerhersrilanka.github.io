
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.50.3';
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, subject, message }: ContactFormData = await req.json();

    console.log("Received contact form submission:", { name, email, subject });

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Store the submission in the database
    const { error: dbError } = await supabase
      .from('contact_submissions')
      .insert({
        name,
        email,
        subject,
        message
      });

    if (dbError) {
      console.error("Database error:", dbError);
      throw new Error(`Database error: ${dbError.message}`);
    }

    // Send email to organization
    const organizationEmailResponse = await resend.emails.send({
      from: "EmpowerHer Contact Form <onboarding@resend.dev>",
      to: ["empowerhersrilanka@gmail.com"],
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #e91e63;">New Contact Form Submission</h2>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Contact Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #e91e63; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Message</h3>
            <p style="line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding: 15px; background-color: #f0f8ff; border-radius: 8px;">
            <p style="margin: 0; font-size: 14px; color: #666;">
              <strong>Reply to:</strong> ${email}<br>
              <strong>Submitted:</strong> ${new Date().toLocaleString()}
            </p>
          </div>
        </div>
      `,
    });

    // Send confirmation email to user
    const userConfirmationResponse = await resend.emails.send({
      from: "EmpowerHer Sri Lanka <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for contacting EmpowerHer Sri Lanka",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #e91e63;">Thank you for reaching out, ${name}!</h2>
          
          <p style="line-height: 1.6;">We have received your message and truly appreciate you taking the time to contact us.</p>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Your Message Summary</h3>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
          </div>
          
          <p style="line-height: 1.6;">Our team will review your message and get back to you as soon as possible. We're committed to supporting women in our community and your voice matters to us.</p>
          
          <div style="margin-top: 30px; padding: 20px; background-color: #fce4ec; border-radius: 8px;">
            <p style="margin: 0; font-weight: bold; color: #e91e63;">EmpowerHer Sri Lanka</p>
            <p style="margin: 5px 0 0 0; color: #666;">Building a stronger community for women</p>
          </div>
        </div>
      `,
    });

    console.log("Organization email sent:", organizationEmailResponse);
    console.log("User confirmation email sent:", userConfirmationResponse);

    return new Response(
      JSON.stringify({ 
        message: "Contact form submitted and emails sent successfully",
        organizationEmailId: organizationEmailResponse.data?.id,
        userEmailId: userConfirmationResponse.data?.id
      }), 
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
