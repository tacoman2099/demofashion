import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ClosetItemType } from '@/types/closet';

interface ClosetGridProps {
  items: ClosetItemType[];
}

const ClosetGrid: React.FC<ClosetGridProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {items.map((item) => (
        <Card key={item.id} className="overflow-hidden group bg-muted/30">
          <CardContent className="p-2 relative">
            <div className="relative aspect-square overflow-hidden rounded-md flex items-center justify-center">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-4/5 h-4/5 object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <Badge 
                variant="secondary" 
                className="absolute top-2 right-2 text-xs bg-background/80 backdrop-blur-sm"
              >
                {item.category}
              </Badge>
            </div>
            <div className="mt-2">
              <h3 className="text-sm font-medium truncate">{item.name}</h3>
              <p className="text-xs text-muted-foreground">
                {item.brand}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ClosetGrid;