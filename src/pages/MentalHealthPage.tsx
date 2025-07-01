
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Heart, Phone, MessageCircle, Users, Smile } from "lucide-react";

const MentalHealthPage = () => {
  const resources = [
    {
      title: "Self-Care & Wellness",
      description: "Daily practices to nurture your mental health",
      icon: Heart,
      items: [
        "Mindfulness and meditation",
        "Self-care routines",
        "Stress management techniques",
        "Building healthy habits"
      ]
    },
    {
      title: "Mental Health Support",
      description: "Professional help and counseling resources",
      icon: Brain,
      items: [
        "Free counseling services",
        "Online therapy platforms",
        "Mental health hotlines",
        "Crisis intervention resources"
      ]
    },
    {
      title: "Self-Love & Confidence",
      description: "Building a positive relationship with yourself",
      icon: Smile,
      items: [
        "Body positivity resources",
        "Self-esteem building exercises",
        "Confidence coaching",
        "Personal development guides"
      ]
    },
    {
      title: "Support Communities",
      description: "Connect with others who understand your journey",
      icon: Users,
      items: [
        "Mental health support groups",
        "Online communities",
        "Peer support networks",
        "Women's wellness circles"
      ]
    },
    {
      title: "Crisis Support",
      description: "Immediate help when you need it most",
      icon: Phone,
      items: [
        "24/7 crisis hotlines",
        "Emergency mental health services",
        "Suicide prevention resources",
        "Immediate counseling support"
      ]
    },
    {
      title: "Therapy & Counseling",
      description: "Professional mental health services",
      icon: MessageCircle,
      items: [
        "Finding the right therapist",
        "Types of therapy available",
        "Insurance coverage guidance",
        "Affordable counseling options"
      ]
    }
  ];

  const detailedTopics = [
    {
      title: "How to Build Confidence — Unlock Your Inner Power",
      content: "Confidence is a skill you can develop, not something you're just born with. It starts with believing in your worth and embracing your unique strengths.",
      points: [
        "Positive Self-Talk: Notice how you speak to yourself. Replace harsh criticism with kind and encouraging words. For example, swap 'I can't do this' with 'I am learning and growing every day.' Practice affirmations like 'I am capable' or 'I deserve happiness.' 🗣️💬",
        "Set Small Goals: Confidence grows by achieving small wins. Set realistic daily or weekly goals — like speaking up in class, learning a new skill, or trying a new hobby. Celebrate each success, no matter how tiny. 🎯🎉",
        "Face Your Fears: Avoiding challenges can lower self-esteem. Try stepping out of your comfort zone gradually — speak to new people, share your opinions, or volunteer. Each step builds courage and self-trust. 🚶‍♀️🔥",
        "Body Language: Stand tall, maintain eye contact, and smile. These physical cues don't just show confidence—they also help you feel more confident internally. Practice power poses in front of a mirror. 🪞💪",
        "Surround Yourself with Support: Spend time with people who lift you up and believe in you. Positive friendships and mentors can inspire and motivate you on your journey. 🤗💞"
      ],
      note: "Remember, confidence is a journey, not a destination. Be patient and gentle with yourself as you grow. You are worthy of all good things! 🌟",
      image: "/lovable-uploads/581091226825-a6a2a5aee158.jpg"
    },
    {
      title: "Body Image Advice — Love the Skin You're In",
      content: "Body image is how you see and feel about your own body. In a world full of unrealistic beauty standards, learning to appreciate and respect your body is essential for happiness.",
      points: [
        "Focus on Function, Not Just Form: Your body allows you to think, move, create, and experience life. Celebrate what it can do, not just how it looks. For example, 'My legs help me run and dance' or 'My hands create beautiful things.' 🏃‍♀️🎨",
        "Limit Social Media Exposure: Many images online are edited or filtered, setting impossible standards. Follow accounts that promote body positivity and diversity instead. Remember, real beauty comes in many shapes, sizes, and colors. 📱❌",
        "Practice Gratitude: Every day, think of 3 things you appreciate about your body. Maybe your smile, your strength, or your resilience. Gratitude rewires your brain to focus on the positive. 🙏😊",
        "Wear Comfortable Clothes: Choose clothes that make you feel good and reflect your style, not just what's trendy or 'slimming.' Comfort boosts confidence and self-love. 👗👚",
        "Talk Openly: Share your feelings about body image with trusted friends or family. Sometimes, just expressing your thoughts can ease insecurities and build support. 💬💖"
      ],
      note: "Remember, you are beautiful as you are. Self-love is a revolutionary act in a world that tries to tell you otherwise. 💫💕",
      image: "/lovable-uploads/518495973542-4542c06a5843.jpg"
    },
    {
      title: "Dealing with Sadness or Fear — You Are Not Alone",
      content: "Everyone experiences sadness, fear, or anxiety at times — it's part of being human. What matters is how you respond and seek support.",
      points: [
        "Acknowledge Your Feelings: It's okay to feel sad or scared. Don't ignore or suppress your emotions. Give yourself permission to cry, write in a journal, or talk about it. Emotions are messengers, not enemies. 📝😭",
        "Connect with Others: Reach out to trusted friends, family, or mentors. Sharing your worries reduces loneliness and often brings helpful perspective. If you don't feel comfortable talking, consider anonymous helplines or online support groups. 🤝📞",
        "Stay Active: Physical activity releases endorphins that improve mood. Even a short walk or dancing to your favorite song can lift your spirits. 💃🌞",
        "Limit Stress Triggers: Identify things that increase your anxiety or sadness, like negative news, toxic people, or overwhelming schedules. Try to reduce or avoid them when possible. 🛑",
        "Seek Professional Help: If sadness or fear become overwhelming or last more than two weeks, consider talking to a counselor, psychologist, or doctor. Mental health professionals are trained to help you heal and thrive. 🧑‍⚕️💼"
      ],
      note: "Remember, asking for help is a sign of strength. You are never alone in your journey. ❤️",
      image: "/lovable-uploads/470071459604-3b5ec3a7fe05.jpg"
    },
    {
      title: "Breathing & Calming Techniques — Find Your Peace Anywhere",
      content: "When stress, anxiety, or overwhelming feelings strike, your breath is the most powerful tool you have to regain calm and focus.",
      points: [
        "Deep Belly Breathing: Sit comfortably. Breathe in slowly through your nose, filling your belly with air like a balloon. Hold for 3 seconds, then exhale slowly through your mouth. Repeat 5-10 times. This lowers heart rate and calms your mind. 🌬️🎈",
        "4-7-8 Technique: Inhale quietly through your nose for 4 seconds, hold your breath for 7 seconds, then exhale through your mouth for 8 seconds. Repeat 3-5 cycles. This slows breathing and relaxes your nervous system. ⏳💨",
        "Progressive Muscle Relaxation: Starting from your toes, tense each muscle group tightly for 5 seconds, then release completely. Move upward through your body—legs, stomach, arms, neck, face. This helps relieve physical tension linked to stress. 💪😌",
        "Visualization: Close your eyes and imagine a peaceful place — a beach, forest, or garden. Picture every detail, smell, sound, and feeling. Spend 5 minutes here to reset your mind and emotions. 🌳🌊",
        "Grounding Exercise: Focus on your senses. Name 5 things you can see, 4 things you can touch, 3 sounds you hear, 2 smells, and 1 taste. This technique helps you stay present and reduce overwhelming feelings. 👀✋👂👃👅"
      ],
      note: "Practice these anytime you feel stressed, nervous, or sad. Over time, they become quick and easy tools to find peace wherever you are. 🌟",
      image: "/lovable-uploads/500673922987-e212871fec22.jpg"
    },
    {
      title: "Support Numbers and AI — Help Is Just a Call or Click Away",
      content: "You don't have to face challenges alone — many organizations and services in Sri Lanka provide mental health support, often free and confidential.",
      points: [
        "Sri Lanka Mental Health Hotline: 1926 — Available 24/7 for crisis support, counseling, and referrals. 📞",
        "National Suicide Prevention Helpline: 1333 — For urgent help if you or someone you know is feeling suicidal. 💛",
        "Women's Hotline: 1938 — For women facing emotional, physical, or mental distress. Offers counseling and guidance. 💪",
        "Youth Helpline: 1919 — For young people seeking advice on mental health, bullying, and stress. 🌈",
        "Online Chat & AI Support: Apps like Woebot or Wysa provide AI-powered mental health chats, mood tracking, and guided exercises anytime. These can complement professional help and offer privacy and convenience. 📱🤖"
      ],
      note: "Remember, reaching out is brave and important. Keep these numbers handy, and share them with friends and family. Together, we build a caring community! 🤗",
      image: "/lovable-uploads/461749280684-dccba630e2f6.jpg"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Mental Health & Self-Love
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Your mental wellness matters. Find support, resources, and tools to nurture your mind and build self-love.
          </p>
          <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 text-lg">
            Start Your Journey
          </Button>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Mental Health Resources
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive support for your mental wellness journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-purple-100 rounded-full">
                      <resource.icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-xl">{resource.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <ul className="space-y-2">
                    {resource.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Topics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Complete Mental Health & Self-Love Guide
            </h2>
            <p className="text-lg text-gray-600">
              In-depth resources to support your mental wellness journey
            </p>
          </div>

          <div className="space-y-12">
            {detailedTopics.map((topic, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img 
                      src={topic.image} 
                      alt={topic.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{topic.title}</h3>
                    <p className="text-gray-600 mb-6">{topic.content}</p>
                    <ul className="space-y-3 mb-6">
                      {topic.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{point}</span>
                        </li>
                      ))}
                    </ul>
                    {topic.note && (
                      <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                        <p className="text-purple-800 font-medium">{topic.note}</p>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Resources Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Mental Health Videos
            </h2>
            <p className="text-lg text-gray-600">
              Watch these helpful videos for mental wellness tips
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Confidence Building Video</span>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Building Confidence</h3>
                <p className="text-gray-600">Learn techniques to boost your self-confidence</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Self-Love Video</span>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Self-Love Journey</h3>
                <p className="text-gray-600">Discover how to love and accept yourself</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Meditation Video</span>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Meditation & Mindfulness</h3>
                <p className="text-gray-600">Learn breathing and calming techniques</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MentalHealthPage;
