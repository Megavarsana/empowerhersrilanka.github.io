
import React from 'react';
import SupportForm from './SupportForm';

const SupportSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-pink-50/30 via-rose-50/20 to-orange-50/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">
            You Are Not Alone
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Every woman deserves support, understanding, and a safe space to share her experiences. 
            Whether you're facing challenges with relationships, work, health, or personal growth, 
            we're here to listen and help you find the resources you need.
          </p>
        </div>

        {/* Support Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Mental Health",
              icon: "🧠",
              description: "Professional counseling, stress management, and emotional wellbeing support"
            },
            {
              title: "Relationship Support",
              icon: "💕",
              description: "Guidance for healthy relationships, communication skills, and conflict resolution"
            },
            {
              title: "Career & Work",
              icon: "💼",
              description: "Workplace harassment, career guidance, and professional development resources"
            },
            {
              title: "Health & Wellness",
              icon: "🌸",
              description: "Women's health information, medical resources, and wellness programs"
            },
            {
              title: "Legal Assistance",
              icon: "⚖️",
              description: "Legal rights information, referrals, and advocacy support"
            },
            {
              title: "Crisis Support",
              icon: "🆘",
              description: "24/7 emergency resources and immediate assistance for urgent situations"
            }
          ].map((category, index) => (
            <div 
              key={index}
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50"
            >
              <div className="text-4xl mb-4 text-center">{category.icon}</div>
              <h3 className="text-xl font-medium text-gray-800 mb-3 text-center">
                {category.title}
              </h3>
              <p className="text-gray-600 text-center font-light leading-relaxed">
                {category.description}
              </p>
            </div>
          ))}
        </div>

        {/* Support Form */}
        <SupportForm />

        {/* Emergency Resources */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-8 border border-red-100">
            <h3 className="text-2xl font-medium text-gray-800 mb-4">
              �emergency Support
            </h3>
            <p className="text-gray-700 mb-6 font-light">
              If you're in immediate danger or having thoughts of self-harm, please reach out for help right away:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <div className="bg-white/80 rounded-xl p-4 shadow-sm">
                <p className="font-medium text-gray-800">National Crisis Hotline</p>
                <p className="text-empowerher-pink font-semibold text-lg">1-800-273-8255</p>
              </div>
              <div className="bg-white/80 rounded-xl p-4 shadow-sm">
                <p className="font-medium text-gray-800">Text Crisis Support</p>
                <p className="text-empowerher-pink font-semibold text-lg">Text HOME to 741741</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
