
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Baby, Heart, Users, BookOpen, Phone, Home } from "lucide-react";

const PregnancyPage = () => {
  const topics = [
    {
      title: "❗ Where to Get Help as a New Mom",
      subtitle: "Support Systems You Can Trust",
      icon: Phone,
      content: {
        intro: "Being a new mother can sometimes feel overwhelming — but remember, you don't have to do it alone.",
        points: [
          {
            title: "Health Clinics & Hospitals",
            description: "Regular prenatal and postnatal checkups are essential. Sri Lanka has government hospitals and maternal health clinics offering free or low-cost care. Don't hesitate to visit if you have any concerns. 🏥👩‍⚕️"
          },
          {
            title: "Midwives & Community Health Workers",
            description: "Trained midwives often visit homes to provide guidance on pregnancy, childbirth, and baby care. They are valuable resources for advice and emotional support. 🩺🏡"
          },
          {
            title: "Mother Support Groups",
            description: "Look for local mother groups or online communities where you can share experiences, ask questions, and find friendship. These groups reduce isolation and build confidence. 🤱💬"
          },
          {
            title: "Family & Friends",
            description: "Trusted loved ones can provide practical help and emotional encouragement. Don't hesitate to ask for help with chores, baby care, or just a listening ear. ❤️👩‍👧"
          },
          {
            title: "Emergency Numbers",
            description: "Save important emergency contacts, including your healthcare provider, ambulance services, and local hospital. Quick access can save lives in urgent situations. 📞🚑"
          }
        ],
        conclusion: "Remember, seeking help is a sign of strength, not weakness. You're doing an incredible job as a mother! 🌟"
      }
    },
    {
      title: "🤱 Breastfeeding",
      subtitle: "Nourishing Your Baby Naturally",
      icon: Heart,
      content: {
        intro: "Breastfeeding is one of the most beautiful and beneficial gifts you can give your newborn. It provides perfect nutrition, strengthens your baby's immune system, and builds a special bond between you and your little one. Here's what every new mom should know:",
        points: [
          {
            title: "Benefits for Baby",
            description: "Breast milk contains all the nutrients your baby needs in the first 6 months — proteins, fats, vitamins, and antibodies that protect against infections. It's easily digested and adapts as your baby grows. 🍼✨"
          },
          {
            title: "Benefits for Mom",
            description: "Breastfeeding helps your uterus shrink back to its normal size, burns extra calories, and can reduce the risk of some cancers. It also releases hormones that promote relaxation and bonding. 💖🌸"
          },
          {
            title: "Getting Started",
            description: "Try to breastfeed as soon as possible after birth, ideally within the first hour. Skin-to-skin contact helps your baby latch on easily and stimulates milk production. 🤱🕐"
          },
          {
            title: "Proper Latching",
            description: "A good latch means your baby's mouth covers both the nipple and part of the areola (the darker skin around the nipple). This helps them get enough milk and prevents nipple pain or damage. Ask a nurse or lactation consultant for help if you're unsure. 👄👍"
          },
          {
            title: "Feeding on Demand",
            description: "Feed your baby whenever they show hunger signs — rooting, sucking fingers, or fussiness — rather than on a strict schedule. This supports healthy weight gain and milk supply. ⏰❤️"
          },
          {
            title: "Common Challenges",
            description: "Some moms may face soreness, low milk supply, or engorgement. These are normal but can be managed with proper technique, rest, hydration, and support. Don't hesitate to seek help from health workers or breastfeeding groups. 🆘🤝"
          },
          {
            title: "Expressing Milk",
            description: "You can hand express or use a breast pump to store milk for later, especially if you return to work or need a break. Stored milk keeps your baby nourished and your milk supply steady. 🍼🕒"
          },
          {
            title: "Avoiding Bottle Confusion",
            description: "If possible, delay introducing bottles or pacifiers until breastfeeding is well established (usually 3-4 weeks) to prevent nipple confusion. 🍼🚫"
          }
        ],
        conclusion: "Remember, every mother and baby's breastfeeding journey is unique. Be patient with yourself, trust your instincts, and know that support is always available. You're doing an amazing job nourishing your baby with love! 🌟💕"
      }
    },
    {
      title: "🧠 What Are the Types of Birthing a Baby?",
      subtitle: "Understanding Your Options",
      icon: BookOpen,
      content: {
        intro: "Knowing the different types of childbirth helps you prepare and make informed choices.",
        points: [
          {
            title: "Natural Birth",
            description: "Labor and delivery without medical intervention, allowing your body to birth the baby naturally. Pain relief options like breathing techniques and support from midwives help manage contractions. 🌿👶"
          },
          {
            title: "Assisted Vaginal Delivery",
            description: "Sometimes tools like forceps or vacuum extractors are used to help deliver the baby safely during vaginal birth, often due to prolonged labor or distress. Your doctor will discuss if needed. ⚙️🛠️"
          },
          {
            title: "Cesarean Section (C-Section)",
            description: "A surgical procedure where the baby is delivered through an incision in the abdomen. It may be planned or emergency for health reasons. Recovery involves special care and rest. 🏥🔪"
          },
          {
            title: "Water Birth",
            description: "Giving birth in a warm water pool, which may help reduce pain and anxiety. Not all hospitals offer this, so check availability. 💧🌊"
          },
          {
            title: "Home Birth",
            description: "Some women choose to deliver at home with the help of trained midwives. This option requires thorough planning, medical backup, and safety measures. 🏠🩺"
          }
        ],
        conclusion: "Discuss your preferences and health status with your healthcare provider early in pregnancy to prepare the safest and most comfortable birth plan for you and your baby. 🤰🤝"
      }
    },
    {
      title: "👶 How to Take Care of a New Baby",
      subtitle: "Essential Tips for New Moms",
      icon: Baby,
      content: {
        intro: "Caring for a newborn can be both magical and challenging. Here are core tips to help your baby thrive:",
        points: [
          {
            title: "Feeding",
            description: "Whether breastfeeding or formula feeding, feed your baby on demand—usually every 2-3 hours. Breast milk provides the best nutrition and immunity, but support is available if you choose formula. 🍼❤️"
          },
          {
            title: "Sleeping",
            description: "Newborns sleep a lot but in short bursts. Create a safe sleep space on their back, free from pillows or blankets to reduce the risk of SIDS (Sudden Infant Death Syndrome). 🛏️😴"
          },
          {
            title: "Diapering",
            description: "Change diapers frequently to keep baby dry and prevent rashes. Clean gently with warm water or hypoallergenic wipes. Allow some diaper-free time for skin to breathe. 🧴🩲"
          },
          {
            title: "Bathing",
            description: "Give sponge baths until the umbilical cord stump falls off. Use mild baby soap and lukewarm water. Keep bath time calm and short. 🛁🧼"
          },
          {
            title: "Bonding",
            description: "Skin-to-skin contact, gentle talking, and cuddling build your baby's trust and security. This emotional connection supports brain development and happiness. 🤱💕"
          },
          {
            title: "Health Checks",
            description: "Keep up with immunizations and regular pediatric visits. Monitor for any signs of illness like fever, unusual crying, or feeding issues and seek medical help if needed. 🩺👶"
          }
        ],
        conclusion: "Remember, it's okay to ask for help, rest when you can, and trust your instincts as a mother. You're doing an incredible job! 🌟"
      }
    },
    {
      title: "🔍 Pregnancy Symptoms",
      subtitle: "What to Expect and When to Seek Help",
      icon: Home,
      content: {
        intro: "Pregnancy brings many physical and emotional changes. Here are common symptoms and tips on managing them:",
        points: [
          {
            title: "Morning Sickness",
            description: "Nausea and vomiting are common in early pregnancy. Eat small, frequent meals, avoid strong smells, and try ginger or lemon to ease nausea. If vomiting is severe, consult your doctor. 🤢🍋"
          },
          {
            title: "Fatigue",
            description: "Your body is working hard to grow a baby. Rest when possible and listen to your energy levels. Balanced nutrition helps maintain strength. 😴💤"
          },
          {
            title: "Mood Swings",
            description: "Hormonal changes can affect emotions. Practice self-care, talk openly with loved ones, and seek support if feelings become overwhelming. 😢😊"
          },
          {
            title: "Frequent Urination",
            description: "The growing uterus presses on your bladder. Stay hydrated but avoid caffeinated drinks. Plan bathroom breaks ahead when outside. 🚻💧"
          },
          {
            title: "Cravings & Aversions",
            description: "It's normal to want certain foods or avoid others. Eat a balanced diet, but listen to your body's needs. 🍎🍟"
          },
          {
            title: "Swelling & Back Pain",
            description: "Mild swelling in feet and back discomfort are common later in pregnancy. Elevate your feet, wear comfortable shoes, and do gentle stretches. If swelling is sudden or severe, seek medical advice. 🦶🧘‍♀️"
          }
        ],
        conclusion: "Always attend prenatal appointments and discuss any symptoms that worry you. Early detection keeps both you and your baby safe and healthy. 🤰🩺"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-section text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            🍼 Pregnancy & New Motherhood Support
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Supporting you through pregnancy, birth, and the beautiful journey of new motherhood with comprehensive resources and care.
          </p>
          <Button className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-3 text-lg">
            Get Support
          </Button>
        </div>
      </section>

      {/* Featured Image Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <img 
              src="/lovable-uploads/523712999610-f77fbcfc3843.jpg" 
              alt="Pregnancy Support"
              className="w-full h-96 object-cover rounded-lg shadow-lg mb-8"
            />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Your Pregnancy Journey
            </h2>
            <p className="text-lg text-gray-600">
              Supporting mothers through every stage of pregnancy and early motherhood with care and guidance
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Topics Section */}
      <section className="py-16 bg-pink-50">
        <div className="container mx-auto px-6">
          {topics.map((topic, index) => (
            <div key={index} className="mb-16">
              <div className="max-w-4xl mx-auto">
                <Card className="feature-card">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 bg-pink-100 rounded-full">
                        <topic.icon className="h-8 w-8 text-pink-600" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-pink-600">{topic.title}</CardTitle>
                        <p className="text-lg text-gray-600 mt-1">{topic.subtitle}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-gray-700 leading-relaxed">{topic.content.intro}</p>
                    
                    <div className="space-y-4">
                      {topic.content.points.map((point, pointIndex) => (
                        <div key={pointIndex} className="info-card">
                          <h4 className="font-semibold text-pink-600 mb-2">{point.title}</h4>
                          <p className="text-gray-700 leading-relaxed">{point.description}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="content-box bg-pink-50 border-pink-200">
                      <p className="text-gray-700 leading-relaxed font-medium">{topic.content.conclusion}</p>
                    </div>
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
              Pregnancy & Parenting Video
            </h2>
            <p className="text-lg text-gray-600">
              Educational video to support your pregnancy and parenting journey
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-pink-200 to-pink-300 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 mx-auto">
                    <div className="w-0 h-0 border-l-[12px] border-l-pink-500 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                  </div>
                  <span className="text-pink-700 font-semibold">Pregnancy & Motherhood Guide</span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Complete Pregnancy Care</h3>
                <p className="text-gray-600">A comprehensive guide covering pregnancy care, breastfeeding basics, newborn care, and postpartum support.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PregnancyPage;
