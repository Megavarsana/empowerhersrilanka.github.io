
import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Github } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

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

  return (
    <footer className="footer-enhanced">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="text-center space-y-8">
          {/* Brand */}
          <div className="flex justify-center items-center space-x-2 mb-8">
            <div className="bg-white p-3 rounded-full shadow-lg">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <span className="text-4xl font-bold text-white">EmpowerHer</span>
          </div>

          {/* Description */}
          <p className="text-white text-xl leading-relaxed max-w-3xl mx-auto">
            Empowering Sri Lankan women through safety, support, and guidance. 
            Creating a digital space where every woman can thrive with confidence and dignity.
          </p>

          {/* Contact Email */}
          <div className="flex justify-center items-center space-x-3 text-white text-xl">
            <Mail className="h-6 w-6" />
            <a href="mailto:empowerher.lk@gmail.com" className="hover:text-yellow-200 transition-colors">
              empowerher.lk@gmail.com
            </a>
          </div>

          {/* Emergency Contacts */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white text-2xl">Emergency Contacts</h4>
            <div className="flex justify-center space-x-8 text-white text-lg">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>Police: 119</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>Women's Helpline: 1938</span>
              </div>
            </div>
          </div>

          {/* Creator Credit */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Created by Megavarsana Subaskaran</h3>
            <p className="text-white/90 text-lg">A National-Level Innovation Project</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6">
            <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 hover:scale-110">
              <Facebook className="h-6 w-6 text-white" />
            </a>
            <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 hover:scale-110">
              <Instagram className="h-6 w-6 text-white" />
            </a>
            <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 hover:scale-110">
              <Github className="h-6 w-6 text-white" />
            </a>
          </div>

          {/* Copyright and Links */}
          <div className="border-t border-white/20 pt-8 space-y-4">
            <p className="text-white text-lg font-semibold">
              © 2025 EmpowerHer Sri Lanka. All Rights Reserved.
            </p>
            <div className="flex justify-center space-x-8 text-lg text-white/80">
              <button 
                onClick={handlePrivacyPolicy}
                className="hover:text-white transition-colors cursor-pointer hover:underline"
              >
                Privacy Policy
              </button>
              <button 
                onClick={handleTermsOfService}
                className="hover:text-white transition-colors cursor-pointer hover:underline"
              >
                Terms of Service
              </button>
              <a href="mailto:empowerher.lk@gmail.com" className="hover:text-white transition-colors cursor-pointer hover:underline">
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
