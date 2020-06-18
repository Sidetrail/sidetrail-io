import React from 'react';
import './PageFooter.scss';

const PageFooter = props => (
  <div className="pageFooter">
    <a
      href="https://www.instagram.com/sidetrail/"
      target="_blank"
      rel="noreferrer noopener"
      className="link"
    >
      <i className="fab fa-instagram" />
    </a>
    <a
      href="https://www.flickr.com/photos/188185390@N02/"
      target="_blank"
      rel="noreferrer noopener"
      className="link"
    >
      <i className="fab fa-flickr" />
    </a>
    <a
      href="https://www.linkedin.com/in/john-t-williams/"
      target="_blank"
      rel="noreferrer noopener"
      className="link"
    >
      <i className="fab fa-linkedin-in" />
    </a>
  </div>
);

export default PageFooter;
