import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ClosetItemType } from '@/types/closet';

interface ProfileClosetProps {
  items: ClosetItemType[];
}

const ProfileCloset: React.FC<ProfileClosetProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-3 gap-2">
      {items.map((item) => (
        <Card key={item.id} className="overflow-hidden border-none">
          <CardContent className="p-0">
            <div className="aspect-square">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProfileCloset;