import React, { useCallback, useRef, useEffect } from 'react';
import Layout from '../Work/Layout/MiniatureLayout';
import ProjectAlgoritcom from '../Work/Projects/algoritcom/Algoritcom';
import { usePaneManagement } from '../../components/MainContainer/PaneManager';
import './home.css';

export default function HomePage() {
    const { addPane } = usePaneManagement();
    const homeContentRef = useRef(null);

    // Ensure scrolling works on mount
    useEffect(() => {
        if (homeContentRef.current) {
            // Force browser to recognize this as a scrollable area
            homeContentRef.current.scrollTop = 0;
        }
    }, []);

    const handleOpenAlgoritcom = useCallback(() => {
        console.log('Button clicked'); // Debug log
        addPane(<ProjectAlgoritcom />, '1440');
    }, [addPane]);

    const handleTestClick = useCallback(() => {
        console.log('Test button clicked');
    }, []);

    return (
       <div className="home-content" ref={homeContentRef}>
           <h1 className='figtitle'>Experience</h1>
           <h2>test Branch</h2>
           
           <p>This is a normal explaining paragraph, where title is not that important, just a bold, resume of the entire thing</p>
           <p>This is a normal explaining paragraph, where title is not that important, just a bold, resume of the entire thing</p>
           <p>This is a normal explaining paragraph, where title is not that important, just a bold, resume of the entire thing</p>
           <p>This is a normal explaining paragraph, where title is not that important, just a bold, resume of the entire thing</p>
           <p>This is a normal explaining paragraph, where title is not that important, just a bold, resume of the entire thing</p>
           <p>This is a normal explaining paragraph, where title is not that important, just a bold, resume of the entire thing</p>
           <p>This is a normal explaining paragraph, where title is not that important, just a bold, resume of the entire thing</p>
           <p>This is a normal explaining paragraph, where title is not that important, just a bold, resume of the entire thing</p>
           <p>This is a normal explaining paragraph, where title is not that important, just a bold, resume of the entire thing</p>
           <p>This is a normal explaining paragraph, where title is not that important, just a bold, resume of the entire thing</p>
           <p>This is a normal explaining paragraph, where title is not that important, just a bold, resume of the entire thing</p>
           <p>This is a normal explaining paragraph, where title is not that important, just a bold, resume of the entire thing</p>
           <p>This is a normal explaining paragraph, where title is not that important, just a bold, resume of the entire thing</p>
           <p>This is a normal explaining paragraph, where title is not that important, just a bold, resume of the entire thing</p>
           <p>This is a normal explaining paragraph, where title is not that important, just a bold, resume of the entire thing</p>
           <p>This is a normal explaining paragraph, where title is not that important, just a bold, resume of the entire thing</p>
           <p>This is a normal explaining paragraph, where title is not that important, just a bold, resume of the entire thing</p>
           <p>This is a normal explaining paragraph, where title is not that important, just a bold, resume of the entire thing</p>
           <p>This is a normal explaining paragraph, where title is not that important, just a bold, resume of the entire thing</p>
           <p>This is a normal explaining paragraph, where title is not that important, just a bold, resume of the entire thing</p>
           <p>This is a normal explaining paragraph, where title is not that important, just a bold, resume of the entire thing</p>
           <p>This is a normal explaining paragraph, where title is not that important, just a bold, resume of the entire thing</p>
           <p>This is a normal explaining paragraph, where title is not that important, just a bold, resume of the entire thing</p>
           <p>This is a normal explaining paragraph, where title is not that important, just a bold, resume of the entire thing</p>
           <p>This is a normal explaining paragraph, where title is not that important, just a bold, resume of the entire thing</p>
           <p>This is a normal explaining paragraph, where title is not that important, just a bold, resume of the entire thing</p>
           <p>This is a normal explaining paragraph, where title is not that important, just a bold, resume of the entire thing</p>
           <p>This is a normal explaining paragraph, where title is not that important, just a bold, resume of the entire thing</p>
           <p>This is a normal explaining paragraph, where title is not that important, just a bold, resume of the entire thing</p>
           <p>This is a normal explaining paragraph, where title is not that important, just a bold, resume of the entire thing</p>
           <p>This is a normal explaining paragraph, where title is not that important, just a bold, resume of the entire thing</p>
           <p>This is a normal explaining paragraph, where title is not that important, just a bold, resume of the entire thing</p>
           <p>This is a normal explaining paragraph, where title is not that important, just a bold, resume of the entire thing</p>
           <p>This is a normal explaining paragraph, where title is not that important, just a bold, resume of the entire thing</p>
           <p>This is a normal explaining paragraph, where title is not that important, just a bold, resume of the entire thing</p>
           <p>This is a normal explaining paragraph, where title is not that important, just a bold, resume of the entire thing</p>
           <p>This is a normal explaining paragraph, where title is not that important, just a bold, resume of the entire thing</p>
           <p>This is a normal explaining paragraph, where title is not that important, just a bold, resume of the entire thing</p>
           <p>This is a normal explaining paragraph, where title is not that important, just a bold, resume of the entire thing</p>
           <p>This is a normal explaining paragraph, where title is not that important, just a bold, resume of the entire thing</p>
           <p>This is a normal explaining paragraph, where title is not that important, just a bold, resume of the entire thing</p>
           <p>This is a normal explaining paragraph, where title is not that important, just a bold, resume of the entire thing</p>
           <p>This is a normal explaining paragraph, where title is not that important, just a bold, resume of the entire thing</p>
           <p>This is a normal explaining paragraph, where title is not that important, just a bold, resume of the entire thing</p>
           <p>This is a normal explaining paragraph, where title is not that important, just a bold, resume of the entire thing</p>
           <p>This is a normal explaining paragraph, where title is not that important, just a bold, resume of the entire thing</p>
           <p>This is a normal explaining paragraph, where title is not that important, just a bold, resume of the entire thing</p>
           <p>This is a normal explaining paragraph, where title is not that important, just a bold, resume of the entire thing</p>
           <p>This is a normal explaining paragraph, where title is not that important, just a bold, resume of the entire thing</p>
           <p>This is a normal explaining paragraph, where title is not that important, just a bold, resume of the entire thing</p>
           <p>This is a normal explaining paragraph, where title is not that important, just a bold, resume of the entire thing</p>
           <p>This is a normal explaining paragraph, where title is not that important, just a bold, resume of the entire thing</p>
           <p>This is a normal explaining paragraph, where title is not that important, just a bold, resume of the entire thing</p>
           <p>This is a normal explaining paragraph, where title is not that important, just a bold, resume of the entire thing</p>
           <p>This is a normal explaining paragraph, where title is not that important, just a bold, resume of the entire thing</p>
           <p>This is a normal explaining paragraph, where title is not that important, just a bold, resume of the entire thing</p>
           <p>This is a normal explaining paragraph, where title is not that important, just a bold, resume of the entire thing</p>
           <p>This is a normal explaining paragraph, where title is not that important, just a bold, resume of the entire thing</p>
           <p>This is a normal explaining paragraph, where title is not that important, just a bold, resume of the entire thing</p>
           <p>This is a normal explaining paragraph, where title is not that important, just a bold, resume of the entire thing</p>
           <p>This is a normal explaining paragraph, where title is not that important, just a bold, resume of the entire thing</p>
           <p>This is a normal explaining paragraph, where title is not that important, just a bold, resume of the entire thing</p>
           <p>This is a normal explaining paragraph, where title is not that important, just a bold, resume of the entire thing</p>
           <p>This is a normal explaining paragraph, where title is not that important, just a bold, resume of the entire thing</p>
           <p>This is a normal explaining paragraph, where title is not that important, just a bold, resume of the entire thing</p>
           <p>This is a normal explaining paragraph, where title is not that important, just a bold, resume of the entire thing</p>
           <p>This is a normal explaining paragraph, where title is not that important, just a bold, resume of the entire thing</p>
           
           <div className="home-buttons">
               <button 
                   onClick={handleTestClick}
                   className="Bttn"
                   style={{
                       backgroundColor: 'red'
                   }}
               >
                   Test Button
               </button>

               <button 
                   onClick={handleOpenAlgoritcom}
                   className="Bttn"
                   style={{
                       backgroundColor: 'var(--md-sys-color-primary)',
                   }}
               >
                   Open Algoritcom Project
               </button>
           </div>
       </div>
    );
}
