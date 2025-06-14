import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Heart, BookOpen, Play, Phone, Users, Lightbulb, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const WhatWeDo = () => {
  return (
    <div className="min-h-screen bg-primary">
      <Header />
      
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">What We Do</h1>
          <p className="text-xl text-white/90 mb-8">Supporting & Empowering Sri Lankan Women</p>
        </div>

        {/* Main Mission Statement */}
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-sm mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-6">
            EmpowerHer is dedicated to creating a safer, more supportive environment for women across Sri Lanka. We believe every woman deserves the opportunity to live with dignity, safety, and the freedom to pursue her dreams.
          </p>
          <p className="text-lg text-gray-700">
            Through our digital platform, we connect women with vital resources, support services, and educational opportunities that help them overcome challenges and reach their full potential.
          </p>
        </div>

        {/* Our Services Section */}
        <h2 className="text-3xl font-bold text-center text-white mb-8">Our Services</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="overflow-hidden border-white">
            <div className="bg-secondary p-4 flex items-center justify-center">
              <Phone className="h-8 w-8 text-white" />
            </div>
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-semibold text-primary mb-2">24/7 Emergency Support</h3>
              <p className="text-gray-700 text-sm">
                Immediate access to emergency contacts and crisis support services
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-white">
            <div className="bg-accent p-4 flex items-center justify-center">
              <HeartHandshake className="h-8 w-8 text-white" />
            </div>
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-semibold text-primary mb-2">Mental Health Support</h3>
              <p className="text-gray-700 text-sm">
                Free counseling services and mental wellness resources
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-white">
            <div className="bg-secondary p-4 flex items-center justify-center">
              <Lightbulb className="h-8 w-8 text-white" />
            </div>
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-semibold text-primary mb-2">Skills Development</h3>
              <p className="text-gray-700 text-sm">
                Free training programs and educational opportunities
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-white">
            <div className="bg-accent p-4 flex items-center justify-center">
              <Users className="h-8 w-8 text-white" />
            </div>
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-semibold text-primary mb-2">Community Network</h3>
              <p className="text-gray-700 text-sm">
                Connect with mentors and supportive communities
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Key Focus Areas */}
        <h2 className="text-3xl font-bold text-center text-white mb-8">Our Key Focus Areas</h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Safety */}
          <Card className="overflow-hidden border-white">
            <div className="bg-secondary p-4 flex items-center">
              <Shield className="h-8 w-8 text-white mr-3" />
              <h3 className="text-xl font-semibold text-white">Safety First</h3>
            </div>
            <CardContent className="p-6">
              <p className="text-gray-700 mb-4">
                We provide comprehensive safety resources and tools to help women protect themselves in various situations.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Emergency contact information</li>
                <li>• Self-defense tips and guidance</li>
                <li>• Online safety resources</li>
                <li>• One-click SOS solutions</li>
              </ul>
              <Link to="/safety">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                  Visit Safety Resources
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Support */}
          <Card className="overflow-hidden border-white">
            <div className="bg-accent p-4 flex items-center">
              <Heart className="h-8 w-8 text-white mr-3" />
              <h3 className="text-xl font-semibold text-white">Comprehensive Support</h3>
            </div>
            <CardContent className="p-6">
              <p className="text-gray-700 mb-4">
                We connect women with mental health resources, counseling services, and support for various personal challenges.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Mental health guidance</li>
                <li>• Domestic violence support</li>
                <li>• Free counseling services</li>
                <li>• Toxic relationship help</li>
              </ul>
              <Link to="/support">
                <Button className="w-full bg-accent hover:bg-accent/90 text-white">
                  Access Support Services
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Guidance */}
          <Card className="overflow-hidden border-white">
            <div className="bg-secondary p-4 flex items-center">
              <BookOpen className="h-8 w-8 text-white mr-3" />
              <h3 className="text-xl font-semibold text-white">Education & Guidance</h3>
            </div>
            <CardContent className="p-6">
              <p className="text-gray-700 mb-4">
                We empower women with educational resources, career guidance, and entrepreneurship support.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Free learning opportunities</li>
                <li>• Mentorship connections</li>
                <li>• Business startup guidance</li>
                <li>• Government program access</li>
              </ul>
              <Link to="/guidance">
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-white">
                  Explore Learning Resources
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Our Approach */}
        <div className="bg-white p-8 rounded-2xl shadow-sm mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Approach</h2>

          {/* Approach Image */}
          <div className="mb-8 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=400&fit=crop"
              alt="Our approach to women empowerment"
              className="w-full h-64 object-cover"
            />
          </div>
          
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">Accessibility</h3>
              <p className="text-gray-700">
                We ensure our resources are accessible to all women regardless of background, location, or technical expertise. Our platform is designed to be user-friendly and available in multiple languages.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">Confidentiality</h3>
              <p className="text-gray-700">
                We prioritize the privacy and confidentiality of all women using our services. Our platform implements strong security measures to protect sensitive information.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">Community-Centered</h3>
              <p className="text-gray-700">
                We believe in the power of community support. Our platform connects women with each other to share experiences, advice, and encouragement.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">Culturally Sensitive</h3>
              <p className="text-gray-700">
                We develop resources that are culturally appropriate and relevant to the diverse communities across Sri Lanka, recognizing the unique challenges faced by women in different regions.
              </p>
            </div>
          </div>

          {/* YouTube Video */}
          <div className="mt-12 bg-primary/10 p-6 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-4 text-center">🎥 Our Vision for Empowering Sri Lankan Women</h4>
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/gbCYzTnNErs"
                title="Our Vision for Empowering Sri Lankan Women"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default WhatWeDo;
