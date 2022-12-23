import React from "react";
import { Link, useLocation } from "react-router-dom";
import { navigationTabs } from "../../services/navigationTabs";
import { useSetTitle } from "../../services/titleservice";
import "./NavigationTabs.scss";

const NavigationTabs = (props) => {
  const location = useLocation();
  const activeTab = navigationTabs.find((tab) => location.pathname === tab.url);
  useSetTitle(activeTab?.title || "Sidetrail");
  return (
    <div className="navigationTabs">
      {navigationTabs.map((tab) => {
        return (
          <Link
            key={tab.url}
            to={tab.url}
            className={`tab ${
              location.pathname === tab.url ? "tab-active" : "tab-inactive"
            }`}
          >
            {tab.name}
          </Link>
        );
      })}
    </div>
  );
};

export default NavigationTabs;
