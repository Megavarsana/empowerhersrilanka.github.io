
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Baby, Heart, Users, BookOpen, Phone, Home } from "lucide-react";

const PregnancyPage = () => {
  const resources = [
    {
      title: "Pregnancy Care",
      description: "Essential information for a healthy pregnancy",
      icon: Baby,
      items: [
        "Prenatal care guidelines",
        "Nutrition during pregnancy",
        "Exercise and wellness",
        "Common pregnancy concerns"
      ]
    },
    {
      title: "Birth Preparation",
      description: "Get ready for your baby's arrival",
      icon: Heart,
      items: [
        "Birth plan creation",
        "Labor and delivery prep",
        "Pain management options",
        "Hospital bag checklist"
      ]
    },
    {
      title: "New Mother Support",
      description: "Support for the postpartum period",
      icon: Home,
      items: [
        "Postpartum recovery",
        "Breastfeeding support",
        "Baby care basics",
        "Managing postpartum emotions"
      ]
    },
    {
      title: "Support Groups",
      description: "Connect with other mothers",
      icon: Users,
      items: [
        "New mom support groups",
        "Online parenting communities",
        "Local parenting classes",
        "Peer support networks"
      ]
    },
    {
      title: "Healthcare Resources",
      description: "Medical support and guidance",
      icon: Phone,
      items: [
        "Finding an OB-GYN",
        "Midwife services",
        "Emergency pregnancy care",
        "Insurance and financial aid"
      ]
    },
    {
      title: "Education & Classes",
      description: "Learn about pregnancy and parenting",
      icon: BookOpen,
      items: [
        "Childbirth education classes",
        "Parenting workshops",
        "Infant CPR training",
        "Newborn care classes"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-500 to-teal-500 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Pregnancy & New Motherhood Support
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Supporting you through pregnancy, birth, and the beautiful journey of new motherhood with comprehensive resources and care.
          </p>
          <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 text-lg">
            Get Support
          </Button>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Pregnancy & Motherhood Resources
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need for a healthy pregnancy and confident motherhood
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-green-100 rounded-full">
                      <resource.icon className="h-6 w-6 text-green-600" />
                    </div>
                    <CardTitle className="text-xl">{resource.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <ul className="space-y-2">
                    {resource.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
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

export default PregnancyPage;
