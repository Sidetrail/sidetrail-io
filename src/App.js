import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { navigationTabs } from './services/navigationTabs';
import './App.scss';

const App = () => (
  <div className="app">
    <Switch>
      {navigationTabs.map(tab => (
        <Route key={tab.name} path={tab.url} component={tab.component} />
      ))}
    </Switch>
  </div>
);

export default App;
