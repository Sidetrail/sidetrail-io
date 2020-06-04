import React from 'react';
import { useSetTitle } from '../../services/titleservice';
import './SplashPage.scss';

const SplashPage = props => {
  useSetTitle('Sidetrail');
  return <div className="splashPage">SplashPage</div>;
};

export default SplashPage;
