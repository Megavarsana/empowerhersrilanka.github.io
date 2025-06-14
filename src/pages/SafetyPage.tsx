import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Phone, Smartphone, AlertTriangle, FileText } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

const SafetyPage = () => {
  const [sosActivated, setSosActivated] = useState(false);
  const [holdTimer, setHoldTimer] = useState<NodeJS.Timeout | null>(null);

  const safetyTopics = [
    { id: 'emergency', title: 'Emergency Numbers', icon: Phone },
    { id: 'sos', title: 'One-Click SOS', icon: AlertTriangle },
    { id: 'defense', title: 'Self-Defense Tips', icon: Shield },
    { id: 'apps', title: 'Safety Apps', icon: Smartphone },
    { id: 'online', title: 'Online Safety', icon: FileText }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSOSPress = () => {
    const timer = setTimeout(() => {
      setSosActivated(true);
      alert("SOS Alert Sent! Your location and emergency message have been sent to your emergency contacts and local authorities.");
      console.log("SOS Alert: Emergency assistance requested");
    }, 3000);
    setHoldTimer(timer);
  };

  const handleSOSRelease = () => {
    if (holdTimer) {
      clearTimeout(holdTimer);
      setHoldTimer(null);
    }
  };

  const handleDemoSOSClick = () => {
    alert("Demo SOS Button Activated! In a real emergency, this would send alerts to your emergency contacts.");
  };

  return (
    <div className="min-h-screen bg-primary">
      <Header />
      
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Women's Safety</h1>
          <p className="text-xl text-white/90 mb-8">Your Safety, Your Power</p>
        </div>

        {/* 5-Topic Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
          {safetyTopics.map((topic) => (
            <Card 
              key={topic.id}
              className="cursor-pointer hover:bg-pink-50 transition-colors bg-white border-white"
              onClick={() => scrollToSection(topic.id)}
            >
              <CardContent className="p-6 text-center">
                <topic.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800 text-sm">{topic.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Content Sections */}
        <div className="space-y-16">
          {/* Emergency Hotline Numbers */}
          <section id="emergency" className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-3xl font-bold text-primary mb-6">📞 Emergency Hotline Numbers for Women – Sri Lanka</h2>
            
            <div className="mb-6 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1516841273335-e39b37888115?w=800&h=400&fit=crop"
                alt="Emergency hotline and support services"
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  service: "Women's Help Line (Ministry of Women)",
                  number: "1938",
                  description: "24/7 confidential support for women in distress"
                },
                {
                  service: "Police Emergency",
                  number: "119",
                  description: "For any emergency including violence or threats"
                },
                {
                  service: "National Child Protection Authority (NCPA)",
                  number: "1929",
                  description: "For reporting abuse of girls or minors"
                },
                {
                  service: "Suwa Seriya – Ambulance Service",
                  number: "1990",
                  description: "Free emergency ambulance service"
                },
                {
                  service: "Legal Aid Commission – Women's Desk",
                  number: "0112 574 167",
                  description: "Free legal advice for women"
                },
                {
                  service: "Mithuru Piyasa (Hospital-based GBV Care)",
                  number: "0112 682 535",
                  description: "Gender-based violence support centers in major hospitals"
                },
                {
                  service: "Women In Need (WIN)",
                  number: "0114 718 585",
                  description: "Counselling, legal support, shelter, and advocacy for women survivors"
                },
                {
                  service: "WIN Emergency Support (24/7)",
                  number: "077 567 8700",
                  description: "Mobile support line for urgent assistance"
                },
                {
                  service: "Sri Lanka Red Cross – Psychosocial Support",
                  number: "0112 682 585",
                  description: "Emotional and psychological support"
                }
              ].map((contact, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm leading-tight">{contact.service}</h4>
                  <p className="text-2xl font-bold text-primary mb-2">{contact.number}</p>
                  <p className="text-sm text-gray-600">{contact.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-red-100 border border-red-300 rounded-lg">
              <p className="text-red-800 font-medium text-center">
                ⚠️ In immediate danger? Call 119 for police or 1990 for ambulance. Your safety is the priority.
              </p>
            </div>
          </section>

          {/* One-Click SOS Button */}
          <section id="sos" className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-3xl font-bold text-primary mb-6">🚨 One-Click SOS Button</h2>
            
            <div className="mb-8 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=400&fit=crop"
                alt="SOS emergency button system"
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-center mb-6">
                  <button 
                    className={`w-32 h-32 mx-auto rounded-full flex items-center justify-center mb-6 cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl ${
                      sosActivated ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'
                    }`}
                    onMouseDown={handleSOSPress}
                    onMouseUp={handleSOSRelease}
                    onMouseLeave={handleSOSRelease}
                    onTouchStart={handleSOSPress}
                    onTouchEnd={handleSOSRelease}
                  >
                    <span className="text-white font-bold text-xl">
                      {sosActivated ? '✓' : 'SOS'}
                    </span>
                  </button>
                  <h4 className="font-semibold text-gray-800 mb-4">
                    {sosActivated ? 'SOS Alert Sent!' : 'Hold for 3 seconds to activate'}
                  </h4>
                  <p className="text-gray-600 mb-6">
                    Press and hold to send your location and alert message to emergency contacts.
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-center mb-6">
                  <button 
                    className="bg-red-500 hover:bg-red-600 w-32 h-32 mx-auto rounded-full flex items-center justify-center mb-6 cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl"
                    onClick={handleDemoSOSClick}
                  >
                    <span className="text-white font-bold text-xl">SOS</span>
                  </button>
                  <h4 className="font-semibold text-gray-800 mb-4">Demo SOS Button</h4>
                  <p className="text-gray-600">Click to test the SOS functionality</p>
                </div>
              </div>
            </div>
          </section>

          {/* Self-Defense Tips */}
          <section id="defense" className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-3xl font-bold text-primary mb-6">🛡️ Self-Defense Tips for Women</h2>
            
            <div className="mb-8 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop"
                alt="Women's self-defense training and empowerment"
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">✅ Awareness & Prevention</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 🔍 Stay alert to your surroundings, especially in unfamiliar or isolated areas.</li>
                    <li>• 🎧 Avoid using headphones at full volume or being glued to your phone while walking alone.</li>
                    <li>• 🚷 Trust your instincts — if something feels off, remove yourself from the situation.</li>
                    <li>• 🚖 Use safe, well-reviewed transportation apps or services.</li>
                    <li>• 🗺️ Let someone know your location or plans when going out alone.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">👜 Practical Everyday Habits</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 🧤 Keep keys between your fingers when walking at night for quick defense.</li>
                    <li>• 👜 Carry your bag in a way that's difficult to snatch (e.g., cross-body with zipper inward).</li>
                    <li>• 🔐 Lock your car doors immediately upon entering.</li>
                    <li>• 🧯 Carry a personal safety item: pepper spray, mini alarm, or a whistle.</li>
                    <li>• 📱 Enable emergency features on your phone (SOS mode, emergency contact).</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">🥋 Physical Self-Defense Tips</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 🦵 Aim for vulnerable areas: eyes, nose, throat, groin, knees.</li>
                    <li>• ✊ Learn basic strikes: palm strike, elbow strike, and knee to groin.</li>
                    <li>• 🏃 Don't focus on fighting — focus on escaping. The goal is to get away, not win.</li>
                    <li>• 🧘 Practice yelling firmly like "STOP!" to shock and alert others.</li>
                    <li>• 🥋 Consider taking a self-defense class or martial art (e.g., Krav Maga, Jiu-Jitsu).</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">🚨 In a Dangerous Situation</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 🚪 Always identify exits in buildings, clubs, or transport vehicles.</li>
                    <li>• 🤳 Discreetly start recording or go live if you feel unsafe.</li>
                    <li>• 📢 Use distraction to your advantage — throw something, make noise, or create confusion to escape.</li>
                    <li>• 🚗 Avoid parking next to vans or in isolated areas, especially at night.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">🌐 Online Safety</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 👁️ Limit how much personal information you share online.</li>
                    <li>• 📸 Avoid posting real-time location on social media.</li>
                    <li>• 🛑 Don't share address, daily routines, or private info publicly.</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">🎥 Self-Defense Techniques for Women</h4>
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/T7aNSRoDCmg"
                      title="Self-Defense Techniques for Women"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Safety Apps */}
          <section id="apps" className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-3xl font-bold text-primary mb-6">📱 Safety App Recommendations</h2>
            
            <div className="mb-8 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop"
                alt="Safety apps on smartphone for women's protection"
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {[
                {
                  name: "Suraksha",
                  type: "Local Sri Lankan App",
                  description: "A women safety app developed in Sri Lanka, Suraksha allows users to quickly send SOS alerts with their live location to emergency contacts. It also includes access to legal support and helplines."
                },
                {
                  name: "112 Sri Lanka",
                  type: "Official Emergency Services App",
                  description: "This app lets you contact the Sri Lanka emergency services (Police, Ambulance, Fire Brigade) with a single tap. Women can use it in emergencies to get quick help nationwide."
                },
                {
                  name: "bSafe",
                  type: "International Safety App",
                  description: "bSafe offers voice-activated SOS, live GPS tracking, and automatic video/audio recording when you're in danger. It's great for women who travel or work late."
                },
                {
                  name: "My Safetipin",
                  type: "Community-Based Safety App",
                  description: "This app rates locations based on safety (lighting, crowd, security, etc.). It helps women avoid unsafe areas and offers safe route suggestions with navigation."
                },
                {
                  name: "Life360",
                  type: "Family Locator & Safety App",
                  description: "Family safety and location sharing app with real-time tracking and emergency assistance features."
                }
              ].map((app, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-2">{app.name}</h4>
                  <span className="text-xs bg-primary text-white px-2 py-1 rounded mb-3 inline-block">
                    {app.type}
                  </span>
                  <p className="text-gray-600 text-sm mb-4">{app.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">🎥 Best Safety Apps for Women</h4>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/9VOfskIMtys"
                  title="Best Safety Apps for Women"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </section>

          {/* Online Social Media Safety */}
          <section id="online" className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-3xl font-bold text-primary mb-6">🌐 Online Social Media Safety Tips for Women</h2>
            
            <div className="mb-8 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=400&fit=crop"
                alt="Online safety and social media privacy protection"
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">🌐 1. Control Your Privacy Settings</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Limit visibility of your posts to friends or followers you trust.</li>
                    <li>• Disable location sharing unless absolutely necessary.</li>
                    <li>• Review tag settings to approve posts you're tagged in before they appear publicly.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">👩‍💻 2. Be Selective with Friend/Follow Requests</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Avoid accepting requests from unknown accounts or people with no mutual connections.</li>
                    <li>• Watch for fake profiles (e.g., no posts, few followers, stolen photos).</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">🗝️ 3. Use Strong, Unique Passwords</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Use a long password with letters, numbers, and symbols.</li>
                    <li>• Never reuse passwords across accounts.</li>
                    <li>• Enable 2-factor authentication (2FA) for extra protection.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">🚫 4. Think Before You Share</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Avoid posting:</li>
                    <li className="ml-4">◦ Personal schedule (e.g., travel plans or being home alone)</li>
                    <li className="ml-4">◦ School/workplace locations</li>
                    <li className="ml-4">◦ Phone numbers or addresses</li>
                    <li>• Even deleted posts can be screenshotted or archived.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">📵 5. Block & Report Harassers</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Don't hesitate to block, mute, or report anyone who makes you uncomfortable.</li>
                    <li>• Take screenshots of inappropriate behavior for evidence.</li>
                    <li>• Use platform tools like "Restrict" (on Instagram) to quietly limit someone.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">🧠 6. Stay Informed About Scams & Catfishing</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Be cautious of people who:</li>
                    <li className="ml-4">◦ Ask for money or personal information</li>
                    <li className="ml-4">◦ Push romantic/urgent conversations too fast</li>
                    <li>• Reverse image search suspicious profile photos.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">📲 7. Avoid Sharing Sensitive Media</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• If you must share personal content:</li>
                    <li className="ml-4">◦ Use end-to-end encrypted platforms (like Signal)</li>
                    <li className="ml-4">◦ Be aware it can still be saved or misused</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">🛡️ 8. Review App Permissions</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Regularly check what apps have access to:</li>
                    <li className="ml-4">◦ Your location</li>
                    <li className="ml-4">◦ Your camera/mic</li>
                    <li className="ml-4">◦ Your contacts and gallery</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">🎥 Online Safety Tips for Women</h4>
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/aO858HyFbKI"
                      title="Online Safety Tips for Women"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SafetyPage;
