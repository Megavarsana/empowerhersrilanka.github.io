

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Phone, Users, Shield, Lightbulb, DollarSign, Brain } from "lucide-react";

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
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          <Button 
            onClick={() => document.getElementById('mental-health')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white hover:bg-gray-50 text-black border-none"
          >
            🌸 Mental Health
          </Button>
          <Button 
            onClick={() => document.getElementById('sexual-assault')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white hover:bg-gray-50 text-black border-none"
          >
            💔 Sexual Assault
          </Button>
          <Button 
            onClick={() => document.getElementById('toxic-relationships')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white hover:bg-gray-50 text-black border-none"
          >
            💔 Toxic Relationships
          </Button>
          <Button 
            onClick={() => document.getElementById('free-counseling')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white hover:bg-gray-50 text-black border-none"
          >
            🟢 Free Counseling
          </Button>
          <Button 
            onClick={() => document.getElementById('financial-independence')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white hover:bg-gray-50 text-black border-none"
          >
            💼 Financial Independence
          </Button>
        </div>

        {/* 1. Mental Health Tips */}
        <Card id="mental-health" className="bg-white rounded-lg shadow-lg mb-8 p-6">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-empowerher-pink flex items-center gap-3">
              <Heart className="h-7 w-7" />
              1. 🌸 Mental Health Tips for Women
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* Mental Health Image */}
            <div className="mb-6 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=300&fit=crop"
                alt="Mental health and wellness support for women"
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-empowerher-pink mb-2">🌿 1. Prioritize Self-Care</h4>
                  <p className="text-gray-700 text-sm">Set aside time daily for things that bring you peace and joy — even just 10–15 minutes. Take breaks without guilt. Rest is not laziness.</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-empowerher-pink mb-2">🧠 2. Manage Stress with Mindfulness</h4>
                  <p className="text-gray-700 text-sm">Practice meditation, deep breathing, or yoga regularly. Apps like Calm, Headspace, or Insight Timer can help.</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-empowerher-pink mb-2">💬 3. Talk It Out</h4>
                  <p className="text-gray-700 text-sm">Don't bottle things up. Talk to a trusted friend, family member, or therapist. Journaling your thoughts can also be therapeutic.</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-empowerher-pink mb-2">🏃‍♀️ 4. Move Your Body</h4>
                  <p className="text-gray-700 text-sm">Regular exercise (even light walks or dancing at home) boosts mood and reduces anxiety. Aim for at least 30 minutes, 3–5 times a week.</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-empowerher-pink mb-2">🛌 5. Get Good Sleep</h4>
                  <p className="text-gray-700 text-sm">Aim for 7–9 hours of restful sleep per night. Limit screen time before bed and create a calming bedtime routine.</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-empowerher-pink mb-2">🍎 6. Eat Nourishing Food</h4>
                  <p className="text-gray-700 text-sm">Balanced meals with fruits, veggies, and whole grains support brain health. Stay hydrated and limit excessive caffeine or alcohol.</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-empowerher-pink mb-2">❤️ 7. Set Boundaries</h4>
                  <p className="text-gray-700 text-sm">Learn to say no without feeling guilty. Protect your time and energy — your peace matters.</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-empowerher-pink mb-2">🧘‍♀️ 8. Reduce Social Media Overload</h4>
                  <p className="text-gray-700 text-sm">Take digital detoxes when needed. Follow pages that uplift and unfollow anything that causes comparison or stress.</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-empowerher-pink mb-2">👭 9. Build a Support System</h4>
                  <p className="text-gray-700 text-sm">Surround yourself with people who encourage and empower you. Find women's support groups or online communities if needed.</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-empowerher-pink mb-2">👩‍⚕️ 10. Don't Be Afraid to Seek Help</h4>
                  <p className="text-gray-700 text-sm">Therapy is strength, not weakness. If you're struggling, speak to a mental health professional. You deserve help and healing.</p>
                </div>
              </div>
            </div>

            {/* Mental Health Video */}
            <div className="mt-6">
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
            {/* Sexual Assault Support Image */}
            <div className="mb-6 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=300&fit=crop"
                alt="Support and healing for sexual assault survivors"
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-700 font-medium">
                If you or someone you know has experienced sexual assault, it's important to know you are not alone, and help is available. This guide provides vital information on what to do, how to report, and where to find trusted services in Sri Lanka.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-empowerher-pink mb-3">🚨 What To Do After a Sexual Assault</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• Find a safe place immediately — a friend's house, a relative's home, or a public location.</li>
                  <li>• Do not shower, change clothes, or clean up before a medical examination to preserve evidence.</li>
                  <li>• Seek medical care even if there are no visible injuries. Medical support can help with physical care, STI treatment, and emergency contraception.</li>
                  <li>• Try to record or write down details about the incident while they're fresh in your memory (for legal support later).</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-empowerher-pink mb-3">📝 How to Report Sexual Assault in Sri Lanka</h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-medium text-gray-800">1. Report to Police</h5>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Go to the nearest police station or a Women & Children's Bureau unit.</li>
                      <li>• Ask for a female officer if preferred — you have the right to one.</li>
                      <li>• Request to file a First Information Report (FIR). You can bring someone you trust for support.</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800">2. Medical Reporting</h5>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Visit Castle Street Hospital for Women (Colombo), National Hospital Colombo, or Teaching Hospitals in your province</li>
                      <li>• The hospital will assist with a medico-legal examination, which can support police investigations.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-empowerher-pink mb-3">🛟 Trusted Services in Sri Lanka</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-gray-800">✅ Women In Need (WIN)</h5>
                  <p className="text-sm text-gray-700">24/7 Helpline: 011 4718585 / 077 567 5656</p>
                  <p className="text-sm text-gray-700">Services: Legal aid, counseling, shelter, emergency protection</p>
                </div>
                <div>
                  <h5 className="font-medium text-gray-800">✅ National Child Protection Authority (for minors)</h5>
                  <p className="text-sm text-gray-700">Hotline: 1929 (free and confidential)</p>
                  <p className="text-sm text-gray-700">For underage victims or reports involving children</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">📢 Remember:</h4>
              <p className="text-blue-700">Sexual assault is never the victim's fault. Whether or not you choose to report it, you deserve support, care, and justice.</p>
            </div>

            {/* Sexual Assault Support Video */}
            <div className="mt-6">
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
            {/* Toxic Relationships Image */}
            <div className="mb-6 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616c4e20d4b?w=800&h=300&fit=crop"
                alt="Breaking free from toxic relationships and finding healthy love"
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">🚩 What Is a Toxic Relationship?</h4>
              <p className="text-yellow-700">A toxic relationship is one where you feel emotionally drained instead of supported, afraid, anxious, or controlled, disrespected or constantly criticized. It can exist in romantic relationships, friendships, or family dynamics.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-empowerher-pink mb-3">⚠️ Common Signs of a Toxic Relationship</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• Controlling behavior (telling you what to wear, where to go, who to talk to)</li>
                  <li>• Jealousy and possessiveness</li>
                  <li>• Constant criticism or gaslighting ("You're too sensitive," "That never happened")</li>
                  <li>• Silent treatment or emotional manipulation</li>
                  <li>• Physical, verbal, or emotional abuse</li>
                  <li>• Lack of respect for your boundaries</li>
                  <li>• You feel scared, worthless, or trapped</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-empowerher-pink mb-3">🧭 What To Do If You're in a Toxic Relationship</h4>
                <ol className="text-gray-700 space-y-2">
                  <li><strong>1. Acknowledge it's not normal or healthy</strong> - Love should not hurt, control, or isolate.</li>
                  <li><strong>2. Talk to someone you trust</strong> - A friend, family member, teacher, or counselor can help you see things clearly.</li>
                  <li><strong>3. Set boundaries</strong> - Be clear about what you will and won't tolerate. Toxic people often test limits — stay firm.</li>
                  <li><strong>4. Make a safety plan (if needed)</strong> - If there's abuse, make a plan for how and when to leave safely.</li>
                  <li><strong>5. Seek professional support</strong> - Therapy or support groups can help rebuild confidence and self-worth.</li>
                </ol>
              </div>
            </div>

            <div className="mt-6 bg-green-50 p-6 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-3">🌸 Healing After a Toxic Relationship</h4>
              <ul className="text-green-700 space-y-1">
                <li>• Give yourself time — healing isn't quick but it's possible.</li>
                <li>• Rediscover your passions and hobbies.</li>
                <li>• Surround yourself with positive, respectful people.</li>
                <li>• Self-love is your superpower.</li>
              </ul>
              <p className="text-green-800 font-medium mt-3">You are not too sensitive. You are not overreacting. You deserve healthy love — safe, respectful, and kind.</p>
            </div>

            {/* Toxic Relationships Video */}
            <div className="mt-6">
              <h4 className="font-semibold text-gray-800 mb-2">🎥 Recognizing and Escaping Toxic Relationships</h4>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/kOpaVjCD9Kk"
                  title="Recognizing and Escaping Toxic Relationships"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 4. Online Counselling Platforms */}
        <Card id="free-counseling" className="bg-white rounded-lg shadow-lg mb-8 p-6">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-empowerher-pink flex items-center gap-3">
              <Lightbulb className="h-7 w-7" />
              4. 🟢 Online Counselling Platforms (Free & Confidential)
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* Free Counseling Image */}
            <div className="mb-6 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=300&fit=crop"
                alt="Free online counseling and therapy services for women"
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-empowerher-pink mb-2">1. National Mental Health Helpline – 1926</h4>
                  <p className="text-gray-700 text-sm mb-2">A 24/7 toll-free helpline offering psychological support via phone and SMS.</p>
                  <div className="text-xs text-gray-600 space-y-1">
                    <p>📞 Call: 1926</p>
                    <p>🌐 Mode: Phone / Text</p>
                    <p>💬 Language: Sinhala | Tamil | English</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-empowerher-pink mb-2">2. CCCline – 1333</h4>
                  <p className="text-gray-700 text-sm mb-2">Free telephone-based emotional support for anyone in distress.</p>
                  <div className="text-xs text-gray-600 space-y-1">
                    <p>📞 Call: 1333</p>
                    <p>🕒 Available: 24/7</p>
                    <p>💬 Language: Sinhala | Tamil | English</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-empowerher-pink mb-2">3. Free Minds Sri Lanka</h4>
                  <p className="text-gray-700 text-sm mb-2">Offers free virtual sessions (based on availability) with licensed therapists and counselors.</p>
                  <div className="text-xs text-gray-600 space-y-1">
                    <p>🌐 Website: freemindslanka.org</p>
                    <p>💬 Mode: Online chat / Video counselling</p>
                    <p>📍 Location: Remote – accessible anywhere in Sri Lanka</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-empowerher-pink mb-2">4. Kalyana Mental Health Directory</h4>
                  <p className="text-gray-700 text-sm mb-2">An online therapist directory with some professionals offering free or subsidized sessions.</p>
                  <div className="text-xs text-gray-600 space-y-1">
                    <p>🌐 Website: kalyana.lk</p>
                    <p>💬 Mode: Online</p>
                    <p>📍 Location: Remote – available across Sri Lanka</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-3">🟡 Offline Counselling Services (In-Person & Free)</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-gray-800">Sri Lanka Sumithrayo</h5>
                  <p className="text-sm text-gray-700">📞 Call: +94 11 2692909 | 🕒 Time: 9 AM – 8 PM</p>
                </div>
                <div>
                  <h5 className="font-medium text-gray-800">Women In Need (WIN)</h5>
                  <p className="text-sm text-gray-700">📞 Helpline: +94 11 471 8585</p>
                </div>
              </div>
            </div>

            {/* Free Counseling Video */}
            <div className="mt-6">
              <h4 className="font-semibold text-gray-800 mb-2">🎥 Free Mental Health Resources</h4>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/TTIlai-6kD8"
                  title="Free Mental Health Resources"
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
              5. 💼 Skill Building & Financial Independence for Women
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* Financial Independence Image */}
            <div className="mb-6 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=300&fit=crop"
                alt="Women's financial independence and entrepreneurship"
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-empowerher-pink mb-3">1. Free Online Courses & Training</h4>
                <p className="text-gray-700 text-sm mb-2">Websites offering free or affordable courses in skills like:</p>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Digital marketing</li>
                  <li>• Coding and programming basics</li>
                  <li>• Graphic design</li>
                  <li>• Language learning</li>
                  <li>• Handicrafts and tailoring</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-empowerher-pink mb-3">2. Work-from-Home Opportunities</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Guide on safe online jobs and freelancing platforms</li>
                  <li>• Tips on avoiding scams and ensuring payment security</li>
                  <li>• Ideas for home-based businesses: Baking, Handmade crafts, Virtual tutoring, Content writing</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-empowerher-pink mb-3">3. Financial Literacy Basics</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Simple lessons on budgeting, saving, and managing expenses</li>
                  <li>• How to open a bank account and use mobile banking in Sri Lanka</li>
                  <li>• Information on microfinance and women-specific loan programs</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-empowerher-pink mb-3">4. Local NGOs & Government Support</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• List of NGOs that provide training, startup grants, or mentorship</li>
                  <li>• Government initiatives supporting women in business</li>
                  <li>• Contact info for centers offering business advice and support</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-empowerher-pink mb-3">5. Inspirational Success Stories</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Short profiles of Sri Lankan women who transformed their lives through skills and entrepreneurship</li>
                  <li>• Videos or interviews sharing their journey, challenges, and advice</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-empowerher-pink mb-3">6. Networking & Community Building</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Encourage joining women's groups or online forums for support and advice</li>
                  <li>• Information about local meetups, workshops, and seminars</li>
                </ul>
              </div>
            </div>

            {/* Financial Independence Video */}
            <div className="mt-6">
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
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default SupportPage;

