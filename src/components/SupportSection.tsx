import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Brain, Phone, FileText, Video, DollarSign } from "lucide-react";

const SupportSection = () => {
  const mentalHealthTips = [
    { title: "Deep Breathing", description: "Practice 4-7-8 breathing for instant calm" },
    { title: "Journaling", description: "Write your thoughts to process emotions" },
    { title: "Mindful Walking", description: "Connect with nature for mental clarity" },
    { title: "Meditation", description: "Start with 5 minutes daily for stress relief" }
  ];

  const supportServices = [
    { 
      name: "Women in Need (WIN)", 
      contact: "011-258-8265", 
      services: "Counseling, Legal Aid, Shelter",
      hours: "Mon-Fri 9AM-5PM"
    },
    { 
      name: "Women's Crisis Centre", 
      contact: "077-685-7082", 
      services: "Crisis Support, Counseling",
      hours: "Daily 9AM-6PM"
    },
    { 
      name: "CARE Sri Lanka", 
      contact: "011-230-2437", 
      services: "Women's Empowerment Programs",
      hours: "Mon-Fri 8AM-5PM"
    }
  ];

  return (
    <section id="support" className="section-spacing bg-primary">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Support for Women's Problems
          </h2>
          <p className="text-xl text-white/90 font-medium mb-6">
            Real Help for Real Struggles
          </p>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Find professional support, mental health resources, and trusted services 
            specifically for Sri Lankan women facing various challenges.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Mental Health Tips */}
          <Card className="card-hover bg-white border-white">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-gray-800">
                <Brain className="h-6 w-6 text-primary" />
                <span>Mental Health Tips for Women</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Mental Health Image */}
              <div className="mb-6 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=300&fit=crop"
                  alt="Mental health and wellness support for women"
                  className="w-full h-48 object-cover"
                />
              </div>
              
              <div className="space-y-4">
                {mentalHealthTips.map((tip, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">{tip.title}</h4>
                    <p className="text-gray-600 text-sm">{tip.description}</p>
                  </div>
                ))}
              </div>
              
              {/* YouTube Video */}
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

          {/* Dealing with Sexual Assault */}
          <Card className="card-hover bg-white border-white">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-gray-800">
                <Heart className="h-6 w-6 text-red-400" />
                <span>Support for Sexual Assault Survivors</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Sexual Assault Support Image */}
              <div className="mb-6 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&h=300&fit=crop"
                  alt="Support and healing for sexual assault survivors"
                  className="w-full h-48 object-cover"
                />
              </div>
              
              <div className="space-y-6">
                <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">Immediate Steps:</h4>
                  <ul className="text-red-700 text-sm space-y-1">
                    <li>• Ensure your safety first</li>
                    <li>• Consider medical attention</li>
                    <li>• Preserve evidence if you choose to report</li>
                    <li>• Contact a trusted friend or family member</li>
                  </ul>
                </div>
                
                <div className="bg-pastel-sand p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Legal Support in Sri Lanka:</h4>
                  <p className="text-gray-600 text-sm mb-2">
                    Report to police stations, seek legal aid from:
                  </p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Legal Aid Commission: 011-232-2643</li>
                    <li>• Women's Bureau: 011-232-3616</li>
                    <li>• Bar Association of Sri Lanka</li>
                  </ul>
                </div>

                <Button className="w-full bg-pastel-khaki hover:bg-pastel-sand text-gray-800">
                  Access Confidential Support
                </Button>
              </div>
              
              {/* YouTube Video */}
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
        </div>

        {/* Trusted Services */}
        <Card className="card-hover bg-white border-white mb-12">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-gray-800">
              <Phone className="h-6 w-6 text-primary" />
              <span>Trusted Support Services in Sri Lanka</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              {supportServices.map((service, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">{service.name}</h4>
                  <p className="text-xl font-bold text-primary mb-2">{service.contact}</p>
                  <p className="text-gray-600 text-sm mb-2">{service.services}</p>
                  <span className="text-xs bg-white px-2 py-1 rounded text-gray-600">
                    {service.hours}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Toxic Relationship Guide */}
          <Card className="card-hover bg-white border-white">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-gray-800">
                <FileText className="h-6 w-6 text-primary" />
                <span>Toxic Relationship Guide</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Toxic Relationship Image */}
              <div className="mb-6 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=600&h=300&fit=crop"
                  alt="Breaking free from toxic relationships"
                  className="w-full h-48 object-cover"
                />
              </div>
              
              <div className="space-y-4">
                <div className="bg-pastel-flesh p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Warning Signs:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Controlling behavior and isolation</li>
                    <li>• Emotional, physical, or financial abuse</li>
                    <li>• Constant criticism and manipulation</li>
                    <li>• Threats and intimidation</li>
                  </ul>
                </div>
                <div className="bg-pastel-sand p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Getting Help:</h4>
                  <p className="text-gray-600 text-sm">
                    Create a safety plan, reach out to trusted friends, contact support services, 
                    and remember that leaving takes courage and planning.
                  </p>
                </div>
                <Button className="w-full bg-pastel-khaki hover:bg-pastel-sand text-gray-800">
                  Download Complete Guide (PDF)
                </Button>
              </div>
              
              {/* YouTube Video */}
              <div className="mt-6">
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
            </CardContent>
          </Card>

          {/* Free Counseling Services */}
          <Card className="card-hover bg-white border-white">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-gray-800">
                <Video className="h-6 w-6 text-primary" />
                <span>Free Counseling Services</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Free Counseling Image */}
              <div className="mb-6 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=600&h=300&fit=crop"
                  alt="Free counseling and therapy services"
                  className="w-full h-48 object-cover"
                />
              </div>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-pastel-flesh to-pastel-sand p-4 rounded-lg text-center">
                  <h4 className="font-semibold text-gray-800 mb-2">Free Online Counseling</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Access professional mental health support through video calls, 
                    chat sessions, and support groups.
                  </p>
                  <Button className="bg-white text-pastel-khaki hover:bg-gray-50 mb-4">
                    Start Free Session
                  </Button>
                </div>
                
                <div className="bg-pastel-sand p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Educational Resources:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Managing anxiety and depression</li>
                    <li>• Building self-esteem and confidence</li>
                    <li>• Healthy relationship skills</li>
                    <li>• Stress management techniques</li>
                  </ul>
                </div>

                <Button className="w-full bg-red-400 hover:bg-red-500 text-white">
                  Watch Support Videos
                </Button>
              </div>
              
              {/* YouTube Video */}
              <div className="mt-6">
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
            </CardContent>
          </Card>
        </div>

        {/* Financial Independence */}
        <Card className="card-hover bg-white border-white">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-gray-800">
              <DollarSign className="h-6 w-6 text-primary" />
              <span>Financial Independence for Women</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
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
                <h4 className="font-semibold text-gray-800 mb-4">💰 Building Financial Independence</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Create a budget and track expenses</li>
                  <li>• Build an emergency fund</li>
                  <li>• Learn about investments and savings</li>
                  <li>• Develop multiple income streams</li>
                  <li>• Plan for retirement early</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">🏦 Financial Resources for Sri Lankan Women</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Women's Development Bank loans</li>
                  <li>• Microfinance opportunities</li>
                  <li>• Government entrepreneurship programs</li>
                  <li>• Financial literacy workshops</li>
                </ul>
              </div>
            </div>

            {/* YouTube Video */}
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
    </section>
  );
};

export default SupportSection;
