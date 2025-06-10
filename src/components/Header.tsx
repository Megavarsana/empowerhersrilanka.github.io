
import { Button } from "@/components/ui/button";
import { Heart, Shield, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleEmergencyHelp = () => {
    // Emergency functionality - could open modal or redirect
    alert("Emergency Services:\n\nPolice: 119\nWomen's Helpline: 1938\nWomen In Need: 011-471-8585");
  };

  const handleWhoWeAre = () => {
    scrollToSection('about');
  };

  const handleLatestNews = () => {
    // Show Sri Lankan women empowerment news
    window.open('https://www.newsfirst.lk/tag/women-empowerment/', '_blank');
  };

  return (
    <header className="bg-white shadow-sm">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {/* Logo placeholder space */}
            <div className="w-12 h-12 bg-pastel-rose-light border-2 border-dashed border-pastel-rose rounded-lg flex items-center justify-center">
              <span className="text-xs text-pastel-rose-dark">LOGO</span>
            </div>
            <span className="text-2xl font-bold text-gray-800">EmpowerHer</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={handleWhoWeAre}
              className="text-gray-700 hover:text-pastel-rose transition-colors font-medium"
            >
              Who We Are
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-pastel-rose transition-colors font-medium"
            >
              What We Do
            </button>
            <button 
              onClick={() => scrollToSection('vision-mission')}
              className="text-gray-700 hover:text-pastel-rose transition-colors font-medium"
            >
              Get Involved
            </button>
            <button 
              onClick={handleLatestNews}
              className="text-gray-700 hover:text-pastel-rose transition-colors font-medium"
            >
              Latest News
            </button>
          </div>

          <Button 
            onClick={handleEmergencyHelp}
            className="bg-red-500 hover:bg-red-600 text-white font-bold px-8 py-3 rounded-full text-lg flex items-center space-x-2"
          >
            <Phone className="h-5 w-5" />
            <span>EMERGENCY HELP</span>
          </Button>
        </div>
      </nav>

      {/* Hero Section - Global Fund for Women Style */}
      <div className="hero-section">
        <div className="container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="text-left">
              <p className="text-sm font-semibold text-pastel-rose-dark mb-4 tracking-wider">
                EST. 2025
              </p>
              <h1 className="text-5xl md:text-6xl font-bold text-primary mb-8 leading-tight">
                WE FUND<br />
                BOLD, FEMINIST<br />
                MOVEMENTS
              </h1>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed max-w-lg">
                EmpowerHer supports gender justice movements in Sri Lanka to{" "}
                <span className="bg-yellow-200 px-1">create meaningful change</span>{" "}
                that will last beyond our lifetimes.
              </p>
            </div>

            {/* Right Side - Image placeholder */}
            <div className="flex justify-center">
              <div className="w-full h-96 bg-pastel-rose-light border-2 border-dashed border-pastel-rose rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Heart className="h-16 w-16 text-pastel-rose mx-auto mb-4" />
                  <span className="text-pastel-rose-dark font-medium">Hero Image Placeholder</span>
                  <p className="text-sm text-pastel-rose-dark mt-2">Sri Lankan women empowerment image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
