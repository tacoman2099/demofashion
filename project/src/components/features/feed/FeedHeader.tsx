import React from 'react';
import { Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FeedHeader: React.FC = () => {
  return (
    <div className="flex items-center justify-between py-4">
      <h1 className="text-2xl font-bold">My Style Feed</h1>
      <Button variant="ghost" size="icon" className="rounded-full">
        <Bell className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default FeedHeader;