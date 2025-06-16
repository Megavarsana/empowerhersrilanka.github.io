
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Lightbulb, Star, Globe, Phone, Building, Heart } from "lucide-react";

const GuidancePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-empowerher-pink via-empowerher-pink-medium to-empowerher-pink-dark">
      <Header />
      
      <div className="container mx-auto px-6 py-16">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Guidance & Passion Support
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Discover resources, mentorship, and inspiration to pursue your dreams and build the life you want.
          </p>
        </div>

        {/* Free Online Learning Platforms */}
        <Card className="content-box mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-empowerher-pink flex items-center gap-3">
              <BookOpen className="h-7 w-7" />
              🟢 Free Online Learning Platforms (For Sri Lankans – All Genders)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="info-card">
                <h3 className="font-semibold text-empowerher-pink mb-3">1. Guru.lk</h3>
                <p className="text-sm text-gray-700 mb-3">A local e-learning platform offering school and life skills education.</p>
                <div className="space-y-1 text-xs text-gray-600">
                  <p>🌐 Website: www.guru.lk</p>
                  <p>📚 Subjects: School syllabus, Basic Tech, General Knowledge</p>
                  <p>💬 Language: Sinhala | Tamil | English</p>
                </div>
              </div>

              <div className="info-card">
                <h3 className="font-semibold text-empowerher-pink mb-3">2. Women Go Digital (ICTA)</h3>
                <p className="text-sm text-gray-700 mb-3">Digital literacy and basic tech skills for all Sri Lankans.</p>
                <div className="space-y-1 text-xs text-gray-600">
                  <p>🌐 Website: www.icta.lk</p>
                  <p>📚 Topics: ICT, cybersecurity, online jobs</p>
                  <p>💬 Language: Sinhala | Tamil | English</p>
                </div>
              </div>

              <div className="info-card">
                <h3 className="font-semibold text-empowerher-pink mb-3">3. OpenLearn.lk (OUSL)</h3>
                <p className="text-sm text-gray-700 mb-3">Offers free online courses for self-learning.</p>
                <div className="space-y-1 text-xs text-gray-600">
                  <p>🌐 Website: www.openlearn.lk</p>
                  <p>📚 Topics: English, ICT, Career Development, Ethics</p>
                  <p>💬 Language: English</p>
                </div>
              </div>

              <div className="info-card">
                <h3 className="font-semibold text-empowerher-pink mb-3">4. YouTube – Local Channels</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Lanka Kitchen / Amma's Kitchen – Cooking & food business tips</li>
                  <li>• Thari Academy – Tamil ICT + Tech skills</li>
                  <li>• SL ICT Students – Tech, HTML, Python for beginners</li>
                  <li>• EducationTamil.lk – Grade 6–11 learning in Tamil</li>
                </ul>
              </div>

              <div className="info-card">
                <h3 className="font-semibold text-empowerher-pink mb-3">5. Coursera (Scholarships)</h3>
                <p className="text-sm text-gray-700 mb-3">Some Sri Lankans can get access to full Coursera courses for free via government/NGO partnerships.</p>
                <div className="space-y-1 text-xs text-gray-600">
                  <p>🌐 Website: www.coursera.org</p>
                  <p>🎓 Check with ICTA or UNDP Sri Lanka for free access links.</p>
                </div>
              </div>

              <div className="info-card">
                <h3 className="font-semibold text-empowerher-pink mb-3">6. Google Digital Garage</h3>
                <p className="text-sm text-gray-700 mb-3">Free global platform that Sri Lankans can access to learn online marketing, productivity, etc.</p>
                <div className="space-y-1 text-xs text-gray-600">
                  <p>🌐 Website: https://learndigital.withgoogle.com</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Free Offline Skill Development */}
        <Card className="content-box mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-empowerher-pink flex items-center gap-3">
              <Building className="h-7 w-7" />
              🟡 Free Offline Skill Development Programs in Sri Lanka
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="info-card">
                <h3 className="font-semibold text-empowerher-pink mb-3">1. Vocational Training Authority of Sri Lanka (VTA)</h3>
                <div className="space-y-1 text-sm text-gray-700">
                  <p>📍 Available islandwide</p>
                  <p>📚 Courses: ICT, Beauty culture, Welding, Electronics, Cooking, Tailoring</p>
                  <p>🌐 www.vtasl.gov.lk</p>
                </div>
              </div>

              <div className="info-card">
                <h3 className="font-semibold text-empowerher-pink mb-3">2. Department of Manpower & Employment</h3>
                <div className="space-y-1 text-sm text-gray-700">
                  <p>📍 Centers in all districts</p>
                  <p>📚 Focus: Plumbing, Carpentry, Motor Mechanics, ICT, Sewing, Bakery</p>
                  <p>🌐 www.dome.gov.lk</p>
                </div>
              </div>

              <div className="info-card">
                <h3 className="font-semibold text-empowerher-pink mb-3">3. Women's Bureau of Sri Lanka</h3>
                <div className="space-y-1 text-sm text-gray-700">
                  <p>📚 Courses: Dressmaking, Home Gardening, Bakery, ICT</p>
                  <p>📍 Contact via Divisional Secretariat</p>
                  <p>🌐 childwomenmin.gov.lk</p>
                </div>
              </div>

              <div className="info-card">
                <h3 className="font-semibold text-empowerher-pink mb-3">4. YWCA Sri Lanka</h3>
                <div className="space-y-1 text-sm text-gray-700">
                  <p>📍 Colombo, Batticaloa, Kandy, Jaffna</p>
                  <p>📚 Courses: Spoken English, Cooking, ICT, Soft Skills</p>
                  <p>🌐 ywcasrilanka.org</p>
                </div>
              </div>

              <div className="info-card">
                <h3 className="font-semibold text-empowerher-pink mb-3">5. Sarvodaya Shramadana Movement</h3>
                <div className="space-y-1 text-sm text-gray-700">
                  <p>📍 Many rural areas</p>
                  <p>📚 Topics: Leadership, Crafts, Food production, Organic gardening</p>
                  <p>🌐 sarvodaya.org</p>
                </div>
              </div>

              <div className="info-card">
                <h3 className="font-semibold text-empowerher-pink mb-3">6. National Youth Services Council (NYSC)</h3>
                <div className="space-y-1 text-sm text-gray-700">
                  <p>📍 Available in all provinces</p>
                  <p>📚 Topics: ICT, Photography, Media, Spoken English, Entrepreneurship</p>
                  <p>🌐 www.nysc.lk</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Government Programs */}
        <Card className="content-box mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-empowerher-pink flex items-center gap-3">
              <Building className="h-7 w-7" />
              🏛️ Government Programs for Women in Sri Lanka
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="info-card">
                <h3 className="font-semibold text-empowerher-pink mb-3">1. Women's Bureau of Sri Lanka</h3>
                <p className="text-sm text-gray-700 mb-3">Offers training in sewing, food processing, ICT, and home gardening. Also supports women entrepreneurs with microfinance and business guidance.</p>
                <div className="space-y-1 text-xs text-gray-600">
                  <p>🌐 Website</p>
                  <p>📍 Islandwide via Divisional Secretariats</p>
                  <p><strong>Eligibility:</strong> Sri Lankan women over 18, priority for low-income or unemployed women</p>
                </div>
              </div>

              <div className="info-card">
                <h3 className="font-semibold text-empowerher-pink mb-3">2. Samurdhi Self-Employment Program</h3>
                <p className="text-sm text-gray-700 mb-3">Provides financial support and training for self-employment projects, especially for women in low-income households.</p>
                <div className="space-y-1 text-xs text-gray-600">
                  <p>🌐 Info via your Divisional Secretariat</p>
                  <p><strong>Eligibility:</strong> Samurdhi beneficiaries and women-headed households</p>
                </div>
              </div>

              <div className="info-card">
                <h3 className="font-semibold text-empowerher-pink mb-3">3. Vocational Training Authority (VTA)</h3>
                <p className="text-sm text-gray-700 mb-3">Free courses in tailoring, ICT, food technology, and beauty culture. Some courses are female-only.</p>
                <div className="space-y-1 text-xs text-gray-600">
                  <p>🌐 www.vtasl.gov.lk</p>
                  <p><strong>Eligibility:</strong> Age 15+ (varies by course), open to all Sri Lankan women</p>
                </div>
              </div>

              <div className="info-card">
                <h3 className="font-semibold text-empowerher-pink mb-3">4. National Youth Services Council (NYSC)</h3>
                <p className="text-sm text-gray-700 mb-3">Offers tech, language, and soft skills training, often targeting young girls and school leavers.</p>
                <div className="space-y-1 text-xs text-gray-600">
                  <p>🌐 www.nysc.lk</p>
                  <p><strong>Eligibility:</strong> Women aged 15–29</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* NGO Programs */}
        <Card className="content-box mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-empowerher-pink flex items-center gap-3">
              <Users className="h-7 w-7" />
              🤝 NGO Programs for Women in Sri Lanka
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="info-card">
                <h3 className="font-semibold text-empowerher-pink mb-3">1. UN Women Sri Lanka</h3>
                <p className="text-sm text-gray-700 mb-3">Supports women with entrepreneurship training, financial literacy, and digital skills.</p>
                <div className="space-y-1 text-xs text-gray-600">
                  <p>🌐 UN Women – Sri Lanka</p>
                  <p><strong>Eligibility:</strong> Women aged 18+, often from vulnerable groups</p>
                </div>
              </div>

              <div className="info-card">
                <h3 className="font-semibold text-empowerher-pink mb-3">2. Sarvodaya Women's Empowerment</h3>
                <p className="text-sm text-gray-700 mb-3">Community-based programs in rural areas to support women's skills, savings groups, leadership, and microenterprise.</p>
                <div className="space-y-1 text-xs text-gray-600">
                  <p>🌐 www.sarvodaya.org</p>
                  <p><strong>Eligibility:</strong> Rural women and underserved communities</p>
                </div>
              </div>

              <div className="info-card">
                <h3 className="font-semibold text-empowerher-pink mb-3">3. CARE International</h3>
                <p className="text-sm text-gray-700 mb-3">Focuses on women's leadership, safe workplaces, and inclusive employment in the private sector.</p>
                <div className="space-y-1 text-xs text-gray-600">
                  <p>🌐 CARE Sri Lanka</p>
                  <p><strong>Eligibility:</strong> Women in apparel, estate, and informal sectors</p>
                </div>
              </div>

              <div className="info-card">
                <h3 className="font-semibold text-empowerher-pink mb-3">4. Shakti Gender Equality Project</h3>
                <p className="text-sm text-gray-700 mb-3">Works with youth and women on gender equality, job readiness, and access to non-traditional jobs.</p>
                <div className="space-y-1 text-xs text-gray-600">
                  <p>🌐 WUSC Sri Lanka</p>
                  <p><strong>Eligibility:</strong> Young women aged 16–29</p>
                </div>
              </div>

              <div className="info-card">
                <h3 className="font-semibold text-empowerher-pink mb-3">5. Good Market</h3>
                <p className="text-sm text-gray-700 mb-3">Supports eco and ethical businesses including many women-led startups with networking and visibility.</p>
                <div className="space-y-1 text-xs text-gray-600">
                  <p>🌐 www.goodmarket.global</p>
                  <p><strong>Eligibility:</strong> Open to all entrepreneurs, priority to ethical & women-led businesses</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Find a Mentor */}
        <Card className="content-box mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-empowerher-pink flex items-center gap-3">
              <Star className="h-7 w-7" />
              🌟 Find a Mentor – For Sri Lankan Women
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-6">
              Finding the right mentor can help you grow in your career, start a business, or gain confidence in your personal life. 
              These mentorship opportunities are tailored for Sri Lankan women, especially in entrepreneurship, leadership, tech, and career development.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="info-card">
                <h3 className="font-semibold text-empowerher-pink mb-3">🔹 Women in Management (WIM)</h3>
                <p className="text-sm text-gray-700 mb-3">A professional network that supports Sri Lankan women through coaching, mentoring, and business networking.</p>
                <div className="space-y-1 text-xs text-gray-600">
                  <p>📌 Fields: Business, Leadership, Career Growth</p>
                  <p><strong>Who Can Join?</strong> Women in business, working professionals, or aspiring entrepreneurs</p>
                </div>
              </div>

              <div className="info-card">
                <h3 className="font-semibold text-empowerher-pink mb-3">🔹 Hatch Works</h3>
                <p className="text-sm text-gray-700 mb-3">Offers startup support and mentorship for women-led businesses in tech and innovation.</p>
                <div className="space-y-1 text-xs text-gray-600">
                  <p>📌 Fields: Tech, Startups, Innovation</p>
                  <p><strong>Who Can Join?</strong> Female entrepreneurs or those with business/startup ideas</p>
                </div>
              </div>

              <div className="info-card">
                <h3 className="font-semibold text-empowerher-pink mb-3">🔹 ICTA – Women Go Digital</h3>
                <p className="text-sm text-gray-700 mb-3">Includes mentoring by digital industry professionals to guide women into tech-related careers.</p>
                <div className="space-y-1 text-xs text-gray-600">
                  <p>📌 Fields: ICT, Digital Marketing, E-Commerce</p>
                  <p><strong>Who Can Join?</strong> Women aged 16+ interested in learning ICT or starting online work</p>
                </div>
              </div>

              <div className="info-card">
                <h3 className="font-semibold text-empowerher-pink mb-3">🔹 SheLeads Program</h3>
                <p className="text-sm text-gray-700 mb-3">Empowers young women with leadership and environmental activism skills through training and mentorship.</p>
                <div className="space-y-1 text-xs text-gray-600">
                  <p>📌 Fields: Environment, Leadership, Community Projects</p>
                  <p><strong>Who Can Join?</strong> Young women aged 18–30 from rural or underserved communities</p>
                </div>
              </div>

              <div className="info-card">
                <h3 className="font-semibold text-empowerher-pink mb-3">🔹 SLASSCOM – WTech Forum</h3>
                <p className="text-sm text-gray-700 mb-3">Offers mentorship for school leavers, undergraduates, and working women to enter and thrive in the tech industry.</p>
                <div className="space-y-1 text-xs text-gray-600">
                  <p>📌 Fields: ICT, Tech, Software, Cybersecurity</p>
                  <p><strong>Who Can Join?</strong> Women and girls interested in tech careers</p>
                </div>
              </div>

              <div className="info-card">
                <h3 className="font-semibold text-empowerher-pink mb-3">🔹 Global Shapers Colombo</h3>
                <p className="text-sm text-gray-700 mb-3">Run by young professionals under the World Economic Forum, offering leadership mentoring and community engagement.</p>
                <div className="space-y-1 text-xs text-gray-600">
                  <p>📌 Fields: Leadership, Policy, Social Change</p>
                  <p><strong>Who Can Join?</strong> Women under 30 with a passion for social impact</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Start a Business */}
        <Card className="content-box mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-empowerher-pink flex items-center gap-3">
              <Lightbulb className="h-7 w-7" />
              🚀 I Want to Start – A Business or Project
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-6">
              Starting a business can feel overwhelming — but you're not alone. Sri Lanka offers many government programs, 
              training centres, and funding options to help women entrepreneurs take the first step.
            </p>

            <div className="content-box-small mb-8">
              <h3 className="font-semibold text-lg mb-4 text-empowerher-pink">💡 Step-by-Step Guidance to Start a Business in Sri Lanka</h3>
              <ol className="space-y-3 text-gray-700">
                <li><strong>1. Identify a Business Idea</strong>
                  <ul className="ml-4 mt-1 space-y-1 text-sm">
                    <li>◦ Think about what you love doing (cooking, tailoring, crafts, tech, farming).</li>
                    <li>◦ Research if there is demand in your local area or online.</li>
                  </ul>
                </li>
                <li><strong>2. Make a Simple Business Plan</strong>
                  <ul className="ml-4 mt-1 space-y-1 text-sm">
                    <li>◦ What will you sell?</li>
                    <li>◦ Who are your customers?</li>
                    <li>◦ What do you need to start? (money, place, license)</li>
                  </ul>
                </li>
                <li><strong>3. Register Your Business</strong>
                  <ul className="ml-4 mt-1 space-y-1 text-sm">
                    <li>◦ You can register your business at the Divisional Secretariat or online through the Department of Registrar of Companies</li>
                    <li>◦ 🌐 Register a Business Online</li>
                  </ul>
                </li>
                <li><strong>4. Get Training & Mentorship</strong>
                  <ul className="ml-4 mt-1 space-y-1 text-sm">
                    <li>◦ Free workshops and training are offered by several government and NGO programs</li>
                  </ul>
                </li>
              </ol>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="info-card">
                <h3 className="font-semibold text-empowerher-pink mb-3">🏢 Government Support & Funding</h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li><strong>SEPI (Ministry of Women and Child Affairs):</strong> Training, small grants, and equipment for women starting micro or home-based businesses</li>
                  <li><strong>Samurdhi Development Department:</strong> Micro-loans and skills development for Samurdhi recipients</li>
                  <li><strong>Enterprise Sri Lanka:</strong> Low-interest loans (LKR 50,000 to 10 million) with grace periods for women-led startups</li>
                  <li><strong>Industrial Development Board (IDB):</strong> Guidance, machinery, business registration help, and funding links</li>
                </ul>
              </div>

              <div className="info-card">
                <h3 className="font-semibold text-empowerher-pink mb-3">📞 Where to Ask for Help</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✅ <strong>Divisional Secretariat Office (DS Office)</strong> – for Samurdhi, SEPI, loans, equipment grants</li>
                  <li>✅ <strong>District Industrial Development Office</strong> – for machinery, training, small grants</li>
                  <li>✅ <strong>Agrarian Service Center</strong> – for agriculture and food business support</li>
                  <li>✅ <strong>Women's Bureau Hotline: 1938</strong> (Free advice)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Featured Women */}
        <Card className="content-box">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-empowerher-pink flex items-center gap-3">
              <Heart className="h-7 w-7" />
              🌟 Featured Women – Inspiring Sri Lankan Stories
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-6">
              Real stories. Real power. Here are some extraordinary Sri Lankan women who turned dreams into reality and continue to inspire others. 💪🇱🇰
            </p>

            <div className="mb-6">
              <div className="aspect-video w-full mb-6 rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/Z1wlyEWJahM"
                  title="Inspiring Stories of Sri Lankan Women"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="feature-card">
                <h3 className="font-semibold text-empowerher-pink mb-3">🔹 Dr. Asha de Vos</h3>
                <p className="text-sm text-gray-700 mb-2">Marine Biologist & Ocean Advocate</p>
                <p className="text-xs text-gray-600 mb-2">Founder of Oceanswell, Sri Lanka's first marine conservation research organization. She's the first Sri Lankan to earn a PhD in marine mammal research.</p>
                <p className="text-xs text-empowerher-pink">🎖 Awards: BBC 100 Women, Rolex Laureate, National Hero</p>
              </div>

              <div className="feature-card">
                <h3 className="font-semibold text-empowerher-pink mb-3">🔹 Tharushi Karunaratne</h3>
                <p className="text-sm text-gray-700 mb-2">Asia's Fastest 800m Runner</p>
                <p className="text-xs text-gray-600 mb-2">A young athlete from rural Sri Lanka who won gold at the Asian Games 2023, making history in athletics.</p>
                <p className="text-xs text-empowerher-pink">🏅 From humble beginnings to Asian champion</p>
              </div>

              <div className="feature-card">
                <h3 className="font-semibold text-empowerher-pink mb-3">🔹 Jayanthi Kuru-Utumpala</h3>
                <p className="text-sm text-gray-700 mb-2">First Sri Lankan to Summit Mount Everest</p>
                <p className="text-xs text-gray-600 mb-2">In 2016, she became the first Sri Lankan to climb Mount Everest and is now a fierce advocate for gender equality.</p>
                <p className="text-xs text-empowerher-pink">🚩 Trailblazer for women in adventure and leadership</p>
              </div>

              <div className="feature-card">
                <h3 className="font-semibold text-empowerher-pink mb-3">🔹 Sandya Eknaligoda</h3>
                <p className="text-sm text-gray-700 mb-2">Human Rights Defender</p>
                <p className="text-xs text-gray-600 mb-2">Wife of missing journalist Prageeth Eknaligoda, she became a powerful human rights advocate, fighting for justice and truth.</p>
                <p className="text-xs text-empowerher-pink">🕊 Awarded International Woman of Courage by the U.S. State Dept</p>
              </div>

              <div className="feature-card">
                <h3 className="font-semibold text-empowerher-pink mb-3">🔹 Shreen Saroor</h3>
                <p className="text-sm text-gray-700 mb-2">Peacebuilder & Founder</p>
                <p className="text-xs text-gray-600 mb-2">A war-displaced Muslim woman who empowers Tamil, Muslim, and Sinhala women to rebuild lives through unity and entrepreneurship.</p>
                <p className="text-xs text-empowerher-pink">🏅 Awarded UN Human Rights Prize</p>
              </div>

              <div className="feature-card">
                <h3 className="font-semibold text-empowerher-pink mb-3">🔹 Women Farmers - East</h3>
                <p className="text-sm text-gray-700 mb-2">Building Resilience After War</p>
                <p className="text-xs text-gray-600 mb-2">Through women-led co-ops and government support, hundreds of women in the East are now self-sufficient farmers and entrepreneurs.</p>
                <p className="text-xs text-empowerher-pink">🌾 From survivors to leaders</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default GuidancePage;
