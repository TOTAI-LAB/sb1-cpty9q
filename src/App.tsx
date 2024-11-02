import React, { useState } from 'react';
import { Navbar } from './components/Navigation/Navbar';
import { MobileMenu } from './components/Navigation/MobileMenu';
import { ChatInterface } from './components/Chat/ChatInterface';
import { LandingPage } from './components/Landing/LandingPage';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-[#0A0A0A] text-white">
      <Navbar 
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        onLaunchApp={() => setShowChat(true)}
      />
      <MobileMenu isOpen={isMobileMenuOpen} onLaunchApp={() => setShowChat(true)} />

      <div className="flex-1 flex overflow-hidden">
        {!showChat ? (
          <LandingPage onGetStarted={() => setShowChat(true)} />
        ) : (
          <ChatInterface />
        )}
      </div>
    </div>
  );
}

export default App;