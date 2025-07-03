
import { Button } from "@/components/ui/button";
import { Heart, Shield, Phone } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import AuthButton from "./AuthButton";

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
    <header className="bg-white dark:bg-black shadow-sm transition-colors border-b border-gray-200 dark:border-gray-800">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {/* Logo */}
            <div className="w-12 h-12 rounded-lg overflow-hidden">
              <img src="/lovable-uploads/79a278b4-44d4-4f5e-8f41-e0df199a80d2.png" alt="EmpowerHer Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-2xl font-bold text-gray-800 dark:text-white cursor-pointer transition-colors" onClick={() => navigate('/')}>EmpowerHer</span>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            <button onClick={handleWhoWeAre} className="text-gray-700 dark:text-white hover:text-primary dark:hover:text-primary transition-colors font-medium cursor-pointer">
              Who We Are
            </button>
            <button onClick={handleWhatWeDo} className="text-gray-700 dark:text-white hover:text-primary dark:hover:text-primary transition-colors font-medium cursor-pointer">
              What We Do
            </button>
            <button onClick={handleGetInvolved} className="text-gray-700 dark:text-white hover:text-primary dark:hover:text-primary transition-colors font-medium cursor-pointer">
              Get Involved
            </button>
            <button onClick={handleLatestNews} className="text-gray-700 dark:text-white hover:text-primary dark:hover:text-primary transition-colors font-medium cursor-pointer">
              Latest News
            </button>
            <ThemeToggle />
          </div>

          <AuthButton />
        </div>
      </nav>

      {/* Hero Section - Global Fund for Women Style */}
      <div className="hero-section dark:bg-gradient-to-br dark:from-pink-600 dark:to-pink-800">
        <div className="container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="text-left">
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
