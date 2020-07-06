import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PageNotFound from './components/PageNotFound/PageNotFound';
import withNavBar from './components/PageComponent/PageComponent';
import { navigationTabs } from './services/navigationTabs';
import './App.scss';

const App = () => (
  <div className="app">
    <Switch>
      {navigationTabs.map(tab => (
        <Route key={tab.name} exact={tab.exact} path={tab.url} component={tab.component} />
      ))}
      <Route path="/404" component={withNavBar(PageNotFound)} />
      <Route path="/">
        <Redirect to="/404" />
      </Route>
    </Switch>
  </div>
);

export default App;
