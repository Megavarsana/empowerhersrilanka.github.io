
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Brain, Phone, FileText, Video } from "lucide-react";

const SupportPage = () => {
  const supportTopics = [
    { id: 'mental', title: 'Mental Health', icon: Brain },
    { id: 'assault', title: 'Sexual Assault Support', icon: Heart },
    { id: 'services', title: 'Trusted Services', icon: Phone },
    { id: 'relationships', title: 'Toxic Relationships', icon: FileText },
    { id: 'counseling', title: 'Free Counseling', icon: Video }
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
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Women Support</h1>
          <p className="text-xl text-pastel-khaki mb-8">Real Help for Real Struggles</p>
        </div>

        {/* 5-Topic Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
          {supportTopics.map((topic) => (
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
          {/* Mental Health */}
          <section id="mental" className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Mental Health Support</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-600 mb-6">
                  Taking care of your mental health is essential. Here are practical tips and resources 
                  specifically designed for Sri Lankan women.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li>• Practice deep breathing exercises (4-7-8 technique)</li>
                  <li>• Keep a daily journal to process emotions</li>
                  <li>• Take mindful walks in nature</li>
                  <li>• Start with 5 minutes of meditation daily</li>
                  <li>• Connect with supportive friends and family</li>
                </ul>
                <div className="mt-6 bg-pastel-sand p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">YouTube Video Placeholder</h4>
                  <p className="text-gray-600 text-sm">Mental Health Tips for Sri Lankan Women</p>
                </div>
              </div>
              <div className="bg-pastel-flesh p-6 rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                  alt="Mental health support"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </div>
          </section>

          {/* Continue with other sections similar to SafetyPage... */}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SupportPage;
