
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
  console.log("Footer component is rendering with new design");
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
    <footer className="bg-empowerher-pink text-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white/20"></div>
        <div className="absolute top-32 right-20 w-16 h-16 rounded-full bg-white/15"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 rounded-full bg-white/10"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Main Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-white/20 p-2 rounded-lg">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">EmpowerHer</h3>
                <p className="text-white/80 text-sm">A Space for Safe Women</p>
              </div>
            </div>
            <p className="text-white/90 mb-6 leading-relaxed text-sm">
              Empowering Sri Lankan women through safety, support, and guidance. Building a stronger community together.
            </p>
            <div className="flex items-center space-x-2 text-white/90 mb-4">
              <div className="bg-white/20 p-1 rounded">
                <Mail className="h-4 w-4" />
              </div>
              <span className="text-sm">empowerhersrilanka@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2 text-white/90">
              <div className="bg-white/20 p-1 rounded">
                <MapPin className="h-4 w-4" />
              </div>
              <span className="text-sm">Sri Lanka</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <div className="space-y-3">
              <Link to="/" className="block text-white/80 hover:text-white transition-colors text-sm hover:translate-x-1 transform duration-200">
                → Home
              </Link>
              <Link to="/safety" className="block text-white/80 hover:text-white transition-colors text-sm hover:translate-x-1 transform duration-200">
                → Safety Resources
              </Link>
              <Link to="/support" className="block text-white/80 hover:text-white transition-colors text-sm hover:translate-x-1 transform duration-200">
                → Support Services
              </Link>
              <Link to="/guidance" className="block text-white/80 hover:text-white transition-colors text-sm hover:translate-x-1 transform duration-200">
                → Mentorship
              </Link>
              <Link to="/womens-health" className="block text-white/80 hover:text-white transition-colors text-sm hover:translate-x-1 transform duration-200">
                → Women's Health
              </Link>
              <Link to="/mental-health" className="block text-white/80 hover:text-white transition-colors text-sm hover:translate-x-1 transform duration-200">
                → Mental Health
              </Link>
              <Link to="/forum" className="block text-white/80 hover:text-white transition-colors text-sm hover:translate-x-1 transform duration-200">
                → Forum
              </Link>
            </div>
          </div>

          {/* Support Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Support Services</h4>
            <div className="space-y-3">
              <button 
                onClick={handleAIChat}
                className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors text-sm group"
              >
                <div className="bg-white/20 p-1 rounded group-hover:bg-white/30 transition-colors">
                  <Bot className="h-3 w-3" />
                </div>
                <span>AI Assistant</span>
              </button>
              <div className="text-white/80 text-sm">
                <div className="bg-white/20 p-1 rounded inline-block mr-2">
                  <ThemeToggle />
                </div>
                <span>Theme Settings</span>
              </div>
              <p className="text-white/70 text-xs leading-relaxed">
                Made by Sri Lankan women for Sri Lankan women 💖
              </p>
            </div>
          </div>

          {/* Emergency Help */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Emergency Help</h4>
            <div className="space-y-4">
              <div className="bg-white/10 p-3 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-red-500/80 p-2 rounded-full">
                    <Phone className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">Police Emergency</p>
                    <p className="text-white/90 text-lg font-bold">119</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 p-3 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-pink-500/80 p-2 rounded-full">
                    <Phone className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">Women's Helpline</p>
                    <p className="text-white/90 text-lg font-bold">1938</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-6">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-center lg:text-left">
              <p className="text-white/80 text-sm">
                © 2025 EmpowerHer. Created by: S.Megavarsana
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center lg:justify-end space-x-6 text-sm text-white/80">
              <button 
                onClick={handlePrivacyPolicy}
                className="hover:text-white transition-colors hover:underline"
              >
                Privacy Policy
              </button>
              <button 
                onClick={handleTermsOfService}
                className="hover:text-white transition-colors hover:underline"
              >
                Terms of Service
              </button>
              <a 
                href="mailto:empowerhersrilanka@gmail.com" 
                className="hover:text-white transition-colors hover:underline"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
