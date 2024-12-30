import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navigationTabs } from "../../services/navigationTabs";
import { useSetTitle } from "../../services/titleservice";
import "./NavigationTabs.scss";

const NavigationTabs = (props) => {
  const location = useLocation();
  const activeTab = navigationTabs.find((tab) => location.pathname === tab.url);
  const [mobileMenuOpen, setMobileOpen] = useState(activeTab.name === 'Home' ? true : false);
  useSetTitle(activeTab?.title || "Sidetrail");

  const getNavLinks = () =>
    navigationTabs.map((tab) => {
      return (
        <Link
          key={tab.url}
          to={tab.url}
          className={`tab ${location.pathname === tab.url ? "tab-active" : "tab-inactive"
            }`}
        >
          {tab.name}
        </Link>
      );
    });
  return (
    <React.Fragment>
      <nav className="navigationTabs">{getNavLinks()}</nav>
      <nav className="mobileTabs">
        {activeTab.name !== 'Home' && <i
          onClick={() => setMobileOpen(!mobileMenuOpen)}
          className="hamburgerIcon fas fa-solid fa-bars fa-3x"
        ></i>}
        {mobileMenuOpen && getNavLinks()}
      </nav>
    </React.Fragment>
  );
};

export default NavigationTabs;
