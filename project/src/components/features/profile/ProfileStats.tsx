import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface ProfileStatsProps {
  stats: {
    posts: number;
    followers: number;
    following: number;
    likes: number;
  };
}

const ProfileStats: React.FC<ProfileStatsProps> = ({ stats }) => {
  return (
    <Card className="bg-muted/50">
      <CardContent className="p-4">
        <div className="flex justify-between">
          <div className="text-center">
            <p className="text-lg font-bold">{stats.posts}</p>
            <p className="text-xs text-muted-foreground">Posts</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold">{stats.followers}</p>
            <p className="text-xs text-muted-foreground">Followers</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold">{stats.following}</p>
            <p className="text-xs text-muted-foreground">Following</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold">{stats.likes}</p>
            <p className="text-xs text-muted-foreground">Likes</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileStats;