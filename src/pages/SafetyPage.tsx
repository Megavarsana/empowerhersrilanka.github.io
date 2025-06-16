
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Phone, Shield, Heart, Users, Home } from "lucide-react";
import { useState } from "react";

const SafetyPage = () => {
  const [sosPressed, setSosPressed] = useState(false);
  const [holdTimer, setHoldTimer] = useState<NodeJS.Timeout | null>(null);

  const handleSOSPress = () => {
    setSosPressed(true);
    const timer = setTimeout(() => {
      // Actual SOS functionality
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-empowerher-pink via-empowerher-pink-medium to-empowerher-pink-dark">
      <Header />
      
      <div className="container mx-auto px-6 py-16">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Women's Safety Guide
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Your safety is our priority. Access emergency resources, learn self-defense, and get immediate help when you need it most.
          </p>
        </div>

        {/* Emergency SOS Section */}
        <Card className="content-box text-center mb-12">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-red-600 flex items-center justify-center gap-3">
              <AlertTriangle className="h-8 w-8" />
              Emergency SOS
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-gray-700 mb-8">
              In case of immediate danger, use our emergency SOS system
            </p>
            
            <div className="space-y-4">
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
            
            <p className="text-sm text-gray-600 mt-4">
              Hold the red button for 3 seconds to activate emergency services
            </p>
          </CardContent>
        </Card>

        {/* Emergency Contacts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="content-box-small text-center">
            <CardContent className="pt-4">
              <h3 className="font-bold text-empowerher-pink text-2xl">1938</h3>
              <p className="text-sm text-gray-600">Women's Help Line (Ministry of Women)</p>
              <p className="text-xs text-gray-500">24/7 confidential support for women in distress</p>
            </CardContent>
          </Card>

          <Card className="content-box-small text-center">
            <CardContent className="pt-4">
              <h3 className="font-bold text-empowerher-pink text-2xl">119</h3>
              <p className="text-sm text-gray-600">Police Emergency</p>
              <p className="text-xs text-gray-500">For any emergency including violence or threats</p>
            </CardContent>
          </Card>

          <Card className="content-box-small text-center">
            <CardContent className="pt-4">
              <h3 className="font-bold text-empowerher-pink text-2xl">1929</h3>
              <p className="text-sm text-gray-600">National Child Protection Authority (NCPA)</p>
              <p className="text-xs text-gray-500">For reporting abuse of girls or minors</p>
            </CardContent>
          </Card>

          <Card className="content-box-small text-center">
            <CardContent className="pt-4">
              <h3 className="font-bold text-empowerher-pink text-2xl">1990</h3>
              <p className="text-sm text-gray-600">Suwa Seriya – Ambulance Service</p>
              <p className="text-xs text-gray-500">Free emergency ambulance service</p>
            </CardContent>
          </Card>
        </div>

        {/* Additional Services */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="content-box">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-empowerher-pink">Legal Aid Commission – Women's Desk</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">Free legal aid for women facing violence, harassment, or discrimination</p>
              <div className="space-y-2">
                <p className="text-sm"><strong>Phone:</strong> 011-2323-108</p>
                <p className="text-sm"><strong>Address:</strong> No. 39, Kirula Road, Colombo 05</p>
                <p className="text-sm"><strong>Services:</strong> Legal advice, court representation, mediation</p>
              </div>
            </CardContent>
          </Card>

          <Card className="content-box">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-empowerher-pink">Mithuru Piyasa (Hospital-based GBV Care)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">Specialized care units in hospitals for survivors of gender-based violence</p>
              <div className="space-y-2">
                <p className="text-sm"><strong>Available at:</strong> Major hospitals island-wide</p>
                <p className="text-sm"><strong>Services:</strong> Medical care, counseling, legal support</p>
                <p className="text-sm"><strong>Hotline:</strong> 071-911-4444</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Personal Safety Tips */}
        <Card className="content-box mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-empowerher-pink flex items-center gap-3">
              <Shield className="h-7 w-7" />
              Personal Safety Tips
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-lg mb-4 text-empowerher-pink">At Home:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Home className="h-4 w-4 mt-1 text-empowerher-pink flex-shrink-0" />
                    <span>Keep doors and windows locked, especially at night</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Home className="h-4 w-4 mt-1 text-empowerher-pink flex-shrink-0" />
                    <span>Install good lighting around your home entrance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Home className="h-4 w-4 mt-1 text-empowerher-pink flex-shrink-0" />
                    <span>Don't open the door to strangers - verify identity first</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Home className="h-4 w-4 mt-1 text-empowerher-pink flex-shrink-0" />
                    <span>Keep emergency numbers saved and easily accessible</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4 text-empowerher-pink">In Public:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Users className="h-4 w-4 mt-1 text-empowerher-pink flex-shrink-0" />
                    <span>Stay alert and aware of your surroundings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Users className="h-4 w-4 mt-1 text-empowerher-pink flex-shrink-0" />
                    <span>Walk confidently and make eye contact with others</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Users className="h-4 w-4 mt-1 text-empowerher-pink flex-shrink-0" />
                    <span>Avoid isolated areas, especially after dark</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Users className="h-4 w-4 mt-1 text-empowerher-pink flex-shrink-0" />
                    <span>Trust your instincts - if something feels wrong, leave</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Self-Defense Resources */}
        <Card className="content-box mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-empowerher-pink">Self-Defense Classes in Sri Lanka</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-empowerher-pink mb-2">Colombo Self-Defense Academy</h3>
                <p className="text-sm text-gray-700 mb-2">Mixed martial arts and self-defense for women</p>
                <p className="text-xs text-gray-600">Location: Colombo 03</p>
                <p className="text-xs text-gray-600">Contact: 011-2578-945</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-empowerher-pink mb-2">Karate-Do Sri Lanka</h3>
                <p className="text-sm text-gray-700 mb-2">Traditional karate training with women's classes</p>
                <p className="text-xs text-gray-600">Multiple locations</p>
                <p className="text-xs text-gray-600">Visit: karate.lk</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-empowerher-pink mb-2">Women's Self-Defense Workshops</h3>
                <p className="text-sm text-gray-700 mb-2">Monthly workshops by local police stations</p>
                <p className="text-xs text-gray-600">Contact local police for schedules</p>
                <p className="text-xs text-gray-600">Usually free of charge</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Digital Safety */}
        <Card className="content-box">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-empowerher-pink">Digital Safety & Online Protection</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-lg mb-4 text-empowerher-pink">Social Media Safety:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Don't share personal information (address, phone, location)</li>
                  <li>• Use privacy settings to control who sees your posts</li>
                  <li>• Be cautious about accepting friend requests from strangers</li>
                  <li>• Report and block users who harass or threaten you</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4 text-empowerher-pink">Online Dating Safety:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Meet in public places for first dates</li>
                  <li>• Tell a friend where you're going and when you'll be back</li>
                  <li>• Trust your instincts about people</li>
                  <li>• Don't share financial information</li>
                </ul>
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
