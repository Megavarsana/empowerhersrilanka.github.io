
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Award, Lightbulb, Star, Upload, Play } from "lucide-react";

const GuidancePage = () => {
  const guidanceTopics = [
    { id: 'learning', title: 'Free Learning', icon: BookOpen },
    { id: 'government', title: 'Government Programs', icon: Award },
    { id: 'mentorship', title: 'Find Mentor', icon: Users },
    { id: 'business', title: 'Start Business', icon: Lightbulb },
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
          <p className="text-xl text-pastel-rose mb-8">Powering Her Passion</p>
        </div>

        {/* 5-Topic Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
          {guidanceTopics.map((topic) => (
            <Card 
              key={topic.id}
              className="cursor-pointer hover:bg-pastel-rose-light transition-colors"
              onClick={() => scrollToSection(topic.id)}
            >
              <CardContent className="p-6 text-center">
                <topic.icon className="h-8 w-8 text-pastel-rose mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800 text-sm">{topic.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Content Sections */}
        <div className="space-y-16">
          {/* Free Learning */}
          <section id="learning" className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">🟢 Free Online Learning Platforms (For Sri Lankans)</h2>
            
            {/* Image Upload Space */}
            <div className="mb-6 p-6 border-2 border-dashed border-pastel-rose rounded-lg bg-pastel-rose-light">
              <div className="text-center">
                <Upload className="h-12 w-12 text-pastel-rose mx-auto mb-2" />
                <p className="text-pastel-rose-dark">Upload Learning Resources Image</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <div className="space-y-4">
                  <div className="bg-pastel-rose-light p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">1. Guru.lk</h4>
                    <p className="text-gray-600 text-sm">Local e-learning platform offering school and life skills education</p>
                    <p className="text-xs text-gray-500">📚 Subjects: School syllabus, Basic Tech, General Knowledge</p>
                  </div>
                  <div className="bg-pastel-rose-light p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">2. Women Go Digital (ICTA)</h4>
                    <p className="text-gray-600 text-sm">Digital literacy and basic tech skills for all Sri Lankans</p>
                    <p className="text-xs text-gray-500">📚 Topics: ICT, cybersecurity, online jobs</p>
                  </div>
                  <div className="bg-pastel-rose-light p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">3. OpenLearn.lk</h4>
                    <p className="text-gray-600 text-sm">Free online courses from Open University of Sri Lanka</p>
                    <p className="text-xs text-gray-500">📚 Topics: English, ICT, Career Development, Ethics</p>
                  </div>
                </div>
              </div>
              <div>
                {/* YouTube Video Placeholder */}
                <div className="bg-pastel-rose-light p-6 rounded-lg">
                  <div className="flex items-center justify-center h-48 bg-white rounded-lg">
                    <div className="text-center">
                      <Play className="h-16 w-16 text-pastel-rose mx-auto mb-2" />
                      <h4 className="font-semibold text-gray-800 mb-2">YouTube Video Placeholder</h4>
                      <p className="text-gray-600 text-sm">How to Get Started with Online Learning</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Government Programs */}
          <section id="government" className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">🏛️ Government Programs for Women in Sri Lanka</h2>
            
            {/* Image Upload Space */}
            <div className="mb-6 p-6 border-2 border-dashed border-pastel-rose rounded-lg bg-pastel-rose-light">
              <div className="text-center">
                <Upload className="h-12 w-12 text-pastel-rose mx-auto mb-2" />
                <p className="text-pastel-rose-dark">Upload Government Programs Image</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-pastel-rose-light p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-4">Women's Bureau Programs</h4>
                <p className="text-gray-600 text-sm mb-3">Training in sewing, food processing, ICT, and home gardening. Supports women entrepreneurs with microfinance.</p>
                <p className="text-xs text-gray-500">📍 Islandwide via Divisional Secretariats</p>
                <p className="text-xs text-gray-500">Eligibility: Sri Lankan women over 18</p>
              </div>
              <div className="bg-pastel-rose-light p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-4">Samurdhi Self-Employment Program</h4>
                <p className="text-gray-600 text-sm mb-3">Financial support and training for self-employment projects, especially for women in low-income households.</p>
                <p className="text-xs text-gray-500">📍 Via Divisional Secretariats</p>
                <p className="text-xs text-gray-500">Eligibility: Samurdhi beneficiaries</p>
              </div>
            </div>

            {/* YouTube Video Placeholder */}
            <div className="mt-6 bg-pastel-rose-light p-6 rounded-lg">
              <div className="flex items-center justify-center h-48 bg-white rounded-lg">
                <div className="text-center">
                  <Play className="h-16 w-16 text-pastel-rose mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800 mb-2">YouTube Video Placeholder</h4>
                  <p className="text-gray-600 text-sm">Government Support Programs for Women</p>
                </div>
              </div>
            </div>
          </section>

          {/* Find Mentor */}
          <section id="mentorship" className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">🌟 Find a Mentor – For Sri Lankan Women</h2>
            
            {/* Image Upload Space */}
            <div className="mb-6 p-6 border-2 border-dashed border-pastel-rose rounded-lg bg-pastel-rose-light">
              <div className="text-center">
                <Upload className="h-12 w-12 text-pastel-rose mx-auto mb-2" />
                <p className="text-pastel-rose-dark">Upload Mentorship Image</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <div className="space-y-4">
                  <div className="bg-pastel-rose-light p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">🔹 Women in Management (WIM)</h4>
                    <p className="text-gray-600 text-sm">Professional network supporting Sri Lankan women through coaching and mentoring</p>
                    <p className="text-xs text-gray-500">📌 Fields: Business, Leadership, Career Growth</p>
                  </div>
                  <div className="bg-pastel-rose-light p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">🔹 Hatch Works</h4>
                    <p className="text-gray-600 text-sm">Startup support and mentorship for women-led businesses in tech and innovation</p>
                    <p className="text-xs text-gray-500">📌 Fields: Tech, Startups, Innovation</p>
                  </div>
                  <div className="bg-pastel-rose-light p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">🔹 SLASSCOM – Women in IT Forum</h4>
                    <p className="text-gray-600 text-sm">Mentorship for women to enter and thrive in the tech industry</p>
                    <p className="text-xs text-gray-500">📌 Fields: ICT, Tech, Software, Cybersecurity</p>
                  </div>
                </div>
              </div>
              <div>
                {/* YouTube Video Placeholder */}
                <div className="bg-pastel-rose-light p-6 rounded-lg">
                  <div className="flex items-center justify-center h-48 bg-white rounded-lg">
                    <div className="text-center">
                      <Play className="h-16 w-16 text-pastel-rose mx-auto mb-2" />
                      <h4 className="font-semibold text-gray-800 mb-2">YouTube Video Placeholder</h4>
                      <p className="text-gray-600 text-sm">Finding the Right Mentor for Your Career</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Start Business */}
          <section id="business" className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">🚀 I Want to Start – A Business or Project</h2>
            
            {/* Image Upload Space */}
            <div className="mb-6 p-6 border-2 border-dashed border-pastel-rose rounded-lg bg-pastel-rose-light">
              <div className="text-center">
                <Upload className="h-12 w-12 text-pastel-rose mx-auto mb-2" />
                <p className="text-pastel-rose-dark">Upload Business Startup Image</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <div className="bg-pastel-rose-light p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">💡 Step-by-Step Guidance</h4>
                  <ol className="text-gray-600 text-sm space-y-1">
                    <li>1. Identify a Business Idea</li>
                    <li>2. Make a Simple Business Plan</li>
                    <li>3. Register Your Business</li>
                    <li>4. Get Training & Mentorship</li>
                  </ol>
                </div>
                
                <div className="bg-pastel-rose-light p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">🏢 Government Support & Funding</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Self-Employment Promotion Initiative (SEPI)</li>
                    <li>• Enterprise Sri Lanka – Women Entrepreneurs Special Loan</li>
                    <li>• National Enterprise Development Authority (NEDA)</li>
                  </ul>
                </div>
              </div>
              <div>
                {/* YouTube Video Placeholder */}
                <div className="bg-pastel-rose-light p-6 rounded-lg">
                  <div className="flex items-center justify-center h-48 bg-white rounded-lg">
                    <div className="text-center">
                      <Play className="h-16 w-16 text-pastel-rose mx-auto mb-2" />
                      <h4 className="font-semibold text-gray-800 mb-2">YouTube Video Placeholder</h4>
                      <p className="text-gray-600 text-sm">How to Start a Business in Sri Lanka</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Success Stories */}
          <section id="stories" className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">🌟 Featured Women – Inspiring Sri Lankan Stories</h2>
            
            {/* Image Upload Space */}
            <div className="mb-6 p-6 border-2 border-dashed border-pastel-rose rounded-lg bg-pastel-rose-light">
              <div className="text-center">
                <Upload className="h-12 w-12 text-pastel-rose mx-auto mb-2" />
                <p className="text-pastel-rose-dark">Upload Success Stories Image</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-pastel-rose-light p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-3">🔹 Dr. Asha de Vos – Marine Biologist</h4>
                <p className="text-gray-600 text-sm mb-2">Founder of Oceanswell, Sri Lanka's first marine conservation research organization. First Sri Lankan to earn a PhD in marine mammal research.</p>
                <p className="text-xs text-gray-500">🎖 Awards: BBC 100 Women, Rolex Laureate, National Hero</p>
              </div>
              
              <div className="bg-pastel-rose-light p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-3">🔹 Tharushi Karunaratne – Athlete</h4>
                <p className="text-gray-600 text-sm mb-2">Asia's fastest 800m runner who won gold at Asian Games 2023, making history in athletics.</p>
                <p className="text-xs text-gray-500">🏅 From humble beginnings to Asian champion</p>
              </div>
              
              <div className="bg-pastel-rose-light p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-3">🔹 Jayanthi Kuru-Utumpala – Mountaineer</h4>
                <p className="text-gray-600 text-sm mb-2">First Sri Lankan to climb Mount Everest in 2016, now advocates for gender equality.</p>
                <p className="text-xs text-gray-500">🚩 Trailblazer for women in adventure and leadership</p>
              </div>
              
              <div className="bg-pastel-rose-light p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-3">🔹 Sandya Eknaligoda – Human Rights Defender</h4>
                <p className="text-gray-600 text-sm mb-2">Became a powerful human rights advocate, fighting for justice and truth.</p>
                <p className="text-xs text-gray-500">🕊 Awarded International Woman of Courage by U.S. State Dept</p>
              </div>
            </div>

            {/* YouTube Video Placeholder */}
            <div className="mt-6 bg-pastel-rose-light p-6 rounded-lg">
              <div className="flex items-center justify-center h-48 bg-white rounded-lg">
                <div className="text-center">
                  <Play className="h-16 w-16 text-pastel-rose mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800 mb-2">YouTube Video Placeholder</h4>
                  <p className="text-gray-600 text-sm">Inspiring Stories of Sri Lankan Women</p>
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
