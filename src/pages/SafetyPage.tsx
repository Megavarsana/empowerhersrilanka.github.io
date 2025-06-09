import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Phone, Smartphone, AlertTriangle, FileText } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const SafetyPage = () => {
  const safetyTopics = [{
    id: 'tips',
    title: 'Safety Tips',
    icon: Shield
  }, {
    id: 'defense',
    title: 'Self-Defense',
    icon: Shield
  }, {
    id: 'emergency',
    title: 'Emergency Numbers',
    icon: Phone
  }, {
    id: 'apps',
    title: 'Mobile Safety Apps',
    icon: Smartphone
  }, {
    id: 'report',
    title: 'How to Report to Police',
    icon: FileText
  }];
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Women's Safety</h1>
          <p className="text-xl text-pastel-khaki mb-8">Your Safety, Your Power</p>
        </div>

        {/* 5-Topic Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
          {safetyTopics.map(topic => <Card key={topic.id} className="cursor-pointer hover:bg-pastel-flesh transition-colors" onClick={() => scrollToSection(topic.id)}>
              <CardContent className="p-6 text-center">
                <topic.icon className="h-8 w-8 text-pastel-khaki mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800 text-sm">{topic.title}</h3>
              </CardContent>
            </Card>)}
        </div>

        {/* Content Sections */}
        <div className="space-y-16">
          {/* Safety Tips */}
          <section id="tips" className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6"> 🛡️ Self-Defense Tips for Women
✅ Awareness & Prevention

🔍 Stay alert to your surroundings, especially in unfamiliar or isolated areas.

🎧 Avoid using headphones at full volume or being glued to your phone while walking alone.

🚷 Trust your instincts — if something feels off, remove yourself from the situation.

🚖 Use safe, well-reviewed transportation apps or services.

🗺️ Let someone know your location or plans when going out alone.

👜 Practical Everyday Habits

🧤 Keep keys between your fingers when walking at night for quick defense.

👜 Carry your bag in a way that’s difficult to snatch (e.g., cross-body with zipper inward).

🔐 Lock your car doors immediately upon entering.

🧯 Carry a personal safety item: pepper spray, mini alarm, or a whistle.

📱 Enable emergency features on your phone (SOS mode, emergency contact).

🥋 Physical Self-Defense Tips

🦵 Aim for vulnerable areas: eyes, nose, throat, groin, knees.

✊ Learn basic strikes: palm strike, elbow strike, and knee to groin.

🏃 Don’t focus on fighting — focus on escaping. The goal is to get away, not win.

🧘 Practice yelling firmly like "STOP!" to shock and alert others.

🥋 Consider taking a self-defense class or martial art (e.g., Krav Maga, Jiu-Jitsu).

🚨 In a Dangerous Situation

🚪 Always identify exits in buildings, clubs, or transport vehicles.

🤳 Discreetly start recording or go live if you feel unsafe.

📢 Use distraction to your advantage — throw something, make noise, or create confusion to escape.

🚗 Avoid parking next to vans or in isolated areas, especially at night.

🌐 Online Safety

👁️ Limit how much personal information you share online.

📸 Avoid posting real-time location on social media.

🛑 Don’t share address, daily routines, or private info publicly.


          </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <ul className="space-y-4 text-gray-600">
                  <li>

 
✅ Awareness & Prevention

🔍 Stay alert to your surroundings, especially in unfamiliar or isolated areas.

🎧 Avoid using headphones at full volume or being glued to your phone while walking alone.

🚷 Trust your instincts — if something feels off, remove yourself from the situation.

🚖 Use safe, well-reviewed transportation apps or services.

🗺️ Let someone know your location or plans when going out alone.

👜 Practical Everyday Habits

🧤 Keep keys between your fingers when walking at night for quick defense.

👜 Carry your bag in a way that’s difficult to snatch (e.g., cross-body with zipper inward).

🔐 Lock your car doors immediately upon entering.

🧯 Carry a personal safety item: pepper spray, mini alarm, or a whistle.

📱 Enable emergency features on your phone (SOS mode, emergency contact).

🥋 Physical Self-Defense Tips

🦵 Aim for vulnerable areas: eyes, nose, throat, groin, knees.

✊ Learn basic strikes: palm strike, elbow strike, and knee to groin.

🏃 Don’t focus on fighting — focus on escaping. The goal is to get away, not win.

🧘 Practice yelling firmly like "STOP!" to shock and alert others.

🥋 Consider taking a self-defense class or martial art (e.g., Krav Maga, Jiu-Jitsu).

🚨 In a Dangerous Situation

🚪 Always identify exits in buildings, clubs, or transport vehicles.

🤳 Discreetly start recording or go live if you feel unsafe.

📢 Use distraction to your advantage — throw something, make noise, or create confusion to escape.

🚗 Avoid parking next to vans or in isolated areas, especially at night.

🌐 Online Safety

👁️ Limit how much personal information you share online.

📸 Avoid posting real-time location on social media.

🛑 Don’t share address, daily routines, or private info publicly.


                </li>
                  
                  
                  
                  
                </ul>
                <div className="mt-6 bg-pastel-sand p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">YouTube Video Placeholder</h4>
                  <p className="text-gray-600 text-sm">Personal Safety Tips for Sri Lankan Women</p>
                </div>
              </div>
              <div className="bg-pastel-flesh p-6 rounded-lg">
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" alt="Women safety awareness" className="w-full h-48 object-cover rounded-lg" />
              </div>
            </div>
          </section>

          {/* Self-Defense */}
          <section id="defense" className="bg-pastel-pearl p-8 rounded-2xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Self-Defense</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-600 mb-4">Here are some practical and important women safety tips you can follow to help protect yourself in various situations:

🚶 When You’re Out Alone

Stay Alert – Avoid distractions like loud music or excessive phone use. Be aware of your surroundings.

Walk Confidently – Keep your head up and make eye contact. Attackers often target people who look vulnerable.

Avoid Isolated Areas – Stick to well-lit and populated places, especially at night.

Trust Your Instincts – If something feels off, leave immediately or seek help.

🚖 Travel & Transport Safety

Share Your Trip Details – Always inform someone you trust about your location and travel plans.

Use Verified Transport – Prefer official taxis or ride-sharing apps with tracking and driver details.

Check the Vehicle – Before getting in, match the number plate, driver's photo, and name.

Sit in the Back – Prefer the back seat for better control and safety in cabs or taxis.

🏠 Home & Online Safety

Secure Your Home – Use strong locks, install a peephole, and avoid opening doors to strangers.

Avoid Oversharing Online – Don’t share your location or personal details publicly on social media.

Have Emergency Numbers Ready – Save police, emergency contacts, and local help services in your phone.

🧠 Self-Defense & Emergency

Learn Basic Self-Defense – Classes can teach you how to escape or disable an attacker.

Carry a Safety Tool – Pepper spray, a whistle, or a small alarm can deter threats.

Use Safety Apps – Install apps like bSafe, Life360, or My Safetipin to share your location in real-time.

🧑‍🤝‍🧑 In Social Situations

Watch Your Drink – Don’t leave your drink unattended at parties or bars.

Set Boundaries – Be assertive. It’s okay to say no or walk away from uncomfortable situations.

Use the Buddy System – Go out with friends, especially in unfamiliar areas.

Would you like me to make this i</p>
                <ul className="space-y-3 text-gray-600">
                  
                  
                  
                  
                </ul>
                <div className="mt-6 bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">YouTube Video Placeholder</h4>
                  <p className="text-gray-600 text-sm">Self-Defense Techniques for Women</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <img src="https://images.unsplash.com/photo-1518495973542-4542c06a5843" alt="Self-defense training" className="w-full h-48 object-cover rounded-lg" />
              </div>
            </div>
          </section>

          {/* Emergency Numbers */}
          <section id="emergency" className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">📞 Emergency Hotline Numbers for Women – Sri Lanka</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[{
              service: "Women's Help Line (Ministry of Women)",
              number: "1938",
              description: "24/7 confidential support for women in distress"
            }, {
              service: "Police Emergency",
              number: "119",
              description: "For any emergency including violence or threats"
            }, {
              service: "National Child Protection Authority (NCPA)",
              number: "1929",
              description: "For reporting abuse of girls or minors"
            }, {
              service: "Suwa Seriya – Ambulance Service",
              number: "1990",
              description: "Free emergency ambulance service"
            }, {
              service: "Legal Aid Commission – Women's Desk",
              number: "0112 574 167",
              description: "Free legal advice for women"
            }, {
              service: "Mithuru Piyasa (Hospital-based GBV Care)",
              number: "0112 682 535",
              description: "Gender-based violence support centers in major hospitals"
            }, {
              service: "Women In Need (WIN)",
              number: "0114 718 585",
              description: "Counselling, legal support, shelter, and advocacy for women survivors"
            }, {
              service: "WIN Emergency Support (24/7)",
              number: "077 567 8700",
              description: "Mobile support line for urgent assistance"
            }, {
              service: "Sri Lanka Red Cross – Psychosocial Support",
              number: "0112 682 585",
              description: "Emotional and psychological support"
            }].map((contact, index) => <div key={index} className="bg-pastel-sand p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm leading-tight">{contact.service}</h4>
                  <p className="text-2xl font-bold text-pastel-khaki mb-2">{contact.number}</p>
                  <p className="text-sm text-gray-600">{contact.description}</p>
                </div>)}
            </div>
            <div className="mt-8 p-6 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-800 font-medium text-center">
                ⚠️ In immediate danger? Call 119 for police or 1990 for ambulance. Your safety is the priority.
              </p>
            </div>
          </section>

          {/* Mobile Safety Apps */}
          <section id="apps" className="bg-pastel-pearl p-8 rounded-2xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Mobile Safety Apps</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[{
              name: "bSafe",
              description: "Personal safety alarm with GPS tracking and emergency contacts",
              features: "• Live GPS tracking\n• Silent alarm\n• Auto-recording"
            }, {
              name: "MySafetipin",
              description: "Safety rating for locations based on lighting, crowd, and security",
              features: "• Location safety scores\n• Community reports\n• Safe route planning"
            }, {
              name: "Himaya",
              description: "Local Sri Lankan safety app for women",
              features: "• Emergency alerts\n• Local emergency services\n• Community support"
            }, {
              name: "Life360",
              description: "Family safety and location sharing app",
              features: "• Real-time location sharing\n• Safe arrival notifications\n• Emergency assistance"
            }, {
              name: "Shake2Safety",
              description: "Emergency alert by shaking your phone",
              features: "• Shake to send alert\n• GPS location sharing\n• Quick emergency contacts"
            }, {
              name: "Women Safety",
              description: "Comprehensive safety app with multiple features",
              features: "• Fake call feature\n• Emergency contacts\n• Safety tips and guides"
            }].map((app, index) => <div key={index} className="bg-white p-6 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-2">{app.name}</h4>
                  <p className="text-gray-600 text-sm mb-3">{app.description}</p>
                  <div className="text-xs text-gray-500 whitespace-pre-line">{app.features}</div>
                </div>)}
            </div>
            <div className="mt-6 bg-pastel-sand p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">YouTube Video Placeholder</h4>
              <p className="text-gray-600 text-sm">How to Use Safety Apps Effectively</p>
            </div>
          </section>

          {/* How to Report to Police */}
          <section id="report" className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">How to Report to Police</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Step-by-Step Reporting Process</h3>
                <ol className="space-y-4 text-gray-600">
                  <li><strong>1. Immediate Safety:</strong> If in immediate danger, call 119 first</li>
                  <li><strong>2. Document Everything:</strong> Take photos, save messages, note dates and times</li>
                  <li><strong>3. Visit the Police Station:</strong> Go to your nearest police station with evidence</li>
                  <li><strong>4. File a Complaint:</strong> Request to file a formal complaint (Entry in the Information Book)</li>
                  <li><strong>5. Get a Copy:</strong> Always request a copy of your complaint for your records</li>
                  <li><strong>6. Follow Up:</strong> Check the status of your case regularly</li>
                </ol>
                <div className="mt-6 p-4 bg-pastel-flesh rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">What to Bring:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Your National Identity Card</li>
                    <li>• Any evidence (photos, messages, documents)</li>
                    <li>• Witness contact information if available</li>
                    <li>• Medical reports if applicable</li>
                  </ul>
                </div>
              </div>
              <div className="bg-pastel-flesh p-6 rounded-lg">
                <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f" alt="Legal support and reporting" className="w-full h-48 object-cover rounded-lg mb-4" />
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">YouTube Video Placeholder</h4>
                  <p className="text-gray-600 text-sm">Your Rights When Reporting to Police in Sri Lanka</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>;
};
export default SafetyPage;