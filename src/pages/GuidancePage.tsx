
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Star, Rocket, Crown } from "lucide-react";

const GuidancePage = () => {
  const guidanceTopics = [
    { id: 'learning', title: 'Free Learning Platforms', icon: BookOpen },
    { id: 'government', title: 'Government Programmes', icon: Users },
    { id: 'mentor', title: 'Find a Mentor', icon: Star },
    { id: 'start', title: 'I Want to Start', icon: Rocket },
    { id: 'featured', title: 'Featured Women', icon: Crown }
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
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Guidance & Passion Support</h1>
          <p className="text-xl text-primary mb-8">Discover Your Path to Success</p>
        </div>

        {/* 5-Topic Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
          {guidanceTopics.map((topic) => (
            <Card 
              key={topic.id}
              className="cursor-pointer hover:bg-pink-50 transition-colors"
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
          {/* Free Learning Platforms */}
          <section id="learning" className="bg-primary p-8 rounded-2xl shadow-sm">
            <h2 className="text-3xl font-bold text-white mb-6">📚 Free Learning Platforms</h2>
            
            {/* Learning Platforms Image */}
            <div className="mb-6 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop"
                alt="Free online learning platforms for women"
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-4">🌐 International Platforms</h4>
                <ul className="space-y-3 text-gray-600">
                  <li>• <strong>Coursera:</strong> Free courses from top universities</li>
                  <li>• <strong>Khan Academy:</strong> Complete learning platform</li>
                  <li>• <strong>edX:</strong> University-level courses</li>
                  <li>• <strong>FutureLearn:</strong> UK-based learning platform</li>
                  <li>• <strong>Udemy:</strong> Practical skills courses</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-4">🇱🇰 Sri Lankan Resources</h4>
                <ul className="space-y-3 text-gray-600">
                  <li>• <strong>Open University of Sri Lanka:</strong> Distance learning</li>
                  <li>• <strong>University of Colombo:</strong> Online courses</li>
                  <li>• <strong>SLINTEC:</strong> Technology training</li>
                  <li>• <strong>IFS Academy:</strong> Business skills</li>
                  <li>• <strong>Local NGO Programs:</strong> Skill development</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Government Programmes */}
          <section id="government" className="bg-primary p-8 rounded-2xl shadow-sm">
            <h2 className="text-3xl font-bold text-white mb-6">🏛️ Government Programmes for Women</h2>
            
            {/* Government Programs Image */}
            <div className="mb-6 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1551836022-8b2858c9c69b?w=800&h=400&fit=crop"
                alt="Government support programs for Sri Lankan women"
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <div className="bg-white p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-800 mb-4">💼 Business & Entrepreneurship</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Women's Development Bank micro-credit schemes</li>
                    <li>• Ministry of Women and Child Affairs grants</li>
                    <li>• Samurdhi women's societies support</li>
                    <li>• Export Development Board training</li>
                    <li>• Industrial Development Board assistance</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-4">🎓 Education & Training</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Vocational Training Authority programs</li>
                    <li>• National Youth Services Council training</li>
                    <li>• Department of Technical Education courses</li>
                    <li>• Agriculture Department extension programs</li>
                    <li>• ICT training initiatives</li>
                  </ul>
                </div>
              </div>
              <div>
                {/* YouTube Video */}
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">🎥 Government Support Programmes for Women</h4>
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/CUmFFCd_9zI"
                      title="Government Support Programmes for Women"
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

          {/* Find a Mentor */}
          <section id="mentor" className="bg-primary p-8 rounded-2xl shadow-sm">
            <h2 className="text-3xl font-bold text-white mb-6">🌟 Find a Mentor</h2>
            
            {/* Mentorship Image */}
            <div className="mb-6 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=400&fit=crop"
                alt="Women mentorship and guidance"
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-4">🤝 Mentorship Platforms</h4>
                <ul className="space-y-3 text-gray-600">
                  <li>• <strong>Women in Business Sri Lanka:</strong> Professional mentoring</li>
                  <li>• <strong>Ceylon Chamber of Commerce:</strong> Business guidance</li>
                  <li>• <strong>Young Entrepreneurs Sri Lanka:</strong> Startup mentorship</li>
                  <li>• <strong>Professional associations:</strong> Industry-specific guidance</li>
                  <li>• <strong>LinkedIn networking:</strong> Connect with professionals</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-4">💡 How to Find the Right Mentor</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Define your goals and what you want to achieve</li>
                  <li>• Look for mentors in your field of interest</li>
                  <li>• Attend networking events and workshops</li>
                  <li>• Join professional associations</li>
                  <li>• Be clear about your commitment and expectations</li>
                </ul>
              </div>
            </div>
          </section>

          {/* I Want to Start */}
          <section id="start" className="bg-primary p-8 rounded-2xl shadow-sm">
            <h2 className="text-3xl font-bold text-white mb-6">🚀 I Want to Start</h2>
            
            {/* Getting Started Image */}
            <div className="mb-6 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop"
                alt="Starting your entrepreneurial journey"
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-4">📋 Step 1: Plan</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Identify your passion and skills</li>
                  <li>• Research market opportunities</li>
                  <li>• Create a simple business plan</li>
                  <li>• Set realistic goals and timelines</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-4">💰 Step 2: Fund</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Start with personal savings</li>
                  <li>• Apply for microfinance</li>
                  <li>• Seek government grants</li>
                  <li>• Consider crowdfunding</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-4">🎯 Step 3: Execute</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Start small and test your idea</li>
                  <li>• Register your business</li>
                  <li>• Build your customer base</li>
                  <li>• Learn and adapt continuously</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Featured Women */}
          <section id="featured" className="bg-primary p-8 rounded-2xl shadow-sm">
            <h2 className="text-3xl font-bold text-white mb-6">👑 Featured Women</h2>
            
            {/* Featured Women Image */}
            <div className="mb-6 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1580894894513-541e068a3e2b?w=800&h=400&fit=crop"
                alt="Inspiring Sri Lankan women leaders"
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">🌟 Inspiring Sri Lankan Women</h4>
                    <p className="text-gray-600 text-sm mb-4">Meet successful women who have broken barriers and created positive change in Sri Lanka.</p>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• <strong>Business Leaders:</strong> CEOs and entrepreneurs</li>
                      <li>• <strong>Social Activists:</strong> Change makers</li>
                      <li>• <strong>Tech Innovators:</strong> Digital pioneers</li>
                      <li>• <strong>Artists & Creators:</strong> Cultural contributors</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                {/* YouTube Video */}
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">🎥 Inspiring Stories of Sri Lankan Women</h4>
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/gbCYzTnNErs"
                      title="Inspiring Stories of Sri Lankan Women"
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

export default GuidancePage;
