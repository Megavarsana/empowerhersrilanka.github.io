
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import AuthButton from './AuthButton';
import ProfileDrawer from './ProfileDrawer';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const getUserInitials = () => {
    if (!user) return '';
    const firstName = user.user_metadata?.first_name;
    const lastName = user.user_metadata?.last_name;
    if (firstName && lastName) {
      return `${firstName[0]}${lastName[0]}`.toUpperCase();
    }
    return user.email?.charAt(0).toUpperCase() || 'U';
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left side - Logo/Brand and Profile */}
          <div className="flex items-center space-x-4">
            <div 
              className="text-2xl font-bold text-empowerher-pink cursor-pointer"
              onClick={() => navigate('/')}
            >
              EmpowerHer
            </div>
            
            {user && (
              <div className="flex items-center space-x-2">
                <Avatar 
                  className="h-10 w-10 cursor-pointer border-2 border-empowerher-pink"
                  onClick={() => navigate('/profile')}
                >
                  <AvatarImage src={user.user_metadata?.avatar_url} />
                  <AvatarFallback className="bg-empowerher-pink text-white font-semibold">
                    {getUserInitials()}
                  </AvatarFallback>
                </Avatar>
                <ProfileDrawer />
              </div>
            )}
          </div>

          {/* Right side - Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-empowerher-pink transition-colors">
              Home
            </a>
            <a href="/safety" className="text-gray-700 hover:text-empowerher-pink transition-colors">
              Safety
            </a>
            <a href="/support" className="text-gray-700 hover:text-empowerher-pink transition-colors">
              Support
            </a>
            <a href="/guidance" className="text-gray-700 hover:text-empowerher-pink transition-colors">
              Guidance
            </a>
            <a href="/womens-health" className="text-gray-700 hover:text-empowerher-pink transition-colors">
              Women's Health
            </a>
            <a href="/mental-health" className="text-gray-700 hover:text-empowerher-pink transition-colors">
              Mental Health
            </a>
            <a href="/pregnancy" className="text-gray-700 hover:text-empowerher-pink transition-colors">
              Pregnancy
            </a>
            <a href="/forum" className="text-gray-700 hover:text-empowerher-pink transition-colors">
              Forum
            </a>
            {!user && <AuthButton />}
          </nav>

          {/* Mobile menu button - only show when not authenticated */}
          {!user && (
            <div className="md:hidden">
              <AuthButton />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
