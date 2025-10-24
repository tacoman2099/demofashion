import React from 'react';
import { Search, Filter, Wand2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface ClosetHeaderProps {
  onAddItem: () => void;
}

const ClosetHeader: React.FC<ClosetHeaderProps> = ({ onAddItem }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold">My Closet</h1>
          <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
            <Wand2 className="h-3 w-3" />
            Uploads are auto-cut by Hanger AI for a background-free showcase.
          </p>
        </div>
        <Button size="sm" className="rounded-full px-4" onClick={onAddItem}>
          Add item
        </Button>
      </div>

      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search items..."
            className="pl-9 h-10"
          />
        </div>
        <Button variant="outline" size="icon" className="h-10 w-10">
          <Filter className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ClosetHeader;