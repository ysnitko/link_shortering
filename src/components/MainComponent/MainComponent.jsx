import React from "react";
import StartComponent from "../StartComponent/StartComponent";
import StatisticsComponent from "../StatisticsComponent/StatisticsComponent";

const MainComponent = () => {
  return (
    <main className="flex flex-col bg-main-component-bg bg-no-repeat bg-botom-1 justify-center items-center">
      <StartComponent />
      <StatisticsComponent />
    </main>
  );
};

export default MainComponent;
