
import React from 'react';
import SupportForm from './SupportForm';

const SupportSection = () => {
  const supportTopics = [
    {
      title: "🌸 Mental Health Tips for Women",
      content: [
        {
          title: "🌿 1. Prioritize Self-Care",
          description: "Set aside time daily for things that bring you peace and joy — even just 10–15 minutes. Take breaks without guilt. Rest is not laziness."
        },
        {
          title: "🧠 2. Manage Stress with Mindfulness", 
          description: "Practice meditation, deep breathing, or yoga regularly. Apps like Calm, Headspace, or Insight Timer can help."
        },
        {
          title: "💬 3. Talk It Out",
          description: "Don't bottle things up. Talk to a trusted friend, family member, or therapist. Journaling your thoughts can also be therapeutic."
        },
        {
          title: "🏃‍♀️ 4. Move Your Body",
          description: "Regular exercise (even light walks or dancing at home) boosts mood and reduces anxiety. Aim for at least 30 minutes, 3–5 times a week."
        },
        {
          title: "🛌 5. Get Good Sleep",
          description: "Aim for 7–9 hours of restful sleep per night. Limit screen time before bed and create a calming bedtime routine."
        }
      ],
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
      video: "https://www.youtube.com/embed/30VMIEmA114"
    },
    {
      title: "💔 Dealing with Sexual Assault",
      content: [
        {
          title: "🚨 What To Do After a Sexual Assault",
          description: "Find a safe place immediately — a friend's house, a relative's home, or a public location. Do not shower, change clothes, or clean up before a medical examination to preserve evidence."
        },
        {
          title: "📝 How to Report Sexual Assault in Sri Lanka",
          description: "Report to Police: Go to the nearest police station or a Women & Children's Bureau unit. Ask for a female officer if preferred — you have the right to one."
        },
        {
          title: "🛟 Trusted Services in Sri Lanka",
          description: "Women In Need (WIN) - 24/7 Helpline: 011 4718585 / 077 567 5656. National Child Protection Authority (for minors) - Hotline: 1929 (free and confidential)."
        },
        {
          title: "💬 Self-Care & Recovery",
          description: "It's normal to feel overwhelmed. Counseling can help with emotional healing. Consider joining a support group or speaking with a trauma-informed professional."
        },
        {
          title: "📢 Remember",
          description: "Sexual assault is never the victim's fault. Whether or not you choose to report it, you deserve support, care, and justice."
        }
      ],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop",
      video: "https://www.youtube.com/embed/PkKXl7vSsCo"
    },
    {
      title: "💔 Understanding & Escaping Toxic Relationships",
      content: [
        {
          title: "🚩 What Is a Toxic Relationship?",
          description: "A toxic relationship is one where you feel emotionally drained instead of supported, afraid, anxious, or controlled, disrespected or constantly criticized."
        },
        {
          title: "⚠️ Common Signs of a Toxic Relationship",
          description: "Controlling behavior, jealousy and possessiveness, constant criticism or gaslighting, silent treatment or emotional manipulation, physical, verbal, or emotional abuse."
        },
        {
          title: "🧭 What To Do If You're in a Toxic Relationship",
          description: "Acknowledge it's not normal or healthy. Talk to someone you trust. Set boundaries. Make a safety plan if needed. Seek professional support."
        },
        {
          title: "🛟 Support Services for Women in Sri Lanka",
          description: "Women In Need (WIN) - Helpline: 011 4718585 / 077 567 5656. Sri Lanka Police – Women & Children's Bureau. National Mental Health Helpline (Suwa Seriya) - Hotline: 1926."
        },
        {
          title: "🌸 Healing After a Toxic Relationship",
          description: "Give yourself time — healing isn't quick but it's possible. Rediscover your passions and hobbies. Surround yourself with positive, respectful people."
        }
      ],
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=400&fit=crop",
      video: "https://www.youtube.com/embed/lw3lDjx__5w"
    },
    {
      title: "🟢 Online & Offline Counselling Platforms",
      content: [
        {
          title: "🟢 Online Counselling Platforms (Free & Confidential)",
          description: "National Mental Health Helpline – 1926: A 24/7 toll-free helpline offering psychological support via phone and SMS. CCCline – 1333: Free telephone-based emotional support."
        },
        {
          title: "💻 Free Minds Sri Lanka",
          description: "Offers free virtual sessions (based on availability) with licensed therapists and counselors. Website: freemindslanka.org"
        },
        {
          title: "🟡 Offline Counselling Services (In-Person & Free)",
          description: "Sri Lanka Sumithrayo: Provides emotional support to those facing distress, depression, or loneliness. Call: +94 11 2692909"
        },
        {
          title: "👭 Women In Need (WIN)",
          description: "Supports women facing violence, abuse, or mental health struggles with professional counselling. Helpline: +94 11 471 8585"
        },
        {
          title: "🏥 The Mordecai Project – Women's Counselling Center",
          description: "Offers trauma recovery, spiritual healing, and life skills support for women. Location: Colombo"
        }
      ],
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=400&fit=crop",
      video: "https://www.youtube.com/embed/VpHyLG-sc4g"
    },
    {
      title: "💼 Skill Building & Financial Independence for Women",
      content: [
        {
          title: "📚 Free Online Courses & Training",
          description: "Websites offering free or affordable courses in skills like digital marketing, coding and programming basics, graphic design, language learning, handicrafts and tailoring."
        },
        {
          title: "💻 Work-from-Home Opportunities",
          description: "Guide on safe online jobs and freelancing platforms (e.g., Upwork, Fiverr). Tips on avoiding scams and ensuring payment security."
        },
        {
          title: "💰 Financial Literacy Basics",
          description: "Simple lessons on budgeting, saving, and managing expenses. How to open a bank account and use mobile banking in Sri Lanka."
        },
        {
          title: "🏢 Local NGOs & Government Support",
          description: "List of NGOs that provide training, startup grants, or mentorship for women entrepreneurs. Government initiatives supporting women in business."
        },
        {
          title: "🌟 Inspirational Success Stories",
          description: "Short profiles of Sri Lankan women who transformed their lives through skills and entrepreneurship. Videos or interviews sharing their journey, challenges, and advice."
        }
      ],
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=400&fit=crop",
      video: "https://www.youtube.com/embed/YRhqMWUH2Ig"
    }
  ];

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

        {/* Detailed Support Topics */}
        <div className="space-y-16 mb-16">
          {supportTopics.map((topic, topicIndex) => (
            <div key={topicIndex} className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl md:text-3xl font-medium text-gray-800 mb-8 text-center">
                {topic.title}
              </h3>
              
              <div className="grid gap-6 mb-8">
                {topic.content.map((item, itemIndex) => (
                  <div key={itemIndex} className="bg-gray-50/80 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-800 mb-3 text-lg">{item.title}</h4>
                    <p className="text-gray-700 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>

              {/* Image Placeholder */}
              <div className="mb-8 rounded-lg overflow-hidden">
                <img 
                  src={topic.image} 
                  alt={`${topic.title} - Support Resource`}
                  className="w-full h-64 object-cover"
                />
              </div>

              {/* YouTube Video */}
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src={topic.video}
                  title={`${topic.title} Video Guide`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          ))}
        </div>

        {/* Support Form */}
        <SupportForm />

        {/* Emergency Resources */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-8 border border-red-100">
            <h3 className="text-2xl font-medium text-gray-800 mb-4">
              🚨 Emergency Support
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
