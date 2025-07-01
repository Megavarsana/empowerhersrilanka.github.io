
import { Button } from "@/components/ui/button";
import { Heart, Shield, Phone } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/', {
        replace: true
      });
      setTimeout(() => {
        const element = document.getElementById(id);
        element?.scrollIntoView({
          behavior: 'smooth'
        });
      }, 100);
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const handleEmergencyHelp = () => {
    alert("Emergency Services:\n\nPolice: 119\nWomen's Helpline: 1938\nWomen In Need: 011-471-8585");
  };

  const handleWhoWeAre = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById('about');
        element?.scrollIntoView({
          behavior: 'smooth'
        });
      }, 100);
    } else {
      scrollToSection('about');
    }
  };

  const handleWhatWeDo = () => {
    navigate('/what-we-do');
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 100);
  };

  const handleGetInvolved = () => {
    if (location.pathname === '/') {
      scrollToSection('vision-mission');
    } else {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById('vision-mission');
        element?.scrollIntoView({
          behavior: 'smooth'
        });
      }, 100);
    }
  };

  const handleLatestNews = () => {
    window.open('https://www.newsfirst.lk/tag/women-empowerment/', '_blank');
  };

  return (
    <header className="bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100/50 sticky top-0 z-50">
      {/* Navigation */}
      <nav className="container mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {/* Logo */}
            <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-lg ring-2 ring-fuchsia-200">
              <img src="/lovable-uploads/79a278b4-44d4-4f5e-8f41-e0df199a80d2.png" alt="EmpowerHer Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-fuchsia-600 to-purple-700 bg-clip-text text-transparent cursor-pointer" onClick={() => navigate('/')}>EmpowerHer</span>
          </div>
          
          <div className="hidden md:flex space-x-10">
            <button onClick={handleWhoWeAre} className="text-gray-700 hover:text-transparent hover:bg-gradient-to-r hover:from-fuchsia-600 hover:to-purple-700 hover:bg-clip-text transition-all duration-300 font-semibold text-lg cursor-pointer">
              Who We Are
            </button>
            <button onClick={handleWhatWeDo} className="text-gray-700 hover:text-transparent hover:bg-gradient-to-r hover:from-fuchsia-600 hover:to-purple-700 hover:bg-clip-text transition-all duration-300 font-semibold text-lg cursor-pointer">
              What We Do
            </button>
            <button onClick={handleGetInvolved} className="text-gray-700 hover:text-transparent hover:bg-gradient-to-r hover:from-fuchsia-600 hover:to-purple-700 hover:bg-clip-text transition-all duration-300 font-semibold text-lg cursor-pointer">
              Get Involved
            </button>
            <button onClick={handleLatestNews} className="text-gray-700 hover:text-transparent hover:bg-gradient-to-r hover:from-fuchsia-600 hover:to-purple-700 hover:bg-clip-text transition-all duration-300 font-semibold text-lg cursor-pointer">
              Latest News
            </button>
          </div>

          <Button onClick={handleEmergencyHelp} className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 text-white font-bold px-10 py-4 rounded-xl text-lg flex items-center space-x-3 cursor-pointer shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            <Phone className="h-6 w-6" />
            <span>EMERGENCY HELP</span>
          </Button>
        </div>
      </nav>

      {/* Hero Section - Enhanced Professional Style */}
      <div className="hero-section relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/20 via-purple-600/20 to-purple-800/20"></div>
        <div className="container mx-auto px-8 py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Content */}
            <div className="text-left space-y-8">
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-10 leading-tight">
                WE FUND<br />
                <span className="bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent">BOLD, FEMINIST</span><br />
                MOVEMENTS
              </h1>
              <p className="text-2xl text-white/95 mb-8 leading-relaxed max-w-xl font-medium">
                EmpowerHer supports gender justice movements in Sri Lanka to{" "}
                <span className="bg-gradient-to-r from-yellow-300 to-yellow-400 px-3 py-1 rounded-lg text-gray-900 font-semibold shadow-lg">create meaningful change</span>{" "}
                that will last beyond our lifetimes.
              </p>
              <div className="flex items-center space-x-3 text-xl text-white/90 mb-8 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20">
                <span className="font-medium">Made by Sri Lankan women for Sri Lankan women</span>
                <Heart className="h-7 w-7 text-red-300 fill-red-300 animate-pulse" />
              </div>
            </div>

            {/* Right Side - Hero Image */}
            <div className="flex justify-center">
              <div className="w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/20 transform hover:scale-105 transition-transform duration-500">
                <img alt="Sri Lankan women empowerment" className="w-full h-full object-cover" src="/lovable-uploads/d0564ea2-4caf-4b08-8961-ae609c25ab55.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
