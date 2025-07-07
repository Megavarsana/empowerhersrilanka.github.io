
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface ProfileData {
  first_name: string;
  last_name: string;
  email: string;
  bio: string;
  phone: string;
  location: string;
  website: string;
}

interface ProfileFormProps {
  profile: ProfileData;
  onChange: (field: keyof ProfileData, value: string) => void;
  isEditing: boolean;
}

const ProfileForm: React.FC<ProfileFormProps> = ({ profile, onChange, isEditing }) => {
  if (!isEditing) {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label className="text-gray-700 font-medium">First Name</Label>
            <p className="mt-1 text-gray-900 bg-pink-50 p-3 rounded-lg">
              {profile.first_name || 'Not provided'}
            </p>
          </div>
          
          <div>
            <Label className="text-gray-700 font-medium">Last Name</Label>
            <p className="mt-1 text-gray-900 bg-pink-50 p-3 rounded-lg">
              {profile.last_name || 'Not provided'}
            </p>
          </div>
        </div>

        <div>
          <Label className="text-gray-700 font-medium">Email</Label>
          <p className="mt-1 text-gray-900 bg-pink-50 p-3 rounded-lg">
            {profile.email || 'Not provided'}
          </p>
        </div>

        <div>
          <Label className="text-gray-700 font-medium">Bio</Label>
          <p className="mt-1 text-gray-900 bg-pink-50 p-3 rounded-lg min-h-[80px]">
            {profile.bio || 'Tell us about yourself...'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label className="text-gray-700 font-medium">Phone</Label>
            <p className="mt-1 text-gray-900 bg-pink-50 p-3 rounded-lg">
              {profile.phone || 'Not provided'}
            </p>
          </div>
          
          <div>
            <Label className="text-gray-700 font-medium">Location</Label>
            <p className="mt-1 text-gray-900 bg-pink-50 p-3 rounded-lg">
              {profile.location || 'Not provided'}
            </p>
          </div>
        </div>

        <div>
          <Label className="text-gray-700 font-medium">Website</Label>
          <p className="mt-1 text-gray-900 bg-pink-50 p-3 rounded-lg">
            {profile.website || 'Not provided'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="first_name" className="text-gray-700 font-medium">First Name</Label>
          <Input
            id="first_name"
            type="text"
            value={profile.first_name}
            onChange={(e) => onChange('first_name', e.target.value)}
            placeholder="Enter your first name"
            className="mt-1 border-pink-200 focus:border-pink-400 focus:ring-pink-300"
          />
        </div>
        
        <div>
          <Label htmlFor="last_name" className="text-gray-700 font-medium">Last Name</Label>
          <Input
            id="last_name"
            type="text"
            value={profile.last_name}
            onChange={(e) => onChange('last_name', e.target.value)}
            placeholder="Enter your last name"
            className="mt-1 border-pink-200 focus:border-pink-400 focus:ring-pink-300"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="email" className="text-gray-700 font-medium">Email</Label>
        <Input
          id="email"
          type="email"
          value={profile.email}
          onChange={(e) => onChange('email', e.target.value)}
          placeholder="Enter your email"
          disabled
          className="mt-1 bg-gray-100 border-gray-300 cursor-not-allowed"
        />
        <p className="text-sm text-gray-500 mt-1">Email cannot be changed here</p>
      </div>

      <div>
        <Label htmlFor="bio" className="text-gray-700 font-medium">Bio</Label>
        <Textarea
          id="bio"
          value={profile.bio}
          onChange={(e) => onChange('bio', e.target.value)}
          placeholder="Tell us about yourself..."
          rows={4}
          className="mt-1 border-pink-200 focus:border-pink-400 focus:ring-pink-300"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="phone" className="text-gray-700 font-medium">Phone</Label>
          <Input
            id="phone"
            type="tel"
            value={profile.phone}
            onChange={(e) => onChange('phone', e.target.value)}
            placeholder="Enter your phone number"
            className="mt-1 border-pink-200 focus:border-pink-400 focus:ring-pink-300"
          />
        </div>
        
        <div>
          <Label htmlFor="location" className="text-gray-700 font-medium">Location</Label>
          <Input
            id="location"
            type="text"
            value={profile.location}
            onChange={(e) => onChange('location', e.target.value)}
            placeholder="Enter your location"
            className="mt-1 border-pink-200 focus:border-pink-400 focus:ring-pink-300"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="website" className="text-gray-700 font-medium">Website</Label>
        <Input
          id="website"
          type="url"
          value={profile.website}
          onChange={(e) => onChange('website', e.target.value)}
          placeholder="https://your-website.com"
          className="mt-1 border-pink-200 focus:border-pink-400 focus:ring-pink-300"
        />
      </div>
    </div>
  );
};

export default ProfileForm;
