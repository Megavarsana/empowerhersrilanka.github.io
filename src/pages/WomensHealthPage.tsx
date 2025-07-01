
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Calendar, Phone, BookOpen, Users, AlertCircle } from "lucide-react";

const WomensHealthPage = () => {
  const resources = [
    {
      title: "Period Tracking",
      description: "Track your menstrual cycle and understand your body better",
      icon: Calendar,
      items: [
        "Free period tracking apps",
        "Understanding your cycle",
        "When to see a doctor",
        "Managing period pain"
      ]
    },
    {
      title: "Menstrual Care",
      description: "Essential information about menstrual health and hygiene",
      icon: Heart,
      items: [
        "Choosing the right products",
        "Menstrual hygiene tips",
        "Dealing with heavy periods",
        "Natural remedies for cramps"
      ]
    },
    {
      title: "Health Education",
      description: "Learn about women's reproductive health",
      icon: BookOpen,
      items: [
        "Understanding hormones",
        "Reproductive health basics",
        "Birth control options",
        "Sexual health information"
      ]
    },
    {
      title: "Support Groups",
      description: "Connect with other women for support and advice",
      icon: Users,
      items: [
        "Online support communities",
        "Local women's groups",
        "Health workshops",
        "Peer support networks"
      ]
    },
    {
      title: "Emergency Resources",
      description: "When to seek immediate medical help",
      icon: AlertCircle,
      items: [
        "Emergency contraception",
        "Severe menstrual symptoms",
        "Reproductive health emergencies",
        "Finding healthcare providers"
      ]
    },
    {
      title: "Professional Help",
      description: "Connect with healthcare professionals",
      icon: Phone,
      items: [
        "Gynecologist referrals",
        "Free health clinics",
        "Telemedicine options",
        "Health insurance guidance"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-500 to-rose-500 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Women's Health
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Period Help & Menstrual Care - Comprehensive resources for women's reproductive health and wellness
          </p>
          <Button className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-3 text-lg">
            Get Started
          </Button>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Health Resources & Support
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about women's health and menstrual care
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-pink-100 rounded-full">
                      <resource.icon className="h-6 w-6 text-pink-600" />
                    </div>
                    <CardTitle className="text-xl">{resource.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <ul className="space-y-2">
                    {resource.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WomensHealthPage;
