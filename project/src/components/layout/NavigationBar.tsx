import React from 'react';
import { Compass, Home, Sparkles, Shirt } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { AppPage } from './AppLayout';

type NavItem = {
  id: AppPage;
  icon: React.ReactNode;
  label: string;
};

interface NavigationBarProps {
  currentPage: AppPage;
  onNavigate: (page: AppPage) => void;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ currentPage, onNavigate }) => {
  const navItems: NavItem[] = [
    { id: 'home', icon: <Home />, label: 'Home' },
    { id: 'discover', icon: <Compass />, label: 'Discover' },
    { id: 'closet', icon: <Shirt />, label: 'Closet' },
    { id: 'ai', icon: <Sparkles />, label: 'AI' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border z-50">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={cn(
              "flex flex-col items-center justify-center h-full w-full transition-colors duration-200",
              item.id === currentPage ? "text-primary" : "text-muted-foreground"
            )}
          >
            {React.cloneElement(item.icon as React.ReactElement, { size: 20 })}
            <span className="text-xs mt-1 font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default NavigationBar;