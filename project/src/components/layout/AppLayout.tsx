import React, { useState } from 'react';
import NavigationBar from './NavigationBar';
import HomePage from '../pages/HomePage';
import ClosetPage from '../pages/ClosetPage';
import DiscoverPage from '../pages/DiscoverPage';
import AiPage from '../pages/AiPage';
import { Toaster } from '@/components/ui/toaster';
import AddItemModal from '../features/closet/AddItemModal';

export type AppPage = 'home' | 'discover' | 'closet' | 'ai';

const AppLayout: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<AppPage>('home');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleNavigation = (page: AppPage) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <div className="flex-1 overflow-y-auto pb-20">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'discover' && <DiscoverPage />}
        {currentPage === 'closet' && <ClosetPage onAddItem={() => setIsAddModalOpen(true)} />}
        {currentPage === 'ai' && <AiPage />}
      </div>

      <NavigationBar currentPage={currentPage} onNavigate={handleNavigation} />
      <AddItemModal open={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
      <Toaster />
    </div>
  );
};

export default AppLayout;