import React, { useRef, useEffect } from "react";
import './MainContainer.css';

function Pane({ children, style, onClose, isClosable = false, activeTab, maxWidth }) {
    const paneRef = useRef(null);
    const wrapperRef = useRef(null);
    
    // Reset scroll when content changes
    useEffect(() => {
        if (wrapperRef.current) {
            wrapperRef.current.scrollTop = 0;
        }
    }, [children]);

    return (
        <div className="Pane" ref={paneRef} style={style}>
            {isClosable && (
                <button 
                    className="closeButton"
                    onClick={onClose}
                    aria-label="Close pane"
                >
                    ×
                </button>
            )}
            <div className="wrapper" ref={wrapperRef}>
                {children}
            </div>
        </div>
    );
}

export default Pane;
