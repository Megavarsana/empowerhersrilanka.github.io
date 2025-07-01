
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Calendar, Phone, BookOpen, Users, AlertCircle } from "lucide-react";

const WomensHealthPage = () => {
  const resources = [
    {
      title: "Period Tracking",
      description: "Track your menstrual cycle and understand your body better",
      icon: Calendar,
      items: [
        "Free period tracking apps",
        "Understanding your cycle",
        "When to see a doctor",
        "Managing period pain"
      ]
    },
    {
      title: "Menstrual Care",
      description: "Essential information about menstrual health and hygiene",
      icon: Heart,
      items: [
        "Choosing the right products",
        "Menstrual hygiene tips",
        "Dealing with heavy periods",
        "Natural remedies for cramps"
      ]
    },
    {
      title: "Health Education",
      description: "Learn about women's reproductive health",
      icon: BookOpen,
      items: [
        "Understanding hormones",
        "Reproductive health basics",
        "Birth control options",
        "Sexual health information"
      ]
    },
    {
      title: "Support Groups",
      description: "Connect with other women for support and advice",
      icon: Users,
      items: [
        "Online support communities",
        "Local women's groups",
        "Health workshops",
        "Peer support networks"
      ]
    },
    {
      title: "Emergency Resources",
      description: "When to seek immediate medical help",
      icon: AlertCircle,
      items: [
        "Emergency contraception",
        "Severe menstrual symptoms",
        "Reproductive health emergencies",
        "Finding healthcare providers"
      ]
    },
    {
      title: "Professional Help",
      description: "Connect with healthcare professionals",
      icon: Phone,
      items: [
        "Gynecologist referrals",
        "Free health clinics",
        "Telemedicine options",
        "Health insurance guidance"
      ]
    }
  ];

  const detailedTopics = [
    {
      title: "🩹 Pain Relief Tips — Managing Period Cramps Like a Pro",
      content: "Menstrual cramps (dysmenorrhea) are caused by contractions in the uterus as it sheds its lining. While common, pain can vary from mild discomfort to severe cramping that disrupts your daily life. Here are practical ways to ease this pain safely:",
      points: [
        "Heat Therapy: Applying heat to your lower belly helps muscles relax and reduces pain signals. Use a hot water bottle or electric heating pad for 15-20 minutes several times a day. Warm baths with Epsom salts can also soothe aching muscles and calm your nerves. 🛁♨️",
        "Stay Active: Though it sounds counterintuitive, gentle exercise like walking, yoga, or stretching boosts blood circulation and releases endorphins—your body's natural painkillers. Try specific yoga poses such as Cat-Cow, Child's Pose, or Supine Twist to relieve tension. 🧘‍♀️💃",
        "Nutrition & Hydration: Dehydration can worsen cramps and bloating. Drink plenty of water throughout the day, and avoid salty foods, caffeine, and sugary snacks that increase inflammation. Some herbal teas like ginger or chamomile may provide calming effects. 🍵💧",
        "Pain Medication: Over-the-counter NSAIDs such as ibuprofen reduce inflammation and pain effectively. Always follow recommended dosages and consult a doctor if you have underlying health conditions or take other medications. Avoid excessive use to prevent side effects. 💊⚠️",
        "Mind-Body Techniques: Stress can amplify pain perception. Practice deep breathing exercises, guided meditation, or progressive muscle relaxation to help your mind and body relax. Even listening to soothing music or aromatherapy with lavender can lower discomfort levels. 🧠🌿"
      ],
      note: "If your cramps are severe, worsen over time, or come with unusual symptoms like heavy bleeding or fever, seek medical advice as it may indicate conditions like endometriosis or fibroids. You deserve relief and care. 🌟💜",
      image: "/lovable-uploads/618160702438-9b02ab6515c9.jpg"
    },
    {
      title: "🧼 Sanitary Hygiene — Keep Yourself Fresh & Healthy Every Day",
      content: "Maintaining hygiene during your period is not only about comfort — it's crucial for preventing infections like bacterial vaginosis or urinary tract infections. Here's a comprehensive guide to safe menstrual hygiene practices:",
      points: [
        "Regular Changing: Menstrual blood is a perfect environment for bacteria to grow. Change your pad, tampon, or menstrual cup every 4-6 hours, or more often if flow is heavy. Never leave tampons in for more than 8 hours to avoid toxic shock syndrome, a rare but serious condition. ⏰🩸",
        "Hand Hygiene: Always wash your hands thoroughly with soap and water before and after handling menstrual products to reduce germ transfer. Carry a small bottle of sanitizer if soap isn't available. Clean hands protect both you and others. ✋🧼",
        "Gentle Cleaning: Wash your external genital area daily with warm water and mild, fragrance-free soap. Avoid douching or harsh soaps, as they can disrupt the natural balance of healthy bacteria and cause irritation. Pat dry gently to avoid moisture buildup. 🚿🧴",
        "Disposal Practices: Wrap used pads and tampons in toilet paper or sanitary wrappers and place them in covered bins. Never flush these products down the toilet, as they can block plumbing and harm the environment. Teach younger girls proper disposal methods early on. 🚮♻️",
        "Reusable Products: If using cloth pads or menstrual cups, proper cleaning is essential. Wash cloth pads with soap and hot water, and dry them fully under sunlight to kill germs. Sterilize menstrual cups by boiling them in water for 5-10 minutes between cycles. ☀️🧺"
      ],
      note: "Good hygiene habits promote confidence and comfort. If you notice itching, burning, unusual discharge, or foul odor, consult a healthcare provider promptly — these may be signs of infection. Your body deserves respect and care every day! 💚🌸",
      image: "/lovable-uploads/582562124811-c09040d0a901.jpg"
    },
    {
      title: "🩸 First Period Guide — What to Expect & How to Prepare",
      content: "Getting your first period (menarche) is a major life event filled with excitement and questions. Knowing what to expect helps you feel prepared and proud. Here's everything you need to know:",
      points: [
        "When It Happens: Most girls start menstruating between ages 10 and 15, but this varies. Early or late onset is normal — your body is unique. Growth spurts, weight changes, and genetics all play a role. 🧒⏳",
        "Physical Signs: Before your first period, you might notice breast development, growth of pubic hair, slight mood changes, or mild cramps. Your vaginal discharge may also increase or change in consistency as your body prepares. 🌸",
        "What to Use: Have sanitary pads or soft cloth pads ready in your bag or locker. Disposable pads are easy to use and widely available; reusable cloth pads are eco-friendly options. Learn how to wear pads securely and change them regularly. 🎒🩹",
        "Emotional Feelings: It's normal to feel nervous, excited, or even embarrassed. Talk to your mother, sister, or trusted adult about your feelings and questions — open conversations help normalize menstruation. ❤️",
        "Health Tips: Track your cycle using a calendar or app to understand your body better. If your period is very heavy, lasts longer than 7 days, or causes intense pain, ask a healthcare worker for advice. Early care helps prevent complications. 📅🩺"
      ],
      note: "Celebrate your first period as a symbol of strength and growth. You're entering an amazing phase of life! 🎉✨",
      image: "/lovable-uploads/513836279014-a89f7a76ae86.jpg"
    },
    {
      title: "🔍 Menstruation Myths & Truths — Busting Common Misconceptions",
      content: "Many myths about periods create confusion and shame, but knowledge is power! Here's the truth behind common misconceptions:",
      points: [
        "❌ Myth: You shouldn't bathe or wash your hair during menstruation. ✅ Truth: Keeping clean is essential during your period. Bathing and washing hair are safe and encouraged to maintain hygiene and comfort. 🚿",
        "❌ Myth: You can't exercise while on your period. ✅ Truth: Light to moderate exercise often helps reduce cramps, boosts mood, and increases energy. Listen to your body and adjust activity as needed. 🏃‍♀️",
        "❌ Myth: You're 'impure' or 'dirty' during your period. ✅ Truth: Menstruation is a healthy, natural process. You are never impure or less worthy during your cycle. Treat yourself with kindness and respect always. 💖",
        "❌ Myth: Tampons cause infertility. ✅ Truth: When used properly and hygienically, tampons are safe and do not affect your fertility or reproductive health. Always follow usage guidelines. 🩸",
        "❌ Myth: You shouldn't eat certain foods during periods. ✅ Truth: Balanced nutrition is important throughout your cycle. While some women may notice food cravings or sensitivities, no foods need to be completely avoided. Focus on nourishing your body! 🥗"
      ],
      note: "Be curious and question misinformation. Your body, health, and confidence depend on facts, not myths! 📚✨",
      image: "/lovable-uploads/487058792275-0ad4aaf24ca7.jpg"
    },
    {
      title: "🔄 Menstrual Products — Exploring Your Options for Comfort & Care",
      content: "Choosing the right menstrual product can change your experience completely. Here's a detailed look at the most popular options:",
      points: [
        "Disposable Pads: Easy to use, these pads come in different sizes and absorbencies. Choose unscented varieties to avoid irritation. Remember to change every 4-6 hours or more if needed. Ideal for beginners or when convenience matters. 🩹",
        "Reusable Cloth Pads: Made from soft fabric, these are washable and eco-friendly. They require a bit more care — wash with mild detergent and dry fully in sunlight. Perfect for reducing waste and saving money over time. ♻️",
        "Tampons: Small, absorbent plugs inserted inside the vagina to collect menstrual blood. They offer freedom of movement and discretion but require careful hygiene — change every 4-6 hours and wash hands before insertion. Not recommended for girls who have never menstruated before without guidance. 🏊‍♀️",
        "Menstrual Cups: Flexible silicone cups inserted into the vagina to collect blood. Reusable for years if cared for properly. They are cost-effective and environmentally friendly but need practice to use confidently. Sterilize before and after each cycle by boiling. 👩‍🔬",
        "Period Underwear: Absorbent underwear designed to be worn alone or as backup. Comfortable and reusable, they are gaining popularity for daily use and light flow days. 🩲"
      ],
      note: "Experiment with what feels right and suits your lifestyle. Comfort, safety, and cleanliness are the most important. Don't hesitate to ask for help if you're unsure! 💜",
      image: "/lovable-uploads/506744038136-46273834b3fb.jpg"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-500 to-rose-500 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Women's Health
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Period Help & Menstrual Care - Comprehensive resources for women's reproductive health and wellness
          </p>
          <Button className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-3 text-lg">
            Get Started
          </Button>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Health Resources & Support
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about women's health and menstrual care
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-pink-100 rounded-full">
                      <resource.icon className="h-6 w-6 text-pink-600" />
                    </div>
                    <CardTitle className="text-xl">{resource.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <ul className="space-y-2">
                    {resource.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
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
              Comprehensive Women's Health Guide
            </h2>
            <p className="text-lg text-gray-600">
              In-depth information to help you understand and care for your body
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
                          <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{point}</span>
                        </li>
                      ))}
                    </ul>
                    {topic.note && (
                      <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-500">
                        <p className="text-pink-800 font-medium">{topic.note}</p>
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
              Educational Videos
            </h2>
            <p className="text-lg text-gray-600">
              Learn more through these helpful video resources
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Period Care Tips Video</span>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Period Care Essentials</h3>
                <p className="text-gray-600">Learn the basics of menstrual hygiene and care</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">First Period Guide Video</span>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Your First Period</h3>
                <p className="text-gray-600">What to expect and how to prepare</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Women's Health Video</span>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Women's Health Basics</h3>
                <p className="text-gray-600">Understanding your reproductive health</p>
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
