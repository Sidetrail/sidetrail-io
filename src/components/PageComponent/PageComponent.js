import React from 'react';
import NavigationTabs from '../NavigationTabs/NavigationTabs';
import PageFooter from '../PageFooter/PageFooter';
import './PageComponent.scss';

export default function withNavBar(Component) {
  const WrappedComponent = () => (
    <div className="pageComponent">
      <header className="header">
        <NavigationTabs />
      </header>
      <Component />
      <div className="footer">
        <PageFooter />
      </div>
    </div>
  );
  return WrappedComponent;
}
