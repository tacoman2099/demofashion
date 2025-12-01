import React from 'react';
import { Compass, Search, Sparkles } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import TrendingOutfits from '../features/discover/TrendingOutfits';
import {
  mockAiHotItems,
  mockStylistSpotlight,
  mockTrendingUsers,
} from '@/data/mockData';

const DiscoverPage: React.FC = () => {
  return (
    <div className="max-w-md mx-auto p-4 space-y-6 page-transition">
      <section className="space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold">Discover</h1>
            <p className="text-sm text-muted-foreground">
              Find the styles, closets, and stylists that are trending across Hanger right now.
            </p>
          </div>
          <Sparkles className="h-6 w-6 text-primary" />
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search styles, users, brands..." className="pl-9 h-10" />
        </div>
      </section>

      <Tabs defaultValue="trending">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="trending">Trending</TabsTrigger>
          <TabsTrigger value="stylists">Stylists</TabsTrigger>
          <TabsTrigger value="closets">Closets</TabsTrigger>
          <TabsTrigger value="market">Market</TabsTrigger>
        </TabsList>
      </Tabs>

      <Card className="bg-muted/40">
        <CardHeader className="flex flex-row items-center gap-2 pb-2">
          <Compass className="h-4 w-4 text-primary" />
          <CardTitle className="text-base font-semibold">Trending clothing signals</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          {mockAiHotItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between rounded-xl bg-background p-3 shadow-sm">
              <div>
                <p className="text-sm font-medium">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.lift}</p>
              </div>
              <Badge variant="secondary" className="rounded-full px-3 py-1 text-[11px]">Hot now</Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      <section>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-semibold">Stylists in the spotlight</h2>
          <Button variant="ghost" size="sm" className="h-7 px-3 text-xs">View all</Button>
        </div>
        <ScrollArea className="w-full whitespace-nowrap pb-2">
          <div className="flex gap-4">
            {mockStylistSpotlight.map((stylist) => (
              <Card key={stylist.id} className="w-48 flex-shrink-0">
                <CardContent className="p-4 space-y-3">
                  <Avatar className="h-12 w-12 border border-border">
                    <AvatarImage src={stylist.avatar} alt={stylist.name} />
                    <AvatarFallback>{stylist.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-semibold">{stylist.name}</p>
                    <p className="text-xs text-muted-foreground">{stylist.specialty}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="rounded-full px-2 py-1 text-[10px] uppercase">
                      {stylist.sessions} sessions
                    </Badge>
                    <Button size="sm" className="h-7 rounded-full px-3 text-[11px]">
                      Hire
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </section>

      <section>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-semibold">Closets worth exploring</h2>
          <Button variant="ghost" size="sm" className="h-7 px-3 text-xs">Follow creators</Button>
        </div>
        <ScrollArea className="w-full whitespace-nowrap pb-2">
          <div className="flex gap-4">
            {mockTrendingUsers.map((user) => (
              <div key={user.id} className="flex flex-col items-center space-y-2 w-20">
                <Avatar className="h-16 w-16 border-2 border-primary/60">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>{user.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <span className="text-xs font-medium text-center truncate w-full">{user.name}</span>
                <span className="text-[10px] uppercase tracking-wide text-muted-foreground">@{user.username}</span>
              </div>
            ))}
          </div>
        </ScrollArea>
      </section>

      <TrendingOutfits />
    </div>
  );
};

export default DiscoverPage;
