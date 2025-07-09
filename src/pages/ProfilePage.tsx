
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ImageUpload from '@/components/ImageUpload';
import ProfileForm from '@/components/ProfileForm';
import { Edit3, Save, X } from 'lucide-react';

interface ProfileData {
  first_name: string;
  last_name: string;
  email: string;
  bio: string;
  phone: string;
  location: string;
  website: string;
  avatar_url: string;
}

const ProfilePage = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [profile, setProfile] = useState<ProfileData>({
    first_name: '',
    last_name: '',
    email: '',
    bio: '',
    phone: '',
    location: '',
    website: '',
    avatar_url: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      navigate('/');
      return;
    }

    if (user) {
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
          email: data.email || user.email || '',
          bio: data.bio || '',
          phone: data.phone || '',
          location: data.location || '',
          website: data.website || '',
          avatar_url: data.avatar_url || ''
        });
      } else {
        setProfile({
          first_name: user.user_metadata?.first_name || '',
          last_name: user.user_metadata?.last_name || '',
          email: user.email || '',
          bio: '',
          phone: '',
          location: '',
          website: '',
          avatar_url: user.user_metadata?.avatar_url || ''
        });
      }
    } catch (error) {
      console.error('Error loading profile:', error);
    }
  };

  const handleFieldChange = (field: keyof ProfileData, value: string) => {
    setProfile(prev => ({ ...prev, [field]: value }));
  };

  const handleImageUpdate = (url: string) => {
    setProfile(prev => ({ ...prev, avatar_url: url }));
  };

  const handleSaveProfile = async () => {
    console.log('Save profile triggered');
    console.log('User:', user);
    console.log('Profile data:', profile);
    
    if (!user) {
      console.log('No user found, cannot save');
      return;
    }

    setIsLoading(true);
    try {
      console.log('Attempting to save profile...');
      const { data, error } = await supabase
        .from('profiles')
        .upsert({
          id: user.id,
          first_name: profile.first_name,
          last_name: profile.last_name,
          email: profile.email,
          bio: profile.bio,
          phone: profile.phone,
          location: profile.location,
          website: profile.website,
          avatar_url: profile.avatar_url,
          updated_at: new Date().toISOString()
        });

      console.log('Supabase response:', { data, error });

      if (error) {
        console.error('Supabase error:', error);
        toast({
          title: "Error",
          description: "Failed to update profile. Please try again.",
          variant: "destructive"
        });
        return;
      }

      console.log('Profile saved successfully');
      toast({
        title: "Success",
        description: "Profile updated successfully!"
      });
      
      setIsEditing(false);
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

  const handleCancelEdit = () => {
    setIsEditing(false);
    loadProfile(); // Reset to original data
  };

  const getUserDisplayName = () => {
    if (!user) return 'User';
    const firstName = profile.first_name || user.user_metadata?.first_name;
    const lastName = profile.last_name || user.user_metadata?.last_name;
    if (firstName && lastName) {
      return `${firstName} ${lastName}`;
    }
    return user.email?.split('@')[0] || 'User';
  };

  const getUserInitials = () => {
    const name = getUserDisplayName();
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your profile...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50">
      <Header />
      
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">My Profile</h1>
            <p className="text-gray-600">Manage your personal information and preferences</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left side - Profile Image */}
            <div className="lg:col-span-1">
              <Card className="bg-white/80 backdrop-blur-sm shadow-lg border border-pink-100">
                <CardContent className="p-8 text-center">
                  <ImageUpload
                    currentImageUrl={profile.avatar_url}
                    userId={user.id}
                    onImageUpdate={handleImageUpdate}
                    userInitials={getUserInitials()}
                  />
                  
                  <h2 className="text-2xl font-bold text-gray-800 mb-2 mt-6">
                    {getUserDisplayName()}
                  </h2>
                  
                  {profile.bio && (
                    <p className="text-gray-600 text-sm italic">
                      {profile.bio}
                    </p>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Right side - Profile Form */}
            <div className="lg:col-span-2">
              <Card className="bg-white/80 backdrop-blur-sm shadow-lg border border-pink-100">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-2xl font-bold text-gray-800">
                    Personal Information
                  </CardTitle>
                  <div className="flex space-x-2">
                    {!isEditing ? (
                      <Button
                        onClick={() => setIsEditing(true)}
                        className="bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 text-white shadow-lg"
                      >
                        <Edit3 className="h-4 w-4 mr-2" />
                        Edit Profile
                      </Button>
                    ) : (
                      <>
                        <Button
                          onClick={handleCancelEdit}
                          variant="outline"
                          className="border-gray-300 text-gray-600 hover:bg-gray-50"
                        >
                          <X className="h-4 w-4 mr-2" />
                          Cancel
                        </Button>
                        <Button
                          onClick={handleSaveProfile}
                          disabled={isLoading}
                          className="bg-gradient-to-r from-emerald-400 to-green-400 hover:from-emerald-500 hover:to-green-500 text-white shadow-lg"
                        >
                          <Save className="h-4 w-4 mr-2" />
                          {isLoading ? 'Saving...' : 'Save Changes'}
                        </Button>
                      </>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <ProfileForm
                    profile={profile}
                    onChange={handleFieldChange}
                    isEditing={isEditing}
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProfilePage;
