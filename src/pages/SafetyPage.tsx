
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Phone, Smartphone, AlertTriangle, FileText } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SafetyPage = () => {
  const safetyTopics = [
    { id: 'tips', title: 'Safety Tips', icon: Shield },
    { id: 'defense', title: 'Self-Defense', icon: Shield },
    { id: 'emergency', title: 'Emergency Numbers', icon: Phone },
    { id: 'apps', title: 'Mobile Safety Apps', icon: Smartphone },
    { id: 'report', title: 'How to Report to Police', icon: FileText }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Women's Safety</h1>
          <p className="text-xl text-pastel-khaki mb-8">Your Safety, Your Power</p>
        </div>

        {/* 5-Topic Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
          {safetyTopics.map((topic) => (
            <Card 
              key={topic.id}
              className="cursor-pointer hover:bg-pastel-flesh transition-colors"
              onClick={() => scrollToSection(topic.id)}
            >
              <CardContent className="p-6 text-center">
                <topic.icon className="h-8 w-8 text-pastel-khaki mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800 text-sm">{topic.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Content Sections */}
        <div className="space-y-16">
          {/* Safety Tips */}
          <section id="tips" className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Safety Tips</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <ul className="space-y-4 text-gray-600">
                  <li>• Stay aware of your surroundings at all times</li>
                  <li>• Trust your instincts - if something feels wrong, remove yourself</li>
                  <li>• Share your location with trusted friends when traveling</li>
                  <li>• Keep emergency contacts easily accessible</li>
                  <li>• Avoid walking alone in isolated areas, especially at night</li>
                </ul>
                <div className="mt-6 bg-pastel-sand p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">YouTube Video Placeholder</h4>
                  <p className="text-gray-600 text-sm">Personal Safety Tips for Sri Lankan Women</p>
                </div>
              </div>
              <div className="bg-pastel-flesh p-6 rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                  alt="Women safety awareness"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </div>
          </section>

          {/* Self-Defense */}
          <section id="defense" className="bg-pastel-pearl p-8 rounded-2xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Self-Defense</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-600 mb-4">
                  Learn basic self-defense techniques that can help you protect yourself in dangerous situations.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li>• Basic striking techniques (palm strikes, knee kicks)</li>
                  <li>• How to break free from common grabs</li>
                  <li>• Using everyday items for protection</li>
                  <li>• Verbal de-escalation techniques</li>
                </ul>
                <div className="mt-6 bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">YouTube Video Placeholder</h4>
                  <p className="text-gray-600 text-sm">Self-Defense Techniques for Women</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1518495973542-4542c06a5843" 
                  alt="Self-defense training"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </div>
          </section>

          {/* Emergency Numbers */}
          <section id="emergency" className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Emergency Numbers</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { service: "Police Emergency", number: "119", available: "24/7" },
                { service: "Women's Helpline", number: "1938", available: "24/7" },
                { service: "National Hospital", number: "011-269-1111", available: "24/7" },
                { service: "Women's Crisis Centre", number: "077-685-7082", available: "9 AM - 6 PM" }
              ].map((contact, index) => (
                <div key={index} className="bg-pastel-sand p-6 rounded-lg text-center">
                  <h4 className="font-semibold text-gray-800 mb-2">{contact.service}</h4>
                  <p className="text-2xl font-bold text-pastel-khaki mb-2">{contact.number}</p>
                  <span className="text-sm text-gray-600">{contact.available}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Continue with other sections... */}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SafetyPage;
