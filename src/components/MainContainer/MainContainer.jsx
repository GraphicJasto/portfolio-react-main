// MainContainer.jsx
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Pane from './Pane';
import { usePaneManagement } from './PaneManager';
import routes from '../../pages/routes';
import './MainContainer.css';

function MainContainer({ activeTab, setIsTransitioning }) {
  const location = useLocation();
  const { panes, removePane, removeAllPanes, isMobile } = usePaneManagement();
  const [currentRoute, setCurrentRoute] = useState(null);
  const [previousPath, setPreviousPath] = useState('');
  
  // Find the current route based on location
  useEffect(() => {
    const route = routes.find(route => route.path === location.pathname) || routes[0];
    setCurrentRoute(route);
    
    // Close all panes when navigating to a main route (navigable routes)
    if (previousPath !== location.pathname) {
      const currentRouteObj = routes.find(r => r.path === location.pathname);
      if (currentRouteObj && currentRouteObj.navigable) {
        removeAllPanes();
      }
      setPreviousPath(location.pathname);
    }
  }, [location, previousPath, removeAllPanes]);

  const hasAdditionalPanes = panes.length > 0;
  const totalPanes = 1 + panes.length;
  const paneWidth = isMobile ? '100%' : `${100 / totalPanes}%`;

  return (
    <main className="MainContainer">
      <section className={`Main ${hasAdditionalPanes ? 'hasAdditionalPanes' : ''} ${isMobile ? 'mobile' : ''}`}>
        {/* Main content pane */}
        <Pane 
          activeTab={activeTab} 
          maxWidth={currentRoute?.maxWidth || '1440'}
          style={{ 
            width: paneWidth,
            maxWidth: hasAdditionalPanes && !isMobile ? 'none' : `${currentRoute?.maxWidth || '1440'}px`,
            display: isMobile && hasAdditionalPanes ? 'none' : 'block'
          }}
        >
          {currentRoute?.element}
        </Pane>
        
        {/* Additional panes */}
        {panes.map((pane, index) => (
          <Pane 
            key={pane.id}
            activeTab={activeTab} 
            maxWidth={pane.maxWidth}
            style={{ 
              width: paneWidth,
              maxWidth: !isMobile ? 'none' : '100%',
              display: isMobile && index !== panes.length - 1 ? 'none' : 'block'
            }}
            isClosable={true}
            onClose={() => removePane(pane.id)}
          >
            {pane.element}
          </Pane>
        ))}
      </section>
    </main>
  );
}

export default MainContainer;
