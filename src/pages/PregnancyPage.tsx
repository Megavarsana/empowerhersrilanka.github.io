
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Baby, Heart, Users, BookOpen, Phone, Home } from "lucide-react";

const PregnancyPage = () => {
  const topics = [
    {
      title: "❗ Where to Get Help as a New Mom",
      subtitle: "Support Systems You Can Trust in Sri Lanka",
      icon: Phone,
      content: {
        intro: "Becoming a new mom is a wonderful yet challenging journey. It's important to know where to find support for your health, your baby's care, and your mental wellbeing. Here are trusted resources and services available in Sri Lanka:",
        points: [
          {
            title: "🏥 Government Hospitals & Maternal Clinics",
            description: "Maternal and Child Health Clinics are available in most communities, offering free prenatal and postnatal care, immunizations, and guidance on baby care. Major hospitals with specialized maternity wards: Castle Street Hospital for Women, Colombo; De Soysa Maternity Hospital, Colombo; Teaching Hospitals in major cities. These centers provide check-ups, vaccinations, nutrition advice, and breastfeeding support."
          },
          {
            title: "📞 Helplines for New Moms",
            description: "Maternal and Child Health Line: 1929 (National Child Protection Authority) — For advice and reporting concerns related to mother and child wellbeing. Family Health Bureau Helpline: +94 11 267 6162 — Offers information on maternal health services and breastfeeding support."
          },
          {
            title: "🤱 Breastfeeding Support Groups",
            description: "Many hospitals and NGOs run breastfeeding counseling and support groups to help new moms with feeding challenges and nutrition advice. Lactation consultants are available in major hospitals and some community clinics."
          },
          {
            title: "🧠 Mental Health Support for New Moms",
            description: "Postpartum depression and anxiety are common. Contact: Suwa Seriya Mental Health Helpline: 1926; Women In Need (WIN): 011 4718585 / 077 5675656 for counseling and support."
          },
          {
            title: "👩‍⚕️ Pediatric Care",
            description: "Regular baby check-ups, immunizations, and growth monitoring are done at Maternal and Child Health Clinics or pediatric departments in hospitals. Immunizations follow the national schedule, available free at government clinics."
          },
          {
            title: "🏠 Community Support Services & NGOs",
            description: "Organizations like Women In Need (WIN) and Sahanaya provide counseling, training, and emergency support for mothers and families in crisis. Local community centers often host parenting classes and mother-baby groups."
          },
          {
            title: "📚 Online Resources",
            description: "Official Ministry of Health website: health.gov.lk. Parenting forums and support groups on social media where new moms share experiences and advice."
          }
        ],
        conclusion: "🌷 Final Note: You're not alone on this journey. Reach out, ask for help, and take care of yourself as you care for your little one. Support is always available."
      }
    },
    {
      title: "🤱 Breastfeeding",
      subtitle: "Complete Guide for New Moms",
      icon: Heart,
      content: {
        intro: "Breastfeeding is a beautiful bonding experience and provides the best nutrition for your baby. Here's everything you need to know to make your breastfeeding journey easier and successful.",
        points: [
          {
            title: "🌼 Benefits of Breastfeeding",
            description: "Nutritionally complete: Breast milk contains the perfect balance of vitamins, protein, and fat for your baby's growth. Immune support: It contains antibodies that help protect babies from illnesses such as diarrhea, respiratory infections, and ear infections. Emotional bonding: Skin-to-skin contact releases hormones that strengthen the mother-baby bond. Health benefits for moms: Lowers risk of breast and ovarian cancers, type 2 diabetes, and postpartum depression. Cost-effective and convenient: No preparation needed, always at the right temperature."
          },
          {
            title: "🕰️ When and How to Breastfeed",
            description: "Initiate breastfeeding within the first hour after birth (the 'golden hour') to stimulate milk production. Feed on demand: Watch for early hunger cues like lip smacking, rooting, or sucking motions instead of waiting for crying. Make sure your baby has a deep latch to avoid nipple pain and ensure effective milk transfer. Offer both breasts during feeding sessions to maintain supply and satisfy your baby."
          },
          {
            title: "🤔 Common Breastfeeding Challenges & How to Overcome Them",
            description: "Sore or cracked nipples: Check latch; apply expressed breast milk or lanolin cream; air dry nipples. Engorgement: Feed frequently; use warm compress before feeding; cold compress after feeding. Low milk supply: Nurse often; stay hydrated; try breastfeeding teas or consult a lactation expert. Blocked milk ducts: Massage affected area; apply warm compress; change feeding positions. Mastitis (breast infection): See a doctor for antibiotics; continue breastfeeding to clear infection."
          },
          {
            title: "🍽️ Nutrition and Self-Care for Breastfeeding Moms",
            description: "Eat a well-balanced diet rich in fruits, vegetables, whole grains, and protein. Drink plenty of water to stay hydrated — aim for about 8-10 glasses a day. Avoid alcohol, smoking, and limit caffeine intake. Get rest whenever possible, and accept help from family or friends. Manage stress through relaxation techniques like deep breathing, meditation, or gentle exercise."
          },
          {
            title: "🍼 Expressing and Storing Breast Milk",
            description: "You can express milk manually or with a breast pump. Store milk in clean, sterilized containers. Freshly expressed milk can be kept at room temperature for up to 6 hours, in the fridge for up to 4 days, and in the freezer for up to 6 months. Always label stored milk with the date and use the oldest milk first."
          },
          {
            title: "🕵️‍♀️ Frequently Asked Questions",
            description: "Can I breastfeed if I'm sick? Usually yes. Breast milk contains antibodies that help protect your baby. Consult your doctor for specific illnesses or medications. How long should I breastfeed? WHO recommends exclusive breastfeeding for the first 6 months, then continuing with complementary foods up to 2 years or beyond. What if my baby refuses to latch? Try skin-to-skin contact, different positions, and consult a lactation consultant for personalized help."
          }
        ],
        conclusion: "🆘 When to Seek Help: Your baby isn't gaining weight or seems hungry all the time. You experience severe nipple pain, swelling, redness, or fever. You notice symptoms of mastitis (flu-like symptoms with breast pain). You have concerns about milk supply or baby's feeding habits. 💡 Final Thought: Breastfeeding is a unique experience for every mother and baby. Patience, support, and self-care are key. Celebrate your efforts — you're nourishing your baby with love and health!"
      }
    },
    {
      title: "🤰 What Are the Types of Birthing a Baby?",
      subtitle: "Understanding Your Options",
      icon: BookOpen,
      content: {
        intro: "Every woman's birthing experience is unique. The type of birth may depend on personal choice, medical needs, or unexpected situations. Here's a guide to the main types of childbirth, so expectant mothers can feel informed and empowered.",
        points: [
          {
            title: "👶 Vaginal Birth (Natural Delivery)",
            description: "Most common type of birth. Baby is delivered through the birth canal. May or may not involve pain relief (like an epidural). Allows quicker recovery and lower risk of complications in future pregnancies. Benefits: ✔️ Shorter hospital stay ✔️ Faster recovery ✔️ Immediate skin-to-skin contact"
          },
          {
            title: "💉 Cesarean Section (C-Section)",
            description: "Surgical delivery through an incision in the abdomen and uterus. Planned (elective) or emergency, based on medical reasons. Needed if baby is in distress, breech position, or labor isn't progressing. Benefits: ✔️ Can be lifesaving for mother and baby ✔️ Option if vaginal birth is unsafe. Note: ❗ Recovery takes longer — usually 6 weeks. ❗ Higher chance of complications in future pregnancies."
          },
          {
            title: "🏡 Home Birth",
            description: "Birth takes place at home with the help of a midwife. Suitable for low-risk pregnancies. Offers a calm, familiar environment. Benefits: ✔️ More personal and private ✔️ You're in control of your space and surroundings. Note: ❗ Emergency care may be delayed if complications occur."
          },
          {
            title: "🛁 Water Birth",
            description: "Baby is born in a tub of warm water. Can be done at home or in some hospitals/birth centers. Helps relax muscles and may ease pain. Benefits: ✔️ Natural pain relief ✔️ Calm and gentle birth experience. Note: ❗ Should be done under professional supervision."
          },
          {
            title: "🏥 Assisted Vaginal Delivery",
            description: "Uses tools like forceps or a vacuum device to help deliver the baby. Needed if mother is too tired, or if baby needs help coming out. Still a vaginal birth, but involves medical assistance. Note: ❗ Slightly higher risk of vaginal tears or swelling ✔️ Faster than emergency C-section in urgent cases"
          },
          {
            title: "🌟 VBAC (Vaginal Birth After Cesarean)",
            description: "A woman gives birth vaginally after having a C-section in the past. Safe in many cases with proper medical support. Reduces recovery time and avoids repeat surgery. Important: Not all women are candidates for VBAC — consult your doctor."
          }
        ],
        conclusion: "💬 Final Message: Every birth is beautiful — what matters most is the safety and wellbeing of the mother and baby. It's okay if your birth plan changes. Trust your body, trust your doctor, and know your options."
      }
    },
    {
      title: "👶 How to Take Care of a Newborn Baby",
      subtitle: "Essential Tips for New Moms",
      icon: Baby,
      content: {
        intro: "The first few weeks with a newborn can feel overwhelming — but with gentle care, patience, and love, you can confidently meet your baby's needs. Here's a simple guide for new moms and families.",
        points: [
          {
            title: "🍼 Feeding Your Newborn",
            description: "Breastfeeding: Feed every 2–3 hours (8–12 times/day). Watch for hunger cues: rooting, sucking hands, or fussiness. Formula Feeding: Follow instructions on the formula box. Use clean, sterilized bottles. Burping: Gently burp your baby after each feed to prevent gas. 📝 Tip: Track feeds and diaper changes during the first few weeks."
          },
          {
            title: "😴 Helping Your Baby Sleep",
            description: "Newborns sleep 16–18 hours a day in short naps (2–4 hours). Always place baby on their back to sleep to reduce the risk of SIDS (Sudden Infant Death Syndrome). Use a firm mattress with no pillows, toys, or heavy blankets. 🕯️ Keep the room quiet and dim to help baby distinguish night from day."
          },
          {
            title: "🧼 Bathing & Hygiene",
            description: "Give sponge baths until the umbilical cord falls off (1–2 weeks). Use lukewarm water, mild baby soap, and a soft towel. Clean the diaper area gently with water or wipes, and change diapers every 2–3 hours or when soiled. 🌸 Apply a thin layer of baby-safe cream if diaper rash occurs."
          },
          {
            title: "👕 Clothing & Temperature Care",
            description: "Dress your baby in soft cotton layers — not too hot or cold. Keep the room temperature between 24°C–26°C (75–78°F). Avoid overdressing — babies overheat easily. 👶 Check baby's neck or chest to feel if they're too warm or cold."
          },
          {
            title: "🧠 Bonding & Development",
            description: "Talk, sing, and cuddle your baby to build emotional connection. Give skin-to-skin contact — it's comforting and boosts immunity. Offer tummy time (supervised) for a few minutes daily to strengthen neck muscles. 🧸 Early interaction helps your baby learn, even in the first weeks!"
          },
          {
            title: "🏥 Health & Doctor Visits",
            description: "Follow the vaccination schedule recommended by your local health clinic. Monitor for signs of illness: fever, trouble feeding, unusual crying, or rash. Visit your pediatrician regularly for check-ups and weight monitoring."
          },
          {
            title: "📌 Umbilical Cord & Circumcision Care (if applicable)",
            description: "Keep the area dry and exposed to air. Clean with a cotton swab dipped in warm water, if needed. It will fall off naturally within 1–2 weeks."
          },
          {
            title: "💬 Ask for Help When Needed",
            description: "It's okay to feel tired or unsure — ask your family, friends, or healthcare providers for help. Join a new-mom support group or speak with a midwife or public health nurse."
          }
        ],
        conclusion: "❤️ Final Reminder: You're doing an amazing job. Caring for a newborn is a learning journey — trust your instincts, go gently, and remember to take care of yourself too."
      }
    },
    {
      title: "🔍 Pregnancy Symptoms",
      subtitle: "What to Expect Early On",
      icon: Home,
      content: {
        intro: "Pregnancy symptoms can begin as early as the first week after conception — and each woman's experience is different. Some may notice changes right away, while others might not feel symptoms until weeks later. Here's a guide to common early pregnancy signs to help women identify and understand what's happening in their bodies.",
        points: [
          {
            title: "💗 Missed Period",
            description: "Often the first and most noticeable sign of pregnancy. If your cycle is regular and you miss a period, it's a good idea to take a pregnancy test."
          },
          {
            title: "😴 Fatigue (Extreme Tiredness)",
            description: "Rising progesterone levels can make you feel unusually sleepy or drained — even after resting. Your body is working hard to support the growing baby."
          },
          {
            title: "🤢 Nausea or Morning Sickness",
            description: "Usually starts around week 4–6. Can happen any time of the day, not just in the morning. Some women experience vomiting, others only mild queasiness."
          },
          {
            title: "👃 Heightened Sense of Smell",
            description: "Everyday smells may suddenly seem stronger or unpleasant. Some women also develop food aversions."
          },
          {
            title: "🍽️ Food Cravings or Aversions",
            description: "You may crave certain foods or feel disgusted by others you once loved. This is normal and often caused by hormonal changes."
          },
          {
            title: "💧 Frequent Urination",
            description: "Hormonal shifts and increased blood flow to the kidneys can cause you to pee more often, even in early pregnancy."
          },
          {
            title: "😣 Mood Swings",
            description: "You may feel more emotional or irritable due to hormonal changes — very common in the first trimester."
          },
          {
            title: "🧠 Headaches or Lightheadedness",
            description: "Caused by changes in blood pressure or blood sugar levels. Stay hydrated and eat small, frequent meals."
          },
          {
            title: "🌸 Tender or Swollen Breasts",
            description: "Your breasts may feel sore, fuller, or heavier — similar to how they feel before your period, but more intense."
          },
          {
            title: "🩸 Light Spotting or Cramping",
            description: "Known as implantation bleeding, light spotting may occur when the fertilized egg attaches to the uterine lining. This usually happens around 6–12 days after conception."
          }
        ],
        conclusion: "📝 Note: Not all women experience the same symptoms. If you think you might be pregnant, the best step is to take a home pregnancy test and consult a healthcare provider."
      }
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-section text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            🍼 Pregnancy & New Motherhood Support
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Supporting you through pregnancy, birth, and the beautiful journey of new motherhood with comprehensive resources and care.
          </p>
          <Button className="bg-white text-primary hover:bg-gray-100 px-10 py-4 text-lg font-semibold">
            Get Support ✨
          </Button>
        </div>
      </section>

      {/* Topic Navigation */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {topics.map((topic, index) => (
              <Button
                key={index}
                variant="outline"
                className="bg-white text-gray-700 border-gray-300 hover:bg-primary hover:text-white transition-colors"
                onClick={() => document.getElementById(`topic-${index}`)?.scrollIntoView({ behavior: 'smooth' })}
              >
                {topic.title}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="section-spacing bg-primary">
        <div className="container mx-auto px-6">
          {topics.map((topic, index) => (
            <div key={index} id={`topic-${index}`} className="mb-16">
              <div className="max-w-4xl mx-auto">
                <Card className="card-hover bg-white border-white">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-gray-800">
                      <topic.icon className="h-6 w-6 text-primary" />
                      <span>{topic.title}</span>
                    </CardTitle>
                    <p className="text-lg text-gray-600 mt-1">{topic.subtitle}</p>
                  </CardHeader>
                  <CardContent>
                    {/* Image/Video Section */}
                    <div className="mb-6 rounded-lg overflow-hidden">
                      <img 
                        src="/lovable-uploads/523712999610-f77fbcfc3843.jpg" 
                        alt={`${topic.title} - Pregnancy Support`}
                        className="w-full h-64 object-cover"
                      />
                    </div>

                    <p className="text-gray-700 leading-relaxed text-lg mb-6">{topic.content.intro}</p>
                    
                    <div className="grid gap-6 mb-6">
                      {topic.content.points.map((point, pointIndex) => (
                        <div key={pointIndex} className="bg-gray-50 p-6 rounded-lg">
                          <h4 className="font-semibold text-gray-800 mb-3 text-lg">{point.title}</h4>
                          <p className="text-gray-700 leading-relaxed">{point.description}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="bg-primary/10 p-6 rounded-lg mb-6">
                      <p className="text-gray-700 leading-relaxed font-medium text-lg">{topic.content.conclusion}</p>
                    </div>

                    {/* YouTube Video Section */}
                    <div className="mt-6">
                      <h4 className="font-semibold text-gray-800 mb-2">🎥 {topic.title} Video Guide</h4>
                      <div className="aspect-video rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 mx-auto">
                            <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                          </div>
                          <span className="text-gray-700 font-semibold">Video Coming Soon</span>
                        </div>
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
