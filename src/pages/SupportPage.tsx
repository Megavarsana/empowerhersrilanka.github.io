
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Brain, Phone, FileText, Video, Upload, Play } from "lucide-react";

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
          <p className="text-xl text-pastel-rose mb-8">Real Help for Real Struggles</p>
        </div>

        {/* 5-Topic Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
          {supportTopics.map((topic) => (
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
          {/* Mental Health */}
          <section id="mental" className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">🌸 Mental Health Tips for Women</h2>
            
            {/* Image Upload Space */}
            <div className="mb-6 p-6 border-2 border-dashed border-pastel-rose rounded-lg bg-pastel-rose-light">
              <div className="text-center">
                <Upload className="h-12 w-12 text-pastel-rose mx-auto mb-2" />
                <p className="text-pastel-rose-dark">Upload Mental Health Support Image</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <div className="space-y-4">
                  <div className="bg-pastel-rose-light p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">🌿 1. Prioritize Self-Care</h4>
                    <p className="text-gray-600 text-sm">Set aside time daily for things that bring you peace and joy — even just 10–15 minutes. Take breaks without guilt. Rest is not laziness.</p>
                  </div>
                  <div className="bg-pastel-rose-light p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">🧠 2. Manage Stress with Mindfulness</h4>
                    <p className="text-gray-600 text-sm">Practice meditation, deep breathing, or yoga regularly. Apps like Calm, Headspace, or Insight Timer can help.</p>
                  </div>
                  <div className="bg-pastel-rose-light p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">💬 3. Talk It Out</h4>
                    <p className="text-gray-600 text-sm">Don't bottle things up. Talk to a trusted friend, family member, or therapist. Journaling your thoughts can also be therapeutic.</p>
                  </div>
                  <div className="bg-pastel-rose-light p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">🏃‍♀️ 4. Move Your Body</h4>
                    <p className="text-gray-600 text-sm">Regular exercise (even light walks or dancing at home) boosts mood and reduces anxiety. Aim for at least 30 minutes, 3–5 times a week.</p>
                  </div>
                </div>
              </div>
              <div>
                {/* YouTube Video Placeholder */}
                <div className="bg-pastel-rose-light p-6 rounded-lg mb-4">
                  <div className="flex items-center justify-center h-48 bg-white rounded-lg">
                    <div className="text-center">
                      <Play className="h-16 w-16 text-pastel-rose mx-auto mb-2" />
                      <h4 className="font-semibold text-gray-800 mb-2">YouTube Video Placeholder</h4>
                      <p className="text-gray-600 text-sm">Mental Health Tips for Sri Lankan Women</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• 🛌 5. Get Good Sleep (7–9 hours per night)</p>
                  <p>• 🍎 6. Eat Nourishing Food</p>
                  <p>• ❤️ 7. Set Boundaries</p>
                  <p>• 🧘‍♀️ 8. Reduce Social Media Overload</p>
                  <p>• 👭 9. Build a Support System</p>
                  <p>• 👩‍⚕️ 10. Don't Be Afraid to Seek Help</p>
                </div>
              </div>
            </div>
          </section>

          {/* Sexual Assault Support */}
          <section id="assault" className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">💔 Dealing with Sexual Assault</h2>
            
            {/* Image Upload Space */}
            <div className="mb-6 p-6 border-2 border-dashed border-pastel-rose rounded-lg bg-pastel-rose-light">
              <div className="text-center">
                <Upload className="h-12 w-12 text-pastel-rose mx-auto mb-2" />
                <p className="text-pastel-rose-dark">Upload Support Resources Image</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <div className="bg-red-50 border border-red-200 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-red-800 mb-2">🚨 What To Do After a Sexual Assault</h4>
                  <ul className="text-red-700 text-sm space-y-1">
                    <li>• Find a safe place immediately</li>
                    <li>• Do not shower, change clothes, or clean up before medical examination</li>
                    <li>• Seek medical care even if there are no visible injuries</li>
                    <li>• Try to record or write down details about the incident</li>
                  </ul>
                </div>
                
                <div className="bg-pastel-rose-light p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">📝 How to Report in Sri Lanka:</h4>
                  <p className="text-gray-600 text-sm mb-2">Report to police stations, seek legal aid from:</p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Legal Aid Commission: 011-232-2643</li>
                    <li>• Women's Bureau: 011-232-3616</li>
                    <li>• Bar Association of Sri Lanka</li>
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
                      <p className="text-gray-600 text-sm">Support for Sexual Assault Survivors</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Toxic Relationships */}
          <section id="toxic" className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">💔 Understanding & Escaping Toxic Relationships</h2>
            
            {/* Image Upload Space */}
            <div className="mb-6 p-6 border-2 border-dashed border-pastel-rose rounded-lg bg-pastel-rose-light">
              <div className="text-center">
                <Upload className="h-12 w-12 text-pastel-rose mx-auto mb-2" />
                <p className="text-pastel-rose-dark">Upload Relationship Support Image</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <div className="bg-red-50 border border-red-200 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-red-800 mb-2">⚠️ Common Signs of a Toxic Relationship</h4>
                  <ul className="text-red-700 text-sm space-y-1">
                    <li>• Controlling behavior (telling you what to wear, where to go, who to talk to)</li>
                    <li>• Jealousy and possessiveness</li>
                    <li>• Constant criticism or gaslighting</li>
                    <li>• Silent treatment or emotional manipulation</li>
                    <li>• Physical, verbal, or emotional abuse</li>
                  </ul>
                </div>
                
                <div className="bg-pastel-rose-light p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">🧭 What To Do:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Acknowledge it's not normal or healthy</li>
                    <li>• Talk to someone you trust</li>
                    <li>• Set boundaries</li>
                    <li>• Make a safety plan (if needed)</li>
                    <li>• Seek professional support</li>
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
                      <p className="text-gray-600 text-sm">Recognizing and Escaping Toxic Relationships</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Free Counseling */}
          <section id="counseling" className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">🟢 Online Counselling Platforms (Free & Confidential)</h2>
            
            {/* Image Upload Space */}
            <div className="mb-6 p-6 border-2 border-dashed border-pastel-rose rounded-lg bg-pastel-rose-light">
              <div className="text-center">
                <Upload className="h-12 w-12 text-pastel-rose mx-auto mb-2" />
                <p className="text-pastel-rose-dark">Upload Counseling Services Image</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-pastel-rose-light p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-4">Online Services</h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-medium text-gray-800">National Mental Health Helpline</h5>
                    <p className="text-sm text-gray-600">📞 Call: 1926 (24/7)</p>
                    <p className="text-sm text-gray-600">💬 Language: Sinhala | Tamil | English</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800">CCCline</h5>
                    <p className="text-sm text-gray-600">📞 Call: 1333 (24/7)</p>
                    <p className="text-sm text-gray-600">Free telephone-based emotional support</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-pastel-rose-light p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-4">Offline Services</h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-medium text-gray-800">Sri Lanka Sumithrayo</h5>
                    <p className="text-sm text-gray-600">📞 +94 11 2692909</p>
                    <p className="text-sm text-gray-600">🕒 9 AM – 8 PM</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800">Women In Need (WIN)</h5>
                    <p className="text-sm text-gray-600">📞 +94 11 471 8585</p>
                    <p className="text-sm text-gray-600">Professional counselling for women</p>
                  </div>
                </div>
              </div>
            </div>

            {/* YouTube Video Placeholder */}
            <div className="mt-6 bg-pastel-rose-light p-6 rounded-lg">
              <div className="flex items-center justify-center h-48 bg-white rounded-lg">
                <div className="text-center">
                  <Play className="h-16 w-16 text-pastel-rose mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800 mb-2">YouTube Video Placeholder</h4>
                  <p className="text-gray-600 text-sm">How to Access Free Counseling Services</p>
                </div>
              </div>
            </div>
          </section>

          {/* Financial Independence */}
          <section id="financial" className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">💼 Skill Building & Financial Independence for Women</h2>
            
            {/* Image Upload Space */}
            <div className="mb-6 p-6 border-2 border-dashed border-pastel-rose rounded-lg bg-pastel-rose-light">
              <div className="text-center">
                <Upload className="h-12 w-12 text-pastel-rose mx-auto mb-2" />
                <p className="text-pastel-rose-dark">Upload Financial Independence Image</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="bg-pastel-rose-light p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">💡 Free Online Courses & Training</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Digital marketing</li>
                    <li>• Coding and programming basics</li>
                    <li>• Graphic design</li>
                    <li>• Language learning</li>
                    <li>• Handicrafts and tailoring</li>
                  </ul>
                </div>
                
                <div className="bg-pastel-rose-light p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">🏠 Work-from-Home Opportunities</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Baking or cooking</li>
                    <li>• Handmade crafts</li>
                    <li>• Virtual tutoring</li>
                    <li>• Content writing and blogging</li>
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
                      <p className="text-gray-600 text-sm">Financial Independence for Sri Lankan Women</p>
                    </div>
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
