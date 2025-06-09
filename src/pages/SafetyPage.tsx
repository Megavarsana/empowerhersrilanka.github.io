
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
            <h2 className="text-3xl font-bold text-gray-800 mb-6">📞 Emergency Hotline Numbers for Women – Sri Lanka</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { service: "Women's Help Line (Ministry of Women)", number: "1938", description: "24/7 confidential support for women in distress" },
                { service: "Police Emergency", number: "119", description: "For any emergency including violence or threats" },
                { service: "National Child Protection Authority (NCPA)", number: "1929", description: "For reporting abuse of girls or minors" },
                { service: "Suwa Seriya – Ambulance Service", number: "1990", description: "Free emergency ambulance service" },
                { service: "Legal Aid Commission – Women's Desk", number: "0112 574 167", description: "Free legal advice for women" },
                { service: "Mithuru Piyasa (Hospital-based GBV Care)", number: "0112 682 535", description: "Gender-based violence support centers in major hospitals" },
                { service: "Women In Need (WIN)", number: "0114 718 585", description: "Counselling, legal support, shelter, and advocacy for women survivors" },
                { service: "WIN Emergency Support (24/7)", number: "077 567 8700", description: "Mobile support line for urgent assistance" },
                { service: "Sri Lanka Red Cross – Psychosocial Support", number: "0112 682 585", description: "Emotional and psychological support" }
              ].map((contact, index) => (
                <div key={index} className="bg-pastel-sand p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm leading-tight">{contact.service}</h4>
                  <p className="text-2xl font-bold text-pastel-khaki mb-2">{contact.number}</p>
                  <p className="text-sm text-gray-600">{contact.description}</p>
                </div>
              ))}
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
              {[
                { name: "bSafe", description: "Personal safety alarm with GPS tracking and emergency contacts", features: "• Live GPS tracking\n• Silent alarm\n• Auto-recording" },
                { name: "MySafetipin", description: "Safety rating for locations based on lighting, crowd, and security", features: "• Location safety scores\n• Community reports\n• Safe route planning" },
                { name: "Himaya", description: "Local Sri Lankan safety app for women", features: "• Emergency alerts\n• Local emergency services\n• Community support" },
                { name: "Life360", description: "Family safety and location sharing app", features: "• Real-time location sharing\n• Safe arrival notifications\n• Emergency assistance" },
                { name: "Shake2Safety", description: "Emergency alert by shaking your phone", features: "• Shake to send alert\n• GPS location sharing\n• Quick emergency contacts" },
                { name: "Women Safety", description: "Comprehensive safety app with multiple features", features: "• Fake call feature\n• Emergency contacts\n• Safety tips and guides" }
              ].map((app, index) => (
                <div key={index} className="bg-white p-6 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-2">{app.name}</h4>
                  <p className="text-gray-600 text-sm mb-3">{app.description}</p>
                  <div className="text-xs text-gray-500 whitespace-pre-line">{app.features}</div>
                </div>
              ))}
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
                <img 
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f" 
                  alt="Legal support and reporting"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
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
    </div>
  );
};

export default SafetyPage;
