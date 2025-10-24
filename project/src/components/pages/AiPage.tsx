import React from 'react';
import { Sparkles, Wand2, ShoppingBag, RefreshCcw } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  mockAiHotItems,
  mockAiTips,
  mockAiClosetLooks,
  mockMarketplaceRecommendations,
} from '@/data/mockData';

const AiPage: React.FC = () => {
  return (
    <div className="max-w-md mx-auto p-4 space-y-6 page-transition">
      <section className="rounded-3xl bg-gradient-to-br from-primary/15 via-primary/10 to-background p-6 text-primary-foreground">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2 text-foreground">
            <Badge variant="secondary" className="rounded-full px-3 py-1 text-xs uppercase tracking-widest">
              hanger ai studio
            </Badge>
            <h1 className="text-2xl font-bold text-foreground">Your stylist in a tap</h1>
            <p className="text-sm text-muted-foreground">
              Surface what&apos;s hot, remix your closet, and shop community pieces curated by our styling intelligence.
            </p>
          </div>
          <Sparkles className="h-10 w-10 text-primary" />
        </div>
        <Button className="mt-6 w-full" variant="secondary">
          Run closet scan
        </Button>
      </section>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-3">
          <CardTitle className="text-base font-semibold">Hot on Hanger</CardTitle>
          <Badge variant="outline" className="flex items-center gap-1 rounded-full px-3 py-1 text-[10px] uppercase">
            <RefreshCcw className="h-3 w-3" />
            updated hourly
          </Badge>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          {mockAiHotItems.map((item) => (
            <div key={item.id} className="flex items-start justify-between gap-3 rounded-xl border border-dashed border-primary/30 p-3">
              <div>
                <p className="text-sm font-medium text-foreground">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.lift}</p>
              </div>
              <Badge variant="secondary" className="rounded-full px-3 py-1 text-[11px]">On fire</Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="bg-muted/40">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-base font-semibold">
            <Wand2 className="h-4 w-4" /> Styling intelligence
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {mockAiTips.map((tip) => (
            <div key={tip.id} className="rounded-xl bg-background p-4 shadow-sm">
              <p className="text-sm font-semibold">{tip.title}</p>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{tip.body}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-semibold">Looks from your closet</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {mockAiClosetLooks.map((look) => (
            <div key={look.id} className="rounded-2xl border border-border/60 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold">{look.title}</p>
                  <p className="text-xs text-muted-foreground">{look.vibe}</p>
                </div>
                <Badge variant="outline" className="rounded-full px-3 py-1 text-[11px]">Closet remix</Badge>
              </div>
              <Separator className="my-3" />
              <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                {look.pieces.map((piece) => (
                  <Badge key={piece} variant="secondary" className="rounded-full px-3 py-1 text-[11px]">
                    {piece}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="bg-muted/40">
        <CardHeader className="flex flex-row items-center gap-2 pb-2">
          <ShoppingBag className="h-4 w-4 text-primary" />
          <CardTitle className="text-base font-semibold">Community marketplace picks</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {mockMarketplaceRecommendations.map((rec) => (
            <div key={rec.id} className="flex items-center justify-between rounded-xl bg-background p-3 shadow-sm">
              <div>
                <p className="text-sm font-medium">{rec.item}</p>
                <p className="text-xs text-muted-foreground">from {rec.seller}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-primary">{rec.price}</p>
                <Button variant="ghost" size="sm" className="h-7 text-xs">Request to buy</Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default AiPage;
