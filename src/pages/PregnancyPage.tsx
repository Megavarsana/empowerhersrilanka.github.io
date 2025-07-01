
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Baby, Heart, Users, BookOpen, Phone, Home } from "lucide-react";

const PregnancyPage = () => {
  const resources = [
    {
      title: "Pregnancy Care",
      description: "Essential information for a healthy pregnancy",
      icon: Baby,
      items: [
        "Prenatal care guidelines",
        "Nutrition during pregnancy",
        "Exercise and wellness",
        "Common pregnancy concerns"
      ]
    },
    {
      title: "Birth Preparation",
      description: "Get ready for your baby's arrival",
      icon: Heart,
      items: [
        "Birth plan creation",
        "Labor and delivery prep",
        "Pain management options",
        "Hospital bag checklist"
      ]
    },
    {
      title: "New Mother Support",
      description: "Support for the postpartum period",
      icon: Home,
      items: [
        "Postpartum recovery",
        "Breastfeeding support",
        "Baby care basics",
        "Managing postpartum emotions"
      ]
    },
    {
      title: "Support Groups",
      description: "Connect with other mothers",
      icon: Users,
      items: [
        "New mom support groups",
        "Online parenting communities",
        "Local parenting classes",
        "Peer support networks"
      ]
    },
    {
      title: "Healthcare Resources",
      description: "Medical support and guidance",
      icon: Phone,
      items: [
        "Finding an OB-GYN",
        "Midwife services",
        "Emergency pregnancy care",
        "Insurance and financial aid"
      ]
    },
    {
      title: "Education & Classes",
      description: "Learn about pregnancy and parenting",
      icon: BookOpen,
      items: [
        "Childbirth education classes",
        "Parenting workshops",
        "Infant CPR training",
        "Newborn care classes"
      ]
    }
  ];

  const detailedTopics = [
    {
      title: "❗ Where to Get Help as a New Mom — Support Systems You Can Trust",
      content: "Being a new mother can sometimes feel overwhelming — but remember, you don't have to do it alone.",
      points: [
        "Health Clinics & Hospitals: Regular prenatal and postnatal checkups are essential. Sri Lanka has government hospitals and maternal health clinics offering free or low-cost care. Don't hesitate to visit if you have any concerns. 🏥👩‍⚕️",
        "Midwives & Community Health Workers: Trained midwives often visit homes to provide guidance on pregnancy, childbirth, and baby care. They are valuable resources for advice and emotional support. 🩺🏡",
        "Mother Support Groups: Look for local mother groups or online communities where you can share experiences, ask questions, and find friendship. These groups reduce isolation and build confidence. 🤱💬",
        "Family & Friends: Trusted loved ones can provide practical help and emotional encouragement. Don't hesitate to ask for help with chores, baby care, or just a listening ear. ❤️👩‍👧",
        "Emergency Numbers: Save important emergency contacts, including your healthcare provider, ambulance services, and local hospital. Quick access can save lives in urgent situations. 📞🚑"
      ],
      note: "Remember, seeking help is a sign of wisdom, not weakness. You're doing an amazing job as a new mom! 🌟",
      image: "/lovable-uploads/523712999610-f77fbcfc3843.jpg"
    },
    {
      title: "🤱 Breastfeeding — Nourishing Your Baby Naturally",
      content: "Breastfeeding is one of the most beautiful and beneficial gifts you can give your newborn. It provides perfect nutrition, strengthens your baby's immune system, and builds a special bond between you and your little one. Here's what every new mom should know:",
      points: [
        "Benefits for Baby: Breast milk contains all the nutrients your baby needs in the first 6 months — proteins, fats, vitamins, and antibodies that protect against infections. It's easily digested and adapts as your baby grows. 🍼✨",
        "Benefits for Mom: Breastfeeding helps your uterus shrink back to its normal size, burns extra calories, and can reduce the risk of some cancers. It also releases hormones that promote relaxation and bonding. 💖🌸",
        "Getting Started: Try to breastfeed as soon as possible after birth, ideally within the first hour. Skin-to-skin contact helps your baby latch on easily and stimulates milk production. 🤱🕐",
        "Proper Latching: A good latch means your baby's mouth covers both the nipple and part of the areola (the darker skin around the nipple). This helps them get enough milk and prevents nipple pain or damage. Ask a nurse or lactation consultant for help if you're unsure. 👄👍",
        "Feeding on Demand: Feed your baby whenever they show hunger signs — rooting, sucking fingers, or fussiness — rather than on a strict schedule. This supports healthy weight gain and milk supply. ⏰❤️",
        "Common Challenges: Some moms may face soreness, low milk supply, or engorgement. These are normal but can be managed with proper technique, rest, hydration, and support. Don't hesitate to seek help from health workers or breastfeeding groups. 🆘🤝"
      ],
      note: "Remember, every mother and baby's breastfeeding journey is unique. Be patient with yourself, trust your instincts, and know that support is always available. You're doing an amazing job nourishing your baby with love! 🌟💕",
      image: "/lovable-uploads/485833077593-4278bba3f11f.jpg"
    },
    {
      title: "🧠 What Are the Types of Birthing a Baby? — Understanding Your Options",
      content: "Knowing the different types of childbirth helps you prepare and make informed choices.",
      points: [
        "Natural Birth: Labor and delivery without medical intervention, allowing your body to birth the baby naturally. Pain relief options like breathing techniques and support from midwives help manage contractions. 🌿👶",
        "Assisted Vaginal Delivery: Sometimes tools like forceps or vacuum extractors are used to help deliver the baby safely during vaginal birth, often due to prolonged labor or distress. Your doctor will discuss if needed. ⚙️🛠️",
        "Cesarean Section (C-Section): A surgical procedure where the baby is delivered through an incision in the abdomen. It may be planned or emergency for health reasons. Recovery involves special care and rest. 🏥🔪",
        "Water Birth: Giving birth in a warm water pool, which may help reduce pain and anxiety. Not all hospitals offer this, so check availability. 💧🌊",
        "Home Birth: Some women choose to deliver at home with the help of trained midwives. This option requires thorough planning, medical backup, and safety measures. 🏠🩺"
      ],
      note: "Discuss your preferences and health status with your healthcare provider early in pregnancy to prepare the safest and most comfortable birth plan for you and your baby. 🤰🤝",
      image: "/lovable-uploads/473091534298-04dcbce3278c.jpg"
    },
    {
      title: "👶 How to Take Care of a New Baby — Essential Tips for New Moms",
      content: "Caring for a newborn can be both magical and challenging. Here are core tips to help your baby thrive:",
      points: [
        "Feeding: Whether breastfeeding or formula feeding, feed your baby on demand—usually every 2-3 hours. Breast milk provides the best nutrition and immunity, but support is available if you choose formula. 🍼❤️",
        "Sleeping: Newborns sleep a lot but in short bursts. Create a safe sleep space on their back, free from pillows or blankets to reduce the risk of SIDS (Sudden Infant Death Syndrome). 🛏️😴",
        "Diapering: Change diapers frequently to keep baby dry and prevent rashes. Clean gently with warm water or hypoallergenic wipes. Allow some diaper-free time for skin to breathe. 🧴🩲",
        "Bathing: Give sponge baths until the umbilical cord stump falls off. Use mild baby soap and lukewarm water. Keep bath time calm and short. 🛁🧼",
        "Bonding: Skin-to-skin contact, gentle talking, and cuddling build your baby's trust and security. This emotional connection supports brain development and happiness. 🤱💕",
        "Health Checks: Keep up with immunizations and regular pediatric visits. Monitor for any signs of illness like fever, unusual crying, or feeding issues and seek medical help if needed. 🩺👶"
      ],
      note: "Remember, it's okay to ask for help, rest when you can, and trust your instincts as a mother. You're doing an incredible job! 🌟",
      image: "/lovable-uploads/501854140801-50d01698950b.jpg"
    },
    {
      title: "🔍 Pregnancy Symptoms — What to Expect and When to Seek Help",
      content: "Pregnancy brings many physical and emotional changes. Here are common symptoms and tips on managing them:",
      points: [
        "Morning Sickness: Nausea and vomiting are common in early pregnancy. Eat small, frequent meals, avoid strong smells, and try ginger or lemon to ease nausea. If vomiting is severe, consult your doctor. 🤢🍋",
        "Fatigue: Your body is working hard to grow a baby. Rest when possible and listen to your energy levels. Balanced nutrition helps maintain strength. 😴💤",
        "Mood Swings: Hormonal changes can affect emotions. Practice self-care, talk openly with loved ones, and seek support if feelings become overwhelming. 😢😊",
        "Frequent Urination: The growing uterus presses on your bladder. Stay hydrated but avoid caffeinated drinks. Plan bathroom breaks ahead when outside. 🚻💧",
        "Cravings & Aversions: It's normal to want certain foods or avoid others. Eat a balanced diet, but listen to your body's needs. 🍎🍟",
        "Swelling & Back Pain: Mild swelling in feet and back discomfort are common later in pregnancy. Elevate your feet, wear comfortable shoes, and do gentle stretches. If swelling is sudden or severe, seek medical advice. 🦶🧘‍♀️"
      ],
      note: "Always attend prenatal appointments and discuss any symptoms that worry you. Early detection keeps both you and your baby safe and healthy. 🤰🩺",
      image: "/lovable-uploads/469474968028-56623f02e42e.jpg"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-500 to-teal-500 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Pregnancy & New Motherhood Support
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Supporting you through pregnancy, birth, and the beautiful journey of new motherhood with comprehensive resources and care.
          </p>
          <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 text-lg">
            Get Support
          </Button>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Pregnancy & Motherhood Resources
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need for a healthy pregnancy and confident motherhood
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-green-100 rounded-full">
                      <resource.icon className="h-6 w-6 text-green-600" />
                    </div>
                    <CardTitle className="text-xl">{resource.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <ul className="space-y-2">
                    {resource.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
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
              Complete Pregnancy & Motherhood Guide
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive support for your pregnancy and motherhood journey
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
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{point}</span>
                        </li>
                      ))}
                    </ul>
                    {topic.note && (
                      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                        <p className="text-green-800 font-medium">{topic.note}</p>
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
              Pregnancy & Parenting Videos
            </h2>
            <p className="text-lg text-gray-600">
              Educational videos to support your pregnancy and parenting journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Breastfeeding Guide Video</span>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Breastfeeding Basics</h3>
                <p className="text-gray-600">Learn proper breastfeeding techniques</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Baby Care Video</span>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Newborn Care</h3>
                <p className="text-gray-600">Essential tips for caring for your baby</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Pregnancy Health Video</span>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Healthy Pregnancy</h3>
                <p className="text-gray-600">Maintaining health during pregnancy</p>
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
