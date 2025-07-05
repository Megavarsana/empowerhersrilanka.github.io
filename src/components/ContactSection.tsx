
import React from 'react';
import ContactForm from './ContactForm';

const ContactSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50/30 via-indigo-50/20 to-purple-50/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            Have questions, suggestions, or want to get involved? We'd love to hear from you. 
            Your voice matters in building a stronger community for women.
          </p>
        </div>

        <ContactForm />

        {/* Alternative Contact Methods */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
              <div className="text-3xl mb-4">📧</div>
              <h3 className="font-medium text-gray-800 mb-2">Email Us</h3>
              <p className="text-empowerher-pink font-medium">hello@empowerher.org</p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="font-medium text-gray-800 mb-2">Call Us</h3>
              <p className="text-empowerher-pink font-medium">+1 (555) 123-4567</p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
              <div className="text-3xl mb-4">💬</div>
              <h3 className="font-medium text-gray-800 mb-2">Live Chat</h3>
              <p className="text-gray-600 font-light">Available 9 AM - 6 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
