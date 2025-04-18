import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

// Create context for pane management
export const PaneContext = createContext();

export function PaneProvider({ children }) {
  const [panes, setPanes] = useState([]);
  const [paneHistory, setPaneHistory] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're in mobile view
  useEffect(() => {
    const checkMobile = () => {
      const aspectRatio = window.innerWidth / window.innerHeight;
      setIsMobile(aspectRatio <= 4/5);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Function to add a new pane
  const addPane = useCallback((element, maxWidth = '1440') => {
    const newPane = {
      id: Date.now(),
      element,
      maxWidth
    };

    if (isMobile) {
      // On mobile, save current panes to history and show only the new one
      if (panes.length > 0) {
        setPaneHistory(prev => [...prev, [...panes]]);
        setPanes([newPane]);
      } else {
        setPanes([newPane]);
      }
    } else {
      // On desktop, just add the new pane to the existing ones
      setPanes(prev => [...prev, newPane]);
    }
    
    return newPane.id;
  }, [panes, isMobile]);

  // Function to remove a pane by ID
  const removePane = useCallback((paneId) => {
    if (isMobile && paneHistory.length > 0) {
      // On mobile, restore previous panes from history
      const lastHistory = paneHistory[paneHistory.length - 1];
      setPanes(lastHistory);
      setPaneHistory(prev => prev.slice(0, -1));
    } else {
      // On desktop or if no history, just remove the specified pane
      setPanes(prev => prev.filter(pane => pane.id !== paneId));
    }
  }, [paneHistory, isMobile]);

  // Function to remove all additional panes
  const removeAllPanes = useCallback(() => {
    setPanes([]);
    setPaneHistory([]);
  }, []);

  // Function to go back to previous pane state (for mobile)
  const goBack = useCallback(() => {
    if (paneHistory.length > 0) {
      const lastHistory = paneHistory[paneHistory.length - 1];
      setPanes(lastHistory);
      setPaneHistory(prev => prev.slice(0, -1));
      return true;
    }
    return false;
  }, [paneHistory]);

  const contextValue = {
    panes,
    addPane,
    removePane,
    removeAllPanes,
    goBack,
    isMobile
  };

  return (
    <PaneContext.Provider value={contextValue}>
      {children}
    </PaneContext.Provider>
  );
}

// Custom hook for using pane management functions
export const usePaneManagement = () => {
  const context = useContext(PaneContext);
  if (!context) {
    throw new Error('usePaneManagement must be used within a PaneProvider');
  }
  return context;
}; 