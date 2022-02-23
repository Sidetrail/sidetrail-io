import React from "react";
import { Link, useLocation } from "react-router-dom";
import { navigationTabs } from "../../services/navigationTabs";
import "./NavigationTabs.scss";

const NavigationTabs = (props) => {
  const location = useLocation();
  return (
    <div className="navigationTabs">
      {navigationTabs.map((tab) => (
        <Link
          key={tab.url}
          to={tab.url}
          className={`tab ${
            location.pathname === tab.url ? "tab-active" : "tab-inactive"
          }`}
        >
          {tab.name}
        </Link>
      ))}
    </div>
  );
};

export default NavigationTabs;
