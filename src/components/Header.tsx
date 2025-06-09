
import { Button } from "@/components/ui/button";
import { Heart, Shield } from "lucide-react";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-white shadow-sm">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-pastel-flesh p-2 rounded-full">
              <Heart className="h-6 w-6 text-pastel-khaki" />
            </div>
            <span className="text-xl font-semibold text-gray-800">Empowerlter</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button className="text-gray-700 hover:text-pastel-khaki transition-colors font-medium">
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-pastel-khaki transition-colors font-medium"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('vision-mission')}
              className="text-gray-700 hover:text-pastel-khaki transition-colors font-medium"
            >
              Our Vision
            </button>
            <button 
              onClick={() => scrollToSection('vision-mission')}
              className="text-gray-700 hover:text-pastel-khaki transition-colors font-medium"
            >
              Our Mission
            </button>
            <button className="text-gray-700 hover:text-pastel-khaki transition-colors font-medium">
              Contact Us
            </button>
          </div>

          <Button className="bg-red-500 hover:bg-red-600 text-white font-medium px-6 py-2 rounded-full">
            <Shield className="h-4 w-4 mr-2" />
            Emergency Help
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Empowerlter
          </h1>
          <h2 className="text-2xl md:text-3xl text-pastel-khaki font-medium mb-6">
            Sri Lankan Women's Guide
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive platform designed specifically for Sri Lankan women to access 
            safety resources, support services, and guidance for personal and professional growth.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
