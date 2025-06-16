
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Phone, Users, Shield, Lightbulb, DollarSign } from "lucide-react";

const SupportPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-empowerher-pink via-empowerher-pink-medium to-empowerher-pink-dark">
      <Header />
      
      <div className="container mx-auto px-6 py-16">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Support for Women's Problems
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            You're not alone. Find comprehensive support, resources, and guidance for every challenge you face.
          </p>
        </div>

        {/* Mental Health Support */}
        <Card className="content-box mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-empowerher-pink flex items-center gap-3">
              <Heart className="h-7 w-7" />
              Mental Health Support
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <div className="aspect-video w-full mb-6 rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/x1W8f4Fwot8"
                  title="Mental Health Support for Women"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-4 text-empowerher-pink">Professional Counseling Services:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Phone className="h-4 w-4 mt-1 text-empowerher-pink flex-shrink-0" />
                    <div>
                      <strong>Sri Lanka Sumithrayo:</strong>
                      <br />24/7 Emotional Support: 011-2682-535
                      <br />Confidential listening service
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Phone className="h-4 w-4 mt-1 text-empowerher-pink flex-shrink-0" />
                    <div>
                      <strong>Shanthi Maargam:</strong>
                      <br />Mental Health Helpline: 011-2685-622
                      <br />Professional counseling and therapy
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4 text-empowerher-pink">Self-Care Resources:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Meditation and mindfulness practices</li>
                  <li>• Yoga classes specifically for women</li>
                  <li>• Support groups in your community</li>
                  <li>• Online mental health resources</li>
                  <li>• Journaling and stress management techniques</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sexual Assault Support */}
        <Card className="content-box mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-empowerher-pink flex items-center gap-3">
              <Shield className="h-7 w-7" />
              Sexual Assault Support & Recovery
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <div className="aspect-video w-full mb-6 rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/LEtEPT8vwGw"
                  title="Support for Sexual Assault Survivors"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-4 text-empowerher-pink">Immediate Support:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Phone className="h-4 w-4 mt-1 text-empowerher-pink flex-shrink-0" />
                    <div>
                      <strong>Emergency:</strong> 119 (Police)
                      <br />Immediate protection and investigation
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Phone className="h-4 w-4 mt-1 text-empowerher-pink flex-shrink-0" />
                    <div>
                      <strong>Women's Helpline:</strong> 1938
                      <br />24/7 confidential support and guidance
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="h-4 w-4 mt-1 text-empowerher-pink flex-shrink-0" />
                    <div>
                      <strong>Mithuru Piyasa Units:</strong>
                      <br />Hospital-based care at major hospitals
                      <br />Medical, legal, and psychological support
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4 text-empowerher-pink">Recovery & Legal Aid:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Free legal representation through Legal Aid Commission</li>
                  <li>• Specialized trauma counseling services</li>
                  <li>• Support groups for survivors</li>
                  <li>• Medical examination and care</li>
                  <li>• Safe shelter arrangements if needed</li>
                  <li>• Court support and advocacy</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Toxic Relationships */}
        <Card className="content-box mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-empowerher-pink flex items-center gap-3">
              <Users className="h-7 w-7" />
              Escaping Toxic Relationships
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-8">
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg mb-6">
                <h4 className="font-semibold text-red-800 mb-2">⚠️ What is a Toxic Relationship?</h4>
                <p className="text-red-700 text-sm">
                  A relationship where one person consistently hurts, controls, or manipulates the other. 
                  It can exist in romantic relationships, friendships, family dynamics, or workplace situations.
                </p>
              </div>

              <div className="aspect-video w-full mb-6 rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/6Z8SBLcEu0w"
                  title="Recognizing and Escaping Toxic Relationships"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="content-box-small">
                <h4 className="font-semibold text-lg mb-4 text-empowerher-pink">⚠️ Common Signs of a Toxic Relationship</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Controlling behavior (telling you what to wear, where to go, who to talk to)</li>
                  <li>• Jealousy and possessiveness</li>
                  <li>• Constant criticism or gaslighting ("You're too sensitive," "That never happened")</li>
                  <li>• Silent treatment or emotional manipulation</li>
                  <li>• Physical, verbal, or emotional abuse</li>
                  <li>• Lack of respect for your boundaries</li>
                  <li>• You feel scared, worthless, or trapped</li>
                </ul>
              </div>

              <div className="content-box-small">
                <h4 className="font-semibold text-lg mb-4 text-empowerher-pink">🛡️ What To Do If You're in a Toxic Relationship</h4>
                <ol className="space-y-2 text-gray-700 text-sm">
                  <li><strong>1. Acknowledge it's not normal or healthy</strong> - Love should not hurt, control, or isolate</li>
                  <li><strong>2. Talk to someone you trust</strong> - A friend, family member, teacher, or counselor can help you see things clearly</li>
                  <li><strong>3. Set boundaries</strong> - Be clear about what you will and won't tolerate. Toxic people often test limits — stay firm</li>
                  <li><strong>4. Make a safety plan (if needed)</strong> - If there's abuse, make a plan for how and when to leave safely</li>
                  <li><strong>5. Seek professional support</strong> - Therapy or support groups can help rebuild confidence and self-worth</li>
                </ol>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Free Counseling */}
        <Card className="content-box mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-empowerher-pink flex items-center gap-3">
              <Lightbulb className="h-7 w-7" />
              Free Counseling & Therapy Services
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <div className="aspect-video w-full mb-6 rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/TfEZPeN4mUY"
                  title="Free Mental Health Resources"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="info-card">
                <h3 className="font-semibold text-empowerher-pink mb-3">🏥 Government Hospitals</h3>
                <p className="text-sm text-gray-700 mb-2">Free psychiatric services and counseling</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• National Hospital of Sri Lanka</li>
                  <li>• Colombo North Teaching Hospital</li>
                  <li>• District General Hospitals</li>
                </ul>
              </div>

              <div className="info-card">
                <h3 className="font-semibold text-empowerher-pink mb-3">📞 Helplines</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li><strong>1938:</strong> Women's Crisis Line</li>
                  <li><strong>011-2682-535:</strong> Sumithrayo</li>
                  <li><strong>071-744-4444:</strong> Mental Health</li>
                </ul>
              </div>

              <div className="info-card">
                <h3 className="font-semibold text-empowerher-pink mb-3">🏢 NGO Services</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Women in Need (WIN)</li>
                  <li>• Samaritans Sri Lanka</li>
                  <li>• YWCA Counseling Center</li>
                  <li>• Community-based organizations</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Financial Independence */}
        <Card className="content-box">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-empowerher-pink flex items-center gap-3">
              <DollarSign className="h-7 w-7" />
              Financial Independence & Empowerment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <div className="aspect-video w-full mb-6 rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/3x0HELEWZaM"
                  title="Women's Financial Independence"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-lg mb-4 text-empowerher-pink">💼 Skills Development Programs:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Vocational Training Authority (VTA) - Free courses</li>
                  <li>• Women's Bureau training programs</li>
                  <li>• NYSC entrepreneurship workshops</li>
                  <li>• ICT and digital literacy programs</li>
                  <li>• English language and soft skills training</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4 text-empowerher-pink">💰 Financial Support Options:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Samurdhi self-employment loans</li>
                  <li>• Enterprise Sri Lanka women's loan schemes</li>
                  <li>• Microfinance institutions</li>
                  <li>• Women's cooperative societies</li>
                  <li>• Business development grants</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-empowerher-pink-light rounded-lg">
              <h4 className="font-semibold text-empowerher-pink-dark mb-3">📈 Steps to Financial Independence:</h4>
              <ol className="space-y-2 text-gray-700">
                <li><strong>1. Education & Skill Building:</strong> Learn new skills or improve existing ones</li>
                <li><strong>2. Start Small:</strong> Begin with home-based businesses or part-time work</li>
                <li><strong>3. Save & Budget:</strong> Track expenses and save regularly, even small amounts</li>
                <li><strong>4. Network:</strong> Connect with other women entrepreneurs and mentors</li>
                <li><strong>5. Access Credit:</strong> Build a credit history through small loans or savings groups</li>
                <li><strong>6. Scale Up:</strong> Gradually expand your business or career opportunities</li>
              </ol>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default SupportPage;
