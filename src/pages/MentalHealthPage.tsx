import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Heart, Phone, MessageCircle, Users, Smile } from "lucide-react";
const MentalHealthPage = () => {
  const topics = [{
    title: "💪 How to Build Confidence for Women",
    subtitle: "Unlock Your Inner Power",
    icon: Smile,
    content: {
      intro: "Confidence isn't something you're born with — it's something you build step by step. Every woman has the strength to believe in herself. Here's how you can grow your confidence from the inside out.",
      points: [{
        title: "🪞 Know Your Worth",
        description: "Make a list of your strengths, skills, and accomplishments — even small ones. Remind yourself: You are enough. Don't compare yourself to others — your journey is unique."
      }, {
        title: "🎯 Set Small, Achievable Goals",
        description: "Start with simple goals like 'speak up in class' or 'try something new today.' Achieving small things gives you big confidence boosts. Celebrate your progress — even if it's just 1%."
      }, {
        title: "💬 Speak Kindly to Yourself",
        description: "Replace 'I'm not good enough' with 'I'm learning and improving every day.' Affirmations work! Try these: 'I am strong and capable.' 'I deserve respect.' 'I am proud of who I'm becoming.'"
      }, {
        title: "👩‍🎓 Educate & Empower Yourself",
        description: "Learn new skills, read books, or take classes that interest you. Knowledge builds power — and powerful women are confident."
      }, {
        title: "🤝 Surround Yourself with Supportive People",
        description: "Be around those who uplift, motivate, and believe in you. Cut out toxic relationships that make you doubt yourself."
      }, {
        title: "🧘‍♀️ Practice Self-Care & Self-Respect",
        description: "Take care of your mental and physical health. Dress in a way that makes you feel good — not to impress others. Say no when something doesn't feel right — your boundaries matter."
      }, {
        title: "🎤 Step Out of Your Comfort Zone",
        description: "Try new things, speak in public, take on challenges — growth happens outside the comfort zone. Even if you fail, you'll learn and become stronger."
      }, {
        title: "💗 Lift Other Women Up",
        description: "Compliment, support, and cheer for other women. Helping others grow builds a confident, empowering community — and that confidence reflects back on you."
      }],
      conclusion: "✨ Final Note: Confidence isn't about being perfect. It's about showing up, trying, and never giving up. You are powerful, and your voice matters. Believe in yourself — because the world needs women like YOU."
    }
  }, {
    title: "💖 Body Image Advice for Women",
    subtitle: "Love the Skin You're In",
    icon: Heart,
    content: {
      intro: "Body image is how you see and feel about your own body. In a world full of unrealistic beauty standards, learning to appreciate and respect your body is essential for happiness.",
      points: [{
        title: "🪞 Every Body Is a Good Body",
        description: "There's no such thing as a 'perfect' body — thin, curvy, tall, short, dark, or fair — all bodies are valid and beautiful. Celebrate your body for what it can do, not just how it looks (walking, hugging, dancing, thinking, creating!)."
      }, {
        title: "💬 Speak Kindly to Your Reflection",
        description: "The way you talk to yourself matters. Try affirmations like: 'My body is strong and worthy.' 'I love and accept myself as I am.' 'I am more than my appearance.'"
      }, {
        title: "❌ Avoid Unrealistic Comparisons",
        description: "Social media often shows highlight reels, not real life. Unfollow accounts that make you feel insecure. Follow people who represent body diversity and confidence."
      }, {
        title: "🍽️ Respect Your Body with Nourishment",
        description: "Eat to feel strong, energetic, and healthy, not to punish yourself. There's no 'bad' food — balance and listening to your body are key. Move your body in ways that bring you joy, not guilt."
      }, {
        title: "🧘‍♀️ Focus on How You Feel, Not Just How You Look",
        description: "Confidence doesn't come from changing your body — it comes from changing your mindset. Dress in ways that make you feel comfortable and happy. Don't wait to feel beautiful — you already are."
      }, {
        title: "🤝 Surround Yourself with Positivity",
        description: "Spend time with people who support and uplift you. Talk openly with friends about body image — you're not alone. Be the friend who compliments others for who they are, not just how they look."
      }, {
        title: "📢 Your Value Is Not Measured by Your Weight or Shape",
        description: "You are smart, creative, kind, and powerful. You are worthy of love, respect, and happiness right now, just as you are."
      }],
      conclusion: "✨ Final Message: Your body is your home — treat it with love, kindness, and respect. The world doesn't need more 'perfect' bodies, it needs more confident women who believe in themselves."
    }
  }, {
    title: "💙 Dealing with Sadness or Fear",
    subtitle: "You Are Not Alone",
    icon: Brain,
    content: {
      intro: "Everyone experiences sadness or fear sometimes — it's a natural part of life. But when these feelings feel overwhelming, here are some ways to help you cope and heal.",
      points: [{
        title: "🌿 Acknowledge Your Feelings",
        description: "It's okay to feel sad or scared. Don't bottle up your emotions or pretend they don't exist. Give yourself permission to cry or express what you feel."
      }, {
        title: "🗣️ Talk to Someone You Trust",
        description: "Share your feelings with a close friend, family member, or counselor. Sometimes just speaking out loud helps lighten the burden."
      }, {
        title: "🧘‍♀️ Practice Deep Breathing and Mindfulness",
        description: "Take slow, deep breaths to calm your nervous system. Try meditation or grounding exercises to stay present and reduce anxiety."
      }, {
        title: "🚶‍♀️ Move Your Body",
        description: "Gentle exercise like walking, yoga, or stretching releases mood-boosting endorphins. Physical activity can ease stress and help you feel stronger."
      }, {
        title: "📖 Engage in Activities You Enjoy",
        description: "Do things that bring you joy, like reading, painting, listening to music, or gardening. Creative outlets help process emotions and uplift your spirit."
      }, {
        title: "🛌 Rest and Care for Yourself",
        description: "Make sure you get enough sleep and eat nourishing food. Sometimes sadness or fear can feel worse when you're tired or hungry."
      }, {
        title: "💡 Challenge Negative Thoughts",
        description: "When you notice scary or sad thoughts, try to question them: Are they true? Are you assuming the worst? Replace negative thoughts with kinder, more realistic ones."
      }, {
        title: "🤝 Seek Professional Help if Needed",
        description: "If sadness or fear lasts more than a few weeks or feels too heavy, talking to a mental health professional can help. Therapy, counseling, or support groups provide safe spaces to heal."
      }],
      conclusion: "Remember: You are not alone. Your feelings are valid, and it's okay to ask for help. Taking small steps every day can lead to brighter moments."
    }
  }, {
    title: "🌬️ Breathing & Calming Techniques for Women",
    subtitle: "Find Your Peace Anywhere",
    icon: MessageCircle,
    content: {
      intro: "Life can get overwhelming, but with simple breathing exercises and calming techniques, you can regain control, reduce stress, and feel more centered anytime, anywhere.",
      points: [{
        title: "🧘‍♀️ Deep Belly Breathing (Diaphragmatic Breathing)",
        description: "Sit or lie comfortably. Place one hand on your chest and the other on your belly. Breathe in slowly through your nose, letting your belly rise (not your chest). Exhale gently through your mouth, feeling your belly fall. Repeat for 5–10 breaths. Benefits: Reduces anxiety and calms the nervous system."
      }, {
        title: "🌿 4-7-8 Breathing Technique",
        description: "Inhale quietly through your nose for a count of 4. Hold your breath for a count of 7. Exhale completely through your mouth, making a whoosh sound, for a count of 8. Repeat 3–4 times. Benefits: Helps lower stress and prepares you for restful sleep."
      }, {
        title: "🌸 Box Breathing (Square Breathing)",
        description: "Inhale slowly for 4 seconds. Hold your breath for 4 seconds. Exhale slowly for 4 seconds. Hold again for 4 seconds. Repeat 4 cycles. Benefits: Enhances focus and calms the mind quickly."
      }, {
        title: "🌼 Progressive Muscle Relaxation",
        description: "Starting from your toes, tense each muscle group tightly for 5 seconds, then release. Move slowly up your body (feet, legs, abdomen, arms, shoulders, neck, face). Breathe deeply and feel tension melt away. Benefits: Releases physical tension, promotes relaxation."
      }, {
        title: "🎶 Mindful Listening or Guided Meditation",
        description: "Find a quiet spot and listen to calming sounds (nature, soft music, guided meditation). Focus fully on the sounds and your breath. If your mind wanders, gently bring your attention back. Benefits: Grounds your awareness and reduces racing thoughts."
      }, {
        title: "💧 Quick Grounding Technique: 5-4-3-2-1",
        description: "Identify 5 things you can see. Identify 4 things you can touch. Identify 3 things you can hear. Identify 2 things you can smell. Identify 1 thing you can taste. Benefits: Brings your focus to the present moment and reduces anxiety."
      }],
      conclusion: "✨ Final Tips: Practice these exercises daily or whenever you feel stressed. Find a quiet, comfortable space if possible, but many can be done anywhere discreetly. Consistency builds resilience and peace of mind."
    }
  }, {
    title: "📞 Support Numbers & Organizations",
    subtitle: "Women's Mental Health in Sri Lanka",
    icon: Phone,
    content: {
      intro: "Mental health support is available in Sri Lanka through various government and non-governmental organizations. Here are key resources specifically for women's mental health needs:",
      points: [{
        title: "1. Sri Lanka National Mental Health Helpline (Suwa Seriya)",
        description: "Number: 1926. Availability: 24/7. Services: Free, confidential mental health counseling and crisis support for all, including women facing emotional or psychological distress."
      }, {
        title: "2. Women In Need (WIN)",
        description: "Helpline: 011 4718585 / 077 567 5656. Website: winhearts.lk. Services: Counseling, legal aid, shelter, and mental health support specifically for women facing abuse, trauma, or emotional challenges."
      }, {
        title: "3. National Institute of Mental Health, Angoda",
        description: "Contact: +94 11 278 7161. Services: Psychiatric and psychological treatment services; referrals available for specialized women's mental health needs."
      }, {
        title: "4. Family Service Centres by Ministry of Women and Child Affairs",
        description: "Services: Community-based counseling, support groups, and awareness programs focused on women and children's wellbeing."
      }, {
        title: "5. Suicide Prevention Helpline - Sri Lanka Red Cross Society",
        description: "Number: 011 269 9999. Services: Immediate crisis intervention and mental health support."
      }],
      conclusion: "🧠 About Women's Mental Health Support in Sri Lanka: Women face unique mental health challenges due to social, cultural, and economic pressures. Issues like domestic violence, gender discrimination, and trauma can affect emotional wellbeing deeply. Fortunately, Sri Lanka offers growing support through government and non-governmental organizations that provide safe spaces for counseling, legal help, and rehabilitation. If you or someone you know is struggling with anxiety, depression, trauma, or stress, reaching out to these helplines or local counselors can be a crucial first step toward healing and recovery."
    }
  }];
  return <div className="min-h-screen bg-gradient-to-br from-empowerher-pink via-empowerher-pink-medium to-empowerher-pink-dark">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            🧠 Mental Health & Self-Love
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-white">
            Your mental wellness matters. Find support, resources, and tools to nurture your mind and build self-love.
          </p>
          <Button className="bg-white text-empowerher-pink hover:bg-gray-100 px-10 py-4 text-lg font-semibold">
            Start Your Journey ✨
          </Button>
        </div>
      </section>

      {/* Topic Navigation */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {topics.map((topic, index) => <Button key={index} variant="outline" className="bg-white text-empowerher-pink border-white hover:bg-empowerher-pink hover:text-white transition-colors" onClick={() => document.getElementById(`topic-${index}`)?.scrollIntoView({
            behavior: 'smooth'
          })}>
                {topic.title}
              </Button>)}
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {topics.map((topic, index) => <div key={index} id={`topic-${index}`} className="mb-16">
              <div className="max-w-6xl mx-auto">
                <Card className="card-hover bg-white border-white shadow-lg">
                  <CardHeader className="pb-6">
                    <CardTitle className="flex items-center space-x-3 text-gray-800 text-2xl">
                      <topic.icon className="h-8 w-8 text-empowerher-pink" />
                      <span>{topic.title}</span>
                    </CardTitle>
                    <p className="text-xl text-gray-600 mt-2">{topic.subtitle}</p>
                  </CardHeader>
                  <CardContent className="p-8">
                    {/* Image Section */}
                    <div className="mb-8 rounded-lg overflow-hidden">
                      <img alt={`${topic.title} - Mental Health Support`} className="w-full h-64 object-cover" src={
                        index === 0 ? "/lovable-uploads/902846a1-4589-4d3d-bb8a-8a44d046446c.png" :
                        index === 1 ? "/lovable-uploads/f3fae5fc-3492-4daa-8884-81770ee53fd6.png" :
                        index === 2 ? "/lovable-uploads/447d4ecc-9806-4c9f-b404-1ab14beef29a.png" :
                        index === 3 ? "/lovable-uploads/f2aad1c7-f49f-4978-93f7-0cf934c6ecb9.png" :
                        "/lovable-uploads/a5b2a97b-7983-4b59-acc6-501bd2c86f19.png"
                      } />
                    </div>

                    <p className="text-gray-700 leading-relaxed text-xl mb-8">{topic.content.intro}</p>
                    
                    <div className="grid gap-8 mb-8">
                      {topic.content.points.map((point, pointIndex) => <div key={pointIndex} className="bg-gray-50 p-8 rounded-lg">
                          <h4 className="font-semibold text-gray-800 mb-4 text-xl">{point.title}</h4>
                          <p className="text-gray-700 leading-relaxed text-lg">{point.description}</p>
                        </div>)}
                    </div>
                    
                    <div className="bg-empowerher-pink/10 p-8 rounded-lg mb-8">
                      <p className="text-gray-700 leading-relaxed font-medium text-xl">{topic.content.conclusion}</p>
                    </div>

                    {/* YouTube Video Section */}
                    <div className="mt-8">
                      <h4 className="font-semibold text-gray-800 mb-4 text-xl">🎥 {topic.title} Video Guide</h4>
                      <div className="aspect-video rounded-lg overflow-hidden">
                        <iframe width="100%" height="100%" src={index === 0 ? "https://www.youtube.com/embed/lw3lDjx__5w" : index === 1 ? "https://www.youtube.com/embed/VpHyLG-sc4g" : index === 2 ? "https://www.youtube.com/embed/30VMIEmA114" : index === 3 ? "https://www.youtube.com/embed/YRhqMWUH2Ig" : "https://www.youtube.com/embed/PkKXl7vSsCo"} title={`${topic.title} Video Guide`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full"></iframe>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>)}
        </div>
      </section>

      <Footer />
    </div>;
};
export default MentalHealthPage;