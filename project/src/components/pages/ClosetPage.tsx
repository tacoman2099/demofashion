import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ClosetHeader from '../features/closet/ClosetHeader';
import ClosetGrid from '../features/closet/ClosetGrid';
import ClosetStats from '../features/closet/ClosetStats';
import {
  mockClosetItems,
  mockClosetRequests,
  mockStylistServices,
  mockUserProfile,
} from '@/data/mockData';

export type CategoryType = 'all' | 'tops' | 'bottoms' | 'shoes' | 'outerwear' | 'accessories';

interface ClosetPageProps {
  onAddItem: () => void;
}

const ClosetPage: React.FC<ClosetPageProps> = ({ onAddItem }) => {
  const categories: { value: CategoryType; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'tops', label: 'Tops' },
    { value: 'bottoms', label: 'Bottoms' },
    { value: 'shoes', label: 'Shoes' },
    { value: 'outerwear', label: 'Outer' },
    { value: 'accessories', label: 'Acc' },
  ];

  const categoryStats = {
    all: mockClosetItems.length,
    tops: mockClosetItems.filter((item) => item.category.toLowerCase() === 'tops').length,
    bottoms: mockClosetItems.filter((item) => item.category.toLowerCase() === 'bottoms').length,
    shoes: mockClosetItems.filter((item) => item.category.toLowerCase() === 'shoes').length,
    outerwear: mockClosetItems.filter((item) => item.category.toLowerCase() === 'outerwear').length,
    accessories: mockClosetItems.filter((item) => item.category.toLowerCase() === 'accessories').length,
  };

  const getItemsByCategory = (category: CategoryType) => {
    if (category === 'all') {
      return mockClosetItems;
    }

    return mockClosetItems.filter((item) => item.category.toLowerCase() === category);
  };

  return (
    <div className="max-w-md mx-auto p-4 space-y-6 page-transition">
      <ClosetHeader onAddItem={onAddItem} />

      <Card className="bg-muted/40">
        <CardContent className="flex items-center gap-4 p-4">
          <Avatar className="h-16 w-16 border border-border">
            <AvatarImage src={mockUserProfile.avatar} alt={mockUserProfile.name} />
            <AvatarFallback>{mockUserProfile.name.substring(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <h2 className="text-lg font-semibold">{mockUserProfile.name}</h2>
            <p className="text-xs text-muted-foreground">@{mockUserProfile.username}</p>
            <p className="text-xs text-muted-foreground">
              {mockUserProfile.bio}
            </p>
          </div>
        </CardContent>
        <CardContent className="flex flex-wrap gap-2 border-t border-border/40 bg-background/40 p-4">
          <Button variant="outline" size="sm" className="rounded-full px-4">
            Share closet link
          </Button>
          <Button variant="secondary" size="sm" className="rounded-full px-4">
            Enable AI bookings
          </Button>
          <Button variant="ghost" size="sm" className="rounded-full px-4">
            View requests
          </Button>
        </CardContent>
      </Card>

      <ClosetStats stats={categoryStats} />

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList className="grid grid-cols-6 h-11">
          {categories.map((category) => (
            <TabsTrigger key={category.value} value={category.value}>
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category.value} value={category.value} className="m-0">
            <ClosetGrid items={getItemsByCategory(category.value)} />
          </TabsContent>
        ))}
      </Tabs>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base font-semibold">Requests & bookings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {mockClosetRequests.map((request) => (
            <div key={request.id} className="flex items-center gap-3 rounded-2xl border border-border/60 p-3">
              <Avatar className="h-10 w-10 border border-border">
                <AvatarImage src={request.avatar} alt={request.name} />
                <AvatarFallback>{request.name.substring(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-sm font-medium">{request.name}</p>
                <p className="text-xs text-muted-foreground">{request.request}</p>
              </div>
              <div className="text-right">
                <Badge variant="secondary" className="rounded-full px-3 py-1 text-[11px] uppercase">
                  {request.type}
                </Badge>
                <p className="mt-1 text-[10px] text-muted-foreground">{request.timeAgo}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="bg-muted/40">
        <CardHeader className="pb-3">
          <CardTitle className="text-base font-semibold">Grow your stylist side hustle</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {mockStylistServices.map((service) => (
            <div key={service.id} className="flex items-start justify-between gap-3 rounded-2xl bg-background p-4 shadow-sm">
              <div>
                <p className="text-sm font-semibold">{service.title}</p>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
              <Button size="sm" variant="outline" className="rounded-full px-4 text-xs">
                {service.cta}
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default ClosetPage;
