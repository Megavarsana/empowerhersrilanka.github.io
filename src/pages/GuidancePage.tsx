
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Award, Lightbulb, Star } from "lucide-react";

const GuidancePage = () => {
  const guidanceTopics = [
    { id: 'learning', title: 'Free Learning', icon: BookOpen },
    { id: 'mentorship', title: 'Find Mentor', icon: Users },
    { id: 'government', title: 'Government Programs', icon: Award },
    { id: 'guides', title: 'How-to Guides', icon: Lightbulb },
    { id: 'stories', title: 'Success Stories', icon: Star }
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
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Dream Support</h1>
          <p className="text-xl text-pastel-khaki mb-8">Powering Her Passion</p>
        </div>

        {/* 5-Topic Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
          {guidanceTopics.map((topic) => (
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
          {/* Free Learning */}
          <section id="learning" className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Free Learning Platforms</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-600 mb-6">
                  Access world-class education and skills training through these free platforms 
                  available to Sri Lankan women.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li>• Coursera - University courses & certificates</li>
                  <li>• Khan Academy - Free education for everyone</li>
                  <li>• Skillshare - Creative skills & business</li>
                  <li>• edX - Courses from top universities</li>
                  <li>• Udemy - Professional development courses</li>
                </ul>
                <div className="mt-6 bg-pastel-sand p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">YouTube Video Placeholder</h4>
                  <p className="text-gray-600 text-sm">How to Get Started with Online Learning</p>
                </div>
              </div>
              <div className="bg-pastel-flesh p-6 rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1518877593221-1f28583780b4" 
                  alt="Online learning for women"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </div>
          </section>

          {/* Continue with other sections... */}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GuidancePage;
