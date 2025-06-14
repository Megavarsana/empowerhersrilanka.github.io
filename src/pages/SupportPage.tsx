
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Brain, Phone, FileText, Video, DollarSign } from "lucide-react";

const SupportPage = () => {
  const supportTopics = [
    { id: 'mental', title: 'Mental Health Tips', icon: Brain },
    { id: 'assault', title: 'Sexual Assault Support', icon: Heart },
    { id: 'toxic', title: 'Toxic Relationship Guide', icon: FileText },
    { id: 'counseling', title: 'Free Counseling', icon: Video },
    { id: 'financial', title: 'Financial Independence', icon: DollarSign }
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
          <h1 className="text-4xl font-bold text-white mb-4">Support for Women's Problems</h1>
          <p className="text-xl text-white/90 mb-8">Real Help for Real Struggles</p>
        </div>

        {/* 5-Topic Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
          {supportTopics.map((topic) => (
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
          {/* Mental Health Tips */}
          <section id="mental" className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-3xl font-bold text-primary mb-6">🧠 Mental Health Tips for Women</h2>
            
            <div className="mb-6 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop"
                alt="Mental health and wellness support for women"
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-4">💡 Daily Mental Wellness Tips</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li>• <strong>Deep Breathing:</strong> Practice 4-7-8 breathing for instant calm</li>
                    <li>• <strong>Journaling:</strong> Write your thoughts to process emotions</li>
                    <li>• <strong>Mindful Walking:</strong> Connect with nature for mental clarity</li>
                    <li>• <strong>Meditation:</strong> Start with 5 minutes daily for stress relief</li>
                    <li>• <strong>Sleep Hygiene:</strong> Maintain consistent sleep schedules</li>
                    <li>• <strong>Social Connection:</strong> Reach out to trusted friends and family</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-4">🌸 Recognizing Mental Health Warning Signs</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Persistent sadness or anxiety</li>
                    <li>• Loss of interest in activities you once enjoyed</li>
                    <li>• Changes in sleep or eating patterns</li>
                    <li>• Difficulty concentrating or making decisions</li>
                    <li>• Feeling overwhelmed or hopeless</li>
                    <li>• Physical symptoms without clear medical cause</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">🎥 Mental Health Tips for Women</h4>
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
              </div>
            </div>
          </section>

          {/* Sexual Assault Support */}
          <section id="assault" className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-3xl font-bold text-primary mb-6">💗 Support for Sexual Assault Survivors</h2>
            
            <div className="mb-6 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&h=400&fit=crop"
                alt="Support and healing for sexual assault survivors"
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-4">🚨 Immediate Steps After Sexual Assault</h4>
                  <ul className="text-red-700 space-y-2">
                    <li>• Ensure your safety first - get to a safe location</li>
                    <li>• Consider seeking immediate medical attention</li>
                    <li>• Preserve evidence if you choose to report (don't shower, change clothes)</li>
                    <li>• Contact a trusted friend, family member, or support service</li>
                    <li>• Remember: It's not your fault, and you have options</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-4">🏛️ Legal Support in Sri Lanka</h4>
                  <p className="text-gray-600 mb-3">Report to police stations and seek legal aid from:</p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• <strong>Legal Aid Commission:</strong> 011-232-2643</li>
                    <li>• <strong>Women's Bureau:</strong> 011-232-3616</li>
                    <li>• <strong>Bar Association of Sri Lanka</strong></li>
                    <li>• <strong>Women in Need (WIN):</strong> 0114 718 585</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-4">💚 Healing and Recovery Resources</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Professional counseling and therapy</li>
                    <li>• Support groups for survivors</li>
                    <li>• Trauma-informed healthcare</li>
                    <li>• Self-care and wellness programs</li>
                    <li>• Online resources and educational materials</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">🎥 Support for Sexual Assault Survivors</h4>
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
              </div>
            </div>
          </section>

          {/* Toxic Relationship Guide */}
          <section id="toxic" className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-3xl font-bold text-primary mb-6">⚠️ Toxic Relationship Guide</h2>
            
            <div className="mb-6 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800&h=400&fit=crop"
                alt="Breaking free from toxic relationships"
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-4">⚠️ Common Signs of a Toxic Relationship</h4>
                  <ul className="text-red-700 space-y-2">
                    <li>• Controlling behavior (telling you what to wear, where to go, who to talk to)</li>
                    <li>• Jealousy and possessiveness</li>
                    <li>• Constant criticism or gaslighting ("You're too sensitive," "That never happened")</li>
                    <li>• Silent treatment or emotional manipulation</li>
                    <li>• Physical, verbal, or emotional abuse</li>
                    <li>• Lack of respect for your boundaries</li>
                    <li>• You feel scared, worthless, or trapped</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-4">🛡️ What To Do If You're in a Toxic Relationship</h4>
                  <ol className="text-gray-700 space-y-2">
                    <li><strong>1. Acknowledge it's not normal or healthy</strong> - Love should not hurt, control, or isolate</li>
                    <li><strong>2. Talk to someone you trust</strong> - A friend, family member, teacher, or counselor can help you see things clearly</li>
                    <li><strong>3. Set boundaries</strong> - Be clear about what you will and won't tolerate. Toxic people often test limits — stay firm</li>
                    <li><strong>4. Make a safety plan (if needed)</strong> - If there's abuse, make a plan for how and when to leave safely</li>
                    <li><strong>5. Seek professional support</strong> - Therapy or support groups can help rebuild confidence and self-worth</li>
                  </ol>
                </div>
              </div>
              
              <div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">🎥 Recognizing Toxic Relationships</h4>
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
              </div>
            </div>
          </section>

          {/* Free Counseling Services */}
          <section id="counseling" className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-3xl font-bold text-primary mb-6">💬 Free Counseling Services</h2>
            
            <div className="mb-6 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&h=400&fit=crop"
                alt="Free counseling and therapy services"
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-4">🌐 Online Services</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-gray-800">1. National Mental Health Helpline – 1926</h5>
                      <p className="text-sm text-gray-600">A 24/7 toll-free helpline offering psychological support via phone and SMS.</p>
                      <p className="text-xs text-gray-500">📞 Call 1926 | 💬 Language: Sinhala | Tamil | English</p>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-gray-800">2. CCCline – 1333</h5>
                      <p className="text-sm text-gray-600">Crisis telephone-based emotional support for anyone in distress.</p>
                      <p className="text-xs text-gray-500">📞 Call 1333 | 🕐 Available: 24/7</p>
                    </div>

                    <div>
                      <h5 className="font-medium text-gray-800">3. Free Minds Sri Lanka</h5>
                      <p className="text-sm text-gray-600">Offers free virtual sessions (based on availability) with licensed therapists and counselors.</p>
                      <p className="text-xs text-gray-500">🌐 Website: freemindslanka.org</p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-4">🏥 Offline Counselling Services (In-Person & Free)</h4>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-medium text-gray-800">1. Sri Lanka Sumithrayo</h5>
                      <p className="text-sm text-gray-600">Provides emotional support to those facing distress, depression, or loneliness.</p>
                      <p className="text-xs text-gray-500">📍 Locations: Colombo | Kandy | Matale | Panadura | Bandarawela and more</p>
                    </div>

                    <div>
                      <h5 className="font-medium text-gray-800">2. Women In Need (WIN)</h5>
                      <p className="text-sm text-gray-600">Supports women facing violence, abuse, or mental health struggles with professional counselling.</p>
                      <p className="text-xs text-gray-500">📍 Locations: Colombo | Matara | Batticaloa | Kandy | Badulla and more</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">🎥 Free Counseling Services</h4>
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
              </div>
            </div>
          </section>

          {/* Financial Independence */}
          <section id="financial" className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-3xl font-bold text-primary mb-6">💰 Financial Independence for Women</h2>
            
            <div className="mb-6 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=800&h=400&fit=crop"
                alt="Women's financial independence and empowerment"
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-4">💰 Building Financial Independence</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Create a budget and track expenses:</strong> Know where your money goes</li>
                    <li>• <strong>Build an emergency fund:</strong> Save 3-6 months of living expenses</li>
                    <li>• <strong>Learn about investments and savings:</strong> Make your money work for you</li>
                    <li>• <strong>Develop multiple income streams:</strong> Don't rely on just one source</li>
                    <li>• <strong>Plan for retirement early:</strong> The power of compound interest</li>
                    <li>• <strong>Educate yourself about finances:</strong> Knowledge is power</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-4">🏦 Financial Resources for Sri Lankan Women</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Women's Development Bank loans:</strong> Microfinance for women entrepreneurs</li>
                    <li>• <strong>Microfinance opportunities:</strong> Small loans for starting businesses</li>
                    <li>• <strong>Government entrepreneurship programs:</strong> Support for women-led businesses</li>
                    <li>• <strong>Financial literacy workshops:</strong> Learn money management skills</li>
                    <li>• <strong>Cooperative societies:</strong> Community-based savings and loans</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-4">⚠️ Financial Red Flags to Avoid</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Get-rich-quick schemes and pyramid schemes</li>
                    <li>• High-interest informal lending (loan sharks)</li>
                    <li>• Investment opportunities that seem too good to be true</li>
                    <li>• Sharing financial information with unverified sources</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">🎥 Financial Independence for Women</h4>
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
