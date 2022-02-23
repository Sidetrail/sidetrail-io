import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PageNotFound from './components/PageNotFound/PageNotFound';
import { navigationTabs } from './services/navigationTabs';
import './App.scss';

const App = () => (
  <div className="app">
    <Routes>
      {navigationTabs.map(tab => {
        const TabComponent = tab.component;
        return (
        <Route key={tab.name} exact={tab.exact} path={tab.url + '/*'} element={<TabComponent/>} />
      )})}
      <Route path="*" element={<PageNotFound/>} />
    </Routes>
  </div>
);

export default App;
