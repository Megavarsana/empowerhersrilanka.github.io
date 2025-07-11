import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Shield, Users, Phone, DollarSign } from "lucide-react";

const SupportPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-empowerher-pink via-empowerher-pink-medium to-empowerher-pink-dark">
      <Header />
      
      <div className="container mx-auto px-6 py-16">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            💬 Support for Women's Problems
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            You're not alone. Find comprehensive support, resources, and guidance for every challenge you face.
          </p>
        </div>

        {/* Quick Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
          <button 
            onClick={() => document.getElementById('mental-health')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors shadow-sm border border-gray-200 flex items-center justify-center gap-2"
          >
            <Heart className="h-4 w-4" />
            Mental Health Tips
          </button>
          <button 
            onClick={() => document.getElementById('sexual-assault')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors shadow-sm border border-gray-200 flex items-center justify-center gap-2"
          >
            <Shield className="h-4 w-4" />
            Dealing Sexual Assault
          </button>
          <button 
            onClick={() => document.getElementById('toxic-relationships')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors shadow-sm border border-gray-200 flex items-center justify-center gap-2"
          >
            <Users className="h-4 w-4" />
            Toxic Relationships
          </button>
          <button 
            onClick={() => document.getElementById('counselling-platforms')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors shadow-sm border border-gray-200 flex items-center justify-center gap-2"
          >
            <Phone className="h-4 w-4" />
            Counselling Platforms
          </button>
          <button 
            onClick={() => document.getElementById('financial-independence')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors shadow-sm border border-gray-200 flex items-center justify-center gap-2"
          >
            <DollarSign className="h-4 w-4" />
            Financial Independence
          </button>
        </div>

        {/* 1. Mental Health Tips for Women */}
        <Card id="mental-health" className="bg-white rounded-lg shadow-lg mb-8 p-6">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-empowerher-pink flex items-center gap-3">
              <Heart className="h-7 w-7" />
              1. 🌸 Mental Health Tips for Women
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/9f6af2da-e269-47b6-93f8-2ab58eb90d53.png" 
                alt="Mental Health Tips for Women"
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>

            {/* Mental Health Video */}
            <div className="mb-6">
              <h4 className="font-semibold text-gray-800 mb-2">🎥 Mental Health Tips for Women</h4>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/u_eQYwT1ANA"
                  title="Mental Health Tips for Women"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">🌿 1. Prioritize Self-Care</h3>
                  <p className="text-sm text-gray-700">Set aside time daily for things that bring you peace and joy — even just 10–15 minutes. Take breaks without guilt. Rest is not laziness.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">🧠 2. Manage Stress with Mindfulness</h3>
                  <p className="text-sm text-gray-700">Practice meditation, deep breathing, or yoga regularly. Apps like Calm, Headspace, or Insight Timer can help.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">💬 3. Talk It Out</h3>
                  <p className="text-sm text-gray-700">Don't bottle things up. Talk to a trusted friend, family member, or therapist. Journaling your thoughts can also be therapeutic.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">🏃‍♀️ 4. Move Your Body</h3>
                  <p className="text-sm text-gray-700">Regular exercise (even light walks or dancing at home) boosts mood and reduces anxiety. Aim for at least 30 minutes, 3–5 times a week.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">🛌 5. Get Good Sleep</h3>
                  <p className="text-sm text-gray-700">Aim for 7–9 hours of restful sleep per night. Limit screen time before bed and create a calming bedtime routine.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">🍎 6. Eat Nourishing Food</h3>
                  <p className="text-sm text-gray-700">Balanced meals with fruits, veggies, and whole grains support brain health. Stay hydrated and limit excessive caffeine or alcohol.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">❤️ 7. Set Boundaries</h3>
                  <p className="text-sm text-gray-700">Learn to say no without feeling guilty. Protect your time and energy — your peace matters.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">🧘‍♀️ 8. Reduce Social Media Overload</h3>
                  <p className="text-sm text-gray-700">Take digital detoxes when needed. Follow pages that uplift and unfollow anything that causes comparison or stress.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">👭 9. Build a Support System</h3>
                  <p className="text-sm text-gray-700">Surround yourself with people who encourage and empower you. Find women's support groups or online communities if needed.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">👩‍⚕️ 10. Don't Be Afraid to Seek Help</h3>
                  <p className="text-sm text-gray-700">Therapy is strength, not weakness. If you're struggling, speak to a mental health professional. You deserve help and healing.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 2. Dealing with Sexual Assault */}
        <Card id="sexual-assault" className="bg-white rounded-lg shadow-lg mb-8 p-6">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-empowerher-pink flex items-center gap-3">
              <Shield className="h-7 w-7" />
              2. 💔 Dealing with Sexual Assault
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/2b17da83-46dd-4da7-998b-f42f20481895.png" 
                alt="Dealing with Sexual Assault Support"
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>

            <div className="space-y-6">
              <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                <h3 className="font-bold text-lg mb-4 text-red-800">🚨 What To Do After a Sexual Assault</h3>
                <ul className="space-y-2 text-sm text-red-700">
                  <li>• Find a safe place immediately — a friend's house, a relative's home, or a public location.</li>
                  <li>• Do not shower, change clothes, or clean up before a medical examination to preserve evidence.</li>
                  <li>• Seek medical care even if there are no visible injuries. Medical support can help with physical care, STI treatment, and emergency contraception.</li>
                  <li>• Try to record or write down details about the incident while they're fresh in your memory (for legal support later).</li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3">📝 How to Report Sexual Assault in Sri Lanka</h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p><strong>1. Report to Police</strong></p>
                    <p>• Go to the nearest police station or a Women & Children's Bureau unit.</p>
                    <p>• Ask for a female officer if preferred — you have the right to one.</p>
                    <p>• Request to file a First Information Report (FIR). You can bring someone you trust for support.</p>
                    <p><strong>2. Medical Reporting</strong></p>
                    <p>• Visit a government hospital or women's hospital like:</p>
                    <p>  ◦ Castle Street Hospital for Women (Colombo)</p>
                    <p>  ◦ National Hospital Colombo</p>
                    <p>  ◦ Teaching Hospitals in your province</p>
                    <p>The hospital will assist with a medico-legal examination, which can support police investigations.</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3">🛟 Trusted Services in Sri Lanka</h3>
                  <div className="space-y-3 text-sm text-gray-700">
                    <div>
                      <p><strong>✅ Women In Need (WIN)</strong></p>
                      <p>• 24/7 Helpline: 011 4718585 / 077 567 5656</p>
                      <p>• Website: www.winhearts.lk</p>
                      <p>• Services: Legal aid, counseling, shelter, emergency protection</p>
                    </div>
                    <div>
                      <p><strong>✅ National Child Protection Authority (for minors)</strong></p>
                      <p>• Hotline: 1929 (free and confidential)</p>
                      <p>• For underage victims or reports involving children</p>
                    </div>
                    <div>
                      <p><strong>✅ Family Health Bureau – GBV Desks</strong></p>
                      <p>• Located in government hospitals</p>
                      <p>• Provide medical care, psychosocial support, and referral services</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="font-bold text-lg mb-3 text-blue-800">💬 Self-Care & Recovery</h3>
                <ul className="space-y-2 text-sm text-blue-700">
                  <li>• It's normal to feel overwhelmed. Counseling can help with emotional healing.</li>
                  <li>• Consider joining a support group or speaking with a trauma-informed professional.</li>
                  <li>• Healing takes time — be gentle with yourself and know that you are believed and you matter.</li>
                </ul>
              </div>

              {/* Dealing with Sexual Assault Video */}
              <div className="mt-6">
                <h4 className="font-semibold text-gray-800 mb-2">🎥 Dealing with Sexual Assault</h4>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/3FWQcP7lH38"
                    title="Dealing with Sexual Assault"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 3. Understanding & Escaping Toxic Relationships */}
        <Card id="toxic-relationships" className="bg-white rounded-lg shadow-lg mb-8 p-6">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-empowerher-pink flex items-center gap-3">
              <Users className="h-7 w-7" />
              3. 💔 Understanding & Escaping Toxic Relationships
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/04c9bf30-6f1b-4746-a042-96f83b7522f6.png" 
                alt="Understanding and Escaping Toxic Relationships"
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3">🚩 What Is a Toxic Relationship?</h3>
                  <p className="text-sm text-gray-700 mb-3">A toxic relationship is one where you feel:</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Emotionally drained instead of supported</li>
                    <li>• Afraid, anxious, or controlled</li>
                    <li>• Disrespected or constantly criticized</li>
                  </ul>
                  <p className="text-sm text-gray-700 mt-3">It can exist in romantic relationships, friendships, or family dynamics.</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3">⚠️ Common Signs of a Toxic Relationship</h3>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Controlling behavior (telling you what to wear, where to go, who to talk to)</li>
                    <li>• Jealousy and possessiveness</li>
                    <li>• Constant criticism or gaslighting ("You're too sensitive," "That never happened")</li>
                    <li>• Silent treatment or emotional manipulation</li>
                    <li>• Physical, verbal, or emotional abuse</li>
                    <li>• Lack of respect for your boundaries</li>
                    <li>• You feel scared, worthless, or trapped</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3">🧭 What To Do If You're in a Toxic Relationship</h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p><strong>1. Acknowledge it's not normal or healthy</strong></p>
                    <p>• Love should not hurt, control, or isolate.</p>
                    <p><strong>2. Talk to someone you trust</strong></p>
                    <p>• A friend, family member, teacher, or counselor can help you see things clearly.</p>
                    <p><strong>3. Set boundaries</strong></p>
                    <p>• Be clear about what you will and won't tolerate.</p>
                    <p>• Toxic people often test limits — stay firm.</p>
                    <p><strong>4. Make a safety plan (if needed)</strong></p>
                    <p>• If there's abuse, make a plan for how and when to leave safely.</p>
                    <p>• Keep emergency numbers saved and a backup phone if possible.</p>
                    <p><strong>5. Seek professional support</strong></p>
                    <p>• Therapy or support groups can help rebuild confidence and self-worth.</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3">🛟 Support Services for Women in Sri Lanka</h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p><strong>✅ Women In Need (WIN)</strong></p>
                    <p>• Helpline: 011 4718585 / 077 567 5656</p>
                    <p>• Website: winhearts.lk</p>
                    <p>• Services: Counseling, legal help, shelter, support</p>
                    <p><strong>✅ National Mental Health Helpline (Suwa Seriya)</strong></p>
                    <p>• Hotline: 1926 (24/7, confidential)</p>
                    <p>• For emotional support and crisis counseling</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border border-green-200 mt-6">
              <h3 className="font-bold text-lg mb-3 text-green-800">🌸 Healing After a Toxic Relationship</h3>
              <ul className="space-y-2 text-sm text-green-700">
                <li>• Give yourself time — healing isn't quick but it's possible.</li>
                <li>• Rediscover your passions and hobbies.</li>
                <li>• Surround yourself with positive, respectful people.</li>
                <li>• Self-love is your superpower.</li>
              </ul>
              <p className="text-sm font-semibold text-green-800 mt-3">You are not too sensitive. You are not overreacting. You deserve healthy love — safe, respectful, and kind.</p>
            </div>

            {/* Understanding & Escaping Toxic Relationship Video */}
            <div className="mt-6">
              <h4 className="font-semibold text-gray-800 mb-2">🎥 Understanding & Escaping Toxic Relationship</h4>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/4EqbuAlrilQ"
                  title="Understanding & Escaping Toxic Relationship"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 4. Counselling Platforms */}
        <Card id="counselling-platforms" className="bg-white rounded-lg shadow-lg mb-8 p-6">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-empowerher-pink flex items-center gap-3">
              <Phone className="h-7 w-7" />
              4. 🟢 Counselling Platforms (Free & Confidential)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/c04f109c-6683-42e8-9248-f4a65ea45d40.png" 
                alt="Counselling Platforms - Free and Confidential"
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3">🟢 Online Counselling Platforms (Free & Confidential)</h3>
                  <div className="space-y-4 text-sm text-gray-700">
                    <div>
                      <p><strong>1. National Mental Health Helpline – 1926</strong></p>
                      <p>A 24/7 toll-free helpline offering psychological support via phone and SMS.</p>
                      <p>📞 Call: 1926</p>
                      <p>🌐 Mode: Phone / Text</p>
                      <p>💬 Language: Sinhala | Tamil | English</p>
                    </div>
                    <div>
                      <p><strong>2. CCCline – 1333</strong></p>
                      <p>Free telephone-based emotional support for anyone in distress.</p>
                      <p>📞 Call: 1333</p>
                      <p>🕒 Available: 24/7</p>
                      <p>💬 Language: Sinhala | Tamil | English</p>
                    </div>
                    <div>
                      <p><strong>3. Free Minds Sri Lanka</strong></p>
                      <p>Offers free virtual sessions (based on availability) with licensed therapists and counselors.</p>
                      <p>🌐 Website: freemindslanka.org</p>
                      <p>💬 Mode: Online chat / Video counselling</p>
                    </div>
                    <div>
                      <p><strong>4. Kalyana Mental Health Directory</strong></p>
                      <p>An online therapist directory with some professionals offering free or subsidized sessions.</p>
                      <p>🌐 Website: kalyana.lk</p>
                      <p>💬 Mode: Online</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3">🟡 Offline Counselling Services (In-Person & Free)</h3>
                  <div className="space-y-4 text-sm text-gray-700">
                    <div>
                      <p><strong>1. Sri Lanka Sumithrayo</strong></p>
                      <p>Provides emotional support to those facing distress, depression, or loneliness.</p>
                      <p>📍 Locations: Colombo | Kandy | Matale | Panadura | Bandarawela and more</p>
                      <p>📞 Call: +94 11 2692909</p>
                      <p>🕒 Time: 9 AM – 8 PM</p>
                      <p>🌐 Website: sumithrayo.org</p>
                    </div>
                    <div>
                      <p><strong>2. Women In Need (WIN)</strong></p>
                      <p>Supports women facing violence, abuse, or mental health struggles with professional counselling.</p>
                      <p>📍 Locations: Colombo | Matara | Batticaloa | Kandy | Badulla | Jaffna</p>
                      <p>📞 Helpline: +94 11 471 8585</p>
                      <p>🌐 Website: winhearts.lk</p>
                    </div>
                    <div>
                      <p><strong>3. The Mordecai Project – Women's Counselling Center</strong></p>
                      <p>Offers trauma recovery, spiritual healing, and life skills support for women.</p>
                      <p>📍 Location: Colombo</p>
                      <p>🌐 Website: themordecaiproject.org</p>
                    </div>
                    <div>
                      <p><strong>4. Women's Support Group (WSG)</strong></p>
                      <p>Focuses on empowering LGBTQ+ women through counselling and peer support.</p>
                      <p>📍 Location: Colombo</p>
                      <p>🌐 Contact via: Equal Ground Sri Lanka</p>
                      <p>Website: equal-ground.org</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Counselling Platforms Video */}
            <div className="mt-6">
              <h4 className="font-semibold text-gray-800 mb-2">🎥 Counselling Platforms</h4>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/JQ6faw8Sb_U"
                  title="Counselling Platforms"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 5. Financial Independence */}
        <Card id="financial-independence" className="bg-white rounded-lg shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-empowerher-pink flex items-center gap-3">
              <DollarSign className="h-7 w-7" />
              5. 💼 Financial Independence for Women
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/d7ecd7b8-1904-4ca4-9134-b8b0f00591f0.png" 
                alt="Financial Independence for Women"
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3">1. Free Online Courses & Training</h3>
                  <p className="text-sm text-gray-700 mb-2">Websites offering free or affordable courses in skills like:</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Digital marketing</li>
                    <li>• Coding and programming basics</li>
                    <li>• Graphic design</li>
                    <li>• Language learning</li>
                    <li>• Handicrafts and tailoring</li>
                  </ul>
                  <p className="text-sm text-gray-700 mt-2">Links to platforms like Coursera, Udemy, Khan Academy, and local Sri Lankan resources</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3">2. Work-from-Home Opportunities</h3>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Guide on safe online jobs and freelancing platforms (e.g., Upwork, Fiverr)</li>
                    <li>• Tips on avoiding scams and ensuring payment security</li>
                    <li>• Ideas for home-based businesses:</li>
                    <li>  ◦ Baking or cooking</li>
                    <li>  ◦ Handmade crafts</li>
                    <li>  ◦ Virtual tutoring</li>
                    <li>  ◦ Content writing and blogging</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3">3. Financial Literacy Basics</h3>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Simple lessons on budgeting, saving, and managing expenses</li>
                    <li>• How to open a bank account and use mobile banking in Sri Lanka</li>
                    <li>• Information on microfinance and women-specific loan programs</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3">4. Local NGOs & Government Support</h3>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• List of NGOs that provide training, startup grants, or mentorship for women entrepreneurs</li>
                    <li>• Government initiatives supporting women in business</li>
                    <li>• Contact info for centers offering business advice and support</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3">5. Inspirational Success Stories</h3>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Short profiles of Sri Lankan women who transformed their lives through skills and entrepreneurship</li>
                    <li>• Videos or interviews sharing their journey, challenges, and advice</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3">6. Networking & Community Building</h3>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Encourage joining women's groups or online forums for support and advice</li>
                    <li>• Information about local meetups, workshops, and seminars</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Skill Building & Financial Independence Video */}
            <div className="mt-6">
              <h4 className="font-semibold text-gray-800 mb-2">🎥 Skill Building & Financial Independence for Women</h4>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/A7r2vCxa3pI"
                  title="Skill Building & Financial Independence for Women"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default SupportPage;