import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen font-sans bg-[#F4F7F9]">
      {/* Passing the state setter to the Navbar */}
      <Navbar setCurrentPage={setCurrentPage} />
      
      {currentPage === 'home' ? (
        <>
          <Hero />
          <Dashboard />
        </>
      ) : (
        <NotFound goHome={() => setCurrentPage('home')} />
      )}
      
      <Footer />
    </div>
  );
}

export default App;