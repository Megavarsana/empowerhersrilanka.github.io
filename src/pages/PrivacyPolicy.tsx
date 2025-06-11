import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* About Us Section */}
      <section id="about" className="section-spacing bg-white">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              ABOUT US
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                EmpowerHer is a dedicated platform created specifically for Sri Lankan women 
                to provide comprehensive support in safety, mental health, and personal development. 
                We understand the unique challenges faced by women in our community and strive to 
                create a safe digital space where every woman can access the resources she needs.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our platform combines emergency safety tools, professional counseling resources, 
                educational opportunities, and mentorship programs all in one trusted location. 
                Whether you're seeking immediate help, career guidance, or personal growth resources, 
                EmpowerHer is here to support your journey.
              </p>
            </div>
            
            <div className="flex justify-center">
              <div className="bg-pastel-rose-light p-8 rounded-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                  alt="Sri Lankan women empowerment"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <p className="text-center text-gray-600 text-sm mt-4 italic">
                  Supporting Sri Lankan women in their journey towards empowerment
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Mission Section */}
      <section id="vision-mission" className="section-spacing bg-pastel-rose-light">
        <div className="container mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Our Vision */}
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-pastel-rose-medium p-3 rounded-full">
                  <Eye className="h-6 w-6 text-pastel-rose-dark" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                To create a future where every Sri Lankan woman can live with dignity, 
                courage, and independence. We envision a society where women have equal 
                access to opportunities, resources, and support systems that enable them 
                to thrive both online and offline.
              </p>
              <div className="bg-pastel-rose-light p-4 rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1518495973542-4542c06a5843" 
                  alt="Sri Lankan women's empowerment vision"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Our Mission */}
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-pastel-rose-medium p-3 rounded-full">
                  <Target className="h-6 w-6 text-pastel-rose-dark" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                To uplift women across Sri Lanka by providing comprehensive access to 
                safety tools, emotional support, educational guidance, and professional 
                development resources. We are committed to breaking barriers and creating 
                pathways for women to achieve their full potential.
              </p>
              <div className="bg-pastel-rose-medium p-6 rounded-lg text-center">
                <Target className="h-16 w-16 text-pastel-rose-dark mx-auto mb-4" />
                <p className="text-gray-700 font-medium">
                  Empowering Through Action
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Privacy Policy</h1>
          
          <div className="prose prose-lg prose-rose max-w-none">
            <p className="lead text-lg text-gray-600 mb-8">
              EmpowerHer is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-pastel-rose-dark mb-4">Information We Collect</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="mb-4">We collect information that you provide directly to us when you:</p>
                <ul className="list-disc ml-6 mb-4 text-gray-700">
                  <li>Contact us through our website</li>
                  <li>Sign up for our newsletter</li>
                  <li>Participate in any of our surveys or feedback forms</li>
                  <li>Register for events or programs</li>
                </ul>

                <p className="mb-4">The types of information we may collect include:</p>
                <ul className="list-disc ml-6 mb-4 text-gray-700">
                  <li>Personal information such as name, email address, and phone number</li>
                  <li>Information about your interests related to women's empowerment and support</li>
                  <li>Feedback and survey responses</li>
                </ul>
                
                <p>We may also automatically collect certain information when you visit our website, including:</p>
                <ul className="list-disc ml-6 text-gray-700">
                  <li>IP address</li>
                  <li>Browser type</li>
                  <li>Pages viewed</li>
                  <li>Time spent on pages</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-pastel-rose-dark mb-4">How We Use Your Information</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="mb-4">We may use the information we collect for various purposes, including to:</p>
                <ul className="list-disc ml-6 text-gray-700">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Send you updates, newsletters, and information about our programs</li>
                  <li>Respond to your comments, questions, and requests</li>
                  <li>Monitor and analyze trends, usage, and activities in connection with our website</li>
                  <li>Personalize and improve your experience</li>
                  <li>Provide emergency assistance when requested</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-pastel-rose-dark mb-4">Information Sharing and Disclosure</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="mb-4">We prioritize your privacy and will never sell your personal information. However, we may share information in the following circumstances:</p>
                <ul className="list-disc ml-6 text-gray-700">
                  <li>With trusted service providers who help us operate our website and services</li>
                  <li>With partner organizations to provide you with requested services</li>
                  <li>To comply with legal obligations</li>
                  <li>If we believe disclosure is necessary to protect the rights, property, or safety of our users, the public, or EmpowerHer</li>
                </ul>
                
                <p className="mt-4 font-semibold">Important Note About Emergency Services:</p>
                <p className="text-gray-700">When you use our emergency features, your information may be shared with relevant authorities or support services to provide immediate assistance. This is done solely to ensure your safety and well-being.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-pastel-rose-dark mb-4">Data Security</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="mb-4">We implement reasonable measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-pastel-rose-dark mb-4">Your Rights</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="mb-4">You have the right to:</p>
                <ul className="list-disc ml-6 text-gray-700">
                  <li>Access and update your personal information</li>
                  <li>Request deletion of your data</li>
                  <li>Opt out of communications</li>
                  <li>Object to certain uses of your information</li>
                </ul>
                <p className="mt-4">To exercise these rights, please contact us at support@empowerher.lk</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-pastel-rose-dark mb-4">Updates to This Policy</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p>We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last Updated" date at the top of this policy. We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-pastel-rose-dark mb-4">Contact Us</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p>If you have any questions about this Privacy Policy or our privacy practices, please contact us at:</p>
                <p className="mt-4 font-medium">Email: herempower@gmail.com</p>
              </div>
            </section>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600">Last Updated: June 10, 2025</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
