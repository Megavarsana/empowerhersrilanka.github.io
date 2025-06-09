
import { Button } from "@/components/ui/button";
import { Shield, Heart, Star } from "lucide-react";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="gradient-bg">
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
            <button 
              onClick={() => scrollToSection('safety')}
              className="flex items-center space-x-2 text-gray-700 hover:text-pastel-khaki transition-colors"
            >
              <Shield className="h-4 w-4" />
              <span>Safety</span>
            </button>
            <button 
              onClick={() => scrollToSection('support')}
              className="flex items-center space-x-2 text-gray-700 hover:text-pastel-khaki transition-colors"
            >
              <Heart className="h-4 w-4" />
              <span>Support</span>
            </button>
            <button 
              onClick={() => scrollToSection('guidance')}
              className="flex items-center space-x-2 text-gray-700 hover:text-pastel-khaki transition-colors"
            >
              <Star className="h-4 w-4" />
              <span>Guidance</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Empowerlter
          </h1>
          <h2 className="text-xl md:text-2xl text-pastel-khaki font-medium mb-6">
            A Space for Safety, Support & Success
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
            This platform is specially made for <strong>Sri Lankan women</strong> to feel 
            <strong> safe, supported, and empowered</strong>. From emergency resources to mental wellness, 
            business inspiration, and mentorship — Empowerlter is your trusted digital companion.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('safety')}
              className="bg-pastel-flesh hover:bg-pastel-khaki text-gray-800 font-medium px-8 py-3 rounded-full transition-all duration-300"
            >
              Get Started
            </Button>
            <Button 
              variant="outline"
              onClick={() => scrollToSection('about')}
              className="border-pastel-khaki text-pastel-khaki hover:bg-pastel-khaki hover:text-white px-8 py-3 rounded-full transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
