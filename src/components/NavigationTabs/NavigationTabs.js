import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { navigationTabs } from '../../services/navigationTabs';
import './NavigationTabs.scss';

const NavigationTabs = props => (
  <div className="navigationTabs">
    {navigationTabs.map(tab => (
      <Link
        key={tab.url}
        to={tab.url}
        className={`tab ${props.match.path === tab.url ? 'tab-active' : 'tab-inactive'}`}
      >
        {tab.name}
      </Link>
    ))}
  </div>
);

export default withRouter(NavigationTabs);
