import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import PostActions from '../features/feed/PostActions';
import { mockPosts, mockTrendingTags } from '@/data/mockData';

const HomePage: React.FC = () => {
  return (
    <div className="max-w-md mx-auto p-4 space-y-6 page-transition">
      <section className="rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-background p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary/80">hanger</p>
            <h1 className="mt-2 text-2xl font-bold">Closet stories from the community</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Browse fresh fits, trade pieces, and see how other members style their closets today.
            </p>
          </div>
          <Badge variant="secondary" className="rounded-full px-3 py-1 text-xs">Buy • Sell • Trade</Badge>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {['New drops', 'Closet swaps', 'Stylist picks'].map((chip) => (
            <Badge key={chip} variant="outline" className="rounded-full border-dashed px-3 py-1 text-xs">
              {chip}
            </Badge>
          ))}
        </div>

        <Button className="mt-6 w-full">Share your outfit</Button>
      </section>

      <section>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-semibold">What&apos;s trending</h2>
          <Button variant="ghost" size="sm" className="h-7 px-3 text-xs">View all</Button>
        </div>
        <div className="flex flex-wrap gap-2">
          {mockTrendingTags.map((tag) => (
            <Badge key={tag} variant="secondary" className="rounded-full px-3 py-1 text-xs">
              #{tag}
            </Badge>
          ))}
        </div>
      </section>

      <Separator />

      <section className="space-y-6">
        {mockPosts.map((post) => (
          <Card key={post.id} className="overflow-hidden border-none shadow-md rounded-3xl">
            <CardHeader className="p-4 pb-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10 border border-border">
                    <AvatarImage src={post.user.avatar} alt={post.user.name} />
                    <AvatarFallback>{post.user.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium text-sm">{post.user.name}</div>
                    <div className="text-xs text-muted-foreground">{post.timestamp}</div>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="h-8 px-3 text-xs">Request outfit</Button>
              </div>
            </CardHeader>
            <CardContent className="p-0 mt-4">
              <img
                src={post.imageUrl}
                alt="Community outfit"
                className="w-full object-cover"
                style={{ maxHeight: '480px' }}
              />
            </CardContent>
            <CardFooter className="p-4 flex flex-col items-start gap-3">
              <PostActions post={post} />
              <div>
                <p className="text-sm font-medium">{post.caption}</p>
                <p className="text-xs text-muted-foreground mt-1">{post.tags.map((tag) => `#${tag}`).join(' ')}</p>
              </div>
            </CardFooter>
          </Card>
        ))}
      </section>
    </div>
  );
};

export default HomePage;
