
import { Button } from "@/components/ui/button";
import { Heart, Shield, Phone } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    // If we're not on the home page, navigate there first
    if (location.pathname !== '/') {
      navigate('/', { replace: true });
      // Wait a bit for navigation, then scroll
      setTimeout(() => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEmergencyHelp = () => {
    // Emergency functionality - could open modal or redirect
    alert("Emergency Services:\n\nPolice: 119\nWomen's Helpline: 1938\nWomen In Need: 011-471-8585");
  };

  const handleWhoWeAre = () => {
    // Navigate to home page and scroll to about section
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById('about');
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      scrollToSection('about');
    }
  };

  const handleWhatWeDo = () => {
    // Navigate to what we do page directly to top
    navigate('/what-we-do');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const handleGetInvolved = () => {
    // If on home page, scroll to vision-mission, otherwise navigate to home and scroll
    if (location.pathname === '/') {
      scrollToSection('vision-mission');
    } else {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById('vision-mission');
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
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
            {/* Logo */}
            <div className="w-12 h-12 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=48&h=48&fit=crop&crop=faces"
                alt="EmpowerHer Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-2xl font-bold text-gray-800 cursor-pointer" onClick={() => navigate('/')}>EmpowerHer</span>
            <span className="text-sm font-semibold text-primary tracking-wider">EST. 2025</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={handleWhoWeAre}
              className="text-gray-700 hover:text-primary transition-colors font-medium cursor-pointer"
            >
              Who We Are
            </button>
            <button 
              onClick={handleWhatWeDo}
              className="text-gray-700 hover:text-primary transition-colors font-medium cursor-pointer"
            >
              What We Do
            </button>
            <button 
              onClick={handleGetInvolved}
              className="text-gray-700 hover:text-primary transition-colors font-medium cursor-pointer"
            >
              Get Involved
            </button>
            <button 
              onClick={handleLatestNews}
              className="text-gray-700 hover:text-primary transition-colors font-medium cursor-pointer"
            >
              Latest News
            </button>
          </div>

          <Button 
            onClick={handleEmergencyHelp}
            className="bg-red-500 hover:bg-red-600 text-white font-bold px-8 py-3 rounded-full text-lg flex items-center space-x-2 cursor-pointer"
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
              <p className="text-sm font-semibold text-white mb-4 tracking-wider">
                EST. 2025
              </p>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
                WE FUND<br />
                BOLD, FEMINIST<br />
                MOVEMENTS
              </h1>
              <p className="text-xl text-white mb-6 leading-relaxed max-w-lg">
                EmpowerHer supports gender justice movements in Sri Lanka to{" "}
                <span className="bg-yellow-200 px-1 text-gray-800">create meaningful change</span>{" "}
                that will last beyond our lifetimes.
              </p>
              <div className="flex items-center space-x-2 text-lg text-white mb-6">
                <span>Made by Sri Lankan women for Sri Lankan women</span>
                <Heart className="h-6 w-6 text-red-300 fill-red-300" />
              </div>
            </div>

            {/* Right Side - Hero Image */}
            <div className="flex justify-center">
              <div className="w-full h-96 rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=400&fit=crop&crop=faces"
                  alt="Sri Lankan women empowerment"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
