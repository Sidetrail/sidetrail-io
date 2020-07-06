import React from 'react';
import NavigationTabs from '../NavigationTabs/NavigationTabs';
import PageFooter from '../PageFooter/PageFooter';
import './PageComponent.scss';

export default function withNavBar(Component) {
  const WrappedComponent = () => (
    <div className="pageComponent">
      <div className="header">
        <NavigationTabs />
      </div>
      <Component />
      <div className="footer">
        <PageFooter />
      </div>
    </div>
  );
  return WrappedComponent;
}
