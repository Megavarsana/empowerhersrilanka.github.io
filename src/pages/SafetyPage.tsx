
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Phone, Shield, Heart, Users, Home, Smartphone } from "lucide-react";
import { useState } from "react";

const SafetyPage = () => {
  const [sosPressed, setSosPressed] = useState(false);
  const [holdTimer, setHoldTimer] = useState<NodeJS.Timeout | null>(null);

  const handleSOSPress = () => {
    setSosPressed(true);
    const timer = setTimeout(() => {
      alert("🚨 EMERGENCY ALERT ACTIVATED!\n\nContacting emergency services:\n• Police: 119\n• Women's Helpline: 1938\n• Ambulance: 1990");
      setSosPressed(false);
    }, 3000);
    setHoldTimer(timer);
  };

  const handleSOSRelease = () => {
    if (holdTimer) {
      clearTimeout(holdTimer);
      setHoldTimer(null);
    }
    setSosPressed(false);
  };

  const handleDemoSOS = () => {
    alert("🚨 DEMO: This would activate emergency services in a real situation!\n\nContacts:\n• Police: 119\n• Women's Helpline: 1938\n• Ambulance: 1990");
  };

  const emergencyContacts = [
    { service: "Women's Help Line (Ministry of Women)", number: "1938", description: "24/7 confidential support for women in distress" },
    { service: "Police Emergency", number: "119", description: "For any emergency including violence or threats" },
    { service: "National Child Protection Authority (NCPA)", number: "1929", description: "For reporting abuse of girls or minors" },
    { service: "Suwa Seriya – Ambulance Service", number: "1990", description: "Free emergency ambulance service" },
    { service: "Legal Aid Commission – Women's Desk", number: "0112 574 167", description: "Free legal advice for women" },
    { service: "Mithuru Piyasa (Hospital-based GBV Care)", number: "0112 682 535", description: "Gender-based violence support centers in major hospitals" },
    { service: "Women In Need (WIN)", number: "0114 718 585", description: "Counselling, legal support, shelter, and advocacy for women survivors" },
    { service: "WIN Emergency Support (24/7)", number: "077 567 8700", description: "Mobile support line for urgent assistance" },
    { service: "Sri Lanka Red Cross – Psychosocial Support", number: "0112 682 585", description: "Emotional and psychological support" }
  ];

  const safetyApps = [
    { name: "Suraksha", description: "Local Sri Lankan App - A women safety app developed in Sri Lanka, Suraksha allows users to quickly send SOS alerts with their live location to emergency contacts. It also includes access to legal support and helplines." },
    { name: "112 Sri Lanka", description: "Official Emergency Services App - This app lets you contact the Sri Lanka emergency services (Police, Ambulance, Fire Brigade) with a single tap. Women can use it in emergencies to get quick help nationwide." },
    { name: "bSafe", description: "International Safety App - bSafe offers voice-activated SOS, live GPS tracking, and automatic video/audio recording when you're in danger. It's great for women who travel or work late." },
    { name: "My Safetipin", description: "Community-Based Safety App - This app rates locations based on safety (lighting, crowd, security, etc.). It helps women avoid unsafe areas and offers safe route suggestions with navigation." },
    { name: "Life360", description: "Family Locator & Safety App - Though not made just for women, it's excellent for family safety tracking and location sharing." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-empowerher-pink via-empowerher-pink-medium to-empowerher-pink-dark">
      <Header />
      
      <div className="container mx-auto px-6 py-16">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            🔐 Women Safety
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Your safety is our priority. Access emergency resources, learn self-defense, and get immediate help when you need it most.
          </p>
        </div>

        {/* Quick Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          <button 
            onClick={() => document.getElementById('emergency-numbers')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors shadow-sm border border-gray-200 flex items-center justify-center gap-2"
          >
            <Phone className="h-4 w-4" />
            Emergency Numbers
          </button>
          <button 
            onClick={() => document.getElementById('sos-button')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors shadow-sm border border-gray-200 flex items-center justify-center gap-2"
          >
            <AlertTriangle className="h-4 w-4" />
            One-Click SOS
          </button>
          <button 
            onClick={() => document.getElementById('self-defense')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors shadow-sm border border-gray-200 flex items-center justify-center gap-2"
          >
            <Shield className="h-4 w-4" />
            Self-Defense Tips
          </button>
          <button 
            onClick={() => document.getElementById('safety-apps')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors shadow-sm border border-gray-200 flex items-center justify-center gap-2"
          >
            <Smartphone className="h-4 w-4" />
            Safety Apps
          </button>
          <button 
            onClick={() => document.getElementById('online-safety')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors shadow-sm border border-gray-200 flex items-center justify-center gap-2"
          >
            <Users className="h-4 w-4" />
            Online Safety
          </button>
        </div>

        {/* 1. Emergency Hotline Numbers */}
        <Card id="emergency-numbers" className="bg-white rounded-lg shadow-lg mb-8 p-6">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-empowerher-pink flex items-center gap-3">
              <Phone className="h-7 w-7" />
              1. 📞 Emergency Hotline Numbers for Women – Sri Lanka
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* Emergency Numbers Image */}
            <div className="mb-6 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/638b3606-38eb-4f92-99a1-ed485f22cfc8.png"
                alt="Emergency hotline numbers for women in Sri Lanka"
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>

            {/* Emergency Numbers Video */}
            <div className="mb-6">
              <h4 className="font-semibold text-gray-800 mb-2">🎥 Emergency Hotline Numbers for Women</h4>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/YxFUGg8tN5Y"
                  title="Emergency Hotline Numbers for Women"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-empowerher-pink text-white">
                    <th className="border border-gray-300 p-3 text-left">Service</th>
                    <th className="border border-gray-300 p-3 text-left">Hotline Number</th>
                    <th className="border border-gray-300 p-3 text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {emergencyContacts.map((contact, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-300 p-3 font-medium">{contact.service}</td>
                      <td className="border border-gray-300 p-3 text-empowerher-pink font-bold text-lg">{contact.number}</td>
                      <td className="border border-gray-300 p-3 text-gray-700">{contact.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* 2. One-Click SOS Button */}
        <Card id="sos-button" className="bg-white rounded-lg shadow-lg mb-8 p-6">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-empowerher-pink flex items-center gap-3">
              <AlertTriangle className="h-7 w-7" />
              2. 🚨 One-Click SOS Button – Ideas & Examples
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* SOS Button Image */}
            <div className="mb-6 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/edf14dd4-483f-45fd-8c93-7f6bf37f02ed.png"
                alt="Emergency SOS button interface for women's safety"
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>

            {/* One-Click SOS Button Video */}
            <div className="mb-6">
              <h4 className="font-semibold text-gray-800 mb-2">🎥 One-Click SOS Button</h4>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/pIby89RHEZk"
                  title="One-Click SOS Button"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-empowerher-pink mb-3">✅ What is it?</h3>
              <p className="text-gray-700 mb-4">A One-Click SOS Button is a visible and accessible button on your website that users can click in an emergency. It can:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Call emergency services</li>
                <li>Send a message or location to a caregiver or rescue team</li>
                <li>Trigger an alarm or alert system</li>
                <li>Open a help form or emergency chatbot</li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <Button
                onMouseDown={handleSOSPress}
                onMouseUp={handleSOSRelease}
                onTouchStart={handleSOSPress}
                onTouchEnd={handleSOSRelease}
                className={`w-48 h-48 rounded-full text-2xl font-bold transition-all duration-200 ${
                  sosPressed 
                    ? 'bg-red-700 scale-95 shadow-inner' 
                    : 'bg-red-600 hover:bg-red-700 shadow-lg'
                }`}
              >
                {sosPressed ? (
                  <div className="text-center">
                    <div className="text-lg">ACTIVATING...</div>
                    <div className="text-sm">Hold for 3 sec</div>
                  </div>
                ) : (
                  <div className="text-center">
                    <Phone className="h-12 w-12 mx-auto mb-2" />
                    <div>EMERGENCY</div>
                    <div>SOS</div>
                  </div>
                )}
              </Button>
              
              <Button 
                onClick={handleDemoSOS}
                variant="outline"
                className="ml-4 bg-gray-100 hover:bg-gray-200"
              >
                Demo SOS (Safe)
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-empowerher-pink mb-3">🔘 Text Examples for the Button</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• 🚨 SOS – Emergency Help</li>
                  <li>• 🆘 Tap Here for Immediate Help</li>
                  <li>• 📞 Call for Emergency Assistance</li>
                  <li>• 🔴 One-Click Rescue</li>
                  <li>• 📍 Send Location & Alert</li>
                  <li>• 🛑 Need Help Now? Click Here</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-empowerher-pink mb-3">🎯 Where to Place It</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Top-right corner of every page</li>
                  <li>• Floating button on the bottom corner</li>
                  <li>• Inside a fixed navigation bar</li>
                  <li>• On the homepage hero section</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 3. Self-Defense Tips */}
        <Card id="self-defense" className="bg-white rounded-lg shadow-lg mb-8 p-6">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-empowerher-pink flex items-center gap-3">
              <Shield className="h-7 w-7" />
              3. 🛡️ Self-Defense Tips for Women
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* Self-Defense Image */}
            <div className="mb-6 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/c5ec66b3-2307-43e5-b8c3-70f333e78313.png"
                alt="Women learning self-defense techniques and martial arts"
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-empowerher-pink mb-3">✅ Awareness & Prevention</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• 🔍 Stay alert to your surroundings, especially in unfamiliar or isolated areas.</li>
                  <li>• 🎧 Avoid using headphones at full volume or being glued to your phone while walking alone.</li>
                  <li>• 🚷 Trust your instincts — if something feels off, remove yourself from the situation.</li>
                  <li>• 🚖 Use safe, well-reviewed transportation apps or services.</li>
                  <li>• 🗺️ Let someone know your location or plans when going out alone.</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-empowerher-pink mb-3">👜 Practical Everyday Habits</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• 🧤 Keep keys between your fingers when walking at night for quick defense.</li>
                  <li>• 👜 Carry your bag in a way that's difficult to snatch (e.g., cross-body with zipper inward).</li>
                  <li>• 🔐 Lock your car doors immediately upon entering.</li>
                  <li>• 🧯 Carry a personal safety item: pepper spray, mini alarm, or a whistle.</li>
                  <li>• 📱 Enable emergency features on your phone (SOS mode, emergency contact).</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-empowerher-pink mb-3">🥋 Physical Self-Defense Tips</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• 🦵 Aim for vulnerable areas: eyes, nose, throat, groin, knees.</li>
                  <li>• ✊ Learn basic strikes: palm strike, elbow strike, and knee to groin.</li>
                  <li>• 🏃 Don't focus on fighting — focus on escaping. The goal is to get away, not win.</li>
                  <li>• 🧘 Practice yelling firmly like "STOP!" to shock and alert others.</li>
                  <li>• 🥋 Consider taking a self-defense class or martial art (e.g., Krav Maga, Jiu-Jitsu).</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-empowerher-pink mb-3">🚨 In a Dangerous Situation</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• 🚪 Always identify exits in buildings, clubs, or transport vehicles.</li>
                  <li>• 🤳 Discreetly start recording or go live if you feel unsafe.</li>
                  <li>• 📢 Use distraction to your advantage — throw something, make noise, or create confusion to escape.</li>
                  <li>• 🚗 Avoid parking next to vans or in isolated areas, especially at night.</li>
                </ul>
              </div>
            </div>

            {/* Self-Defense Video */}
            <div className="mt-6">
              <h4 className="font-semibold text-gray-800 mb-2">🎥 Self-Defense Techniques for Women</h4>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/KVpxP3ZZtAc"
                  title="Self-Defense Techniques for Women"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 4. Safety App Recommendations */}
        <Card id="safety-apps" className="bg-white rounded-lg shadow-lg mb-8 p-6">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-empowerher-pink flex items-center gap-3">
              <Smartphone className="h-7 w-7" />
              4. Safety App Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* Safety Apps Image */}
            <div className="mb-6 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/d4a060c4-5a7f-4d35-8dad-e23c9bdfe8bd.png"
                alt="Safety apps and mobile security for women's protection"
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>

            <div className="space-y-6">
              {safetyApps.map((app, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-empowerher-pink text-lg mb-2">{index + 1}. {app.name}</h4>
                  <p className="text-gray-700">{app.description}</p>
                </div>
              ))}
            </div>

            {/* Safety Apps Video */}
            <div className="mt-6">
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
          </CardContent>
        </Card>

        {/* 5. Online Social Media Safety */}
        <Card id="online-safety" className="bg-white rounded-lg shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-empowerher-pink flex items-center gap-3">
              <Users className="h-7 w-7" />
              5. 🌐 Online Social Media Safety Tips for Women
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* Online Safety Image */}
            <div className="mb-6 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/652ba6b2-ea36-468f-a515-69e8be0e83eb.png"
                alt="Online safety and social media security for women"
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-empowerher-pink mb-2">🌐 1. Control Your Privacy Settings</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Limit visibility of your posts to friends or followers you trust.</li>
                    <li>• Disable location sharing unless absolutely necessary.</li>
                    <li>• Review tag settings to approve posts you're tagged in before they appear publicly.</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-empowerher-pink mb-2">👩‍💻 2. Be Selective with Friend/Follow Requests</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Avoid accepting requests from unknown accounts or people with no mutual connections.</li>
                    <li>• Watch for fake profiles (e.g., no posts, few followers, stolen photos).</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-empowerher-pink mb-2">🗝️ 3. Use Strong, Unique Passwords</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Use a long password with letters, numbers, and symbols.</li>
                    <li>• Never reuse passwords across accounts.</li>
                    <li>• Enable 2-factor authentication (2FA) for extra protection.</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-empowerher-pink mb-2">🚫 4. Think Before You Share</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Avoid posting personal schedule, school/workplace locations, phone numbers or addresses</li>
                    <li>• Even deleted posts can be screenshotted or archived.</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-empowerher-pink mb-2">📵 5. Block & Report Harassers</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Don't hesitate to block, mute, or report anyone who makes you uncomfortable.</li>
                    <li>• Take screenshots of inappropriate behavior for evidence.</li>
                    <li>• Use platform tools like "Restrict" (on Instagram) to quietly limit someone.</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-empowerher-pink mb-2">🧠 6. Stay Informed About Scams & Catfishing</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Be cautious of people who ask for money or personal information</li>
                    <li>• Reverse image search suspicious profile photos.</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-empowerher-pink mb-2">📲 7. Avoid Sharing Sensitive Media</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• If you must share personal content, use end-to-end encrypted platforms (like Signal)</li>
                    <li>• Be aware it can still be saved or misused</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-empowerher-pink mb-2">🛡️ 8. Review App Permissions</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Regularly check what apps have access to your location, camera/mic, contacts and gallery</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Online Safety Video */}
            <div className="mt-6">
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
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default SafetyPage;
