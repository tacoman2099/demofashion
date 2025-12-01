import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart } from 'lucide-react';
import { mockTrendingOutfits } from '@/data/mockData';

const TrendingOutfits: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-medium">Trending Outfits</h2>
        <span className="text-sm text-primary cursor-pointer">See All</span>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        {mockTrendingOutfits.map((outfit) => (
          <Card key={outfit.id} className="overflow-hidden group">
            <CardContent className="p-2 relative">
              <div className="relative aspect-[3/4] overflow-hidden rounded-md">
                <img
                  src={outfit.imageUrl}
                  alt={outfit.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-background/80 backdrop-blur-sm px-2 py-1 rounded-full">
                  <Heart className="h-3 w-3 text-red-500 fill-red-500" />
                  <span className="text-xs font-medium">{outfit.likes}</span>
                </div>
                {outfit.isNew && (
                  <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground">
                    New
                  </Badge>
                )}
              </div>
              <div className="mt-2">
                <h3 className="text-sm font-medium truncate">{outfit.title}</h3>
                <p className="text-xs text-muted-foreground">
                  by {outfit.creator}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TrendingOutfits;