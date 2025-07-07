
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Heart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import AuthButton from "./AuthButton";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/safety", label: "Safety" },
    { to: "/support", label: "Support" },
    { to: "/guidance", label: "Guidance" },
    { to: "/womens-health", label: "Women's Health" },
    { to: "/mental-health", label: "Mental Health" },
    { to: "/pregnancy", label: "Pregnancy" },
    { to: "/forum", label: "Forum" },
  ];

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 transition-colors">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-empowerher-pink p-2 rounded-full">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-empowerher-pink">EmpowerHer</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-gray-700 dark:text-gray-200 hover:text-empowerher-pink dark:hover:text-empowerher-pink-light transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side - Theme Toggle, Menu Button, and Auth Button */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle - Always visible */}
            <ThemeToggle />
            
            {/* Hamburger Menu Sheet - Always visible */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Toggle menu"
                >
                  <Menu className="h-5 w-5 text-gray-700 dark:text-gray-200" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80 p-0">
                <div className="flex flex-col h-full bg-white dark:bg-gray-900">
                  {/* Header with logo */}
                  <div className="p-6 bg-gradient-to-r from-empowerher-pink to-empowerher-pink-dark">
                    <div className="flex items-center space-x-2">
                      <div className="bg-white p-2 rounded-full">
                        <Heart className="h-6 w-6 text-empowerher-pink" />
                      </div>
                      <span className="text-2xl font-bold text-white">EmpowerHer</span>
                    </div>
                  </div>

                  {/* Navigation Menu */}
                  <div className="flex-1 overflow-y-auto p-4">
                    <nav className="space-y-2">
                      {navLinks.map((link) => (
                        <Link
                          key={link.to}
                          to={link.to}
                          onClick={closeMenu}
                          className="block text-gray-700 dark:text-gray-200 hover:text-empowerher-pink dark:hover:text-empowerher-pink-light transition-colors font-medium py-3 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </nav>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            {/* Auth Button */}
            <AuthButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
