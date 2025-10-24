import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Settings, MessageSquare } from 'lucide-react';
import ProfileStats from '../features/profile/ProfileStats';
import ProfileCloset from '../features/profile/ProfileCloset';
import ProfileOutfits from '../features/profile/ProfileOutfits';
import { mockUserProfile } from '@/data/mockData';

const ProfilePage: React.FC = () => {
  return (
    <div className="max-w-md mx-auto p-4 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Profile</h1>
        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5" />
        </Button>
      </div>
      
      <div className="flex flex-col items-center gap-4">
        <Avatar className="h-24 w-24 border-2 border-border">
          <AvatarImage src={mockUserProfile.avatar} alt={mockUserProfile.name} />
          <AvatarFallback>{mockUserProfile.name.substring(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        
        <div className="text-center">
          <h2 className="text-xl font-bold">{mockUserProfile.name}</h2>
          <p className="text-sm text-muted-foreground">@{mockUserProfile.username}</p>
        </div>
        
        <p className="text-sm text-center max-w-xs">{mockUserProfile.bio}</p>
        
        <div className="flex gap-3">
          <Button className="rounded-full px-6">Edit Profile</Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <MessageSquare className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      <ProfileStats stats={mockUserProfile.stats} />
      
      <Tabs defaultValue="closet">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="closet">My Closet</TabsTrigger>
          <TabsTrigger value="outfits">My Outfits</TabsTrigger>
        </TabsList>
        <TabsContent value="closet" className="mt-4">
          <ProfileCloset items={mockUserProfile.closet} />
        </TabsContent>
        <TabsContent value="outfits" className="mt-4">
          <ProfileOutfits outfits={mockUserProfile.outfits} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProfilePage;