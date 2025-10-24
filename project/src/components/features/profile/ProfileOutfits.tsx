import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { OutfitType } from '@/types/outfit';
import { Heart } from 'lucide-react';

interface ProfileOutfitsProps {
  outfits: OutfitType[];
}

const ProfileOutfits: React.FC<ProfileOutfitsProps> = ({ outfits }) => {
  return (
    <div className="grid grid-cols-2 gap-3">
      {outfits.map((outfit) => (
        <Card key={outfit.id} className="overflow-hidden group">
          <CardContent className="p-0 relative">
            <div className="aspect-[3/4]">
              <img
                src={outfit.imageUrl}
                alt={outfit.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-background/80 backdrop-blur-sm px-2 py-1 rounded-full">
                <Heart className="h-3 w-3 text-red-500 fill-red-500" />
                <span className="text-xs font-medium">{outfit.likes}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProfileOutfits;