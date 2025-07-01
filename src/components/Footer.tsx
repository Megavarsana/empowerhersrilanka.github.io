
import { Heart, Mail, Phone, MapPin } from "lucide-react";
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
    <footer className="bg-card border-t border-border mt-20">
      <div className="modern-container py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <span className="text-2xl font-bold text-foreground">EmpowerHer</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
              Empowering Sri Lankan women through safety, support, and guidance. 
              Creating a digital space where every woman can thrive with confidence and dignity.
            </p>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Mail className="h-4 w-4" />
              <span className="text-sm">herempower@gmail.com</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/safety" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Safety Resources
              </Link>
              <Link to="/support" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Support Services
              </Link>
              <Link to="/guidance" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Mentorship
              </Link>
              <Link to="/mental-health" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Mental Health
              </Link>
              <Link to="/pregnancy" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Pregnancy Support
              </Link>
            </div>
          </div>

          {/* Emergency Contacts */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Emergency</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span className="text-sm">Police: 119</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span className="text-sm">Women's Helpline: 1938</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Sri Lanka</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground text-sm mb-2">
                © 2025 EmpowerHer. Made with ❤️ for Sri Lankan women.
              </p>
              <p className="text-foreground text-lg font-semibold">
                Created by: S.Megavarsana
              </p>
            </div>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <button 
                onClick={handlePrivacyPolicy}
                className="hover:text-primary transition-colors"
              >
                Privacy Policy
              </button>
              <button 
                onClick={handleTermsOfService}
                className="hover:text-primary transition-colors"
              >
                Terms of Service
              </button>
              <a href="mailto:herempower@gmail.com" className="hover:text-primary transition-colors">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
