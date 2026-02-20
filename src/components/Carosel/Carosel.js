import React, { useRef } from 'react';
import './Carosel.scss';

const Carosel = ({ children }) => {
  const contentRef = useRef();
  return (
    <div className="carosel">
      <button className="chevron" onClick={() => contentRef.current.scrollBy(-800, 0)} aria-label="Scroll left">
        <div>
          <i className="fas fa-chevron-left" aria-hidden="true" />
        </div>
      </button>
      <div className="content" ref={contentRef} role="region" aria-label="Scrollable content" tabIndex="0">
        {children}
      </div>
      <button className="chevron" onClick={() => contentRef.current.scrollBy(800, 0)} aria-label="Scroll right">
        <div>
          <i className="fas fa-chevron-right" aria-hidden="true" />
        </div>
      </button>
    </div>
  );
};

export default Carosel;
