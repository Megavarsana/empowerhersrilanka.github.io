import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Heart, Menu, X, User, MessageSquare, Users, Info, Target, UserCheck, Calendar, BookOpen, Clock, LogOut, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useAuth } from "@/contexts/AuthContext";
import AuthButton from "./AuthButton";
import ThemeToggle from "./ThemeToggle";
import { supabase } from "@/integrations/supabase/client";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { user, signOut } = useAuth();
  const [profileData, setProfileData] = useState<any>(null);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Load user profile data for avatar
  useEffect(() => {
    const loadUserProfile = async () => {
      if (!user) return;
      
      try {
        const { data } = await supabase
          .from('profiles')
          .select('avatar_url, first_name, last_name')
          .eq('id', user.id)
          .single();
          
        if (data) {
          setProfileData(data);
        }
      } catch (error) {
        console.error('Error loading user profile:', error);
      }
    };

    if (user) {
      loadUserProfile();
    }
  }, [user]);

  const getUserDisplayName = () => {
    if (!user) return 'Guest';
    if (profileData?.first_name && profileData?.last_name) {
      return `${profileData.first_name} ${profileData.last_name}`;
    }
    const firstName = user.user_metadata?.first_name;
    const lastName = user.user_metadata?.last_name;
    if (firstName && lastName) {
      return `${firstName} ${lastName}`;
    }
    return user.email?.split('@')[0] || 'User';
  };

  const getUserInitials = () => {
    const name = getUserDisplayName();
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };

  const getUserAvatarUrl = () => {
    return profileData?.avatar_url || user?.user_metadata?.avatar_url;
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      closeMenu();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const navLinks = [
    { to: "/", label: "Home", icon: Heart },
    { to: "/safety", label: "Safety", icon: Target },
    { to: "/support", label: "Support", icon: Users },
    { to: "/guidance", label: "Guidance", icon: BookOpen },
    { to: "/womens-health", label: "Women's Health", icon: UserCheck },
    { to: "/mental-health", label: "Mental Health", icon: Users },
    { to: "/pregnancy", label: "Pregnancy", icon: Calendar },
    { to: "/forum", label: "Forum", icon: MessageSquare },
  ];

  const additionalLinks = [
    { to: "/", label: "Who we are", icon: Info },
    { to: "/", label: "What we do", icon: Target },
    { to: "/", label: "Get involved", icon: UserCheck },
    { to: "/", label: "Latest news", icon: BookOpen },
    { to: "/history", label: "My History", icon: Clock },
  ];

  return (
    <header className="empowerher-gradient shadow-xl border-b-4 border-empowerher-pink-dark sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/be224621-45b9-470b-983e-40dbaafaa42f.png" 
              alt="EmpowerHer Logo" 
              className="h-14 w-auto object-contain bg-white rounded-xl p-2 shadow-lg hover:shadow-xl transition-all duration-300"
            />
          </Link>

          {/* Desktop Navigation - Bold and Striking */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="empowerher-nav-link text-lg py-2">
              HOME
            </Link>
            <Link to="/safety" className="empowerher-nav-link text-lg py-2">
              SAFETY
            </Link>
            <Link to="/support" className="empowerher-nav-link text-lg py-2">
              SUPPORT  
            </Link>
            <Link to="/guidance" className="empowerher-nav-link text-lg py-2">
              GUIDANCE
            </Link>
            <Link to="/womens-health" className="empowerher-nav-link text-lg py-2">
              WOMEN'S HEALTH
            </Link>
            <Link to="/mental-health" className="empowerher-nav-link text-lg py-2">
              MENTAL HEALTH
            </Link>
            <Link to="/pregnancy" className="empowerher-nav-link text-lg py-2">
              PREGNANCY
            </Link>
            <Link to="/forum" className="empowerher-nav-link text-lg py-2">
              FORUM
            </Link>
          </nav>

          {/* Right side - Theme Toggle, User Avatar, and Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <div className="text-white">
              <ThemeToggle />
            </div>
            
            {/* User Profile Avatar - Show when logged in */}
            {user && (
              <Link to="/profile" className="flex items-center hover:opacity-80 transition-opacity">
                <Avatar className="h-10 w-10 border-2 border-white shadow-lg">
                  <AvatarImage src={getUserAvatarUrl()} />
                  <AvatarFallback className="bg-white text-empowerher-pink text-sm font-bold">
                    {getUserInitials()}
                  </AvatarFallback>
                </Avatar>
              </Link>
            )}
            
            {/* Hamburger Menu Sheet - Always visible */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="p-2 rounded-lg hover:bg-white/20 text-white hover:text-white transition-all duration-300"
                  aria-label="Toggle menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80 p-0">
                <div className="flex flex-col h-full bg-white dark:bg-gray-900">
                  {/* User Profile Header */}
                  <div className="p-6 bg-gradient-to-r from-empowerher-pink to-empowerher-pink-dark relative">
                    <div className="flex items-center space-x-3 mb-4">
                      <Avatar className="w-12 h-12 border-2 border-white">
                        <AvatarImage src={getUserAvatarUrl()} />
                        <AvatarFallback className="bg-white text-empowerher-pink font-semibold">
                          {user ? getUserInitials() : 'G'}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-white font-semibold text-lg">
                          {user ? getUserDisplayName() : 'Guest'}
                        </h3>
                        <Link 
                          to="/profile"
                          onClick={closeMenu}
                          className="text-white/80 text-sm hover:text-white transition-colors flex items-center space-x-1"
                        >
                          <span>Edit profile</span>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Navigation Menu */}
                  <div className="flex-1 overflow-y-auto">
                    {/* Main Profile Links */}
                    {user && (
                      <div className="p-4 border-b border-gray-100 dark:border-gray-800">
                        <Link
                          to="/profile"
                          onClick={closeMenu}
                          className="flex items-center space-x-3 text-gray-700 dark:text-gray-200 hover:text-empowerher-pink dark:hover:text-empowerher-pink-light transition-colors font-medium py-3 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
                        >
                          <User className="h-5 w-5" />
                          <span>My Profile</span>
                        </Link>
                        <Link
                          to="/reviews"
                          onClick={closeMenu}
                          className="flex items-center space-x-3 text-gray-700 dark:text-gray-200 hover:text-empowerher-pink dark:hover:text-empowerher-pink-light transition-colors font-medium py-3 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
                        >
                          <MessageSquare className="h-5 w-5" />
                          <span>My Reviews</span>
                        </Link>
                      </div>
                    )}

                    {/* Main Navigation */}
                    <div className="p-4 border-b border-gray-100 dark:border-gray-800">
                      <nav className="space-y-1">
                        {navLinks.map((link) => {
                          const IconComponent = link.icon;
                          return (
                            <Link
                              key={link.to}
                              to={link.to}
                              onClick={closeMenu}
                              className="flex items-center space-x-3 text-gray-700 dark:text-gray-200 hover:text-empowerher-pink dark:hover:text-empowerher-pink-light transition-colors font-medium py-3 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
                            >
                              <IconComponent className="h-5 w-5" />
                              <span>{link.label}</span>
                            </Link>
                          );
                        })}
                      </nav>
                    </div>

                    {/* Additional Links */}
                    <div className="p-4 border-b border-gray-100 dark:border-gray-800">
                      <nav className="space-y-1">
                        {additionalLinks.map((link) => {
                          const IconComponent = link.icon;
                          return (
                            <Link
                              key={`${link.to}-${link.label}`}
                              to={link.to}
                              onClick={closeMenu}
                              className="flex items-center space-x-3 text-gray-700 dark:text-gray-200 hover:text-empowerher-pink dark:hover:text-empowerher-pink-light transition-colors font-medium py-3 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
                            >
                              <IconComponent className="h-5 w-5" />
                              <span>{link.label}</span>
                            </Link>
                          );
                        })}
                      </nav>
                    </div>

                    {/* Bottom Section */}
                    <div className="p-4">
                      <div className="flex items-center justify-between py-3 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                        <div className="flex items-center space-x-3">
                          <Palette className="h-5 w-5 text-gray-700 dark:text-gray-200" />
                          <span className="text-gray-700 dark:text-gray-200 font-medium">App theme</span>
                        </div>
                        <ThemeToggle />
                      </div>
                      
                      {user && (
                        <button 
                          onClick={handleSignOut}
                          className="flex items-center space-x-3 text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 transition-colors font-medium py-3 px-4 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 w-full"
                        >
                          <LogOut className="h-5 w-5" />
                          <span>Logout</span>
                        </button>
                      )}
                    </div>
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
