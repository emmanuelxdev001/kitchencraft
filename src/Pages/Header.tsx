import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <div className="text-lg font-bold">WazobiaBite</div>
        <nav className="space-x-4">
          <a href="/" className="hover:underline">Home</a>
          <a href="/shop" className="hover:underline">Shop</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </nav>
      </header>
    );
};

export default Header;