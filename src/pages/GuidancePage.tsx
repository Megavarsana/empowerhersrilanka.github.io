import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Lightbulb, Star, Globe, Phone, Building, Heart } from "lucide-react";

const GuidancePage = () => {
  const successStories = [
    {
      name: "Dr. Asha de Vos",
      achievement: "Marine Biologist & Ocean Advocate",
      description: "Founder of Oceanswell, Sri Lanka's first marine conservation research organization. She's the first Sri Lankan to earn a PhD in marine mammal research and works to protect blue whales around our island.",
      awards: "BBC 100 Women, Rolex Laureate, National Hero"
    },
    {
      name: "Tharushi Karunaratne",
      achievement: "Asia's Fastest 800m Runner",
      description: "A young athlete from rural Sri Lanka who won gold at the Asian Games 2023, making history in athletics and becoming a role model for young girls.",
      awards: "From humble beginnings to Asian champion"
    },
    {
      name: "Deshani Ariyawansa",
      achievement: "AI Innovator & Youth Tech Leader",
      description: "A schoolgirl who won international awards for building AI systems for the blind and voice-controlled systems for the elderly.",
      awards: "Tech from the village, changing the world"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-empowerher-pink via-empowerher-pink-medium to-empowerher-pink-dark">
      <Header />
      
      <div className="container mx-auto px-6 py-16">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            💖 Guidance & Support for Women's Passion
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Discover resources, mentorship, and inspiration to pursue your dreams and build the life you want.
          </p>
        </div>

        {/* 1. Free Online Learning Platforms */}
        <Card className="bg-white rounded-lg shadow-lg mb-8 p-6">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-empowerher-pink flex items-center gap-3">
              <BookOpen className="h-7 w-7" />
              1. 🟢 Free Online Learning Platforms (For Sri Lankans – All Genders)
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* Image Upload Space */}
            <div className="mb-6 p-8 border-2 border-dashed border-gray-300 rounded-lg text-center bg-gray-50">
              <p className="text-gray-500">📸 Image Upload Space - Online Learning Platforms</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-empowerher-pink mb-3">1. Guru.lk</h4>
                <p className="text-sm text-gray-700 mb-3">A local e-learning platform offering school and life skills education.</p>
                <div className="space-y-1 text-xs text-gray-600">
                  <p>🌐 Website: www.guru.lk</p>
                  <p>📚 Subjects: School syllabus, Basic Tech, General Knowledge</p>
                  <p>💬 Language: Sinhala | Tamil | English</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-empowerher-pink mb-3">2. Women Go Digital (ICTA)</h4>
                <p className="text-sm text-gray-700 mb-3">Digital literacy and basic tech skills for all Sri Lankans.</p>
                <div className="space-y-1 text-xs text-gray-600">
                  <p>🌐 Website: www.icta.lk</p>
                  <p>📚 Topics: ICT, cybersecurity, online jobs</p>
                  <p>💬 Language: Sinhala | Tamil | English</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-empowerher-pink mb-3">3. OpenLearn.lk (OUSL)</h4>
                <p className="text-sm text-gray-700 mb-3">Offers free online courses for self-learning.</p>
                <div className="space-y-1 text-xs text-gray-600">
                  <p>🌐 Website: www.openlearn.lk</p>
                  <p>📚 Topics: English, ICT, Career Development, Ethics</p>
                  <p>💬 Language: English</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-empowerher-pink mb-3">4. YouTube – Local Channels</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Lanka Kitchen / Amma's Kitchen – Cooking & food business tips</li>
                  <li>• Thari Academy – Tamil ICT + Tech skills</li>
                  <li>• SL ICT Students – Tech, HTML, Python for beginners</li>
                  <li>• EducationTamil.lk – Grade 6–11 learning in Tamil</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-empowerher-pink mb-3">5. Coursera (Scholarships)</h4>
                <p className="text-sm text-gray-700 mb-3">Some Sri Lankans can get access to full Coursera courses for free via government/NGO partnerships.</p>
                <div className="space-y-1 text-xs text-gray-600">
                  <p>🌐 Website: www.coursera.org</p>
                  <p>🎓 Check with ICTA or UNDP Sri Lanka for free access links.</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-empowerher-pink mb-3">6. Google Digital Garage</h4>
                <p className="text-sm text-gray-700 mb-3">Free global platform that Sri Lankans can access to learn online marketing, productivity, etc.</p>
                <div className="space-y-1 text-xs text-gray-600">
                  <p>🌐 Website: https://learndigital.withgoogle.com</p>
                </div>
              </div>
            </div>

            {/* YouTube Video Space */}
            <div className="mt-6 p-8 border-2 border-dashed border-gray-300 rounded-lg text-center bg-gray-50">
              <p className="text-gray-500">🎥 YouTube Video Space - Free Online Learning Platforms</p>
            </div>

            <div className="mt-6 bg-yellow-50 p-6 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-3">🟡 Free Offline Skill Development Programs in Sri Lanka</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-gray-800">1. Vocational Training Authority of Sri Lanka (VTA)</h5>
                  <p className="text-sm text-gray-700">📍 Available islandwide | 📚 Courses: ICT, Beauty culture, Welding, Electronics, Cooking, Tailoring</p>
                </div>
                <div>
                  <h5 className="font-medium text-gray-800">2. National Youth Services Council (NYSC)</h5>
                  <p className="text-sm text-gray-700">📍 Available in all provinces | 📚 Topics: ICT, Photography, Media, Spoken English, Entrepreneurship</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 2. Government Programs */}
        <Card className="bg-white rounded-lg shadow-lg mb-8 p-6">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-empowerher-pink flex items-center gap-3">
              <Building className="h-7 w-7" />
              2. 🏛️ Government Programs for Women in Sri Lanka
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* Image Upload Space */}
            <div className="mb-6 p-8 border-2 border-dashed border-gray-300 rounded-lg text-center bg-gray-50">
              <p className="text-gray-500">📸 Image Upload Space - Government Programs for Women</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-empowerher-pink mb-3">1. Women's Bureau of Sri Lanka</h4>
                <p className="text-sm text-gray-700 mb-3">Offers training in sewing, food processing, ICT, and home gardening. Also supports women entrepreneurs with microfinance and business guidance.</p>
                <div className="space-y-1 text-xs text-gray-600">
                  <p>📍 Islandwide via Divisional Secretariats</p>
                  <p><strong>Eligibility:</strong> Sri Lankan women over 18, priority for low-income or unemployed women</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-empowerher-pink mb-3">2. Samurdhi Self-Employment Program</h4>
                <p className="text-sm text-gray-700 mb-3">Provides financial support and training for self-employment projects, especially for women in low-income households.</p>
                <div className="space-y-1 text-xs text-gray-600">
                  <p>🌐 Info via your Divisional Secretariat</p>
                  <p><strong>Eligibility:</strong> Samurdhi beneficiaries and women-headed households</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-empowerher-pink mb-3">3. Vocational Training Authority (VTA)</h4>
                <p className="text-sm text-gray-700 mb-3">Free courses in tailoring, ICT, food technology, and beauty culture. Some courses are female-only.</p>
                <div className="space-y-1 text-xs text-gray-600">
                  <p>🌐 www.vtasl.gov.lk</p>
                  <p><strong>Eligibility:</strong> Age 15+ (varies by course), open to all Sri Lankan women</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-empowerher-pink mb-3">4. National Youth Services Council (NYSC)</h4>
                <p className="text-sm text-gray-700 mb-3">Offers tech, language, and soft skills training, often targeting young girls and school leavers.</p>
                <div className="space-y-1 text-xs text-gray-600">
                  <p>🌐 www.nysc.lk</p>
                  <p><strong>Eligibility:</strong> Women aged 15–29</p>
                </div>
              </div>
            </div>

            {/* YouTube Video Space */}
            <div className="mt-6 p-8 border-2 border-dashed border-gray-300 rounded-lg text-center bg-gray-50">
              <p className="text-gray-500">🎥 YouTube Video Space - Government Programs for Women</p>
            </div>
          </CardContent>
        </Card>

        {/* 3. NGO Programs */}
        <Card className="bg-white rounded-lg shadow-lg mb-8 p-6">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-empowerher-pink flex items-center gap-3">
              <Users className="h-7 w-7" />
              3. 🤝 NGO Programs for Women in Sri Lanka
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* Image Upload Space */}
            <div className="mb-6 p-8 border-2 border-dashed border-gray-300 rounded-lg text-center bg-gray-50">
              <p className="text-gray-500">📸 Image Upload Space - NGO Programs and Support</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-empowerher-pink mb-3">1. UN Women Sri Lanka</h4>
                <p className="text-sm text-gray-700 mb-3">Supports women with entrepreneurship training, financial literacy, and digital skills.</p>
                <div className="space-y-1 text-xs text-gray-600">
                  <p><strong>Eligibility:</strong> Women aged 18+, often from vulnerable groups</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-empowerher-pink mb-3">2. Sarvodaya Women's Empowerment</h4>
                <p className="text-sm text-gray-700 mb-3">Community-based programs in rural areas to support women's skills, savings groups, leadership, and microenterprise.</p>
                <div className="space-y-1 text-xs text-gray-600">
                  <p><strong>Eligibility:</strong> Rural women and underserved communities</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-empowerher-pink mb-3">3. CARE International</h4>
                <p className="text-sm text-gray-700 mb-3">Focuses on women's leadership, safe workplaces, and inclusive employment in the private sector.</p>
                <div className="space-y-1 text-xs text-gray-600">
                  <p><strong>Eligibility:</strong> Women in apparel, estate, and informal sectors</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-empowerher-pink mb-3">4. Shakti Gender Equality Project</h4>
                <p className="text-sm text-gray-700 mb-3">Works with youth and women on gender equality, job readiness, and access to non-traditional jobs.</p>
                <div className="space-y-1 text-xs text-gray-600">
                  <p><strong>Eligibility:</strong> Young women aged 16–29</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-empowerher-pink mb-3">5. Good Market</h4>
                <p className="text-sm text-gray-700 mb-3">Supports eco and ethical businesses including many women-led startups with networking and visibility.</p>
                <div className="space-y-1 text-xs text-gray-600">
                  <p><strong>Eligibility:</strong> Open to all entrepreneurs, priority to ethical & women-led businesses</p>
                </div>
              </div>
            </div>

            {/* YouTube Video Space */}
            <div className="mt-6 p-8 border-2 border-dashed border-gray-300 rounded-lg text-center bg-gray-50">
              <p className="text-gray-500">🎥 YouTube Video Space - NGO Programs for Women</p>
            </div>
          </CardContent>
        </Card>

        {/* 4. Find a Mentor */}
        <Card className="bg-white rounded-lg shadow-lg mb-8 p-6">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-empowerher-pink flex items-center gap-3">
              <Star className="h-7 w-7" />
              4. 🌟 Find a Mentor – For Sri Lankan Women
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* Image Upload Space */}
            <div className="mb-6 p-8 border-2 border-dashed border-gray-300 rounded-lg text-center bg-gray-50">
              <p className="text-gray-500">📸 Image Upload Space - Mentorship and Guidance</p>
            </div>

            <p className="text-gray-700 mb-6">
              Finding the right mentor can help you grow in your career, start a business, or gain confidence in your personal life. 
              These mentorship opportunities are tailored for Sri Lankan women, especially in entrepreneurship, leadership, tech, and career development.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-empowerher-pink mb-3">🔹 Women in Management (WIM)</h4>
                <p className="text-sm text-gray-700 mb-3">A professional network that supports Sri Lankan women through coaching, mentoring, and business networking.</p>
                <div className="space-y-1 text-xs text-gray-600">
                  <p>📌 Fields: Business, Leadership, Career Growth</p>
                  <p><strong>Who Can Join?</strong> Women in business, working professionals, or aspiring entrepreneurs</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-empowerher-pink mb-3">🔹 Hatch Works</h4>
                <p className="text-sm text-gray-700 mb-3">Offers startup support and mentorship for women-led businesses in tech and innovation.</p>
                <div className="space-y-1 text-xs text-gray-600">
                  <p>📌 Fields: Tech, Startups, Innovation</p>
                  <p><strong>Who Can Join?</strong> Female entrepreneurs or those with business/startup ideas</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-empowerher-pink mb-3">🔹 ICTA – Women Go Digital</h4>
                <p className="text-sm text-gray-700 mb-3">Includes mentoring by digital industry professionals to guide women into tech-related careers.</p>
                <div className="space-y-1 text-xs text-gray-600">
                  <p>📌 Fields: ICT, Digital Marketing, E-Commerce</p>
                  <p><strong>Who Can Join?</strong> Women aged 16+ interested in learning ICT or starting online work</p>
                </div>
              </div>
            </div>

            {/* YouTube Video Space */}
            <div className="mt-6 p-8 border-2 border-dashed border-gray-300 rounded-lg text-center bg-gray-50">
              <p className="text-gray-500">🎥 YouTube Video Space - Finding Mentors for Women</p>
            </div>
          </CardContent>
        </Card>

        {/* 5. I Want to Start - Business Guide */}
        <Card className="bg-white rounded-lg shadow-lg mb-8 p-6">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-empowerher-pink flex items-center gap-3">
              <Lightbulb className="h-7 w-7" />
              5. 🚀 I Want to Start – A Business or Project
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* Image Upload Space */}
            <div className="mb-6 p-8 border-2 border-dashed border-gray-300 rounded-lg text-center bg-gray-50">
              <p className="text-gray-500">📸 Image Upload Space - Women Entrepreneurs</p>
            </div>

            <p className="text-gray-700 mb-6">
              Starting a business can feel overwhelming — but you're not alone. Sri Lanka offers many government programs, 
              training centres, and funding options to help women entrepreneurs take the first step.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-blue-800 mb-3">💡 Step-by-Step Guidance to Start a Business in Sri Lanka</h4>
              <ol className="text-blue-700 space-y-2">
                <li><strong>1. Identify a Business Idea</strong> - Think about what you love doing (cooking, tailoring, crafts, tech, farming). Research if there is demand in your local area or online.</li>
                <li><strong>2. Make a Simple Business Plan</strong> - What will you sell? Who are your customers? What do you need to start? (money, place, license)</li>
                <li><strong>3. Register Your Business</strong> - You can register your business at the Divisional Secretariat or online through the Department of Registrar of Companies</li>
                <li><strong>4. Get Training & Mentorship</strong> - Free workshops and training are offered by several government and NGO programs</li>
              </ol>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-empowerher-pink mb-3">🏢 Government Support & Funding</h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-medium text-gray-800">Self-Employment Promotion Initiative (SEPI)</h5>
                    <p className="text-sm text-gray-700">Offers training, small grants, and equipment for women starting micro or home-based businesses.</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800">Enterprise Sri Lanka</h5>
                    <p className="text-sm text-gray-700">Low-interest loans (from LKR 50,000 to 10 million) with grace periods and subsidies for women-led startups.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-empowerher-pink mb-3">📞 Where to Ask for Help</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• ✅ Divisional Secretariat Office (DS Office) – for Samurdhi, SEPI, loans, equipment grants</li>
                  <li>• ✅ District Industrial Development Office – for machinery, training, small grants</li>
                  <li>• ✅ Agrarian Service Center – for agriculture and food business support</li>
                  <li>• ✅ Women's Bureau Hotline: 1938 (Free advice)</li>
                </ul>
              </div>
            </div>

            {/* YouTube Video Space */}
            <div className="mt-6 p-8 border-2 border-dashed border-gray-300 rounded-lg text-center bg-gray-50">
              <p className="text-gray-500">🎥 YouTube Video Space - Starting Your Own Business</p>
            </div>
          </CardContent>
        </Card>

        {/* 6. Featured Women Stories */}
        <Card className="bg-white rounded-lg shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-empowerher-pink flex items-center gap-3">
              <Star className="h-7 w-7" />
              6. 🌟 Featured Women – Inspiring Sri Lankan Stories
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* Image Upload Space */}
            <div className="mb-6 p-8 border-2 border-dashed border-gray-300 rounded-lg text-center bg-gray-50">
              <p className="text-gray-500">📸 Image Upload Space - Inspiring Women Stories</p>
            </div>

            <p className="text-gray-700 mb-6 text-center">
              Real stories. Real power. Here are some extraordinary Sri Lankan women who turned dreams into reality and continue to inspire others. 💪🇱🇰
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {successStories.map((story, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                  <div className="bg-white p-1 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">👩‍🏫</span>
                  </div>
                  <h4 className="font-semibold text-empowerher-pink text-lg mb-2">{story.name}</h4>
                  <p className="text-blue-600 font-medium text-sm mb-3">{story.achievement}</p>
                  <p className="text-gray-700 text-sm mb-3">{story.description}</p>
                  <p className="text-empowerher-pink text-xs font-medium">🎖 {story.awards}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <h5 className="font-medium text-empowerher-pink mb-1">Jayanthi Kuru-Utumpala</h5>
                <p className="text-xs text-gray-700">First Sri Lankan to Summit Mount Everest</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <h5 className="font-medium text-empowerher-pink mb-1">Shanuki De Alwis</h5>
                <p className="text-xs text-gray-700">Media Professional & Women's Rights Activist</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <h5 className="font-medium text-empowerher-pink mb-1">Sandya Eknaligoda</h5>
                <p className="text-xs text-gray-700">Human Rights Defender</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <h5 className="font-medium text-empowerher-pink mb-1">Roshni Kariyapperuma</h5>
                <p className="text-xs text-gray-700">Entrepreneur in Waste Management</p>
              </div>
            </div>

            {/* YouTube Video Space */}
            <div className="mt-6 p-8 border-2 border-dashed border-gray-300 rounded-lg text-center bg-gray-50">
              <p className="text-gray-500">🎥 YouTube Video Space - Inspiring Women Stories</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default GuidancePage;
