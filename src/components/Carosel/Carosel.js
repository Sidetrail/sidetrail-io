import React, { useRef } from 'react';
import './Carosel.scss';

const Carosel = ({ children }) => {
  const contentRef = useRef();
  return (
    <div className="carosel">
      <button className="chevron" onClick={() => contentRef.current.scrollBy(-800, 0)}>
        <div>
          <i className="fas fa-chevron-left" />
        </div>
      </button>
      <div className="content" ref={contentRef}>
        {children}
      </div>
      <button className="chevron" onClick={() => contentRef.current.scrollBy(800, 0)}>
        <div>
          <i className="fas fa-chevron-right" />
        </div>
      </button>
    </div>
  );
};

export default Carosel;
