import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Baby, Heart, Users, BookOpen, Phone, Shield } from "lucide-react";

const PregnancyPage = () => {
  const topics = [
    {
      title: "❗ Where to Get Help as a New Mom in Sri Lanka",
      subtitle: "Essential Support Resources",
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
            description: "Official Ministry of Health website: health.gov.lk; Parenting forums and support groups on social media where new moms share experiences and advice."
          }
        ],
        conclusion: "🌷 Final Note: You're not alone on this journey. Reach out, ask for help, and take care of yourself as you care for your little one. Support is always available."
      }
    },
    {
      title: "🤰 What to Expect During Pregnancy",
      subtitle: "A Trimester-by-Trimester Guide",
      icon: Baby,
      content: {
        intro: "Pregnancy is divided into three trimesters, each bringing unique changes and milestones. Here's a general overview of what to expect:",
        points: [
          {
            title: "🌱 First Trimester (Weeks 1-13)",
            description: "Key Developments: Baby's organs begin to form; Heart starts beating; Limbs and facial features develop. Common Symptoms: Morning sickness (nausea, vomiting); Fatigue; Frequent urination; Breast tenderness. Self-Care Tips: Get plenty of rest; Eat small, frequent meals; Stay hydrated; Take prenatal vitamins."
          },
          {
            title: "🌸 Second Trimester (Weeks 14-27)",
            description: "Key Developments: Baby grows rapidly; You may feel the baby move; Organs fully develop. Common Symptoms: Increased appetite; Backaches; Leg cramps; Skin changes (darkening of nipples, linea nigra). Self-Care Tips: Continue prenatal vitamins; Exercise regularly; Get enough calcium; Start planning for baby's arrival."
          },
          {
            title: "🌼 Third Trimester (Weeks 28-40)",
            description: "Key Developments: Baby gains weight and prepares for birth; Lungs mature; Baby drops lower in your abdomen. Common Symptoms: Shortness of breath; Heartburn; Swelling in ankles and feet; Braxton Hicks contractions. Self-Care Tips: Attend childbirth classes; Pack your hospital bag; Get plenty of rest; Monitor baby's movements."
          },
          {
            title: "⚠️ Warning Signs: When to Call Your Doctor",
            description: "Severe abdominal pain; Vaginal bleeding; Sudden swelling; Severe headache; Blurred vision; Decreased fetal movement. Always seek immediate medical attention if you experience any concerning symptoms."
          }
        ],
        conclusion: "📌 Important Note: Every pregnancy is unique. Consult your doctor or midwife for personalized advice and care throughout your journey."
      }
    },
    {
      title: "💖 Healthy Diet & Nutrition During Pregnancy",
      subtitle: "Nourishing You and Your Baby",
      icon: Heart,
      content: {
        intro: "Eating a balanced diet during pregnancy is crucial for your baby's growth and development, as well as your own health. Here's a guide to essential nutrients and food choices:",
        points: [
          {
            title: "🥦 Key Nutrients",
            description: "Folic Acid: Prevents neural tube defects (leafy greens, fortified cereals). Iron: Supports blood production (red meat, beans, spinach). Calcium: Builds strong bones and teeth (dairy, leafy greens). Vitamin D: Helps absorb calcium (fortified milk, sunlight). Omega-3 Fatty Acids: Supports brain development (fish, flaxseeds)."
          },
          {
            title: "🍽️ Food Choices",
            description: "Protein: Lean meats, poultry, fish, beans, tofu. Carbohydrates: Whole grains, fruits, vegetables. Healthy Fats: Avocados, nuts, olive oil. Dairy: Milk, yogurt, cheese (pasteurized). Fruits & Vegetables: Aim for a variety of colors."
          },
          {
            title: "🚫 Foods to Avoid",
            description: "Raw or undercooked meat, poultry, fish, or eggs; Unpasteurized dairy products; High-mercury fish (shark, swordfish, king mackerel); Alcohol; Excessive caffeine; Processed foods and sugary drinks."
          },
          {
            title: "💧 Hydration",
            description: "Drink plenty of water throughout the day to stay hydrated and prevent constipation. Aim for at least 8-10 glasses of water daily."
          },
          {
            title: "💊 Prenatal Vitamins",
            description: "Take a prenatal vitamin as recommended by your doctor to ensure you're getting all the essential nutrients. Start taking them before conception if possible."
          },
          {
            title: "🤰 Weight Gain",
            description: "Talk to your doctor about healthy weight gain during pregnancy. It varies depending on your pre-pregnancy weight. Aim for gradual and steady weight gain."
          }
        ],
        conclusion: "⚠️ Important Note: If you have any dietary restrictions or health conditions, consult a registered dietitian or your doctor for personalized advice."
      }
    },
    {
      title: "📖 Pregnancy & Motherhood Books",
      subtitle: "Recommended Reads for Expecting Parents",
      icon: BookOpen,
      content: {
        intro: "Reading books about pregnancy and motherhood can provide valuable information, guidance, and support as you prepare for your new role. Here are some recommended reads:",
        points: [
          {
            title: "📚 What to Expect When You're Expecting",
            description: "A comprehensive guide covering every stage of pregnancy, from conception to postpartum. It includes information on symptoms, nutrition, and medical procedures."
          },
          {
            title: "📚 The Happiest Baby on the Block",
            description: "Offers techniques for soothing and calming newborns, based on the concept of the 'fourth trimester.' It teaches parents how to understand and respond to their baby's needs."
          },
          {
            title: "📚 Ina May's Guide to Childbirth",
            description: "Shares the wisdom and experience of renowned midwife Ina May Gaskin. It promotes natural childbirth and empowers women to trust their bodies."
          },
          {
            title: "📚 The Fourth Trimester: A Postpartum Guide to Healing Your Body, Balancing Your Emotions, and Restoring Your Vitality",
            description: "Focuses on the postpartum period and provides guidance on physical recovery, emotional wellbeing, and self-care for new mothers."
          },
          {
            title: "📚 Brain Rules for Baby: How to Raise a Smart and Happy Child from Zero to Five",
            description: "Explains the science behind early childhood development and offers practical tips for raising intelligent and emotionally healthy children."
          },
          {
            title: "📚 Mayo Clinic Guide to a Healthy Pregnancy",
            description: "Provides evidence-based information on prenatal care, labor and delivery, and postpartum recovery. It covers a wide range of topics and is written by medical experts."
          }
        ],
        conclusion: "📌 Note: Check your local library or bookstore for these and other helpful resources. Online parenting forums and communities can also offer valuable insights and recommendations."
      }
    },
    {
      title: "🤝 Building Your Mom Tribe",
      subtitle: "Finding Support and Friendship",
      icon: Users,
      content: {
        intro: "Connecting with other moms can provide invaluable support, friendship, and a sense of community during your journey into motherhood. Here are some ways to build your mom tribe:",
        points: [
          {
            title: "🏘️ Local Mom Groups",
            description: "Search for mom groups in your area through online directories, social media, or community centers. These groups often organize playdates, outings, and social events."
          },
          {
            title: "🤱 Breastfeeding Support Groups",
            description: "Attend breastfeeding support groups at hospitals, clinics, or community centers. These groups offer guidance, encouragement, and a chance to connect with other nursing moms."
          },
          {
            title: "👶 Playdates",
            description: "Organize playdates with other moms and their children at parks, playgrounds, or your homes. These gatherings provide opportunities for kids to socialize and moms to chat."
          },
          {
            title: "💻 Online Forums and Social Media",
            description: "Join online parenting forums, Facebook groups, or Instagram communities. These platforms offer a space to ask questions, share experiences, and connect with moms from around the world."
          },
          {
            title: "🚶‍♀️ Stroller Walks",
            description: "Invite other moms to join you for stroller walks in your neighborhood or local parks. Walking and talking can be a great way to exercise and socialize."
          },
          {
            title: "📚 Parenting Classes",
            description: "Attend parenting classes or workshops at hospitals, community centers, or online. These classes provide valuable information and a chance to meet other expecting or new parents."
          },
          {
            title: "💖 Be Open and Approachable",
            description: "Smile, strike up conversations, and be open to meeting new people. You never know where you'll find your next mom friend."
          }
        ],
        conclusion: "🌷 Remember: Building a mom tribe takes time and effort. Be patient, persistent, and authentic. The rewards of having a supportive community are well worth it."
      }
    },
    {
      title: "🛡️ Safety Tips for Pregnancy",
      subtitle: "Protecting You and Your Baby",
      icon: Shield,
      content: {
        intro: "Pregnancy requires extra precautions to ensure the safety and wellbeing of both you and your baby. Here are some essential safety tips:",
        points: [
          {
            title: "🚗 Car Safety",
            description: "Always wear a seatbelt when driving or riding in a car. Position the lap belt below your belly and the shoulder belt across your chest. Avoid air travel during the late stages of pregnancy."
          },
          {
            title: "🏠 Home Safety",
            description: "Prevent falls by removing tripping hazards, using non-slip mats, and wearing supportive shoes. Install smoke detectors and carbon monoxide detectors. Store cleaning products and medications out of reach of children."
          },
          {
            title: "💊 Medication Safety",
            description: "Only take medications approved by your doctor during pregnancy. Avoid herbal supplements and over-the-counter drugs without consulting your healthcare provider."
          },
          {
            title: "🌡️ Environmental Safety",
            description: "Avoid exposure to harmful chemicals, pesticides, and radiation. Limit your intake of high-mercury fish. Wash fruits and vegetables thoroughly. Drink filtered water."
          },
          {
            title: "🏋️‍♀️ Exercise Safety",
            description: "Continue exercising during pregnancy, but modify your routine as needed. Avoid high-impact activities, contact sports, and exercises that could cause you to fall. Stay hydrated and avoid overheating."
          },
          {
            title: "🐾 Pet Safety",
            description: "Avoid contact with cat feces to prevent toxoplasmosis. Wear gloves when gardening. Wash your hands thoroughly after handling pets."
          },
          {
            title: "🤒 Illness Prevention",
            description: "Wash your hands frequently to prevent infections. Avoid contact with sick people. Get vaccinated against the flu and other recommended diseases."
          }
        ],
        conclusion: "⚠️ Important Note: If you have any concerns about your safety during pregnancy, consult your doctor or midwife for personalized advice."
      }
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container mx-auto px-6 text-center">
          <h1 className="hero-title">
            🍼 Pregnancy & New Mother Support
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-primary">
            Your journey to motherhood matters. Find comprehensive support, guidance, and resources for every step.
          </p>
        </div>
      </section>

      {/* Topic Navigation */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="quick-nav">
            {topics.map((topic, index) => (
              <Button
                key={index}
                variant="consistent"
                onClick={() => document.getElementById(`topic-${index}`)?.scrollIntoView({ behavior: 'smooth' })}
              >
                {topic.title}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {topics.map((topic, index) => (
            <div key={index} id={`topic-${index}`} className="mb-16">
              <div className="max-w-6xl mx-auto">
                <div className="section-container">
                  <div className="pb-6">
                    <h2 className="section-heading flex items-center space-x-3">
                      <topic.icon className="h-8 w-8 text-primary" />
                      <span>{topic.title}</span>
                    </h2>
                    <p className="text-xl text-muted-foreground mt-2">{topic.subtitle}</p>
                  </div>
                  <div className="p-8">
                    {/* Image Section */}
                    <div className="image-container mb-8">
                      <img 
                        src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800&h=400&fit=crop" 
                        alt={`${topic.title} - Pregnancy and Motherhood Support`}
                        className="w-full h-64 object-cover"
                      />
                    </div>

                    <p className="text-foreground leading-relaxed text-xl mb-8">{topic.content.intro}</p>
                    
                    <div className="content-grid">
                      {topic.content.points.map((point, pointIndex) => (
                        <div key={pointIndex} className="bg-muted p-8 rounded-[10px]">
                          <h4 className="font-bold text-foreground mb-4 text-xl">{point.title}</h4>
                          <p className="text-muted-foreground leading-relaxed text-lg">{point.description}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="bg-secondary p-8 rounded-[10px] mb-8">
                      <p className="text-foreground leading-relaxed font-bold text-xl">{topic.content.conclusion}</p>
                    </div>

                    {/* YouTube Video Section */}
                    <div className="mt-8">
                      <h4 className="font-bold text-foreground mb-4 text-xl">🎥 {topic.title} Video Guide</h4>
                      <div className="video-container aspect-video">
                        <iframe 
                          width="100%" 
                          height="100%" 
                          src={
                            index === 0 ? "https://www.youtube.com/embed/3GQ9dO7-OII" : 
                            index === 1 ? "https://www.youtube.com/embed/qBfWKnMdDbw" : 
                            index === 2 ? "https://www.youtube.com/embed/3mFgNDiRdj8" : 
                            index === 3 ? "https://www.youtube.com/embed/Q3GxkXMtC38" : 
                            index === 4 ? "https://www.youtube.com/embed/kQdD_wLKqgI" : 
                            "https://www.youtube.com/embed/X4VdO7ArXYI"
                          } 
                          title={`${topic.title} Video Guide`} 
                          frameBorder="0" 
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                          allowFullScreen 
                          className="w-full h-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
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