
import { Button } from "@/components/ui/button";
import { Heart, Shield, Phone, Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Safety", path: "/safety" },
    { label: "Support", path: "/support" },
    { label: "Guidance", path: "/guidance" },
    { label: "Health", path: "/womens-health" },
    { label: "Mental Health", path: "/mental-health" },
    { label: "Pregnancy", path: "/pregnancy" },
  ];

  const handleEmergencyHelp = () => {
    alert("Emergency Services:\n\nPolice: 119\nWomen's Helpline: 1938\nWomen In Need: 011-471-8585");
  };

  return (
    <>
      <header className={`nav-modern transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
        <nav className="modern-container">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate('/')}>
              <div className="w-10 h-10 rounded-lg overflow-hidden bg-primary/10 flex items-center justify-center">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xl font-bold text-foreground">EmpowerHer</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-1">
              {navItems.map((item) => (
                <Button
                  key={item.path}
                  variant={location.pathname === item.path ? "default" : "ghost"}
                  onClick={() => navigate(item.path)}
                  className="text-sm font-medium transition-colors"
                >
                  {item.label}
                </Button>
              ))}
            </div>

            {/* Right side */}
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              
              <Button 
                onClick={handleEmergencyHelp} 
                className="bg-red-500 hover:bg-red-600 text-white font-bold px-4 py-2 rounded-lg text-sm flex items-center space-x-2"
              >
                <Phone className="h-4 w-4" />
                <span className="hidden sm:inline">EMERGENCY</span>
              </Button>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-border mt-4 pt-4 pb-2">
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <Button
                    key={item.path}
                    variant={location.pathname === item.path ? "default" : "ghost"}
                    onClick={() => {
                      navigate(item.path);
                      setIsMobileMenuOpen(false);
                    }}
                    className="justify-start text-sm font-medium"
                  >
                    {item.label}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section - Only on home page */}
      {location.pathname === "/" && (
        <div className="hero-modern pt-20">
          <div className="modern-container py-20">
            <div className="text-center fade-up visible">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Empowering Sri Lankan Women
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Supporting gender justice movements to create meaningful change that will last beyond our lifetimes.
              </p>
              <div className="flex items-center justify-center space-x-2 text-lg text-muted-foreground mb-8">
                <span>Made by Sri Lankan women for Sri Lankan women</span>
                <Heart className="h-6 w-6 text-primary fill-primary" />
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-modern">
                  Get Support
                </Button>
                <Button variant="outline" className="btn-outline-modern">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
