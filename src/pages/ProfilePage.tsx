
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ProfilePage = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [profile, setProfile] = useState({
    first_name: '',
    last_name: '',
    email: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      navigate('/');
      return;
    }

    if (user) {
      // Load user profile
      loadProfile();
    }
  }, [user, loading, navigate]);

  const loadProfile = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      if (error && error.code !== 'PGRST116') {
        console.error('Error loading profile:', error);
        return;
      }

      if (data) {
        setProfile({
          first_name: data.first_name || '',
          last_name: data.last_name || '',
          email: data.email || user.email || ''
        });
      } else {
        // Create initial profile
        setProfile({
          first_name: user.user_metadata?.first_name || '',
          last_name: user.user_metadata?.last_name || '',
          email: user.email || ''
        });
      }
    } catch (error) {
      console.error('Error loading profile:', error);
    }
  };

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setIsLoading(true);
    try {
      const { error } = await supabase
        .from('profiles')
        .upsert({
          id: user.id,
          first_name: profile.first_name,
          last_name: profile.last_name,
          email: profile.email,
          updated_at: new Date().toISOString()
        });

      if (error) {
        toast({
          title: "Error",
          description: "Failed to update profile. Please try again.",
          variant: "destructive"
        });
        return;
      }

      toast({
        title: "Success",
        description: "Profile updated successfully!"
      });
    } catch (error) {
      console.error('Error updating profile:', error);
      toast({
        title: "Error",
        description: "An unexpected error occurred.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-empowerher-pink via-empowerher-pink-medium to-empowerher-pink-dark">
      <Header />
      
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto">
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-800">My Profile</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleUpdateProfile} className="space-y-6">
                <div>
                  <Label htmlFor="first_name">First Name</Label>
                  <Input
                    id="first_name"
                    type="text"
                    value={profile.first_name}
                    onChange={(e) => setProfile(prev => ({ ...prev, first_name: e.target.value }))}
                    placeholder="Enter your first name"
                  />
                </div>
                
                <div>
                  <Label htmlFor="last_name">Last Name</Label>
                  <Input
                    id="last_name"
                    type="text"
                    value={profile.last_name}
                    onChange={(e) => setProfile(prev => ({ ...prev, last_name: e.target.value }))}
                    placeholder="Enter your last name"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="Enter your email"
                    disabled
                  />
                  <p className="text-sm text-gray-500 mt-1">Email cannot be changed here</p>
                </div>

                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full bg-empowerher-pink hover:bg-empowerher-pink-dark"
                >
                  {isLoading ? 'Updating...' : 'Update Profile'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProfilePage;
