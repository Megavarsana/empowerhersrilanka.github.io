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
            
            {/* Learning Resources Image */}
            <div className="mb-6 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=400&fit=crop"
                alt="Online learning and education"
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                {/* Image Upload Space */}
                <div className="mb-6 p-6 border-2 border-dashed border-pastel-rose rounded-lg bg-pastel-rose-light">
                  <div className="text-center">
                    <Upload className="h-12 w-12 text-pastel-rose mx-auto mb-2" />
                    <p className="text-pastel-rose-dark">Upload Learning Resources Image</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-pastel-rose-light p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">1. Guru.lk</h4>
                    <p className="text-gray-600 text-sm">Local e-learning platform offering school and life skills education</p>
                    <p className="text-xs text-gray-500">🌐 Website: www.guru.lk</p>
                    <p className="text-xs text-gray-500">📚 Subjects: School syllabus, Basic Tech, General Knowledge</p>
                    <p className="text-xs text-gray-500">💬 Language: Sinhala | Tamil | English</p>
                  </div>
                  <div className="bg-pastel-rose-light p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">2. Women Go Digital (ICTA)</h4>
                    <p className="text-gray-600 text-sm">Digital literacy and basic tech skills for all Sri Lankans</p>
                    <p className="text-xs text-gray-500">🌐 Website: www.icta.lk</p>
                    <p className="text-xs text-gray-500">📚 Topics: ICT, cybersecurity, online jobs</p>
                    <p className="text-xs text-gray-500">💬 Language: Sinhala | Tamil | English</p>
                  </div>
                  <div className="bg-pastel-rose-light p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">3. OpenLearn.lk</h4>
                    <p className="text-gray-600 text-sm">Free online courses from Open University of Sri Lanka</p>
                    <p className="text-xs text-gray-500">🌐 Website: www.openlearn.lk</p>
                    <p className="text-xs text-gray-500">📚 Topics: English, ICT, Career Development, Ethics</p>
                    <p className="text-xs text-gray-500">💬 Language: English</p>
                  </div>
                </div>
              </div>
              <div>
                {/* YouTube Video */}
                <div className="bg-pastel-rose-light p-6 rounded-lg mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">🎥 How to Get Started with Online Learning</h4>
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/5MgBikgcWnY"
                      title="How to Get Started with Online Learning"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>

                <div className="bg-pastel-rose-light p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">🟡 Free Offline Skill Development</h4>
                  <div className="space-y-2">
                    <div>
                      <h5 className="text-sm font-medium text-gray-700">1. Vocational Training Authority</h5>
                      <p className="text-xs text-gray-600">📍 Available islandwide</p>
                      <p className="text-xs text-gray-600">📚 ICT, Beauty culture, Cooking, Tailoring</p>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium text-gray-700">2. Women's Bureau of Sri Lanka</h5>
                      <p className="text-xs text-gray-600">📚 Dressmaking, Home Gardening, Bakery, ICT</p>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium text-gray-700">3. YWCA Sri Lanka</h5>
                      <p className="text-xs text-gray-600">📍 Colombo, Batticaloa, Kandy, Jaffna</p>
                      <p className="text-xs text-gray-600">📚 Spoken English, Cooking, ICT, Soft Skills</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Government Programs */}
          <section id="government" className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">🏛️ Government Programs for Women in Sri Lanka</h2>
            
            {/* Government Programs Image */}
            <div className="mb-6 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop"
                alt="Government programs and support"
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pastel-rose-light p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-4">1. Women's Bureau of Sri Lanka – Ministry of Women & Child Affairs</h4>
                <p className="text-gray-600 text-sm mb-3">Offers training in sewing, food processing, ICT, and home gardening. Also supports women entrepreneurs with microfinance and business guidance.</p>
                <p className="text-xs text-gray-500">📍 Islandwide via Divisional Secretariats</p>
                <p className="text-xs text-gray-500">Eligibility: Sri Lankan women over 18, priority for low-income or unemployed women</p>
              </div>
              <div className="bg-pastel-rose-light p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-4">2. Samurdhi Self-Employment Program</h4>
                <p className="text-gray-600 text-sm mb-3">Provides financial support and training for self-employment projects, especially for women in low-income households.</p>
                <p className="text-xs text-gray-500">📍 Via Divisional Secretariats</p>
                <p className="text-xs text-gray-500">Eligibility: Samurdhi beneficiaries and women-headed households</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pastel-rose-light p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-4">3. Vocational Training Authority (VTA) – Special Women's Programs</h4>
                <p className="text-gray-600 text-sm mb-3">Free courses in tailoring, ICT, food technology, and beauty culture. Some courses are female-only.</p>
                <p className="text-xs text-gray-500">🌐 www.vtasl.gov.lk</p>
                <p className="text-xs text-gray-500">Eligibility: Age 15+ (varies by course), open to all Sri Lankan women</p>
              </div>
              <div className="bg-pastel-rose-light p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-4">4. National Youth Services Council (NYSC) – Women Skill Training</h4>
                <p className="text-gray-600 text-sm mb-3">Offers tech, language, and soft skills training, often targeting young girls and school leavers.</p>
                <p className="text-xs text-gray-500">🌐 www.nysc.lk</p>
                <p className="text-xs text-gray-500">Eligibility: Women aged 15–29</p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-4 mt-8">🤝 NGO Programs for Women in Sri Lanka</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-pastel-rose-light p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-4">1. UN Women Sri Lanka – Economic Empowerment Initiatives</h4>
                <p className="text-gray-600 text-sm mb-3">Supports women with entrepreneurship training, financial literacy, and digital skills.</p>
                <p className="text-xs text-gray-500">Eligibility: Women aged 18+, often from vulnerable groups (single mothers, rural women)</p>
              </div>
              <div className="bg-pastel-rose-light p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-4">2. Sarvodaya Women's Empowerment Program</h4>
                <p className="text-gray-600 text-sm mb-3">Community-based programs in rural areas to support women's skills, savings groups, leadership, and microenterprise.</p>
                <p className="text-xs text-gray-500">🌐 www.sarvodaya.org</p>
                <p className="text-xs text-gray-500">Eligibility: Rural women and underserved communities</p>
              </div>
            </div>

            {/* YouTube Video */}
            <div className="mt-6 bg-pastel-rose-light p-6 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">🎥 Government Support Programs for Women</h4>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/8F3oMaQ9mGQ"
                  title="Government Support Programs for Women"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </section>

          {/* Find Mentor */}
          <section id="mentorship" className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">🌟 Find a Mentor – For Sri Lankan Women</h2>
            
            {/* Mentorship Image */}
            <div className="mb-6 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop"
                alt="Mentorship and guidance"
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                {/* Image Upload Space */}
                <div className="mb-6 p-6 border-2 border-dashed border-pastel-rose rounded-lg bg-pastel-rose-light">
                  <div className="text-center">
                    <Upload className="h-12 w-12 text-pastel-rose mx-auto mb-2" />
                    <p className="text-pastel-rose-dark">Upload Mentorship Image</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-pastel-rose-light p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">🔹 1. Women in Management (WIM) – Mentorship Program</h4>
                    <p className="text-gray-600 text-sm">Professional network supporting Sri Lankan women through coaching and mentoring</p>
                    <p className="text-xs text-gray-500">📌 Fields: Business, Leadership, Career Growth</p>
                    <p className="text-xs text-gray-500">Who Can Join? Women in business, professionals, or aspiring entrepreneurs</p>
                  </div>
                  <div className="bg-pastel-rose-light p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">🔹 2. Hatch Works – Female Founder Mentoring</h4>
                    <p className="text-gray-600 text-sm">Startup support and mentorship for women-led businesses in tech and innovation</p>
                    <p className="text-xs text-gray-500">📌 Fields: Tech, Startups, Innovation</p>
                    <p className="text-xs text-gray-500">Who Can Join? Female entrepreneurs or those with business ideas</p>
                  </div>
                  <div className="bg-pastel-rose-light p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">🔹 3. ICTA – Women Go Digital</h4>
                    <p className="text-gray-600 text-sm">Includes mentoring by digital industry professionals to guide women into tech-related careers</p>
                    <p className="text-xs text-gray-500">📌 Fields: ICT, Digital Marketing, E-Commerce</p>
                    <p className="text-xs text-gray-500">Who Can Join? Women aged 16+ interested in learning ICT or starting online work</p>
                  </div>
                  <div className="bg-pastel-rose-light p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">🔹 4. SheLeads Program (Dilmah Conservation)</h4>
                    <p className="text-gray-600 text-sm">Empowers young women with leadership and environmental activism skills</p>
                    <p className="text-xs text-gray-500">📌 Fields: Environment, Leadership, Community Projects</p>
                    <p className="text-xs text-gray-500">Who Can Join? Young women aged 18–30 from rural communities</p>
                  </div>
                </div>
              </div>
              <div>
                {/* YouTube Video */}
                <div className="bg-pastel-rose-light p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">🎥 Finding the Right Mentor for Your Career</h4>
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/ZQUxL4Jm1Lo"
                      title="Finding the Right Mentor for Your Career"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>

                <div className="bg-pastel-rose-light p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">🔹 Global Mentorship Platforms (Available in Sri Lanka)</h4>
                  <div className="space-y-3">
                    <div>
                      <h5 className="text-sm font-medium text-gray-700">• Lean In Circles – Sri Lanka</h5>
                      <p className="text-xs text-gray-600">Part of the global Lean In network; helps women build supportive peer-to-peer mentoring groups</p>
                      <p className="text-xs text-gray-600">📌 Fields: Confidence, Leadership, Career Building</p>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium text-gray-700">• SLASSCOM – Women in IT Forum Mentorship</h5>
                      <p className="text-xs text-gray-600">Offers mentorship for school leavers, undergraduates, and working women to enter and thrive in tech</p>
                      <p className="text-xs text-gray-600">📌 Fields: ICT, Tech, Software, Cybersecurity</p>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium text-gray-700">• British Council – Women in STEM Mentorship</h5>
                      <p className="text-xs text-gray-600">Mentors from UK-Sri Lanka partnerships support young women</p>
                      <p className="text-xs text-gray-600">📌 Fields: Science, Engineering, Math, Technology</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Start Business */}
          <section id="business" className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">🚀 I Want to Start – A Business or Project</h2>
            
            {/* Business Startup Image */}
            <div className="mb-6 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop"
                alt="Business startup and entrepreneurship"
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                {/* Image Upload Space */}
                <div className="mb-6 p-6 border-2 border-dashed border-pastel-rose rounded-lg bg-pastel-rose-light">
                  <div className="text-center">
                    <Upload className="h-12 w-12 text-pastel-rose mx-auto mb-2" />
                    <p className="text-pastel-rose-dark">Upload Business Startup Image</p>
                  </div>
                </div>

                <div className="bg-pastel-rose-light p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">💡 Step-by-Step Guidance</h4>
                  <ol className="text-gray-600 text-sm space-y-2">
                    <li className="mb-2">
                      <strong>1. Identify a Business Idea</strong>
                      <ul className="ml-4 mt-1 text-xs space-y-1">
                        <li>◦ Think about what you love doing (cooking, tailoring, crafts, tech, farming)</li>
                        <li>◦ Research if there is demand in your local area or online</li>
                      </ul>
                    </li>
                    <li className="mb-2">
                      <strong>2. Make a Simple Business Plan</strong>
                      <ul className="ml-4 mt-1 text-xs space-y-1">
                        <li>◦ What will you sell?</li>
                        <li>◦ Who are your customers?</li>
                        <li>◦ What do you need to start? (money, place, license)</li>
                      </ul>
                    </li>
                    <li className="mb-2">
                      <strong>3. Register Your Business</strong>
                      <p className="text-xs ml-4 mt-1">You can register at the Divisional Secretariat or online through the Department of Registrar of Companies</p>
                    </li>
                    <li>
                      <strong>4. Get Training & Mentorship</strong>
                      <p className="text-xs ml-4 mt-1">Free workshops and training are offered by government and NGO programs</p>
                    </li>
                  </ol>
                </div>
                
                <div className="bg-pastel-rose-light p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">🏢 Government Support & Funding</h4>
                  <div className="space-y-3">
                    <div>
                      <h5 className="text-sm font-medium text-gray-700">1. Self-Employment Promotion Initiative (SEPI)</h5>
                      <p className="text-xs text-gray-600">Offers training, small grants, and equipment for women starting micro or home-based businesses</p>
                      <p className="text-xs text-gray-600">Eligibility: Women from low-income or vulnerable families</p>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium text-gray-700">2. Enterprise Sri Lanka – Women Entrepreneurs Special Loan</h5>
                      <p className="text-xs text-gray-600">Low-interest loans (LKR 50,000 to 10 million) with grace periods</p>
                      <p className="text-xs text-gray-600">Eligibility: Women aged 18+, registered businesses preferred</p>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium text-gray-700">3. National Enterprise Development Authority (NEDA)</h5>
                      <p className="text-xs text-gray-600">Free business training, mentor support, and help finding markets</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                {/* YouTube Video */}
                <div className="bg-pastel-rose-light p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">🎥 How to Start a Business in Sri Lanka</h4>
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/Tuw8hxrFBH8"
                      title="How to Start a Business in Sri Lanka"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>

                <div className="bg-pastel-rose-light p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">🧵 Free Help for Women Starting a Business</h4>
                  <div className="overflow-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr>
                          <th className="text-left py-2">Name</th>
                          <th className="text-left py-2">What It Offers</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-2 pr-4">Hatch Works</td>
                          <td className="py-2">Workshops, tech support, mentorship</td>
                        </tr>
                        <tr>
                          <td className="py-2 pr-4">SheTrades Sri Lanka</td>
                          <td className="py-2">Connects women to international markets</td>
                        </tr>
                        <tr>
                          <td className="py-2 pr-4">Chamber of Commerce</td>
                          <td className="py-2">Networking + legal help + promotion</td>
                        </tr>
                        <tr>
                          <td className="py-2 pr-4">Women in Management</td>
                          <td className="py-2">Business coaching, awards, branding</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-4">
                    <h5 className="text-sm font-medium text-gray-700">📞 Where to Ask for Help – Government Offices</h5>
                    <ul className="text-xs text-gray-600 mt-1 space-y-1">
                      <li>• ✅ Divisional Secretariat Office (DS Office) – for Samurdhi, SEPI, loans, equipment grants</li>
                      <li>• ✅ District Industrial Development Office – for machinery, training, small grants</li>
                      <li>• ✅ Women's Bureau Hotline: 1938 (Free advice)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Success Stories */}
          <section id="stories" className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">🌟 Featured Women – Inspiring Sri Lankan Stories</h2>
            
            {/* Success Stories Image */}
            <div className="mb-6 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop"
                alt="Inspiring Sri Lankan women success stories"
                className="w-full h-64 object-cover"
              />
            </div>

            <p className="text-lg text-gray-700 mb-6">Real stories. Real power. Here are some extraordinary Sri Lankan women who turned dreams into reality and continue to inspire others. 💪🇱🇰</p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-pastel-rose-light p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-3">🔹 Dr. Asha de Vos – Marine Biologist & Ocean Advocate</h4>
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

              <div className="bg-pastel-rose-light p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-3">🔹 Roshni Kariyapperuma – Entrepreneur in Waste Management</h4>
                <p className="text-gray-600 text-sm mb-2">Founder of a green business that recycles electronic waste, proving that sustainability and success go hand in hand.</p>
                <p className="text-xs text-gray-500">♻️ Turning trash into a thriving business</p>
              </div>

              <div className="bg-pastel-rose-light p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-3">🔹 Purnima Gunatilaka – Tech Entrepreneur</h4>
                <p className="text-gray-600 text-sm mb-2">One of the few female tech leaders in Sri Lanka, she founded a successful IT firm and mentors young women in STEM.</p>
                <p className="text-xs text-gray-500">💻 Promoting female leadership in the tech industry</p>
              </div>
            </div>

            {/* YouTube Video */}
            <div className="mt-6 bg-pastel-rose-light p-6 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">🎥 Inspiring Stories of Sri Lankan Women</h4>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/Y7lJpFuI3ns"
                  title="Inspiring Stories of Sri Lankan Women"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
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
