import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import MainContainer from './components/MainContainer/MainContainer.jsx';
import { PaneProvider } from './components/MainContainer/PaneManager.jsx';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [overlayClass, setOverlayClass] = useState('');

  useEffect(() => {
    if (isTransitioning) {
      setOverlayClass('overlay overlay-active');
    } else {
      setOverlayClass('overlay');
    }
  }, [isTransitioning]);

  return (
    <div className="App">
      <Navbar setActiveTab={setActiveTab} />
      {isTransitioning && <div className={overlayClass}></div>}
      <PaneProvider>
        <MainContainer 
          activeTab={activeTab} 
          setIsTransitioning={setIsTransitioning} 
        />
      </PaneProvider>
      
    </div>
  );
}

export default App;
