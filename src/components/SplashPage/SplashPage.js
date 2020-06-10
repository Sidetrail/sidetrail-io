import React from 'react';
import { useSetTitle } from '../../services/titleservice';
import NavigationTabs from '../NavigationTabs/NavigationTabs';
import './SplashPage.scss';

const SplashPage = props => {
  useSetTitle('Sidetrail');
  return (
    <div className="splashPage">
      <div className="fadedCover">
        <div className="title">Sidetrail</div>
        <NavigationTabs />
      </div>
    </div>
  );
};

export default SplashPage;
