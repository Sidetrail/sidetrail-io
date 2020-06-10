import React from 'react';
import NavigationTabs from '../NavigationTabs/NavigationTabs';
import './PageComponent.scss';

function withNavBar(Component) {
  const WrappedComponent = () => (
    <div className="pageComponent">
      <div className="header">
        <NavigationTabs />
      </div>
      <Component />
    </div>
  );
  return WrappedComponent;
}

export default withNavBar;
