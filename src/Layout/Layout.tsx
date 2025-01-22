import Header from '@/Pages/Header';
import Footer from '@/Pages/Static/Footer';
import React from 'react';
import { Outlet } from 'react-router-dom';

export interface LayoutProps {
  title?: string; // Example prop
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <div>
      <Header />
      {title && <h1>{title}</h1>}
      <Outlet />
      {children}


      <Footer />
    </div>
  );
};

export default Layout;

