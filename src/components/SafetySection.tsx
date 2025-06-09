
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Shield, AlertTriangle, Smartphone, Lock } from "lucide-react";

const SafetySection = () => {
  const emergencyNumbers = [
    { service: "Police Emergency", number: "119", available: "24/7" },
    { service: "Women's Helpline", number: "1938", available: "24/7" },
    { service: "National Hospital", number: "011-269-1111", available: "24/7" },
    { service: "Women's Crisis Centre", number: "077-685-7082", available: "9 AM - 6 PM" }
  ];

  const safetyApps = [
    { name: "bSafe", description: "Personal safety alarm with GPS tracking", type: "Emergency" },
    { name: "MySafetipin", description: "Safety rating for locations", type: "Prevention" },
    { name: "Himaya", description: "Local Sri Lankan safety app", type: "Community" }
  ];

  return (
    <section id="safety" className="section-spacing bg-pastel-pearl">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Women Safety
          </h2>
          <p className="text-xl text-pastel-khaki font-medium mb-6">
            Your Safety, Your Power
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Access emergency resources, safety tools, and protective guidance designed specifically 
            for Sri Lankan women.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Emergency Hotlines */}
          <Card className="card-hover bg-white border-pastel-sand">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-gray-800">
                <Phone className="h-6 w-6 text-pastel-khaki" />
                <span>Emergency Hotline Numbers</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {emergencyNumbers.map((contact, index) => (
                  <div key={index} className="bg-pastel-sand p-4 rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-gray-800">{contact.service}</h4>
                        <p className="text-2xl font-bold text-pastel-khaki">{contact.number}</p>
                      </div>
                      <span className="text-sm text-gray-600 bg-white px-2 py-1 rounded">
                        {contact.available}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 text-sm font-medium">
                  ⚠️ In immediate danger? Call 119 for police or seek help from nearby people.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* One-Click SOS Feature */}
          <Card className="card-hover bg-white border-pastel-sand">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-gray-800">
                <AlertTriangle className="h-6 w-6 text-red-500" />
                <span>One-Click SOS Button</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="bg-red-500 hover:bg-red-600 w-32 h-32 mx-auto rounded-full flex items-center justify-center mb-6 cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl animate-gentle-float">
                  <span className="text-white font-bold text-xl">SOS</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-4">Emergency Alert System</h4>
                <p className="text-gray-600 mb-6">
                  Press and hold for 3 seconds to send your location and alert message to 
                  pre-selected emergency contacts.
                </p>
                <div className="bg-pastel-sand p-4 rounded-lg text-left">
                  <h5 className="font-medium text-gray-800 mb-2">How it works:</h5>
                  <ol className="text-sm text-gray-600 space-y-1">
                    <li>1. Set up your emergency contacts</li>
                    <li>2. Press and hold the SOS button</li>
                    <li>3. Location and alert sent automatically</li>
                    <li>4. Contacts receive your exact location</li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Self-Defense Tips */}
          <Card className="card-hover bg-white border-pastel-sand">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-gray-800">
                <Shield className="h-6 w-6 text-pastel-khaki" />
                <span>Self-Defense Tips</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-pastel-flesh p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Be Aware</h4>
                  <p className="text-gray-600 text-sm">Stay alert of your surroundings, avoid distractions like phones in unsafe areas.</p>
                </div>
                <div className="bg-pastel-flesh p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Trust Your Instincts</h4>
                  <p className="text-gray-600 text-sm">If something feels wrong, remove yourself from the situation immediately.</p>
                </div>
                <div className="bg-pastel-flesh p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Travel Smart</h4>
                  <p className="text-gray-600 text-sm">Share your location with trusted friends, use well-lit routes, carry a whistle.</p>
                </div>
              </div>
              <Button className="w-full mt-6 bg-pastel-khaki hover:bg-pastel-sand text-gray-800">
                Watch Self-Defense Videos
              </Button>
            </CardContent>
          </Card>

          {/* Safety Apps */}
          <Card className="card-hover bg-white border-pastel-sand">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-gray-800">
                <Smartphone className="h-6 w-6 text-pastel-khaki" />
                <span>Recommended Safety Apps</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {safetyApps.map((app, index) => (
                  <div key={index} className="bg-pastel-sand p-4 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-gray-800">{app.name}</h4>
                      <span className="text-xs bg-pastel-khaki text-white px-2 py-1 rounded">
                        {app.type}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">{app.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Online Safety */}
        <Card className="card-hover bg-white border-pastel-sand mt-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-gray-800">
              <Lock className="h-6 w-6 text-pastel-khaki" />
              <span>Online & Social Media Safety</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-pastel-flesh p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Lock className="h-8 w-8 text-pastel-khaki" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Privacy Settings</h4>
                <p className="text-gray-600 text-sm">
                  Regularly review and update privacy settings on all social media platforms.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-pastel-flesh p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-pastel-khaki" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Secure Browsing</h4>
                <p className="text-gray-600 text-sm">
                  Use VPNs, avoid public WiFi for sensitive activities, keep software updated.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-pastel-flesh p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <AlertTriangle className="h-8 w-8 text-pastel-khaki" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Report Abuse</h4>
                <p className="text-gray-600 text-sm">
                  Know how to block, report, and document online harassment or threats.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SafetySection;
