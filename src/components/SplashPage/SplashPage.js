import React from "react";
import NavigationTabs from "../NavigationTabs/NavigationTabs";
import "./SplashPage.scss";

const SplashPage = (props) => {
  return (
    <div className="splashPage">
      <div className="fadedCover">
        <h1 className="title">Sidetrail</h1>
        <NavigationTabs />
      </div>
    </div>
  );
};

export default SplashPage;
