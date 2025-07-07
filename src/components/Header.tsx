
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Heart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import AuthButton from "./AuthButton";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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

          {/* Right side - Theme Toggle, Hamburger Menu, and Auth Button */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle - Always visible */}
            <ThemeToggle />
            
            {/* Hamburger Menu - Always visible */}
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors lg:hidden"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 text-gray-700 dark:text-gray-200" />
              ) : (
                <Menu className="h-5 w-5 text-gray-700 dark:text-gray-200" />
              )}
            </button>

            {/* Desktop Menu Button - Always visible */}
            <button
              onClick={toggleMenu}
              className="hidden lg:flex items-center space-x-2 p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle menu"
            >
              <Menu className="h-5 w-5 text-gray-700 dark:text-gray-200" />
              <span className="text-sm text-gray-700 dark:text-gray-200">Menu</span>
            </button>

            {/* Auth Button */}
            <AuthButton />
          </div>
        </div>

        {/* Mobile/Tablet Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 dark:border-gray-700 py-4">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={closeMenu}
                  className="text-gray-700 dark:text-gray-200 hover:text-empowerher-pink dark:hover:text-empowerher-pink-light transition-colors font-medium py-2 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}

        {/* Desktop Dropdown Menu */}
        {isMenuOpen && (
          <div className="hidden lg:block absolute top-full left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg">
            <div className="container mx-auto px-6 py-4">
              <nav className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={closeMenu}
                    className="text-gray-700 dark:text-gray-200 hover:text-empowerher-pink dark:hover:text-empowerher-pink-light transition-colors font-medium py-2 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
