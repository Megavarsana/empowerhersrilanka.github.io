import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Calendar, Phone, BookOpen, Users, AlertCircle } from "lucide-react";
const WomensHealthPage = () => {
  const topics = [{
    title: "🌸 Pain Relief Tips During Periods",
    subtitle: "Managing Menstrual Cramps Like a Pro",
    icon: Heart,
    content: {
      intro: "Many women experience menstrual pain (dysmenorrhea) during their monthly cycle. While it's common, it shouldn't ruin your day. Here are some safe, effective ways to ease the discomfort.",
      points: [{
        title: "🔥 Use Heat Therapy",
        description: "Apply a hot water bag or heating pad on your lower belly or back. Heat helps relax the muscles and reduce cramping. Warm baths can also soothe your body and mind."
      }, {
        title: "🧘‍♀️ Gentle Exercise or Yoga",
        description: "Light movement helps release endorphins (natural painkillers). Try gentle yoga poses like Child's Pose, Cat-Cow Stretch, Supine Twist. A short walk or slow stretching can also ease discomfort."
      }, {
        title: "💊 Over-the-Counter Pain Relief",
        description: "Medications like Paracetamol, Ibuprofen, or Mefenamic Acid can help. Always follow proper dosage or ask a doctor/pharmacist for guidance."
      }, {
        title: "☕ Sip Herbal Teas",
        description: "Drink warm ginger tea, chamomile, or peppermint tea. These can reduce inflammation and relax your uterus naturally."
      }, {
        title: "🍽️ Eat Light, Anti-Inflammatory Foods",
        description: "Choose foods rich in Magnesium (bananas, nuts), Omega-3s (fish, flaxseeds), Iron (leafy greens). Avoid too much sugar, salt, or caffeine, which can make symptoms worse."
      }, {
        title: "💤 Prioritize Rest & Sleep",
        description: "Don't feel guilty about slowing down. Resting helps your body recover and manage pain better. Try sleeping on your side with a pillow under your knees."
      }, {
        title: "💧 Stay Hydrated",
        description: "Drink plenty of warm water to ease bloating and muscle tension. Avoid fizzy drinks and too much coffee."
      }, {
        title: "🧖‍♀️ Try Relaxation Techniques",
        description: "Deep breathing, meditation, or listening to calming music can reduce stress and pain. Stress often makes cramps worse, so staying calm helps a lot."
      }],
      conclusion: "💬 When To See a Doctor: Seek medical advice if pain is severe and doesn't improve with medication, periods are irregular, too heavy, or last longer than 7 days, you experience nausea, vomiting, or fainting regularly during periods."
    }
  }, {
    title: "🧼 Sanitary Hygiene for Women",
    subtitle: "Essential Tips for Menstrual Health",
    icon: AlertCircle,
    content: {
      intro: "Maintaining proper menstrual hygiene is essential for preventing infections, boosting confidence, and staying healthy during your period. Here are some essential tips every girl and woman should know:",
      points: [{
        title: "🩸 Choose the Right Sanitary Product",
        description: "There are several options to manage your period. Choose what's comfortable and suits your flow: Sanitary pads (regular, long, overnight), Tampons, Menstrual cups, Period panties. ✅ Tip: Always use good quality, clean products and never use expired sanitary products."
      }, {
        title: "🔁 Change Regularly",
        description: "Change pads or tampons every 4–6 hours, even if your flow seems light. If using a menstrual cup, empty and rinse it every 6–8 hours. Prolonged use can lead to bacterial infections or bad odor."
      }, {
        title: "🧼 Wash Your Hands (Always!)",
        description: "Wash your hands before and after changing your sanitary product. Use soap and clean water to avoid spreading bacteria."
      }, {
        title: "💦 Keep Your Vaginal Area Clean",
        description: "Gently wash the external vaginal area with warm water during your period. Avoid using scented soaps, douches, or feminine sprays — they can irritate and disturb the natural pH."
      }, {
        title: "👖 Wear Clean, Breathable Underwear",
        description: "Choose cotton underwear that lets your skin breathe. Change underwear daily and more often if it becomes stained or sweaty."
      }, {
        title: "🗑️ Dispose Sanitary Products Properly",
        description: "Wrap used pads or tampons in paper or the product's wrapper before throwing them in a bin. Never flush pads or tampons — they can clog plumbing. Use covered bins and change the garbage regularly to maintain hygiene."
      }, {
        title: "🧺 Maintain Hygiene During Heavy Flow",
        description: "Carry extra pads, tissues, and spare underwear if you're going out during your period. Use panty liners toward the end of your period when flow is light."
      }, {
        title: "💬 Talk Openly About Periods",
        description: "Periods are natural — don't be ashamed to ask questions or talk about hygiene. Share this knowledge with younger girls and help break the taboo."
      }],
      conclusion: "⚠️ Warning Signs of Poor Hygiene or Infections: Itching, rash, or unusual discharge; Foul odor even after cleaning; Burning during urination or pain. If you notice any of these, consult a doctor or gynecologist immediately. 🌸 Final Reminder: Good sanitary hygiene = confidence + health + comfort. Taking small steps every day can make a big difference."
    }
  }, {
    title: "🩸 First Period Guide (Menarche)",
    subtitle: "What to Expect and How to Prepare",
    icon: Calendar,
    content: {
      intro: "Getting your first period is a big moment in every girl's life. It's a natural part of growing up and becoming a young woman. Here's everything you need to know to feel confident and prepared!",
      points: [{
        title: "🌸 What Is a Period?",
        description: "A period (menstruation) is when blood and tissue leave your body from the uterus through the vagina. It's part of the monthly menstrual cycle and means your body is healthy and developing normally."
      }, {
        title: "🕰️ When Will I Get My First Period?",
        description: "Most girls get their first period between ages 10 to 15. It may happen earlier or later — and that's completely normal! Signs it might be coming: Breast development, Hair under arms or around genitals, White vaginal discharge, Mood changes or slight cramps."
      }, {
        title: "🩹 What Should I Use During My Period?",
        description: "Common Products: Sanitary Pads – easiest for beginners, Panty Liners – for light flow or spotting, Menstrual Cups or Tampons – can be tried later with guidance. ✅ Tip: Always carry an extra pad in your bag just in case!"
      }, {
        title: "📆 How Long Does It Last?",
        description: "A period usually lasts between 3 to 7 days. It may be heavy at first, then get lighter each day. Your first few periods may be irregular, but that's normal as your body adjusts."
      }, {
        title: "😣 Common Symptoms You Might Feel",
        description: "Mild cramps in the lower belly, Mood swings or emotional changes, Bloating or tender breasts, Feeling tired or sleepy. 🧘 Try using a warm compress, drinking water, and getting rest."
      }, {
        title: "🧼 How to Stay Clean and Comfortable",
        description: "Change your pad every 4–6 hours, Wash your private area with warm water (no harsh soaps), Wear clean cotton underwear, Dispose of used pads properly — never flush them."
      }, {
        title: "💬 Who Can I Talk To?",
        description: "A trusted adult: mom, older sister, aunt, or teacher; A school counselor or health teacher; Remember: It's okay to ask questions — you're not alone!"
      }],
      conclusion: "📌 Important Things to Know: Periods are normal and healthy, It doesn't mean you're 'grown up' yet, just that your body is changing, You can still go to school, play, and do everything — just with a little extra care. 🌷 Final Message for Girls: Your period is a sign that your body is strong and working just as it should. There's nothing to fear or be ashamed of. Learn, stay clean, and be proud of yourself!"
    }
  }, {
    title: "🔍 Myths & Truths About Periods",
    subtitle: "Busting Common Misconceptions",
    icon: BookOpen,
    content: {
      intro: "There are many old beliefs and taboos around menstruation. Let's clear the confusion and reveal the truth behind the myths so every girl and woman can feel confident and informed.",
      points: [{
        title: "❌ Myth 1: You shouldn't bathe or wash your hair during your period",
        description: "✅ Truth: You can and should bathe during your period. In fact, warm water can help reduce cramps and keep you fresh and clean."
      }, {
        title: "❌ Myth 2: You can't get pregnant during your period",
        description: "✅ Truth: While it's less likely, it's still possible to get pregnant if you have unprotected sex during your period. Always use protection."
      }, {
        title: "❌ Myth 3: Period blood is dirty or impure",
        description: "✅ Truth: Period blood is just the natural shedding of the uterus lining. It's not dirty — it's a normal, healthy process."
      }, {
        title: "❌ Myth 4: Girls shouldn't play sports or exercise on their period",
        description: "✅ Truth: Light exercise or movement (like walking or yoga) can actually help reduce cramps and improve your mood!"
      }, {
        title: "❌ Myth 5: Tampons or menstrual cups take away virginity",
        description: "✅ Truth: Using a tampon or cup does not affect your virginity. Virginity is a cultural concept — not something defined by using a hygiene product."
      }, {
        title: "❌ Myth 6: You must hide your period from everyone",
        description: "✅ Truth: Periods are nothing to be ashamed of. It's a natural part of life. Talking about it helps break the stigma and support others."
      }, {
        title: "❌ Myth 7: You bleed a lot during your period",
        description: "✅ Truth: It may look like a lot, but the average blood loss is only about 2–6 tablespoons per period."
      }, {
        title: "❌ Myth 8: You can't go to the temple or pray during your period",
        description: "✅ Truth: This is based on cultural or religious beliefs, not medical facts. Periods do not make you unclean — it's up to personal or spiritual choice."
      }],
      conclusion: "🧠 Period Fact: Every girl is different. Flow, symptoms, and cycles vary — and that's okay. What matters is learning, caring for your body, and supporting each other with love and respect."
    }
  }, {
    title: "🔄 Menstrual Products",
    subtitle: "Choose What's Right for You",
    icon: Users,
    content: {
      intro: "Every girl and woman deserves a comfortable period. Here's a guide to the different menstrual products you can choose from — depending on your flow, lifestyle, and comfort.",
      points: [{
        title: "🩹 Sanitary Pads (Napkins)",
        description: "What it is: Soft absorbent sheets worn inside underwear to catch blood. ✅ Pros: Easy to use (great for beginners), Available everywhere, No insertion needed. ⚠️ Tips: Change every 4–6 hours, Choose based on flow: regular, long, ultra-thin, or overnight."
      }, {
        title: "💧 Menstrual Cups",
        description: "What it is: A soft, reusable silicone cup inserted into the vagina to collect blood. ✅ Pros: Reusable for up to 5–10 years, Eco-friendly and cost-effective, Can be worn for 6–8 hours. ⚠️ Tips: Needs learning for insertion/removal, Must be sterilized between periods."
      }, {
        title: "🔘 Tampons",
        description: "What it is: Small cotton cylinders inserted into the vagina to absorb blood directly. ✅ Pros: Invisible under clothes, Comfortable for sports/swimming, Available in different absorbencies. ⚠️ Tips: Change every 4–6 hours, Risk of Toxic Shock Syndrome (TSS) if worn too long."
      }, {
        title: "🩲 Period Panties",
        description: "What it is: Special underwear with built-in absorbent layers to absorb menstrual flow. ✅ Pros: Reusable & leak-proof, Comfortable, no shifting like pads, Good backup with cup or tampon. ⚠️ Tips: Wash after each use, Best for light to moderate flow or as backup."
      }, {
        title: "☁️ Panty Liners",
        description: "What it is: Thin mini-pads used for spotting or light discharge. ✅ Pros: Great for the beginning or end of a period, Can be used with tampons or cups for extra protection. ⚠️ Tips: Not suitable for heavy flow, Change regularly to stay fresh."
      }],
      conclusion: "🧼 Important Hygiene Tips: Always wash hands before and after changing any product. Carry spare products when you're on the go. Track your cycle to stay prepared. 🌱 Eco-Friendly Tip: If you're looking to reduce waste, consider reusable products like: Cloth pads, Menstrual cups, Period underwear. 🩸 Final Word: There is no one-size-fits-all. Choose what makes YOU feel confident, clean, and comfortable. Your period, your choice."
    }
  }];
  return <div className="min-h-screen bg-gradient-to-br from-empowerher-pink via-empowerher-pink-medium to-empowerher-pink-dark">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            🩸 Women's Health
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-white">
            Period Help & Menstrual Care - Comprehensive resources for women's reproductive health and wellness
          </p>
        </div>
      </section>

      {/* Topic Navigation */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <button 
              onClick={() => document.getElementById('topic-0')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors shadow-sm border border-gray-200 flex items-center justify-center gap-2"
            >
              <Heart className="h-4 w-4" />
              Pain Relief Tips
            </button>
            <button 
              onClick={() => document.getElementById('topic-1')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors shadow-sm border border-gray-200 flex items-center justify-center gap-2"
            >
              <AlertCircle className="h-4 w-4" />
              Sanitary Hygiene
            </button>
            <button 
              onClick={() => document.getElementById('topic-2')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors shadow-sm border border-gray-200 flex items-center justify-center gap-2"
            >
              <Calendar className="h-4 w-4" />
              First Period Guide
            </button>
            <button 
              onClick={() => document.getElementById('topic-3')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors shadow-sm border border-gray-200 flex items-center justify-center gap-2"
            >
              <BookOpen className="h-4 w-4" />
              Myths & Truths
            </button>
            <button 
              onClick={() => document.getElementById('topic-4')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors shadow-sm border border-gray-200 flex items-center justify-center gap-2"
            >
              <Users className="h-4 w-4" />
              Menstrual Products
            </button>
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
                      <img alt={`${topic.title} - Women's Health Support`} className="w-full h-64 object-cover" src={
                        index === 0 ? "/lovable-uploads/48d39953-6855-4ce3-be25-bfee9d1e7804.png" :
                        index === 1 ? "/lovable-uploads/6a480708-518c-4101-b94f-202c632d15c9.png" :
                        index === 2 ? "/lovable-uploads/80020357-d365-4ad5-90dc-4bf5ba09e527.png" :
                        index === 3 ? "/lovable-uploads/339f2eff-0ada-4e0f-99e3-f80d27c884e6.png" :
                        "/lovable-uploads/c780dc35-a33b-4d55-8081-13e58734da78.png"
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
                        <iframe width="100%" height="100%" src={index === 0 ? "https://www.youtube.com/embed/Zg8JvhTPQ-E" : index === 1 ? "https://www.youtube.com/embed/9jSfOWzVCRU" : index === 2 ? "https://www.youtube.com/embed/nxPJhOKHRN4" : index === 3 ? "https://www.youtube.com/embed/T5Ct8bTTuN8" : "https://www.youtube.com/embed/qg5Hc0n9f_0"} title={`${topic.title} Video Guide`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full"></iframe>
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
export default WomensHealthPage;