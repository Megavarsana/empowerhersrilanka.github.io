
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Heart, Phone, MessageCircle, Users, Smile } from "lucide-react";

const MentalHealthPage = () => {
  const topics = [
    {
      title: "How to Build Confidence",
      subtitle: "Unlock Your Inner Power",
      icon: Smile,
      content: {
        intro: "Confidence is a skill you can develop, not something you're just born with. It starts with believing in your worth and embracing your unique strengths.",
        points: [
          {
            title: "Positive Self-Talk",
            description: "Notice how you speak to yourself. Replace harsh criticism with kind and encouraging words. For example, swap \"I can't do this\" with \"I am learning and growing every day.\" Practice affirmations like \"I am capable\" or \"I deserve happiness.\" 🗣️💬"
          },
          {
            title: "Set Small Goals",
            description: "Confidence grows by achieving small wins. Set realistic daily or weekly goals — like speaking up in class, learning a new skill, or trying a new hobby. Celebrate each success, no matter how tiny. 🎯🎉"
          },
          {
            title: "Face Your Fears",
            description: "Avoiding challenges can lower self-esteem. Try stepping out of your comfort zone gradually — speak to new people, share your opinions, or volunteer. Each step builds courage and self-trust. 🚶‍♀️🔥"
          },
          {
            title: "Body Language",
            description: "Stand tall, maintain eye contact, and smile. These physical cues don't just show confidence—they also help you feel more confident internally. Practice power poses in front of a mirror. 🪞💪"
          },
          {
            title: "Surround Yourself with Support",
            description: "Spend time with people who lift you up and believe in you. Positive friendships and mentors can inspire and motivate you on your journey. 🤗💞"
          }
        ],
        conclusion: "Remember, confidence is a journey, not a destination. Be patient and gentle with yourself as you grow. You are worthy of all good things! 🌟"
      }
    },
    {
      title: "Body Image Advice",
      subtitle: "Love the Skin You're In",
      icon: Heart,
      content: {
        intro: "Body image is how you see and feel about your own body. In a world full of unrealistic beauty standards, learning to appreciate and respect your body is essential for happiness.",
        points: [
          {
            title: "Focus on Function, Not Just Form",
            description: "Your body allows you to think, move, create, and experience life. Celebrate what it can do, not just how it looks. For example, \"My legs help me run and dance\" or \"My hands create beautiful things.\" 🏃‍♀️🎨"
          },
          {
            title: "Limit Social Media Exposure",
            description: "Many images online are edited or filtered, setting impossible standards. Follow accounts that promote body positivity and diversity instead. Remember, real beauty comes in many shapes, sizes, and colors. 📱❌"
          },
          {
            title: "Practice Gratitude",
            description: "Every day, think of 3 things you appreciate about your body. Maybe your smile, your strength, or your resilience. Gratitude rewires your brain to focus on the positive. 🙏😊"
          },
          {
            title: "Wear Comfortable Clothes",
            description: "Choose clothes that make you feel good and reflect your style, not just what's trendy or \"slimming.\" Comfort boosts confidence and self-love. 👗👚"
          },
          {
            title: "Talk Openly",
            description: "Share your feelings about body image with trusted friends or family. Sometimes, just expressing your thoughts can ease insecurities and build support. 💬💖"
          }
        ],
        conclusion: "Remember, you are beautiful as you are. Self-love is a revolutionary act in a world that tries to tell you otherwise. 💫💕"
      }
    },
    {
      title: "Dealing with Sadness or Fear",
      subtitle: "You Are Not Alone",
      icon: Brain,
      content: {
        intro: "Everyone experiences sadness, fear, or anxiety at times — it's part of being human. What matters is how you respond and seek support.",
        points: [
          {
            title: "Acknowledge Your Feelings",
            description: "It's okay to feel sad or scared. Don't ignore or suppress your emotions. Give yourself permission to cry, write in a journal, or talk about it. Emotions are messengers, not enemies. 📝😭"
          },
          {
            title: "Connect with Others",
            description: "Reach out to trusted friends, family, or mentors. Sharing your worries reduces loneliness and often brings helpful perspective. If you don't feel comfortable talking, consider anonymous helplines or online support groups. 🤝📞"
          },
          {
            title: "Stay Active",
            description: "Physical activity releases endorphins that improve mood. Even a short walk or dancing to your favorite song can lift your spirits. 💃🌞"
          },
          {
            title: "Limit Stress Triggers",
            description: "Identify things that increase your anxiety or sadness, like negative news, toxic people, or overwhelming schedules. Try to reduce or avoid them when possible. 🛑"
          },
          {
            title: "Seek Professional Help",
            description: "If sadness or fear become overwhelming or last more than two weeks, consider talking to a counselor, psychologist, or doctor. Mental health professionals are trained to help you heal and thrive. 🧑‍⚕️💼"
          }
        ],
        conclusion: "Remember, asking for help is a sign of strength. You are never alone in your journey. ❤️"
      }
    },
    {
      title: "Breathing & Calming Techniques",
      subtitle: "Find Your Peace Anywhere",
      icon: MessageCircle,
      content: {
        intro: "When stress, anxiety, or overwhelming feelings strike, your breath is the most powerful tool you have to regain calm and focus.",
        points: [
          {
            title: "Deep Belly Breathing",
            description: "Sit comfortably. Breathe in slowly through your nose, filling your belly with air like a balloon. Hold for 3 seconds, then exhale slowly through your mouth. Repeat 5-10 times. This lowers heart rate and calms your mind. 🌬️🎈"
          },
          {
            title: "4-7-8 Technique",
            description: "Inhale quietly through your nose for 4 seconds, hold your breath for 7 seconds, then exhale through your mouth for 8 seconds. Repeat 3-5 cycles. This slows breathing and relaxes your nervous system. ⏳💨"
          },
          {
            title: "Progressive Muscle Relaxation",
            description: "Starting from your toes, tense each muscle group tightly for 5 seconds, then release completely. Move upward through your body—legs, stomach, arms, neck, face. This helps relieve physical tension linked to stress. 💪😌"
          },
          {
            title: "Visualization",
            description: "Close your eyes and imagine a peaceful place — a beach, forest, or garden. Picture every detail, smell, sound, and feeling. Spend 5 minutes here to reset your mind and emotions. 🌳🌊"
          },
          {
            title: "Grounding Exercise",
            description: "Focus on your senses. Name 5 things you can see, 4 things you can touch, 3 sounds you hear, 2 smells, and 1 taste. This technique helps you stay present and reduce overwhelming feelings. 👀✋👂👃👅"
          }
        ],
        conclusion: "Practice these anytime you feel stressed, nervous, or sad. Over time, they become quick and easy tools to find peace wherever you are. 🌟"
      }
    },
    {
      title: "Support Numbers and AI",
      subtitle: "Help Is Just a Call or Click Away",
      icon: Phone,
      content: {
        intro: "You don't have to face challenges alone — many organizations and services in Sri Lanka provide mental health support, often free and confidential.",
        points: [
          {
            title: "Sri Lanka Mental Health Hotline: 1926",
            description: "Available 24/7 for crisis support, counseling, and referrals. 📞"
          },
          {
            title: "National Suicide Prevention Helpline: 1333",
            description: "For urgent help if you or someone you know is feeling suicidal. 💛"
          },
          {
            title: "Women's Hotline: 1938",
            description: "For women facing emotional, physical, or mental distress. Offers counseling and guidance. 💪"
          },
          {
            title: "Youth Helpline: 1919",
            description: "For young people seeking advice on mental health, bullying, and stress. 🌈"
          },
          {
            title: "Online Chat & AI Support",
            description: "Apps like Woebot or Wysa provide AI-powered mental health chats, mood tracking, and guided exercises anytime. These can complement professional help and offer privacy and convenience. 📱🤖"
          }
        ],
        conclusion: "Remember, reaching out is brave and important. Keep these numbers handy, and share them with friends and family. Together, we build a caring community! 🤗"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-500 to-purple-600">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-section text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            🧠 Mental Health & Self-Love
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Your mental wellness matters. Find support, resources, and tools to nurture your mind and build self-love.
          </p>
          <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 text-lg">
            Start Your Journey
          </Button>
        </div>
      </section>

      {/* Navigation Buttons */}
      <section className="py-8 bg-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {topics.map((topic, index) => (
              <Button
                key={index}
                variant="outline"
                className="bg-white/20 text-white border-white hover:bg-white hover:text-purple-600 transition-colors"
                onClick={() => document.getElementById(`topic-${index}`)?.scrollIntoView({ behavior: 'smooth' })}
              >
                {topic.title}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Image Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <img 
              src="/lovable-uploads/581091226825-a6a2a5aee158.jpg" 
              alt="Mental Health Support"
              className="w-full h-96 object-cover rounded-lg shadow-lg mb-8"
            />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Your Mental Wellness Matters
            </h2>
            <p className="text-lg text-gray-600">
              Building confidence, self-love, and emotional resilience for a healthier, happier you
            </p>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-16 bg-gradient-to-b from-purple-500 to-purple-600">
        <div className="container mx-auto px-6">
          {topics.map((topic, index) => (
            <div key={index} id={`topic-${index}`} className="mb-16">
              <div className="max-w-4xl mx-auto">
                <Card className="bg-white shadow-xl border-0 overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-purple-100 to-purple-200">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 bg-purple-500 rounded-full">
                        <topic.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-purple-600">{topic.title}</CardTitle>
                        <p className="text-lg text-gray-600 mt-1">{topic.subtitle}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8 space-y-6">
                    <p className="text-gray-700 leading-relaxed text-lg">{topic.content.intro}</p>
                    
                    <div className="grid gap-6">
                      {topic.content.points.map((point, pointIndex) => (
                        <Card key={pointIndex} className="bg-purple-50 border-purple-200 shadow-md">
                          <CardContent className="p-6">
                            <h4 className="font-semibold text-purple-600 mb-3 text-lg">{point.title}</h4>
                            <p className="text-gray-700 leading-relaxed">{point.description}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                    
                    <Card className="bg-gradient-to-r from-purple-100 to-purple-200 border-purple-300">
                      <CardContent className="p-6">
                        <p className="text-gray-700 leading-relaxed font-medium text-lg">{topic.content.conclusion}</p>
                      </CardContent>
                    </Card>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Mental Wellness Video
            </h2>
            <p className="text-lg text-gray-600">
              Watch this helpful video for mental wellness and self-care tips
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="overflow-hidden shadow-xl">
              <div className="aspect-video bg-gradient-to-br from-purple-200 to-purple-300 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 mx-auto">
                    <div className="w-0 h-0 border-l-[12px] border-l-purple-500 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                  </div>
                  <span className="text-purple-700 font-semibold">Mental Health & Self-Love</span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Building Confidence & Self-Love</h3>
                <p className="text-gray-600">Learn techniques for building confidence, practicing self-love, and managing stress and anxiety effectively.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default MentalHealthPage;
