import React from 'react';
import './PageNotFound.scss';

const PageNotFound = props => (
  <div className="pageNotFound">
    <div className="notFoundIcon">
      <i className="fas fa-search" />
    </div>
    Sorry, Couldn't find the page you are looking for!
  </div>
);

export default PageNotFound;
