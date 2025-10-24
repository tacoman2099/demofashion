import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface ClosetStatsProps {
  stats: {
    all: number;
    tops: number;
    bottoms: number;
    shoes: number;
    outerwear: number;
    accessories: number;
  };
}

const ClosetStats: React.FC<ClosetStatsProps> = ({ stats }) => {
  const items = [
    { label: 'Total', value: stats.all },
    { label: 'Tops', value: stats.tops },
    { label: 'Bottoms', value: stats.bottoms },
    { label: 'Shoes', value: stats.shoes },
    { label: 'Outer', value: stats.outerwear },
    { label: 'Accessories', value: stats.accessories },
  ];

  return (
    <Card className="bg-muted/50">
      <CardContent className="p-4">
        <div className="grid grid-cols-3 gap-4">
          {items.map((item) => (
            <div key={item.label} className="rounded-xl bg-background/70 p-3 text-center shadow-sm">
              <p className="text-lg font-bold">{item.value}</p>
              <p className="text-[11px] uppercase tracking-wide text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ClosetStats;