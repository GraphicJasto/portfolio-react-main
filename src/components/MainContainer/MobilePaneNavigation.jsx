import React, { useCallback } from 'react';
import { usePaneManagement } from './PaneManager';

// This component can be used to add a back button in mobile views
export default function MobilePaneNavigation({ className, showBackButton = true }) {
  const { goBack, isMobile, panes, paneHistory } = usePaneManagement();
  
  const handleGoBack = useCallback(() => {
    goBack();
  }, [goBack]);
  
  // Only show if on mobile and there's a history to go back to
  if (!isMobile || !showBackButton || paneHistory.length === 0) {
    return null;
  }
  
  return (
    <button 
      className={`mobile-nav-back-button ${className || ''}`}
      onClick={handleGoBack}
      aria-label="Go back to previous screen"
    >
      ← Back
    </button>
  );
} 