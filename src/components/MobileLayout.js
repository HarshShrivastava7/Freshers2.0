import React from "react";
import Particles from "react-particles-js";
import { TypeAnimation } from "react-type-animation";
import particlesConfig from "./particlesConfig";
import img from "./img2.png";
import img2 from "./dhattTeriMKC2.png";
import "./App.css";

// import Register from "../Register";

function MobileLayout() {
  return (
    <div
      className="App"
      style={{
        position: "relative",
        overflow: "hidden",
        height: "100vh",
        backgroundColor: "#000000",
        backgroundImage: `url(${img2})`
      }}
    >
      <img
        className="mainImg"
        src={img}
        alt=""
        style={{
          position: "inherit",
          top: "30vh",
          display: "block",
          margin: "auto",
        }}
      />
      <div
        className="heading"
        style={{
          lineSpace: "1.1",
          fontSize: "5em",
          fontFamily: "'Daniel',sans-serif",
          color: "#e8e0cd",
          display: "block",
          textAlign: "center",
          position: "inherit",
          top: "31vh",
        }}
      >
        <span style={{ color: "#E8E0CD" }}>e</span>
        <span style={{ color: "#b3ad9e" }}>-</span>
        <span style={{ color: "#7e7a6f" }}>F</span>
        <span style={{ color: "#494740" }}>I</span>
        <span style={{ color: "##6a5723" }}>E</span>
        <span style={{ color: "#e1ac17" }}>ST</span>
        <span style={{ color: "#4c4944" }}>A</span>
      </div>
      <div
        className="lineIntro"
        style={{
          fontSize: "1.3em",
          letterSpacing: "16px",
          color: "#FFC114",
          display: "block",
          textAlign: "center",
          position: "inherit",
          top: "30vh",
          left: "-0.8%",
          lineHeight: "1.25",
        }}
      >
        Feshers Party 2k23
      </div>
      <a
        type="button"
        class="btn btn-outline-light"
        style={{
          zIndex: "69",
          position: "relative",
          display: "inline-block",
          left: "33vw",
          top: "35vh",
          padding: "1vh 10vw",
          fontSize: "30px"
        }}
        href="https://forms.gle/3Rh8bnnW2JBkrPpC9"
        target="_blank"
      >
        Register
      </a>
    </div>
  );
}

export default MobileLayout;
