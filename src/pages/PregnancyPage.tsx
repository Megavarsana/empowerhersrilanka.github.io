import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Baby, Heart, Users, BookOpen, Phone, Shield } from "lucide-react";

const PregnancyPage = () => {
  const topics = [
    {
      title: "❗ Where to Get Help as a New Mom — Support Systems You Can Trust",
      subtitle: "Being a new mother can sometimes feel overwhelming — but remember, you don't have to do it alone.",
      icon: Phone,
      content: {
        intro: "Being a new mother can sometimes feel overwhelming — but remember, you don't have to do it alone.",
        points: [
          {
            title: "🏥👩‍⚕️ Health Clinics & Hospitals",
            description: "Regular prenatal and postnatal checkups are essential. Sri Lanka has government hospitals and maternal health clinics offering free or low-cost care. Don't hesitate to visit if you have any concerns."
          },
          {
            title: "🩺🏡 Midwives & Community Health Workers",
            description: "Trained midwives often visit homes to provide guidance on pregnancy, childbirth, and baby care. They are valuable resources for advice and emotional support."
          },
          {
            title: "🤱💬 Mother Support Groups",
            description: "Look for local mother groups or online communities where you can share experiences, ask questions, and find friendship. These groups reduce isolation and build confidence."
          },
          {
            title: "❤️👩‍👧 Family & Friends",
            description: "Trusted loved ones can provide practical help and emotional encouragement. Don't hesitate to ask for help with chores, baby care, or just a listening ear."
          },
          {
            title: "📞🚑 Emergency Numbers",
            description: "Save important emergency contacts, including your healthcare provider, ambulance services, and local hospital. Quick access can save lives in urgent situations."
          }
        ],
        conclusion: "Remember, seeking help is a sign of strength, not weakness. You're doing an amazing job!"
      }
    },
    {
      title: "🤱 Breastfeeding — Nourishing Your Baby Naturally",
      subtitle: "Breastfeeding is one of the most beautiful and beneficial gifts you can give your newborn.",
      icon: Heart,
      content: {
        intro: "Breastfeeding is one of the most beautiful and beneficial gifts you can give your newborn. It provides perfect nutrition, strengthens your baby's immune system, and builds a special bond between you and your little one. Here's what every new mom should know:",
        points: [
          {
            title: "🍼✨ Benefits for Baby",
            description: "Breast milk contains all the nutrients your baby needs in the first 6 months — proteins, fats, vitamins, and antibodies that protect against infections. It's easily digested and adapts as your baby grows."
          },
          {
            title: "💖🌸 Benefits for Mom",
            description: "Breastfeeding helps your uterus shrink back to its normal size, burns extra calories, and can reduce the risk of some cancers. It also releases hormones that promote relaxation and bonding."
          },
          {
            title: "🤱🕐 Getting Started",
            description: "Try to breastfeed as soon as possible after birth, ideally within the first hour. Skin-to-skin contact helps your baby latch on easily and stimulates milk production."
          },
          {
            title: "👄👍 Proper Latching",
            description: "A good latch means your baby's mouth covers both the nipple and part of the areola (the darker skin around the nipple). This helps them get enough milk and prevents nipple pain or damage. Ask a nurse or lactation consultant for help if you're unsure."
          },
          {
            title: "⏰❤️ Feeding on Demand",
            description: "Feed your baby whenever they show hunger signs — rooting, sucking fingers, or fussiness — rather than on a strict schedule. This supports healthy weight gain and milk supply."
          },
          {
            title: "🆘🤝 Common Challenges",
            description: "Some moms may face soreness, low milk supply, or engorgement. These are normal but can be managed with proper technique, rest, hydration, and support. Don't hesitate to seek help from health workers or breastfeeding groups."
          },
          {
            title: "🍼🕒 Expressing Milk",
            description: "You can hand express or use a breast pump to store milk for later, especially if you return to work or need a break. Stored milk keeps your baby nourished and your milk supply steady."
          },
          {
            title: "🍼🚫 Avoiding Bottle Confusion",
            description: "If possible, delay introducing bottles or pacifiers until breastfeeding is well established (usually 3-4 weeks) to prevent nipple confusion."
          }
        ],
        conclusion: "Remember, every mother and baby's breastfeeding journey is unique. Be patient with yourself, trust your instincts, and know that support is always available. You're doing an amazing job nourishing your baby with love! 🌟💕"
      }
    },
    {
      title: "🧠 What Are the Types of Birthing a Baby? — Understanding Your Options",
      subtitle: "Knowing the different types of childbirth helps you prepare and make informed choices.",
      icon: Baby,
      content: {
        intro: "Knowing the different types of childbirth helps you prepare and make informed choices.",
        points: [
          {
            title: "🌿👶 Natural Birth",
            description: "Labor and delivery without medical intervention, allowing your body to birth the baby naturally. Pain relief options like breathing techniques and support from midwives help manage contractions."
          },
          {
            title: "⚙️🛠️ Assisted Vaginal Delivery",
            description: "Sometimes tools like forceps or vacuum extractors are used to help deliver the baby safely during vaginal birth, often due to prolonged labor or distress. Your doctor will discuss if needed."
          },
          {
            title: "🏥🔪 Cesarean Section (C-Section)",
            description: "A surgical procedure where the baby is delivered through an incision in the abdomen. It may be planned or emergency for health reasons. Recovery involves special care and rest."
          },
          {
            title: "💧🌊 Water Birth",
            description: "Giving birth in a warm water pool, which may help reduce pain and anxiety. Not all hospitals offer this, so check availability."
          },
          {
            title: "🏠🩺 Home Birth",
            description: "Some women choose to deliver at home with the help of trained midwives. This option requires thorough planning, medical backup, and safety measures."
          }
        ],
        conclusion: "Discuss your preferences and health status with your healthcare provider early in pregnancy to prepare the safest and most comfortable birth plan for you and your baby. 🤰🤝"
      }
    },
    {
      title: "👶 How to Take Care of a New Baby — Essential Tips for New Moms",
      subtitle: "Caring for a newborn can be both magical and challenging. Here are core tips to help your baby thrive:",
      icon: Users,
      content: {
        intro: "Caring for a newborn can be both magical and challenging. Here are core tips to help your baby thrive:",
        points: [
          {
            title: "🍼❤️ Feeding",
            description: "Whether breastfeeding or formula feeding, feed your baby on demand—usually every 2-3 hours. Breast milk provides the best nutrition and immunity, but support is available if you choose formula."
          },
          {
            title: "🛏️😴 Sleeping",
            description: "Newborns sleep a lot but in short bursts. Create a safe sleep space on their back, free from pillows or blankets to reduce the risk of SIDS (Sudden Infant Death Syndrome)."
          },
          {
            title: "🧴🩲 Diapering",
            description: "Change diapers frequently to keep baby dry and prevent rashes. Clean gently with warm water or hypoallergenic wipes. Allow some diaper-free time for skin to breathe."
          },
          {
            title: "🛁🧼 Bathing",
            description: "Give sponge baths until the umbilical cord stump falls off. Use mild baby soap and lukewarm water. Keep bath time calm and short."
          },
          {
            title: "🤱💕 Bonding",
            description: "Skin-to-skin contact, gentle talking, and cuddling build your baby's trust and security. This emotional connection supports brain development and happiness."
          },
          {
            title: "🩺👶 Health Checks",
            description: "Keep up with immunizations and regular pediatric visits. Monitor for any signs of illness like fever, unusual crying, or feeding issues and seek medical help if needed."
          }
        ],
        conclusion: "Remember, it's okay to ask for help, rest when you can, and trust your instincts as a mother. You're doing an incredible job! 🌟"
      }
    },
    {
      title: "🔍 Pregnancy Symptoms — What to Expect and When to Seek Help",
      subtitle: "Pregnancy brings many physical and emotional changes. Here are common symptoms and tips on managing them:",
      icon: BookOpen,
      content: {
        intro: "Pregnancy brings many physical and emotional changes. Here are common symptoms and tips on managing them:",
        points: [
          {
            title: "🤢🍋 Morning Sickness",
            description: "Nausea and vomiting are common in early pregnancy. Eat small, frequent meals, avoid strong smells, and try ginger or lemon to ease nausea. If vomiting is severe, consult your doctor."
          },
          {
            title: "😴💤 Fatigue",
            description: "Your body is working hard to grow a baby. Rest when possible and listen to your energy levels. Balanced nutrition helps maintain strength."
          },
          {
            title: "😢😊 Mood Swings",
            description: "Hormonal changes can affect emotions. Practice self-care, talk openly with loved ones, and seek support if feelings become overwhelming."
          },
          {
            title: "🚻💧 Frequent Urination",
            description: "The growing uterus presses on your bladder. Stay hydrated but avoid caffeinated drinks. Plan bathroom breaks ahead when outside."
          },
          {
            title: "🍎🍟 Cravings & Aversions",
            description: "It's normal to want certain foods or avoid others. Eat a balanced diet, but listen to your body's needs."
          },
          {
            title: "🦶🧘‍♀️ Swelling & Back Pain",
            description: "Mild swelling in feet and back discomfort are common later in pregnancy. Elevate your feet, wear comfortable shoes, and do gentle stretches. If swelling is sudden or severe, seek medical advice."
          }
        ],
        conclusion: "Always attend prenatal appointments and discuss any symptoms that worry you. Early detection keeps both you and your baby safe and healthy. 🤰🩺"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-empowerher-pink via-empowerher-pink-medium to-empowerher-pink-dark">
      <Header />
      
      {/* Page Header */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            🍼 Pregnancy & New Mother Support
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Your journey to motherhood matters. Find comprehensive support, guidance, and resources for every step.
          </p>
        </div>

        {/* Quick Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          <button 
            onClick={() => document.getElementById('topic-0')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors shadow-sm border border-gray-200 flex items-center justify-center gap-2"
          >
            <Phone className="h-4 w-4" />
            Where to Get Help
          </button>
          <button 
            onClick={() => document.getElementById('topic-1')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors shadow-sm border border-gray-200 flex items-center justify-center gap-2"
          >
            <Heart className="h-4 w-4" />
            Breastfeeding
          </button>
          <button 
            onClick={() => document.getElementById('topic-2')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors shadow-sm border border-gray-200 flex items-center justify-center gap-2"
          >
            <Baby className="h-4 w-4" />
            Types of Birthing
          </button>
          <button 
            onClick={() => document.getElementById('topic-3')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors shadow-sm border border-gray-200 flex items-center justify-center gap-2"
          >
            <Users className="h-4 w-4" />
            Baby Care Tips
          </button>
          <button 
            onClick={() => document.getElementById('topic-4')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors shadow-sm border border-gray-200 flex items-center justify-center gap-2"
          >
            <BookOpen className="h-4 w-4" />
            Pregnancy Symptoms
          </button>
        </div>
      </div>

      {/* Topics Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {topics.map((topic, index) => (
            <div key={index} id={`topic-${index}`} className="mb-16">
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
                      <img 
                        src={index === 0 ? "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop" :
                             index === 1 ? "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop" :
                             index === 2 ? "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800&h=400&fit=crop" :
                             index === 3 ? "https://images.unsplash.com/photo-1578583977886-41b73b8e3baa?w=800&h=400&fit=crop" :
                             "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=400&fit=crop"}
                        alt={`${topic.title} - Pregnancy and Motherhood Support`}
                        className="w-full h-64 object-cover"
                      />
                    </div>

                    <p className="text-gray-700 leading-relaxed text-xl mb-8">{topic.content.intro}</p>
                    
                    <div className="grid gap-8 mb-8">
                      {topic.content.points.map((point, pointIndex) => (
                        <div key={pointIndex} className="bg-gray-50 p-8 rounded-lg">
                          <h4 className="font-semibold text-gray-800 mb-4 text-xl">{point.title}</h4>
                          <p className="text-gray-700 leading-relaxed text-lg">{point.description}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="bg-empowerher-pink/10 p-8 rounded-lg mb-8">
                      <p className="text-gray-700 leading-relaxed font-medium text-xl">{topic.content.conclusion}</p>
                    </div>

                    {/* YouTube Video Section */}
                    <div className="mt-8">
                      <h4 className="font-semibold text-gray-800 mb-4 text-xl">🎥 {topic.title} Video Guide</h4>
                      <div className="aspect-video rounded-lg overflow-hidden">
                        <iframe
                          width="100%"
                          height="100%"
                          src={index === 0 ? "https://www.youtube.com/embed/3uiQ3acvI2Y" : 
                               index === 1 ? "https://www.youtube.com/embed/-Ds3QW3CWJ0" :
                               index === 2 ? "https://www.youtube.com/embed/FCH7lZbzgOM" :
                               index === 3 ? "https://www.youtube.com/embed/-CWJYxIvoFQ" :
                               "https://www.youtube.com/embed/9vuG77-WYmE"}
                          title={`${topic.title} Video Guide`}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full"
                        ></iframe>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PregnancyPage;
