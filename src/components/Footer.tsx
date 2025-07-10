
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
    <footer className="bg-gradient-to-br from-primary via-primary-foreground to-accent text-white relative overflow-hidden">
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

        {/* Social Media Section */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <div className="text-center mb-6">
            <h4 className="text-lg font-semibold text-white mb-4">Connect With Us</h4>
            <div className="flex justify-center space-x-4">
              <a 
                href="#" 
                className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                aria-label="YouTube"
              >
                <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
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
