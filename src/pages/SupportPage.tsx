import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Brain, Phone, FileText, Video } from "lucide-react";

const SupportPage = () => {
  const supportTopics = [
    { id: 'mental', title: 'Mental Health', icon: Brain },
    { id: 'assault', title: 'Sexual Assault Support', icon: Heart },
    { id: 'toxic', title: 'Toxic Relationships', icon: FileText },
    { id: 'counseling', title: 'Free Counseling', icon: Video },
    { id: 'financial', title: 'Financial Independence', icon: Phone }
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
          <p className="text-xl text-empowerher-pink mb-8">Real Help for Real Struggles</p>
        </div>

        {/* 5-Topic Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
          {supportTopics.map((topic) => (
            <Card 
              key={topic.id}
              className="cursor-pointer hover:bg-empowerher-pink-light transition-colors"
              onClick={() => scrollToSection(topic.id)}
            >
              <CardContent className="p-6 text-center">
                <topic.icon className="h-8 w-8 text-empowerher-pink mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800 text-sm">{topic.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Content Sections */}
        <div className="space-y-16">
          {/* Mental Health */}
          <section id="mental" className="bg-primary p-8 rounded-2xl shadow-sm">
            <h2 className="text-3xl font-bold text-white mb-6">🌸 Mental Health Tips for Women</h2>
            
            {/* Mental Health Support Image */}
            <div className="mb-6 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop"
                alt="Mental health support for Sri Lankan women"
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">🌿 1. Prioritize Self-Care</h4>
                    <p className="text-gray-600 text-sm">Set aside time daily for things that bring you peace and joy — even just 10–15 minutes. Take breaks without guilt. Rest is not laziness.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">🧠 2. Manage Stress with Mindfulness</h4>
                    <p className="text-gray-600 text-sm">Practice meditation, deep breathing, or yoga regularly. Apps like Calm, Headspace, or Insight Timer can help.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">💬 3. Talk It Out</h4>
                    <p className="text-gray-600 text-sm">Don't bottle things up. Talk to a trusted friend, family member, or therapist. Journaling your thoughts can also be therapeutic.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">🏃‍♀️ 4. Move Your Body</h4>
                    <p className="text-gray-600 text-sm">Regular exercise (even light walks or dancing at home) boosts mood and reduces anxiety. Aim for at least 30 minutes, 3–5 times a week.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">🛌 5. Get Good Sleep</h4>
                    <p className="text-gray-600 text-sm">Aim for 7–9 hours of restful sleep per night. Limit screen time before bed and create a calming bedtime routine.</p>
                  </div>
                </div>
              </div>
              <div>
                {/* YouTube Video */}
                <div className="bg-white p-6 rounded-lg mb-4">
                  <h4 className="font-semibold text-primary mb-2">🎥 Mental Health Tips for Sri Lankan Women</h4>
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/PkKXl7vSsCo"
                      title="Mental Health Tips for Women"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-white">
                  <div className="bg-white p-3 rounded-lg">
                    <p className="text-gray-600">🍎 6. Eat Nourishing Food - Balanced meals with fruits, veggies, and whole grains support brain health</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <p className="text-gray-600">❤️ 7. Set Boundaries - Learn to say no without feeling guilty. Your peace matters.</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <p className="text-gray-600">🧘‍♀️ 8. Reduce Social Media Overload - Take digital detoxes when needed</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <p className="text-gray-600">👭 9. Build a Support System - Surround yourself with encouraging people</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <p className="text-gray-600">👩‍⚕️ 10. Don't Be Afraid to Seek Help - Therapy is strength, not weakness</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Sexual Assault Support */}
          <section id="assault" className="bg-primary p-8 rounded-2xl shadow-sm">
            <h2 className="text-3xl font-bold text-white mb-6">💔 Dealing with Sexual Assault</h2>
            
            {/* Support Resources Image */}
            <div className="mb-6 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&h=400&fit=crop"
                alt="Support and healing for sexual assault survivors"
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <div className="bg-red-50 border border-red-200 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-red-800 mb-2">🚨 What To Do After a Sexual Assault</h4>
                  <ul className="text-red-700 text-sm space-y-1">
                    <li>• Find a safe place immediately — a friend's house, a relative's home, or a public location</li>
                    <li>• Do not shower, change clothes, or clean up before medical examination to preserve evidence</li>
                    <li>• Seek medical care even if there are no visible injuries. Medical support can help with physical care, STI treatment, and emergency contraception</li>
                    <li>• Try to record or write down details about the incident while they're fresh in your memory (for legal support later)</li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">📝 How to Report Sexual Assault in Sri Lanka:</h4>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-medium text-gray-800">1. Report to Police</h5>
                      <ul className="text-gray-600 text-sm space-y-1 ml-4">
                        <li>• Go to the nearest police station or a Women & Children's Bureau unit</li>
                        <li>• Ask for a female officer if preferred — you have the right to one</li>
                        <li>• Request to file a First Information Report (FIR). You can bring someone you trust for support</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-800">2. Medical Reporting</h5>
                      <ul className="text-gray-600 text-sm space-y-1 ml-4">
                        <li>• Castle Street Hospital for Women (Colombo)</li>
                        <li>• National Hospital Colombo</li>
                        <li>• Teaching Hospitals in your province</li>
                      </ul>
                      <p className="text-gray-600 text-sm mt-2">The hospital will assist with a medico-legal examination, which can support police investigations.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">🛟 Trusted Services in Sri Lanka</h4>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-medium text-gray-800">✅ Women In Need (WIN)</h5>
                      <p className="text-sm text-gray-600">• 24/7 Helpline: 011 4718585 / 077 567 5656</p>
                      <p className="text-sm text-gray-600">• Website: www.winhearts.lk</p>
                      <p className="text-sm text-gray-600">• Services: Legal aid, counseling, shelter, emergency protection</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-800">✅ National Child Protection Authority (for minors)</h5>
                      <p className="text-sm text-gray-600">• Hotline: 1929 (free and confidential)</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-800">✅ Sri Lanka Police – Women and Children's Bureau</h5>
                      <p className="text-sm text-gray-600">• Located in most major police stations</p>
                      <p className="text-sm text-gray-600">• Special units trained to handle sexual and domestic violence cases</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                {/* YouTube Video */}
                <div className="bg-white p-6 rounded-lg mb-4">
                  <h4 className="font-semibold text-primary mb-2">🎥 Support for Sexual Assault Survivors</h4>
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/pes7H4ECTdw"
                      title="Support for Sexual Assault Survivors"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-blue-800 mb-2">💬 Self-Care & Recovery</h4>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• It's normal to feel overwhelmed. Counseling can help with emotional healing</li>
                    <li>• Consider joining a support group or speaking with a trauma-informed professional</li>
                    <li>• Healing takes time — be gentle with yourself and know that you are believed and you matter</li>
                  </ul>
                </div>

                <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">📢 Remember:</h4>
                  <p className="text-green-700 text-sm">Sexual assault is never the victim's fault. Whether or not you choose to report it, you deserve support, care, and justice.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Toxic Relationships */}
          <section id="toxic" className="bg-primary p-8 rounded-2xl shadow-sm">
            <h2 className="text-3xl font-bold text-white mb-6">💔 Understanding & Escaping Toxic Relationships</h2>
            
            {/* Relationship Support Image */}
            <div className="mb-6 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800&h=400&fit=crop"
                alt="Breaking free from toxic relationships"
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <div className="bg-pastel-rose-light p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">🚩 What Is a Toxic Relationship?</h4>
                  <p className="text-gray-600 text-sm mb-3">A toxic relationship is one where you feel:</p>
                  <ul className="text-gray-600 text-sm space-y-1 ml-4">
                    <li>• Emotionally drained instead of supported</li>
                    <li>• Afraid, anxious, or controlled</li>
                    <li>• Disrespected or constantly criticized</li>
                  </ul>
                  <p className="text-gray-600 text-sm mt-3">It can exist in: Romantic relationships, Friendships, Family dynamics</p>
                </div>

                <div className="bg-red-50 border border-red-200 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-red-800 mb-2">⚠️ Common Signs of a Toxic Relationship</h4>
                  <ul className="text-red-700 text-sm space-y-1">
                    <li>• Controlling behavior (telling you what to wear, where to go, who to talk to)</li>
                    <li>• Jealousy and possessiveness</li>
                    <li>• Constant criticism or gaslighting ("You're too sensitive," "That never happened")</li>
                    <li>• Silent treatment or emotional manipulation</li>
                    <li>• Physical, verbal, or emotional abuse</li>
                    <li>• Lack of respect for your boundaries</li>
                    <li>• You feel scared, worthless, or trapped</li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">🧭 What To Do If You're in a Toxic Relationship</h4>
                  <ol className="text-gray-600 text-sm space-y-2">
                    <li>1. <strong>Acknowledge it's not normal or healthy</strong> - Love should not hurt, control, or isolate</li>
                    <li>2. <strong>Talk to someone you trust</strong> - A friend, family member, teacher, or counselor can help you see things clearly</li>
                    <li>3. <strong>Set boundaries</strong> - Be clear about what you will and won't tolerate. Toxic people often test limits — stay firm</li>
                    <li>4. <strong>Make a safety plan (if needed)</strong> - If there's abuse, make a plan for how and when to leave safely</li>
                    <li>5. <strong>Seek professional support</strong> - Therapy or support groups can help rebuild confidence and self-worth</li>
                  </ol>
                </div>
              </div>
              <div>
                {/* YouTube Video */}
                <div className="bg-white p-6 rounded-lg mb-4">
                  <h4 className="font-semibold text-primary mb-2">🎥 Recognizing and Escaping Toxic Relationships</h4>
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/kOpaVjCD9Kk"
                      title="Recognizing Toxic Relationships"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">🛟 Support Services for Women in Sri Lanka</h4>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-medium text-gray-800">✅ Women In Need (WIN)</h5>
                      <p className="text-sm text-gray-600">• Helpline: 011 471 8585 / 077 567 5656</p>
                      <p className="text-sm text-gray-600">• Website: winhearts.lk</p>
                      <p className="text-sm text-gray-600">• Services: Counseling, legal help, shelter, support</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-800">✅ National Mental Health Helpline (Suwa Seriya)</h5>
                      <p className="text-sm text-gray-600">• Hotline: 1926 (24/7, confidential)</p>
                      <p className="text-sm text-gray-600">• For emotional support and crisis counseling</p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">🌸 Healing After a Toxic Relationship</h4>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• Give yourself time — healing isn't quick but it's possible</li>
                    <li>• Rediscover your passions and hobbies</li>
                    <li>• Surround yourself with positive, respectful people</li>
                    <li>• Self-love is your superpower</li>
                  </ul>
                  <p className="text-green-700 text-sm mt-3 font-medium">You are not too sensitive. You are not overreacting. You deserve healthy love — safe, respectful, and kind.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Free Counseling */}
          <section id="counseling" className="bg-primary p-8 rounded-2xl shadow-sm">
            <h2 className="text-3xl font-bold text-white mb-6">🟢 Online Counselling Platforms (Free & Confidential)</h2>
            
            {/* Counseling Services Image */}
            <div className="mb-6 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&h=400&fit=crop"
                alt="Free counseling and therapy services"
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-pastel-rose-light p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-4">Online Services</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-gray-800">1. National Mental Health Helpline – 1926</h5>
                    <p className="text-sm text-gray-600">A 24/7 toll-free helpline offering psychological support via phone and SMS.</p>
                    <p className="text-sm text-gray-600">📞 Call: 1926</p>
                    <p className="text-sm text-gray-600">🌐 Mode: Phone / Text</p>
                    <p className="text-sm text-gray-600">💬 Language: Sinhala | Tamil | English</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800">2. CCCline – 1333</h5>
                    <p className="text-sm text-gray-600">Free telephone-based emotional support for anyone in distress.</p>
                    <p className="text-sm text-gray-600">📞 Call: 1333</p>
                    <p className="text-sm text-gray-600">🕒 Available: 24/7</p>
                    <p className="text-sm text-gray-600">💬 Language: Sinhala | Tamil | English</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800">3. Free Minds Sri Lanka</h5>
                    <p className="text-sm text-gray-600">Offers free virtual sessions (based on availability) with licensed therapists and counselors.</p>
                    <p className="text-sm text-gray-600">🌐 Website: freemindslanka.org</p>
                    <p className="text-sm text-gray-600">💬 Mode: Online chat / Video counselling</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800">4. Kalyana Mental Health Directory</h5>
                    <p className="text-sm text-gray-600">An online therapist directory with some professionals offering free or subsidized sessions.</p>
                    <p className="text-sm text-gray-600">🌐 Website: kalyana.lk</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-pastel-rose-light p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-4">🟡 Offline Counselling Services (In-Person & Free)</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-gray-800">1. Sri Lanka Sumithrayo</h5>
                    <p className="text-sm text-gray-600">Provides emotional support to those facing distress, depression, or loneliness.</p>
                    <p className="text-sm text-gray-600">📍 Locations: Colombo | Kandy | Matale | Panadura | Bandarawela and more</p>
                    <p className="text-sm text-gray-600">📞 Call: +94 11 2692909</p>
                    <p className="text-sm text-gray-600">🕒 Time: 9 AM – 8 PM</p>
                    <p className="text-sm text-gray-600">🌐 Website: sumithrayo.org</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800">2. Women In Need (WIN)</h5>
                    <p className="text-sm text-gray-600">Supports women facing violence, abuse, or mental health struggles with professional counselling.</p>
                    <p className="text-sm text-gray-600">📍 Locations: Colombo | Matara | Batticaloa | Kandy | Badulla | Jaffna</p>
                    <p className="text-sm text-gray-600">📞 Helpline: +94 11 471 8585</p>
                    <p className="text-sm text-gray-600">🌐 Website: winhearts.lk</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800">3. The Mordecai Project – Women's Counselling Center</h5>
                    <p className="text-sm text-gray-600">Offers trauma recovery, spiritual healing, and life skills support for women.</p>
                    <p className="text-sm text-gray-600">📍 Location: Colombo</p>
                    <p className="text-sm text-gray-600">🌐 Website: themordecaiproject.org</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800">4. Women's Support Group (WSG)</h5>
                    <p className="text-sm text-gray-600">Focuses on empowering LGBTQ+ women through counselling and peer support.</p>
                    <p className="text-sm text-gray-600">📍 Location: Colombo</p>
                    <p className="text-sm text-gray-600">🌐 Contact via: Equal Ground Sri Lanka</p>
                    <p className="text-sm text-gray-600">Website: equal-ground.org</p>
                  </div>
                </div>
              </div>
            </div>

            {/* YouTube Video */}
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">🎥 How to Access Free Counseling Services</h4>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/TTIlai-6kD8"
                  title="Free Counseling Services"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </section>

          {/* Financial Independence */}
          <section id="financial" className="bg-primary p-8 rounded-2xl shadow-sm">
            <h2 className="text-3xl font-bold text-white mb-6">💼 Skill Building & Financial Independence for Women</h2>
            
            {/* Financial Independence Image */}
            <div className="mb-6 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=800&h=400&fit=crop"
                alt="Women's financial independence and empowerment"
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="bg-pastel-rose-light p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">1. Free Online Courses & Training</h4>
                  <p className="text-gray-600 text-sm mb-2">Websites offering free or affordable courses in skills like:</p>
                  <ul className="text-gray-600 text-sm space-y-1 ml-4">
                    <li>• Digital marketing</li>
                    <li>• Coding and programming basics</li>
                    <li>• Graphic design</li>
                    <li>• Language learning</li>
                    <li>• Handicrafts and tailoring</li>
                  </ul>
                  <p className="text-gray-600 text-sm mt-2">Links to platforms like Coursera, Udemy, Khan Academy, and local Sri Lankan resources</p>
                </div>
                
                <div className="bg-pastel-rose-light p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">2. Work-from-Home Opportunities</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Guide on safe online jobs and freelancing platforms (e.g., Upwork, Fiverr)</li>
                    <li>• Tips on avoiding scams and ensuring payment security</li>
                    <li>• Ideas for home-based businesses:
                      <ul className="ml-4 mt-1 space-y-1">
                        <li>◦ Baking or cooking</li>
                        <li>◦ Handmade crafts</li>
                        <li>◦ Virtual tutoring</li>
                        <li>◦ Content writing and blogging</li>
                      </ul>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-pastel-rose-light p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">3. Financial Literacy Basics</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Simple lessons on budgeting, saving, and managing expenses</li>
                    <li>• How to open a bank account and use mobile banking in Sri Lanka</li>
                    <li>• Information on microfinance and women-specific loan programs</li>
                  </ul>
                </div>
              </div>
              <div>
                {/* YouTube Video */}
                <div className="bg-pastel-rose-light p-6 rounded-lg mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">🎥 Financial Independence for Sri Lankan Women</h4>
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/aNhfpxY9rP8"
                      title="Financial Independence for Women"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>

                <div className="bg-pastel-rose-light p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">4. Local NGOs & Government Support</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• List of NGOs that provide training, startup grants, or mentorship for women entrepreneurs</li>
                    <li>• Government initiatives supporting women in business</li>
                    <li>• Contact info for centers offering business advice and support</li>
                  </ul>
                </div>

                <div className="bg-pastel-rose-light p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">5. Networking & Community Building</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Encourage joining women's groups or online forums for support and advice</li>
                    <li>• Information about local meetups, workshops, and seminars</li>
                    <li>• Inspirational success stories of Sri Lankan women who transformed their lives through skills and entrepreneurship</li>
                  </ul>
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

export default SupportPage;
