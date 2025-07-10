
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
    <>
      {/* Light Top Section */}
      <div className="bg-background border-t">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-6">
              <ThemeToggle />
              <p className="text-sm text-muted-foreground">
                Made by Sri Lankan women for Sri Lankan women 💖
              </p>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-muted hover:bg-primary hover:text-primary-foreground p-2 rounded-full transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="bg-muted hover:bg-primary hover:text-primary-foreground p-2 rounded-full transition-all duration-300"
                aria-label="YouTube"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="bg-muted hover:bg-primary hover:text-primary-foreground p-2 rounded-full transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Pink Footer */}
      <footer className="bg-gradient-to-r from-pink-500 to-pink-600 text-white">
        <div className="container mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Heart className="h-8 w-8 text-white" />
                <div>
                  <h3 className="text-2xl font-bold">EmpowerHer</h3>
                  <p className="text-pink-100 text-sm">A Space for Safe Women</p>
                </div>
              </div>
              <p className="text-pink-100 mb-4 leading-relaxed">
                Empowering Sri Lankan women through safety, support, and guidance.
              </p>
              <div className="flex items-center space-x-2 text-pink-100">
                <Mail className="h-4 w-4" />
                <span className="text-sm">empowerhersrilanka@gmail.com</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link to="/" className="block text-pink-100 hover:text-white transition-colors text-sm">
                  Home
                </Link>
                <Link to="/safety" className="block text-pink-100 hover:text-white transition-colors text-sm">
                  Safety Resources
                </Link>
                <Link to="/support" className="block text-pink-100 hover:text-white transition-colors text-sm">
                  Support Services
                </Link>
                <Link to="/guidance" className="block text-pink-100 hover:text-white transition-colors text-sm">
                  Mentorship
                </Link>
                <Link to="/womens-health" className="block text-pink-100 hover:text-white transition-colors text-sm">
                  Women's Health
                </Link>
                <Link to="/mental-health" className="block text-pink-100 hover:text-white transition-colors text-sm">
                  Mental Health
                </Link>
                <Link to="/forum" className="block text-pink-100 hover:text-white transition-colors text-sm">
                  Forum
                </Link>
                <button 
                  onClick={handleAIChat}
                  className="flex items-center space-x-2 text-pink-100 hover:text-white transition-colors text-sm"
                >
                  <Bot className="h-3 w-3" />
                  <span>AI Assistant</span>
                </button>
              </div>
            </div>

            {/* Emergency Help */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Emergency Help</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-pink-200" />
                  <div>
                    <p className="text-white font-medium text-sm">Police</p>
                    <p className="text-pink-100 text-sm">119</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-pink-200" />
                  <div>
                    <p className="text-white font-medium text-sm">Women's Helpline</p>
                    <p className="text-pink-100 text-sm">1938</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-pink-200" />
                  <div>
                    <p className="text-white font-medium text-sm">Location</p>
                    <p className="text-pink-100 text-sm">Sri Lanka</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-pink-400 mt-8 pt-6">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              <div className="text-center lg:text-left">
                <p className="text-pink-100 text-sm">
                  © 2025 EmpowerHer. Created by: S.Megavarsana
                </p>
              </div>
              
              <div className="flex space-x-4 text-sm text-pink-100">
                <button 
                  onClick={handlePrivacyPolicy}
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </button>
                <button 
                  onClick={handleTermsOfService}
                  className="hover:text-white transition-colors"
                >
                  Terms of Service
                </button>
                <a href="mailto:empowerhersrilanka@gmail.com" className="hover:text-white transition-colors">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
