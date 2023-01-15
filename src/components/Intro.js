import React from "react";
import ParticleAnimation from "./ParticleAnimation";
import "./Intro.css";
import MobileLayout from "./MobileLayout";

const Intro = () => {
  return (
    <>
      <div className="MainIntro">
        <ParticleAnimation/>
      </div>
      <div className="showOnMobile">
        <MobileLayout/>
      </div>
    </>
  );
};

export default Intro;
