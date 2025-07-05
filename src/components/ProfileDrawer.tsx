
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useUserHistory } from '@/hooks/useUserHistory';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import ThemeToggle from '@/components/ThemeToggle';
import { 
  Menu, 
  User, 
  Star, 
  MessageCircle, 
  LogOut, 
  Info, 
  Users, 
  UserPlus, 
  Newspaper,
  History,
  Edit3,
  Trash2
} from 'lucide-react';

const ProfileDrawer = () => {
  const { user, signOut } = useAuth();
  const { history, loadHistory, deleteHistory } = useUserHistory();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [showHistory, setShowHistory] = useState(false);

  useEffect(() => {
    if (user && isOpen) {
      loadHistory();
    }
  }, [user, isOpen]);

  const handleSignOut = async () => {
    try {
      await signOut();
      setIsOpen(false);
      navigate('/');
      toast({
        title: "Signed out successfully",
        description: "You have been signed out of your account."
      });
    } catch (error) {
      console.error('Error signing out:', error);
      toast({
        title: "Error",
        description: "Failed to sign out. Please try again.",
        variant: "destructive"
      });
    }
  };

  const handleDeleteHistory = async () => {
    const success = await deleteHistory();
    if (success) {
      toast({
        title: "History cleared",
        description: "Your browsing history has been deleted."
      });
    } else {
      toast({
        title: "Error",
        description: "Failed to delete history. Please try again.",
        variant: "destructive"
      });
    }
  };

  const getUserDisplayName = () => {
    if (!user) return 'Guest';
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

  if (!user) return null;

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="ml-2">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-80 p-0">
        <div className="flex flex-col h-full bg-white">
          {/* Profile Header */}
          <div className="p-6 bg-gradient-to-r from-empowerher-pink to-empowerher-pink-dark">
            <div className="flex items-center space-x-4">
              <Avatar className="h-16 w-16 border-2 border-white">
                <AvatarImage src={user.user_metadata?.avatar_url} />
                <AvatarFallback className="bg-white text-empowerher-pink font-semibold">
                  {getUserInitials()}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h3 className="text-white font-semibold text-lg">{getUserDisplayName()}</h3>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-white hover:bg-white/20 p-1 h-auto"
                  onClick={() => {
                    setIsOpen(false);
                    navigate('/profile');
                  }}
                >
                  <Edit3 className="h-3 w-3 mr-1" />
                  Edit image
                </Button>
              </div>
            </div>
          </div>

          {/* Navigation Menu */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-4 space-y-2">
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => {
                  setIsOpen(false);
                  navigate('/profile');
                }}
              >
                <User className="h-4 w-4 mr-3" />
                My Profile
              </Button>

              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => {
                  setIsOpen(false);
                  navigate('/my-reviews');
                }}
              >
                <Star className="h-4 w-4 mr-3" />
                My Reviews
              </Button>

              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => {
                  setIsOpen(false);
                  navigate('/forum');
                }}
              >
                <MessageCircle className="h-4 w-4 mr-3" />
                Forum
              </Button>

              <Separator className="my-3" />

              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => {
                  setIsOpen(false);
                  navigate('/what-we-do');
                }}
              >
                <Info className="h-4 w-4 mr-3" />
                Who we are
              </Button>

              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => {
                  setIsOpen(false);
                  navigate('/what-we-do');
                }}
              >
                <Users className="h-4 w-4 mr-3" />
                What we do
              </Button>

              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => {
                  setIsOpen(false);
                  navigate('/support');
                }}
              >
                <UserPlus className="h-4 w-4 mr-3" />
                Get involved
              </Button>

              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => {
                  setIsOpen(false);
                  navigate('/forum');
                }}
              >
                <Newspaper className="h-4 w-4 mr-3" />
                Latest news
              </Button>

              <Separator className="my-3" />

              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => setShowHistory(!showHistory)}
              >
                <History className="h-4 w-4 mr-3" />
                🕘 My History
              </Button>

              {showHistory && (
                <div className="ml-7 space-y-2 max-h-48 overflow-y-auto">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-600">Recent Activity</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleDeleteHistory}
                      className="text-red-500 hover:text-red-700 h-6 px-2"
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                  {history.length === 0 ? (
                    <p className="text-sm text-gray-500">No history yet</p>
                  ) : (
                    history.slice(0, 10).map((entry) => (
                      <div key={entry.id} className="text-xs text-gray-600 p-2 bg-gray-50 rounded">
                        <div className="font-medium">{entry.page_name}</div>
                        <div className="text-gray-400">
                          {new Date(entry.visited_at).toLocaleString()}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )}

              <div className="flex items-center justify-between py-2">
                <span className="text-sm font-medium">App theme</span>
                <ThemeToggle />
              </div>

              <Separator className="my-3" />

              <Button
                variant="ghost"
                className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
                onClick={handleSignOut}
              >
                <LogOut className="h-4 w-4 mr-3" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ProfileDrawer;
