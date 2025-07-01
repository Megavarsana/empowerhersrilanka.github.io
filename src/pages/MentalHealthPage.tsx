
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Heart, Phone, MessageCircle, Users, Smile } from "lucide-react";

const MentalHealthPage = () => {
  const resources = [
    {
      title: "Self-Care & Wellness",
      description: "Daily practices to nurture your mental health",
      icon: Heart,
      items: [
        "Mindfulness and meditation",
        "Self-care routines",
        "Stress management techniques",
        "Building healthy habits"
      ]
    },
    {
      title: "Mental Health Support",
      description: "Professional help and counseling resources",
      icon: Brain,
      items: [
        "Free counseling services",
        "Online therapy platforms",
        "Mental health hotlines",
        "Crisis intervention resources"
      ]
    },
    {
      title: "Self-Love & Confidence",
      description: "Building a positive relationship with yourself",
      icon: Smile,
      items: [
        "Body positivity resources",
        "Self-esteem building exercises",
        "Confidence coaching",
        "Personal development guides"
      ]
    },
    {
      title: "Support Communities",
      description: "Connect with others who understand your journey",
      icon: Users,
      items: [
        "Mental health support groups",
        "Online communities",
        "Peer support networks",
        "Women's wellness circles"
      ]
    },
    {
      title: "Crisis Support",
      description: "Immediate help when you need it most",
      icon: Phone,
      items: [
        "24/7 crisis hotlines",
        "Emergency mental health services",
        "Suicide prevention resources",
        "Immediate counseling support"
      ]
    },
    {
      title: "Therapy & Counseling",
      description: "Professional mental health services",
      icon: MessageCircle,
      items: [
        "Finding the right therapist",
        "Types of therapy available",
        "Insurance coverage guidance",
        "Affordable counseling options"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Mental Health & Self-Love
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Your mental wellness matters. Find support, resources, and tools to nurture your mind and build self-love.
          </p>
          <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 text-lg">
            Start Your Journey
          </Button>
        </div>
      </section>

      {/* Featured Image Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <img 
              src="/lovable-uploads/581091226825-a6a2a5aee158.jpg" 
              alt="Mental Health Support"
              className="w-full h-96 object-cover rounded-lg shadow-lg mb-8"
            />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Your Mental Wellness Matters
            </h2>
            <p className="text-lg text-gray-600">
              Building confidence, self-love, and emotional resilience for a healthier, happier you
            </p>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Mental Health Resources
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive support for your mental wellness journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow bg-white">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-purple-100 rounded-full">
                      <resource.icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-xl">{resource.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <ul className="space-y-2">
                    {resource.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
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

      {/* Video Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Mental Wellness Video
            </h2>
            <p className="text-lg text-gray-600">
              Watch this helpful video for mental wellness and self-care tips
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-purple-200 to-purple-300 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 mx-auto">
                    <div className="w-0 h-0 border-l-[12px] border-l-purple-500 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                  </div>
                  <span className="text-purple-700 font-semibold">Mental Health & Self-Love</span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Building Confidence & Self-Love</h3>
                <p className="text-gray-600">Learn techniques for building confidence, practicing self-love, and managing stress and anxiety effectively.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MentalHealthPage;
