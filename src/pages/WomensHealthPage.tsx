
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Calendar, Phone, BookOpen, Users, AlertCircle } from "lucide-react";

const WomensHealthPage = () => {
  const topics = [
    {
      title: "🩹 Pain Relief Tips",
      subtitle: "Managing Period Cramps Like a Pro",
      icon: Heart,
      content: {
        intro: "Menstrual cramps (dysmenorrhea) are caused by contractions in the uterus as it sheds its lining. While common, pain can vary from mild discomfort to severe cramping that disrupts your daily life. Here are practical ways to ease this pain safely:",
        points: [
          {
            title: "Heat Therapy",
            description: "Applying heat to your lower belly helps muscles relax and reduces pain signals. Use a hot water bottle or electric heating pad for 15-20 minutes several times a day. Warm baths with Epsom salts can also soothe aching muscles and calm your nerves. 🛁♨️"
          },
          {
            title: "Stay Active",
            description: "Though it sounds counterintuitive, gentle exercise like walking, yoga, or stretching boosts blood circulation and releases endorphins—your body's natural painkillers. Try specific yoga poses such as Cat-Cow, Child's Pose, or Supine Twist to relieve tension. 🧘‍♀️💃"
          },
          {
            title: "Nutrition & Hydration",
            description: "Dehydration can worsen cramps and bloating. Drink plenty of water throughout the day, and avoid salty foods, caffeine, and sugary snacks that increase inflammation. Some herbal teas like ginger or chamomile may provide calming effects. 🍵💧"
          },
          {
            title: "Pain Medication",
            description: "Over-the-counter NSAIDs such as ibuprofen reduce inflammation and pain effectively. Always follow recommended dosages and consult a doctor if you have underlying health conditions or take other medications. Avoid excessive use to prevent side effects. 💊⚠️"
          },
          {
            title: "Mind-Body Techniques",
            description: "Stress can amplify pain perception. Practice deep breathing exercises, guided meditation, or progressive muscle relaxation to help your mind and body relax. Even listening to soothing music or aromatherapy with lavender can lower discomfort levels. 🧠🌿"
          }
        ],
        conclusion: "If your cramps are severe, worsen over time, or come with unusual symptoms like heavy bleeding or fever, seek medical advice as it may indicate conditions like endometriosis or fibroids. You deserve relief and care. 🌟💜"
      }
    },
    {
      title: "🧼 Sanitary Hygiene",
      subtitle: "Keep Yourself Fresh & Healthy Every Day",
      icon: AlertCircle,
      content: {
        intro: "Maintaining hygiene during your period is not only about comfort — it's crucial for preventing infections like bacterial vaginosis or urinary tract infections. Here's a comprehensive guide to safe menstrual hygiene practices:",
        points: [
          {
            title: "Regular Changing",
            description: "Menstrual blood is a perfect environment for bacteria to grow. Change your pad, tampon, or menstrual cup every 4-6 hours, or more often if flow is heavy. Never leave tampons in for more than 8 hours to avoid toxic shock syndrome, a rare but serious condition. ⏰🩸"
          },
          {
            title: "Hand Hygiene",
            description: "Always wash your hands thoroughly with soap and water before and after handling menstrual products to reduce germ transfer. Carry a small bottle of sanitizer if soap isn't available. Clean hands protect both you and others. ✋🧼"
          },
          {
            title: "Gentle Cleaning",
            description: "Wash your external genital area daily with warm water and mild, fragrance-free soap. Avoid douching or harsh soaps, as they can disrupt the natural balance of healthy bacteria and cause irritation. Pat dry gently to avoid moisture buildup. 🚿🧴"
          },
          {
            title: "Disposal Practices",
            description: "Wrap used pads and tampons in toilet paper or sanitary wrappers and place them in covered bins. Never flush these products down the toilet, as they can block plumbing and harm the environment. Teach younger girls proper disposal methods early on. 🚮♻️"
          },
          {
            title: "Reusable Products",
            description: "If using cloth pads or menstrual cups, proper cleaning is essential. Wash cloth pads with soap and hot water, and dry them fully under sunlight to kill germs. Sterilize menstrual cups by boiling them in water for 5-10 minutes between cycles. ☀️🧺"
          }
        ],
        conclusion: "Good hygiene habits promote confidence and comfort. If you notice itching, burning, unusual discharge, or foul odor, consult a healthcare provider promptly — these may be signs of infection. Your body deserves respect and care every day! 💚🌸"
      }
    },
    {
      title: "🩸 First Period Guide",
      subtitle: "What to Expect & How to Prepare",
      icon: Calendar,
      content: {
        intro: "Getting your first period (menarche) is a major life event filled with excitement and questions. Knowing what to expect helps you feel prepared and proud. Here's everything you need to know:",
        points: [
          {
            title: "When It Happens",
            description: "Most girls start menstruating between ages 10 and 15, but this varies. Early or late onset is normal — your body is unique. Growth spurts, weight changes, and genetics all play a role. 🧒⏳"
          },
          {
            title: "Physical Signs",
            description: "Before your first period, you might notice breast development, growth of pubic hair, slight mood changes, or mild cramps. Your vaginal discharge may also increase or change in consistency as your body prepares. 🌸"
          },
          {
            title: "What to Use",
            description: "Have sanitary pads or soft cloth pads ready in your bag or locker. Disposable pads are easy to use and widely available; reusable cloth pads are eco-friendly options. Learn how to wear pads securely and change them regularly. 🎒🩹"
          },
          {
            title: "Emotional Feelings",
            description: "It's normal to feel nervous, excited, or even embarrassed. Talk to your mother, sister, or trusted adult about your feelings and questions — open conversations help normalize menstruation. ❤️"
          },
          {
            title: "Health Tips",
            description: "Track your cycle using a calendar or app to understand your body better. If your period is very heavy, lasts longer than 7 days, or causes intense pain, ask a healthcare worker for advice. Early care helps prevent complications. 📅🩺"
          }
        ],
        conclusion: "Celebrate your first period as a symbol of strength and growth. You're entering an amazing phase of life! 🎉✨"
      }
    },
    {
      title: "🔍 Menstruation Myths & Truths",
      subtitle: "Busting Common Misconceptions",
      icon: BookOpen,
      content: {
        intro: "Many myths about periods create confusion and shame, but knowledge is power! Here's the truth behind common misconceptions:",
        points: [
          {
            title: "❌ Myth: You shouldn't bathe or wash your hair during menstruation.",
            description: "✅ Truth: Keeping clean is essential during your period. Bathing and washing hair are safe and encouraged to maintain hygiene and comfort. 🚿"
          },
          {
            title: "❌ Myth: You can't exercise while on your period.",
            description: "✅ Truth: Light to moderate exercise often helps reduce cramps, boosts mood, and increases energy. Listen to your body and adjust activity as needed. 🏃‍♀️"
          },
          {
            title: "❌ Myth: You're \"impure\" or \"dirty\" during your period.",
            description: "✅ Truth: Menstruation is a healthy, natural process. You are never impure or less worthy during your cycle. Treat yourself with kindness and respect always. 💖"
          },
          {
            title: "❌ Myth: Tampons cause infertility.",
            description: "✅ Truth: When used properly and hygienically, tampons are safe and do not affect your fertility or reproductive health. Always follow usage guidelines. 🩸"
          },
          {
            title: "❌ Myth: You shouldn't eat certain foods during periods.",
            description: "✅ Truth: Balanced nutrition is important throughout your cycle. While some women may notice food cravings or sensitivities, no foods need to be completely avoided. Focus on nourishing your body! 🥗"
          }
        ],
        conclusion: "Be curious and question misinformation. Your body, health, and confidence depend on facts, not myths! 📚✨"
      }
    },
    {
      title: "🔄 Menstrual Products",
      subtitle: "Exploring Your Options for Comfort & Care",
      icon: Users,
      content: {
        intro: "Choosing the right menstrual product can change your experience completely. Here's a detailed look at the most popular options:",
        points: [
          {
            title: "Disposable Pads",
            description: "Easy to use, these pads come in different sizes and absorbencies. Choose unscented varieties to avoid irritation. Remember to change every 4-6 hours or more if needed. Ideal for beginners or when convenience matters. 🩹"
          },
          {
            title: "Reusable Cloth Pads",
            description: "Made from soft fabric, these are washable and eco-friendly. They require a bit more care — wash with mild detergent and dry fully in sunlight. Perfect for reducing waste and saving money over time. ♻️"
          },
          {
            title: "Tampons",
            description: "Small, absorbent plugs inserted inside the vagina to collect menstrual blood. They offer freedom of movement and discretion but require careful hygiene — change every 4-6 hours and wash hands before insertion. Not recommended for girls who have never menstruated before without guidance. 🏊‍♀️"
          },
          {
            title: "Menstrual Cups",
            description: "Flexible silicone cups inserted into the vagina to collect blood. Reusable for years if cared for properly. They are cost-effective and environmentally friendly but need practice to use confidently. Sterilize before and after each cycle by boiling. 👩‍🔬"
          },
          {
            title: "Period Underwear",
            description: "Absorbent underwear designed to be worn alone or as backup. Comfortable and reusable, they are gaining popularity for daily use and light flow days. 🩲"
          }
        ],
        conclusion: "Experiment with what feels right and suits your lifestyle. Comfort, safety, and cleanliness are the most important. Don't hesitate to ask for help if you're unsure! 💜"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-pastel-pearl">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-section text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            🩸 Women's Health
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Period Help & Menstrual Care - Comprehensive resources for women's reproductive health and wellness
          </p>
          <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg">
            Get Started
          </Button>
        </div>
      </section>

      {/* Topic Navigation */}
      <section className="py-8 bg-pastel-sand/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {topics.map((topic, index) => (
              <Button
                key={index}
                variant="outline"
                className="bg-white/80 text-gray-700 border-gray-300 hover:bg-primary hover:text-white transition-colors"
                onClick={() => document.getElementById(`topic-${index}`)?.scrollIntoView({ behavior: 'smooth' })}
              >
                {topic.title}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Image Section */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <img 
              src="/lovable-uploads/618160702438-9b02ab6515c9.jpg" 
              alt="Women's Health Support"
              className="w-full h-96 object-cover rounded-lg shadow-lg mb-8"
            />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Your Health, Your Journey
            </h2>
            <p className="text-lg text-gray-600">
              Empowering women with knowledge and support for their health and wellness needs
            </p>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="section-spacing bg-pastel-pearl">
        <div className="container mx-auto px-6">
          {topics.map((topic, index) => (
            <div key={index} id={`topic-${index}`} className="mb-16">
              <div className="max-w-4xl mx-auto">
                <Card className="content-box border-pastel-sand">
                  <CardHeader className="bg-pastel-flesh">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 bg-pastel-khaki rounded-full">
                        <topic.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-gray-800">{topic.title}</CardTitle>
                        <p className="text-lg text-gray-600 mt-1">{topic.subtitle}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8 space-y-6">
                    <p className="text-gray-700 leading-relaxed text-lg">{topic.content.intro}</p>
                    
                    <div className="grid gap-6">
                      {topic.content.points.map((point, pointIndex) => (
                        <Card key={pointIndex} className="content-box-small bg-pastel-sand/30">
                          <CardContent className="p-6">
                            <h4 className="font-semibold text-gray-800 mb-3 text-lg">{point.title}</h4>
                            <p className="text-gray-700 leading-relaxed">{point.description}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                    
                    <Card className="info-card bg-pastel-khaki/20">
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
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Women's Health Educational Video
            </h2>
            <p className="text-lg text-gray-600">
              Learn more about women's health through this helpful video resource
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="feature-card">
              <div className="aspect-video bg-pastel-flesh flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 mx-auto shadow-md">
                    <div className="w-0 h-0 border-l-[12px] border-l-pastel-khaki border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                  </div>
                  <span className="text-gray-700 font-semibold">Women's Health Essentials</span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Understanding Your Body</h3>
                <p className="text-gray-600">A comprehensive guide to women's health, covering menstrual care, wellness tips, and when to seek professional help.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WomensHealthPage;
