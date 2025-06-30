
import { Button } from "@/components/ui/button";
import { Heart, Shield, Phone, Menu } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/', { replace: true });
      setTimeout(() => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleEmergencyHelp = () => {
    alert("Emergency Services:\n\nPolice: 119\nWomen's Helpline: 1938\nWomen In Need: 011-471-8585");
  };

  const handleWhoWeAre = () => {
    scrollToSection('about');
  };

  const handleWhatWeDo = () => {
    navigate('/what-we-do');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const handleGetInvolved = () => {
    scrollToSection('vision-mission');
  };

  const handleLatestNews = () => {
    window.open('https://www.newsfirst.lk/tag/women-empowerment/', '_blank');
  };

  return (
    <>
      {/* Fixed Navigation */}
      <nav className={`fixed-header ${isScrolled ? 'shadow-xl' : 'shadow-md'}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-lg overflow-hidden shadow-md">
                <img src="/lovable-uploads/79a278b4-44d4-4f5e-8f41-e0df199a80d2.png" alt="EmpowerHer Logo" className="w-full h-full object-cover" />
              </div>
              <span className="text-2xl font-bold text-gray-800 cursor-pointer" onClick={() => navigate('/')}>EmpowerHer</span>
              <span className="text-sm font-semibold text-primary tracking-wider">EST. 2025</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-8">
              <button onClick={handleWhoWeAre} className="text-gray-700 hover:text-primary transition-all duration-300 font-medium cursor-pointer hover:scale-105">
                Who We Are
              </button>
              <button onClick={handleWhatWeDo} className="text-gray-700 hover:text-primary transition-all duration-300 font-medium cursor-pointer hover:scale-105">
                What We Do
              </button>
              <button onClick={handleGetInvolved} className="text-gray-700 hover:text-primary transition-all duration-300 font-medium cursor-pointer hover:scale-105">
                Get Involved
              </button>
              <button onClick={handleLatestNews} className="text-gray-700 hover:text-primary transition-all duration-300 font-medium cursor-pointer hover:scale-105">
                Latest News
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>

            {/* Emergency Button */}
            <Button onClick={handleEmergencyHelp} className="hidden lg:flex bg-red-500 hover:bg-red-600 text-white font-bold px-8 py-3 rounded-full text-lg items-center space-x-2 cursor-pointer btn-enhanced">
              <Phone className="h-5 w-5" />
              <span>EMERGENCY HELP</span>
            </Button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <button onClick={handleWhoWeAre} className="text-gray-700 hover:text-primary transition-colors font-medium text-left">
                  Who We Are
                </button>
                <button onClick={handleWhatWeDo} className="text-gray-700 hover:text-primary transition-colors font-medium text-left">
                  What We Do
                </button>
                <button onClick={handleGetInvolved} className="text-gray-700 hover:text-primary transition-colors font-medium text-left">
                  Get Involved
                </button>
                <button onClick={handleLatestNews} className="text-gray-700 hover:text-primary transition-colors font-medium text-left">
                  Latest News
                </button>
                <Button onClick={handleEmergencyHelp} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 rounded-full mt-4">
                  <Phone className="h-4 w-4 mr-2" />
                  EMERGENCY HELP
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with enhanced spacing for fixed header */}
      <div className="hero-section mt-20">
        <div className="container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left fade-in-up">
              <p className="text-sm font-semibold text-white mb-4 tracking-wider animate-fadeInUp stagger-1">
                EST. 2025
              </p>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight animate-fadeInUp stagger-2">
                WE FUND<br />
                BOLD, FEMINIST<br />
                MOVEMENTS
              </h1>
              <p className="text-xl text-white mb-6 leading-relaxed max-w-lg animate-fadeInUp stagger-3">
                EmpowerHer supports gender justice movements in Sri Lanka to{" "}
                <span className="bg-yellow-200 px-2 py-1 text-gray-800 rounded-lg">create meaningful change</span>{" "}
                that will last beyond our lifetimes.
              </p>
              <div className="flex items-center space-x-2 text-lg text-white mb-6 animate-fadeInUp stagger-4">
                <span>Made by Sri Lankan women for Sri Lankan women</span>
                <Heart className="h-6 w-6 text-red-300 fill-red-300" />
              </div>
            </div>

            <div className="flex justify-center animate-fadeInUp stagger-5">
              <div className="w-full h-96 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                <img alt="Sri Lankan women empowerment" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="/lovable-uploads/d0564ea2-4caf-4b08-8961-ae609c25ab55.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
