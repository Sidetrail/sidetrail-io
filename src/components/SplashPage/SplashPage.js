import React from "react";
import NavigationTabs from "../NavigationTabs/NavigationTabs";
import "./SplashPage.scss";

const SplashPage = (props) => {
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
