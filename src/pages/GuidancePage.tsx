import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Lightbulb, Star, Globe, Phone, Building, Heart } from "lucide-react";
const GuidancePage = () => {
  const successStories = [{
    name: "Dr. Asha de Vos",
    achievement: "Marine Biologist & Ocean Advocate",
    description: "Founder of Oceanswell, Sri Lanka's first marine conservation research organization. She's the first Sri Lankan to earn a PhD in marine mammal research and works to protect blue whales around our island.",
    awards: "BBC 100 Women, Rolex Laureate, National Hero"
  }, {
    name: "Tharushi Karunaratne",
    achievement: "Asia's Fastest 800m Runner",
    description: "A young athlete from rural Sri Lanka who won gold at the Asian Games 2023, making history in athletics and becoming a role model for young girls.",
    awards: "From humble beginnings to Asian champion"
  }, {
    name: "Deshani Ariyawansa",
    achievement: "AI Innovator & Youth Tech Leader",
    description: "A schoolgirl who won international awards for building AI systems for the blind and voice-controlled systems for the elderly.",
    awards: "Tech from the village, changing the world"
  }];
  return <div className="min-h-screen bg-gradient-to-br from-empowerher-pink via-empowerher-pink-medium to-empowerher-pink-dark">
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

        {/* Quick Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          <button onClick={() => document.getElementById('learning-platforms')?.scrollIntoView({
          behavior: 'smooth'
        })} className="bg-white text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors shadow-sm border border-gray-200 flex items-center justify-center gap-2">
            <BookOpen className="h-4 w-4" />
            Learning Platforms
          </button>
          <button onClick={() => document.getElementById('government-programs')?.scrollIntoView({
          behavior: 'smooth'
        })} className="bg-white text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors shadow-sm border border-gray-200 flex items-center justify-center gap-2">
            <Building className="h-4 w-4" />
            Gov Programs
          </button>
          <button onClick={() => document.getElementById('find-mentor')?.scrollIntoView({
          behavior: 'smooth'
        })} className="bg-white text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors shadow-sm border border-gray-200 flex items-center justify-center gap-2">
            <Users className="h-4 w-4" />
            Find Mentor
          </button>
          <button onClick={() => document.getElementById('start-business')?.scrollIntoView({
          behavior: 'smooth'
        })} className="bg-white text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors shadow-sm border border-gray-200 flex items-center justify-center gap-2">
            <Lightbulb className="h-4 w-4" />
            Start Business
          </button>
          <button onClick={() => document.getElementById('featured-women')?.scrollIntoView({
          behavior: 'smooth'
        })} className="bg-white text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors shadow-sm border border-gray-200 flex items-center justify-center gap-2">
            <Star className="h-4 w-4" />
            Featured Women
          </button>
        </div>

        {/* 1. Free Online Learning Platforms */}
        <Card id="learning-platforms" className="bg-white rounded-lg shadow-lg mb-8 p-6">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-empowerher-pink flex items-center gap-3">
              <BookOpen className="h-7 w-7" />
              1. 🟢 Free Online Learning Platforms (For Sri Lankans – All Genders)
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* Learning Platforms Image */}
            <div className="mb-6 rounded-lg overflow-hidden">
              <img alt="Online learning platforms and education for women's development" className="w-full h-64 object-cover" src="/lovable-uploads/bd43042f-a34a-4175-85de-0426b112519b.jpg" />
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

            {/* Learning Platforms Video */}
            <div className="mt-6">
              <h4 className="font-semibold text-gray-800 mb-2">🎥 Free Online Learning Platforms</h4>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/HL-VEHLTzQc" title="Free Online Learning Platforms" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full"></iframe>
              </div>
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
        <Card id="government-programs" className="bg-white rounded-lg shadow-lg mb-8 p-6">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-empowerher-pink flex items-center gap-3">
              <Building className="h-7 w-7" />
              2. 🏛️ Government Programs for Women in Sri Lanka
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* Government Programs Image */}
            <div className="mb-6 rounded-lg overflow-hidden">
              <img alt="Government programs and support for women's development" className="w-full h-64 object-cover" src="/lovable-uploads/54e41345-3e6f-4d0d-bcd2-6ce3b483efcb.jpg" />
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

            {/* Government Programs Video */}
            <div className="mt-6">
              <h4 className="font-semibold text-gray-800 mb-2">🎥 Government Programs for Women</h4>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/CUmFFCd_9zI" title="Government Programs for Women" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full"></iframe>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 3. Find a Mentor */}
        <Card id="find-mentor" className="bg-white rounded-lg shadow-lg mb-8 p-6">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-empowerher-pink flex items-center gap-3">
              <Users className="h-7 w-7" />
              3. 🌟 Find a Mentor – For Sri Lankan Women
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* Find Mentor Image */}
            <div className="mb-6 rounded-lg overflow-hidden">
              <img alt="Mentorship and guidance for women's career development" className="w-full h-64 object-cover" src="/lovable-uploads/e4690e00-5092-4862-9ec6-530948b62205.jpg" />
            </div>

            <div className="mb-6 bg-blue-50 p-6 rounded-lg">
              <p className="text-blue-800">Finding the right mentor can help you grow in your career, start a business, or gain confidence in your personal life. These mentorship opportunities are tailored for Sri Lankan women, especially in entrepreneurship, leadership, tech, and career development.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-empowerher-pink mb-2">1. Women in Management (WIM)</h4>
                <p className="text-sm text-gray-700 mb-2">Professional network supporting Sri Lankan women through coaching and mentoring.</p>
                <p className="text-xs text-gray-600">Fields: Business, Leadership, Career Growth</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-empowerher-pink mb-2">2. Hatch Works</h4>
                <p className="text-sm text-gray-700 mb-2">Startup support and mentorship for women-led businesses in tech and innovation.</p>
                <p className="text-xs text-gray-600">Fields: Tech, Startups, Innovation</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-empowerher-pink mb-2">3. ICTA – Women Go Digital</h4>
                <p className="text-sm text-gray-700 mb-2">Mentoring by digital industry professionals to guide women into tech careers.</p>
                <p className="text-xs text-gray-600">Fields: ICT, Digital Marketing, E-Commerce</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-empowerher-pink mb-2">4. Global Shapers Colombo</h4>
                <p className="text-sm text-gray-700 mb-2">Leadership mentoring and community engagement for young professionals.</p>
                <p className="text-xs text-gray-600">Fields: Leadership, Policy, Social Change</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-empowerher-pink mb-2">5. SLASSCOM – Women in IT</h4>
                <p className="text-sm text-gray-700 mb-2">Mentorship for women to enter and thrive in the tech industry.</p>
                <p className="text-xs text-gray-600">Fields: ICT, Tech, Software, Cybersecurity</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-empowerher-pink mb-2">6. British Council Sri Lanka</h4>
                <p className="text-sm text-gray-700 mb-2">Women in STEM mentorship through UK-Sri Lanka partnerships.</p>
                <p className="text-xs text-gray-600">Fields: Science, Engineering, Math, Technology</p>
              </div>
            </div>

            {/* Find Mentor Video */}
            <div className="mt-6">
              <h4 className="font-semibold text-gray-800 mb-2">🎥 Finding the Right Mentor</h4>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/ZQUxL4jm9BA" title="Finding the Right Mentor" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full"></iframe>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 4. I Want to Start */}
        <Card id="start-business" className="bg-white rounded-lg shadow-lg mb-8 p-6">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-empowerher-pink flex items-center gap-3">
              <Lightbulb className="h-7 w-7" />
              4. 🚀 I Want to Start – A Business or Project
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* I Want to Start Image */}
            <div className="mb-6 rounded-lg overflow-hidden">
              <img alt="Starting new business ventures and entrepreneurship for women" className="w-full h-64 object-cover" src="/lovable-uploads/e7f799ee-f6ab-497b-8d30-b301ada9e24b.jpg" />
            </div>

            <div className="mb-6 bg-green-50 p-6 rounded-lg">
              <p className="text-green-800">Starting a business can feel overwhelming — but you're not alone. Sri Lanka offers many government programs, training centres, and funding options to help women entrepreneurs take the first step.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-empowerher-pink mb-3">💡 Step-by-Step Guidance</h4>
                <ol className="text-gray-700 space-y-2">
                  <li>1. <strong>Identify a Business Idea</strong> - Think about what you love doing</li>
                  <li>2. <strong>Make a Simple Business Plan</strong> - What will you sell? Who are your customers?</li>
                  <li>3. <strong>Register Your Business</strong> - At Divisional Secretariat or online</li>
                  <li>4. <strong>Get Training & Mentorship</strong> - Free workshops available</li>
                </ol>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-empowerher-pink mb-3">🏢 Government Support & Funding</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• <strong>SEPI</strong> - Training, small grants, equipment for women</li>
                  <li>• <strong>Samurdhi</strong> - Micro-loans for beneficiaries</li>
                  <li>• <strong>Enterprise Sri Lanka</strong> - Low-interest loans (LKR 50K-10M)</li>
                  <li>• <strong>NEDA</strong> - Free business training and mentor support</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-purple-50 p-6 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-3">📞 Where to Ask for Help</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-purple-700 text-sm">• Divisional Secretariat Office (DS) - for loans, equipment grants</p>
                  <p className="text-purple-700 text-sm">• District Industrial Development Office - for machinery, training</p>
                </div>
                <div>
                  <p className="text-purple-700 text-sm">• Agrarian Service Center - for agriculture business</p>
                  <p className="text-purple-700 text-sm">• Women's Bureau Hotline: 1938 (Free advice)</p>
                </div>
              </div>
            </div>

            {/* I Want to Start Video */}
            <div className="mt-6">
              <h4 className="font-semibold text-gray-800 mb-2">🎥 Starting Your Own Business</h4>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/NqONxaJXysg" title="Starting Your Own Business" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full"></iframe>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 5. Featured Women */}
        <Card id="featured-women" className="bg-white rounded-lg shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-empowerher-pink flex items-center gap-3">
              <Star className="h-7 w-7" />
              5. 🌟 Featured Women – Inspiring Sri Lankan Stories
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* Featured Women Image */}
            <div className="mb-6 rounded-lg overflow-hidden">
              <img alt="Successful Sri Lankan women stories and achievements" className="w-full h-64 object-cover" src="/lovable-uploads/d2842b23-aa16-41df-8aa1-b13054fb4f8e.jpg" />
            </div>

            <div className="mb-6 text-center">
              <p className="text-gray-700 text-lg">Real stories. Real power. Here are some extraordinary Sri Lankan women who turned dreams into reality and continue to inspire others. 💪🇱🇰</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {successStories.map((story, index) => <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                  <h4 className="font-semibold text-empowerher-pink text-lg mb-2">{story.name}</h4>
                  <p className="text-purple-600 font-medium text-sm mb-3">{story.achievement}</p>
                  <p className="text-gray-700 text-sm mb-3">{story.description}</p>
                  <p className="text-green-700 text-xs font-medium">🏅 {story.awards}</p>
                </div>)}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <h5 className="font-semibold text-empowerher-pink mb-2">Jayanthi Kuru-Utumpala</h5>
                <p className="text-xs text-gray-700">First Sri Lankan to Summit Mount Everest</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <h5 className="font-semibold text-empowerher-pink mb-2">Shanuki De Alwis</h5>
                <p className="text-xs text-gray-700">Media Professional & Women's Rights Activist</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <h5 className="font-semibold text-empowerher-pink mb-2">Sandya Eknaligoda</h5>
                <p className="text-xs text-gray-700">Human Rights Defender</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <h5 className="font-semibold text-empowerher-pink mb-2">Roshni Kariyapperuma</h5>
                <p className="text-xs text-gray-700">Entrepreneur in Waste Management</p>
              </div>
            </div>

            {/* Featured Women Video */}
            <div className="mt-6">
              <h4 className="font-semibold text-gray-800 mb-2">🎥 Inspiring Sri Lankan Women Stories</h4>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/gbCYzTnNErs" title="Inspiring Sri Lankan Women Stories" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full"></iframe>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>;
};
export default GuidancePage;