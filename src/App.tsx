import Footer from '@/Pages/Footer';
import Header from '@/Pages/Header';
import LandingPageContent from '@/Pages/LandingPageContent';
import Sidebar from '@/Pages/Sidebar';
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-grow">
        <Sidebar />
        <main className="flex-grow p-4">
          <LandingPageContent />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default App; 