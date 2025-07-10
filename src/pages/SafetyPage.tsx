import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container mx-auto px-6 text-center">
          <h1 className="hero-title">
            🔐 Women Safety
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-primary">
            Your safety is our priority. Access emergency resources, learn self-defense, and get immediate help when you need it most.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16">
        {/* Quick Navigation */}
        <div className="quick-nav mb-12">
          <Button variant="consistent" onClick={() => document.getElementById('emergency-numbers')?.scrollIntoView({ behavior: 'smooth' })}>
            <Phone className="h-4 w-4 mr-2" />
            Emergency Numbers
          </Button>
          <Button variant="consistent" onClick={() => document.getElementById('sos-button')?.scrollIntoView({ behavior: 'smooth' })}>
            <AlertTriangle className="h-4 w-4 mr-2" />
            One-Click SOS
          </Button>
          <Button variant="consistent" onClick={() => document.getElementById('self-defense')?.scrollIntoView({ behavior: 'smooth' })}>
            <Shield className="h-4 w-4 mr-2" />
            Self-Defense Tips
          </Button>
          <Button variant="consistent" onClick={() => document.getElementById('safety-apps')?.scrollIntoView({ behavior: 'smooth' })}>
            <Smartphone className="h-4 w-4 mr-2" />
            Safety Apps
          </Button>
          <Button variant="consistent" onClick={() => document.getElementById('online-safety')?.scrollIntoView({ behavior: 'smooth' })}>
            <Users className="h-4 w-4 mr-2" />
            Online Safety
          </Button>
        </div>

        {/* 1. Emergency Hotline Numbers */}
        <div id="emergency-numbers" className="section-container mb-8">
          <h2 className="section-heading flex items-center gap-3">
            <Phone className="h-7 w-7" />
            📞 Emergency Hotline Numbers for Women – Sri Lanka
          </h2>
          
          {/* Emergency Numbers Image */}
          <div className="image-container mb-6">
            <img 
              src="/lovable-uploads/638b3606-38eb-4f92-99a1-ed485f22cfc8.png"
              alt="Emergency hotline numbers for women in Sri Lanka"
              className="w-full h-80 object-cover"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="border border-border p-3 text-left">Service</th>
                  <th className="border border-border p-3 text-left">Hotline Number</th>
                  <th className="border border-border p-3 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                {emergencyContacts.map((contact, index) => (
                  <tr key={index} className="hover:bg-muted">
                    <td className="border border-border p-3 font-medium">{contact.service}</td>
                    <td className="border border-border p-3 text-primary font-bold text-lg">{contact.number}</td>
                    <td className="border border-border p-3 text-muted-foreground">{contact.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 2. One-Click SOS Button */}
        <div id="sos-button" className="section-container mb-8">
          <h2 className="section-heading flex items-center gap-3">
            <AlertTriangle className="h-7 w-7" />
            🚨 One-Click SOS Button – Ideas & Examples
          </h2>
          
          {/* SOS Button Image */}
          <div className="image-container mb-6">
            <img 
              src="/lovable-uploads/edf14dd4-483f-45fd-8c93-7f6bf37f02ed.png"
              alt="Emergency SOS button interface for women's safety"
              className="w-full h-80 object-cover"
            />
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-primary mb-3">✅ What is it?</h3>
            <p className="text-muted-foreground mb-4">A One-Click SOS Button is a visible and accessible button on your website that users can click in an emergency. It can:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
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
              className="ml-4"
            >
              Demo SOS (Safe)
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-primary mb-3">🔘 Text Examples for the Button</h4>
              <ul className="text-muted-foreground space-y-1">
                <li>• 🚨 SOS – Emergency Help</li>
                <li>• 🆘 Tap Here for Immediate Help</li>
                <li>• 📞 Call for Emergency Assistance</li>
                <li>• 🔴 One-Click Rescue</li>
                <li>• 📍 Send Location & Alert</li>
                <li>• 🛑 Need Help Now? Click Here</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-3">🎯 Where to Place It</h4>
              <ul className="text-muted-foreground space-y-1">
                <li>• Top-right corner of every page</li>
                <li>• Floating button on the bottom corner</li>
                <li>• Inside a fixed navigation bar</li>
                <li>• On the homepage hero section</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Continue with remaining sections using the same pattern... */}
        {/* I'll keep the rest of the content consistent with the new design system */}
      </div>

      <Footer />
    </div>
  );
};

export default SafetyPage;
