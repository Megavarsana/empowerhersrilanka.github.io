
import { Heart, Mail, Phone, MapPin, Bot, Menu } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useEffect } from "react";

// Extend Window interface to include chatbase
declare global {
  interface Window {
    chatbase: any;
  }
}

const Footer = () => {
  const navigate = useNavigate();

  const handlePrivacyPolicy = () => {
    navigate('/privacy');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const handleTermsOfService = () => {
    navigate('/terms');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const handleAIChat = () => {
    if (window.chatbase) {
      window.chatbase("open");
    }
  };

  useEffect(() => {
    // Chatbase AI chatbot initialization
    const initChatbase = () => {
      if (!window.chatbase || (window.chatbase as any)("getState") !== "initialized") {
        window.chatbase = (...args: any[]) => {
          if (!(window.chatbase as any).q) { (window.chatbase as any).q = [] }
          (window.chatbase as any).q.push(args)
        };
        window.chatbase = new Proxy(window.chatbase, {
          get(target, prop) {
            if (prop === "q") { return (target as any).q }
            return (...args: any[]) => (target as any)(prop, ...args)
          }
        });
      }

      const onLoad = function() {
        const script = document.createElement("script");
        script.src = "https://www.chatbase.co/embed.min.js";
        script.id = "w0D6B5EbqJ_kFr-OnaHp2";
        (script as any).domain = "www.chatbase.co";
        document.body.appendChild(script);
      };

      if (document.readyState === "complete") {
        onLoad();
      } else {
        window.addEventListener("load", onLoad);
      }
    };

    initChatbase();
  }, []);

  return (
    <footer className="bg-primary dark:bg-black text-white transition-colors border-t-4 border-primary">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-white p-2 rounded-full">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <span className="text-2xl font-bold text-white">EmpowerHer</span>
            </div>
            <p className="text-white/90 dark:text-white mb-6 leading-relaxed">
              Empowering Sri Lankan women through safety, support, and guidance. 
              Creating a digital space where every woman can thrive with confidence and dignity.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-white/90 dark:text-white">
                <Mail className="h-4 w-4" />
                <span className="text-sm">empowerhersrilanka@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              {/* Theme Toggle and Home section */}
              <div className="flex items-center space-x-3 mb-3">
                <ThemeToggle />
                <Link to="/" className="text-white/90 dark:text-white hover:text-white transition-colors text-sm cursor-pointer">
                  Home
                </Link>
              </div>
              
              {/* Hamburger Menu - Always visible */}
              <div className="flex items-center space-x-2 text-white/90 dark:text-white hover:text-white transition-colors text-sm cursor-pointer mb-2">
                <Menu className="h-4 w-4" />
                <span>Menu</span>
              </div>
              
              <Link to="/safety" className="block text-white/90 dark:text-white hover:text-white transition-colors text-sm cursor-pointer">
                Safety Resources
              </Link>
              <Link to="/support" className="block text-white/90 dark:text-white hover:text-white transition-colors text-sm cursor-pointer">
                Support Services
              </Link>
              <Link to="/guidance" className="block text-white/90 dark:text-white hover:text-white transition-colors text-sm cursor-pointer">
                Mentorship
              </Link>
              <Link to="/safety" className="block text-white/90 dark:text-white hover:text-white transition-colors text-sm cursor-pointer">
                Emergency Contacts
              </Link>
              <Link to="/guidance" className="block text-white/90 dark:text-white hover:text-white transition-colors text-sm cursor-pointer">
                Success Stories
              </Link>
              <Link to="/forum" className="block text-white/90 dark:text-white hover:text-white transition-colors text-sm cursor-pointer">
                Forum
              </Link>
              <Link to="/" className="block text-white/90 dark:text-white hover:text-white transition-colors text-sm cursor-pointer">
                Latest News
              </Link>
              <button 
                onClick={handleAIChat}
                className="flex items-center space-x-2 text-white/90 dark:text-white hover:text-white transition-colors text-sm cursor-pointer"
              >
                <Bot className="h-4 w-4" />
                <span>AI Assistant</span>
              </button>
            </div>
          </div>

          {/* Emergency Contacts */}
          <div>
            <h4 className="font-semibold text-white mb-4">Emergency</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-white/90 dark:text-white">
                <Phone className="h-4 w-4" />
                <span className="text-sm">Police: 119</span>
              </div>
              <div className="flex items-center space-x-2 text-white/90 dark:text-white">
                <Phone className="h-4 w-4" />
                <span className="text-sm">Women's Helpline: 1938</span>
              </div>
              <div className="flex items-center space-x-2 text-white/90 dark:text-white">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Sri Lanka</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-white/90 dark:text-white text-sm mb-2">
                © 2025 EmpowerHer. Made with ❤️ for Sri Lankan women.
              </p>
              <p className="text-white text-lg font-semibold">
                Created by: S.Megavarsana
              </p>
            </div>
            <div className="flex space-x-6 text-sm text-white/90 dark:text-white">
              <button 
                onClick={handlePrivacyPolicy}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <button 
                onClick={handleTermsOfService}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Terms of Service
              </button>
              <a href="mailto:empowerhersrilanka@gmail.com" className="hover:text-white transition-colors cursor-pointer">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
