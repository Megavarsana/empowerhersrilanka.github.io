
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TermsOfService = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Back Button */}
      <div className="container mx-auto px-6 pt-6">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center space-x-2 text-pastel-rose-dark hover:text-pastel-rose transition-colors mb-6"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Home</span>
        </button>
      </div>
      
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Terms of Service</h1>
          
          <div className="prose prose-lg prose-rose max-w-none">
            <p className="lead text-lg text-gray-600 mb-8">
              Welcome to EmpowerHer. These Terms of Service ("Terms") govern your use of our website and services. By accessing or using EmpowerHer, you agree to be bound by these Terms.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-pastel-rose-dark mb-4">1. Acceptance of Terms</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="mb-4">
                  By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. 
                  If you do not agree to abide by the above, please do not use this service.
                </p>
                <p className="text-gray-700">
                  These Terms apply to all visitors, users, and others who access or use the service.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-pastel-rose-dark mb-4">2. Use of the Website</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="mb-4">You may use our website for lawful purposes only. You agree not to use the website:</p>
                <ul className="list-disc ml-6 mb-4 text-gray-700">
                  <li>In any way that violates any applicable federal, state, local, or international law or regulation</li>
                  <li>To transmit, or procure the sending of, any advertising or promotional material, or any other form of similar solicitation</li>
                  <li>To impersonate or attempt to impersonate the company, a company employee, another user, or any other person or entity</li>
                  <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the website</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-pastel-rose-dark mb-4">3. Emergency Services Disclaimer</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="mb-4 font-semibold text-red-600">Important Notice:</p>
                <p className="mb-4">
                  EmpowerHer is not an emergency service. In case of immediate danger or emergency, please contact:
                </p>
                <ul className="list-disc ml-6 mb-4 text-gray-700">
                  <li>Police: 119</li>
                  <li>Women's Helpline: 1938</li>
                  <li>Emergency Services: 1990</li>
                </ul>
                <p className="text-gray-700">
                  While we provide resources and support information, we cannot guarantee immediate response or intervention in emergency situations.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-pastel-rose-dark mb-4">4. Content and Intellectual Property</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="mb-4">
                  The service and its original content, features, and functionality are and will remain the exclusive property of EmpowerHer and its licensors.
                </p>
                <p className="text-gray-700">
                  The service is protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-pastel-rose-dark mb-4">5. User Generated Content</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="mb-4">
                  Our service may allow you to post, link, store, share and otherwise make available certain information, text, graphics, or other material.
                </p>
                <p className="text-gray-700">
                  You are responsible for the content that you post to the service, including its legality, reliability, and appropriateness.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-pastel-rose-dark mb-4">6. Privacy Policy</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-gray-700">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service, 
                  to understand our practices.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-pastel-rose-dark mb-4">7. Limitation of Liability</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="mb-4">
                  In no event shall EmpowerHer, nor its directors, employees, partners, agents, suppliers, or affiliates, 
                  be liable for any indirect, incidental, special, consequential, or punitive damages.
                </p>
                <p className="text-gray-700">
                  This includes without limitation, loss of profits, data, use, goodwill, or other intangible losses, 
                  resulting from your use of the service.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-pastel-rose-dark mb-4">8. Changes to Terms</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-gray-700">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                  If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-pastel-rose-dark mb-4">9. Contact Information</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="mb-4">If you have any questions about these Terms of Service, please contact us at:</p>
                <p className="font-medium">Email: support@empowerher.lk</p>
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

export default TermsOfService;
