import React from "react";
import StartComponent from "../StartComponent/StartComponent";
import StatisticsComponent from "../StatisticsComponent/StatisticsComponent";
import BoostLinkComponent from "../BoostLinkComponent/BoostLinkComponent";

const MainComponent = () => {
  return (
    <main className="flex flex-col bg-main-component-bg bg-no-repeat bg-botom-1 justify-center items-center max-[600px]:bg-main-component-mob max-[600px]:bg-botom-mob max-[600px]:bg-[length:450px_350px]">
      <StartComponent />
      <StatisticsComponent />
      <BoostLinkComponent />
    </main>
  );
};

export default MainComponent;
