
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
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
    <div className="min-h-screen bg-primary">
      <Header />
      
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Guidance & Passion Support</h1>
          <p className="text-xl text-white/90 mb-8">Discover Your Path to Success</p>
        </div>

        {/* 5-Topic Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
          {guidanceTopics.map((topic) => (
            <Card 
              key={topic.id}
              className="cursor-pointer hover:bg-pink-50 transition-colors bg-white border-white"
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
          <section id="learning" className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-3xl font-bold text-primary mb-6">🟢 Free Online Learning Platforms (For Sri Lankans – All Genders)</h2>
            
            <div className="mb-6 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop"
                alt="Free online learning platforms for women"
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-4">🌐 Local Sri Lankan Platforms</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-gray-800">1. Guru.lk</h5>
                    <p className="text-sm text-gray-600">A local e-learning platform offering school and life skills education.</p>
                    <p className="text-xs text-primary">🌐 Website: www.guru.lk</p>
                    <p className="text-xs text-gray-500">📚 Subjects: School syllabus, Basic Tech, General Knowledge</p>
                    <p className="text-xs text-gray-500">💬 Language: Sinhala | Tamil | English</p>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-gray-800">2. Women Go Digital (ICTA)</h5>
                    <p className="text-sm text-gray-600">Digital literacy and basic tech skills for all Sri Lankans.</p>
                    <p className="text-xs text-primary">🌐 Website: www.icta.lk</p>
                    <p className="text-xs text-gray-500">📚 Topics: ICT, cybersecurity, online jobs</p>
                    <p className="text-xs text-gray-500">💬 Language: Sinhala | Tamil | English</p>
                  </div>

                  <div>
                    <h5 className="font-medium text-gray-800">3. OpenLearn.lk (Open University of Sri Lanka)</h5>
                    <p className="text-sm text-gray-600">Offers free online courses for self-learning.</p>
                    <p className="text-xs text-primary">🌐 Website: www.openlearn.lk</p>
                    <p className="text-xs text-gray-500">📚 Topics: English, ICT, Career Development, Ethics</p>
                    <p className="text-xs text-gray-500">💬 Language: English</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-4">🌍 International Platforms</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-gray-800">5. Coursera (Via Govt. & UNDP)</h5>
                    <p className="text-sm text-gray-600">Some Sri Lankans can get access to full Coursera courses for free via government/NGO partnerships.</p>
                    <p className="text-xs text-primary">🌐 Website: www.coursera.org</p>
                    <p className="text-xs text-gray-500">🎓 Check with ICTA or UNDP Sri Lanka for free access links.</p>
                  </div>

                  <div>
                    <h5 className="font-medium text-gray-800">6. Google Digital Garage</h5>
                    <p className="text-sm text-gray-600">Free global platform that Sri Lankans can access to learn online marketing, productivity, etc.</p>
                    <p className="text-xs text-primary">🌐 Website: https://learndigital.withgoogle.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-4">🟡 Free Offline Skill Development Programs in Sri Lanka</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium text-gray-800 mb-2">1. Vocational Training Authority of Sri Lanka (VTA)</h5>
                  <p className="text-sm text-gray-600 mb-2">📍 Available islandwide</p>
                  <p className="text-sm text-gray-600 mb-2">📚 Courses: ICT, Beauty culture, Welding, Electronics, Cooking, Tailoring</p>
                  <p className="text-xs text-primary">🌐 www.vtasl.gov.lk</p>
                </div>
                
                <div>
                  <h5 className="font-medium text-gray-800 mb-2">2. Women's Bureau of Sri Lanka</h5>
                  <p className="text-sm text-gray-600 mb-2">📚 Courses: Dressmaking, Home Gardening, Bakery, ICT</p>
                  <p className="text-sm text-gray-600 mb-2">📍 Contact via Divisional Secretariat</p>
                  <p className="text-xs text-primary">🌐 childwomenmin.gov.lk</p>
                </div>
              </div>
            </div>
          </section>

          {/* Government Programmes */}
          <section id="government" className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-3xl font-bold text-primary mb-6">🏛️ Government Programs for Women in Sri Lanka</h2>
            
            <div className="mb-6 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1551836022-8b2858c9c69b?w=800&h=400&fit=crop"
                alt="Government support programs for Sri Lankan women"
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-4">1. Women's Bureau of Sri Lanka – Ministry of Women & Child Affairs</h4>
                  <p className="text-sm text-gray-600 mb-3">Offers training in sewing, food processing, ICT, and home gardening. Also supports women entrepreneurs with microfinance and business guidance.</p>
                  <p className="text-xs text-gray-500">📍 Islandwide via Divisional Secretariats</p>
                  <p className="text-xs text-gray-500">Eligibility: Sri Lankan women over 18, priority for low-income or unemployed women</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-4">2. Samurdhi Self-Employment Program</h4>
                  <p className="text-sm text-gray-600 mb-3">Provides financial support and training for self-employment projects, especially for women in low-income households.</p>
                  <p className="text-xs text-gray-500">🌐 Info via your Divisional Secretariat</p>
                  <p className="text-xs text-gray-500">Eligibility: Samurdhi beneficiaries and women-headed households</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-4">3. NGO Programs for Women in Sri Lanka</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• <strong>UN Women Sri Lanka:</strong> Economic Empowerment Initiatives</li>
                    <li>• <strong>Sarvodaya Women's Empowerment Program:</strong> Community-based programs in rural areas</li>
                    <li>• <strong>CARE International:</strong> Women in Work (WIW) Project</li>
                    <li>• <strong>Good Market:</strong> Female Entrepreneurs Network</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <div className="bg-gray-50 p-6 rounded-lg">
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
          <section id="mentor" className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-3xl font-bold text-primary mb-6">🌟 Find a Mentor – For Sri Lankan Women</h2>
            
            <div className="mb-6 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=400&fit=crop"
                alt="Women mentorship and guidance"
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-4">🔹 1. Women in Management (WIM) – Mentorship Program</h4>
                  <p className="text-sm text-gray-600 mb-2">A professional network that supports Sri Lankan women through coaching, mentoring, and business networking.</p>
                  <p className="text-xs text-gray-500">📌 Fields: Business, Leadership, Career Growth</p>
                  <p className="text-xs text-gray-500">Who Can Join? Women in business, working professionals, or aspiring entrepreneurs</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-4">🔹 2. Hatch Works – Female Founder Mentoring</h4>
                  <p className="text-sm text-gray-600 mb-2">Offers startup support and mentorship for women-led businesses in tech and innovation.</p>
                  <p className="text-xs text-gray-500">📌 Fields: Tech, Startups, Innovation</p>
                  <p className="text-xs text-gray-500">Who Can Join? Female entrepreneurs or those with business/startup ideas</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-4">🔹 3. SLASSCOM – Women in IT Forum Mentorship</h4>
                  <p className="text-sm text-gray-600 mb-2">Offers mentorship for school leavers, undergraduates, and working women to enter and thrive in the tech industry.</p>
                  <p className="text-xs text-gray-500">📌 Fields: ICT, Tech, Software, Cybersecurity</p>
                  <p className="text-xs text-gray-500">Who Can Join? Women and girls interested in tech careers</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-4">Global Mentorship Platforms (Available in Sri Lanka)</h4>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li>• <strong>Lean In Circles – Sri Lanka:</strong> Part of the global Lean In network; helps women build supportive peer-to-peer mentoring groups.</li>
                    <li>• <strong>Cherie Blair Foundation:</strong> International online mentoring for women entrepreneurs, available in Sri Lanka through partner orgs.</li>
                    <li>• <strong>Global Shapers Colombo:</strong> Run by young professionals under the World Economic Forum, offering leadership mentoring.</li>
                    <li>• <strong>British Council Sri Lanka:</strong> Women in STEM Mentorship (Project-Based)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* I Want to Start */}
          <section id="start" className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-3xl font-bold text-primary mb-6">🚀 I Want to Start – A Business or Project</h2>
            
            <div className="mb-6 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop"
                alt="Starting your entrepreneurial journey"
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-4">💡 Step-by-Step Guidance to Start a Business in Sri Lanka</h4>
                <ol className="space-y-2 text-sm text-gray-600">
                  <li><strong>1. Identify a Business Idea:</strong> Think about what you love doing (cooking, tailoring, crafts, tech, farming). Research if there is demand in your local area or online.</li>
                  <li><strong>2. Make a Simple Business Plan:</strong> What will you sell? Who are your customers? What do you need to start? (money, place, license)</li>
                  <li><strong>3. Register Your Business:</strong> You can register your business at the Divisional Secretariat or online through the Department of Registrar of Companies</li>
                  <li><strong>4. Get Training & Mentorship:</strong> Free workshops and training are offered by several government and NGO programs</li>
                </ol>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-4">🏢 Government Support & Funding for Women Entrepreneurs</h4>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-medium text-gray-800">1. Self-Employment Promotion Initiative (SEPI)</h5>
                      <p className="text-sm text-gray-600">Offers training, small grants, and equipment for women starting micro or home-based businesses.</p>
                      <p className="text-xs text-gray-500">Eligibility: Women from low-income or vulnerable families</p>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-gray-800">2. Enterprise Sri Lanka – Women Entrepreneurs Special Loan Scheme</h5>
                      <p className="text-sm text-gray-600">Low-interest loans (from LKR 50,000 to 10 million) with grace periods and subsidies for women-led startups.</p>
                      <p className="text-xs text-gray-500">Eligibility: Women aged 18+, registered businesses preferred</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-4">📞 Where to Ask for Help – Government Offices</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• ✅ <strong>Divisional Secretariat Office (DS Office)</strong> – for Samurdhi, SEPI, loans, equipment grants</li>
                    <li>• ✅ <strong>District Industrial Development Office</strong> – for machinery, training, small grants</li>
                    <li>• ✅ <strong>Agrarian Service Center</strong> – for agriculture and food business support</li>
                    <li>• ✅ <strong>Women's Bureau Hotline: 1938</strong> (Free advice)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Women */}
          <section id="featured" className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-3xl font-bold text-primary mb-6">🌟 Featured Women – Inspiring Sri Lankan Stories</h2>
            
            <div className="mb-6 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1580894894513-541e068a3e2b?w=800&h=400&fit=crop"
                alt="Inspiring Sri Lankan women leaders"
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-4">🔹 Dr. Asha de Vos – Marine Biologist & Ocean Advocate</h4>
                  <p className="text-sm text-gray-600 mb-2">Founder of Oceanswell, Sri Lanka's first marine conservation research organization. She's the first Sri Lankan to earn a PhD in marine mammal research and works to protect blue whales around our island.</p>
                  <p className="text-xs text-primary">🎖 Awards: BBC 100 Women, Rolex Laureate, National Hero</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-4">🔹 Tharushi Karunaratne – Asia's Fastest 800m Runner</h4>
                  <p className="text-sm text-gray-600 mb-2">A young athlete from rural Sri Lanka who won gold at the Asian Games 2023, making history in athletics and becoming a role model for young girls.</p>
                  <p className="text-xs text-primary">🏅 From humble beginnings to Asian champion</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-4">🔹 Jayanthi Kuru-Utumpala – First Sri Lankan to Summit Mount Everest</h4>
                  <p className="text-sm text-gray-600 mb-2">In 2016, she became the first Sri Lankan to climb Mount Everest and is now a fierce advocate for gender equality and women's empowerment.</p>
                  <p className="text-xs text-primary">🚩 Trailblazer for women in adventure and leadership</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-4">🔹 Sandya Eknaligoda – Human Rights Defender</h4>
                  <p className="text-sm text-gray-600 mb-2">Wife of missing journalist Prageeth Eknaligoda, she became a powerful human rights advocate, fighting for justice and truth.</p>
                  <p className="text-xs text-primary">🕊 Awarded International Woman of Courage by the U.S. State Dept</p>
                </div>
              </div>
              
              <div>
                <div className="bg-gray-50 p-6 rounded-lg">
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
