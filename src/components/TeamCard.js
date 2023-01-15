import React from "react";
import "./Card.css";

function TeamCard(props) {
  return (
    <>
      {/* <h1>Organising Team</h1> */}
      <div class="container">
        <div class="card card0">
          <div class="border">
            <h2 className="names">AYUSH</h2>
            <div class="icons">
              <i class="fa fa-instagram" aria-hidden="true"></i>
              <i class="fa fa-linkedin" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <div class="card card1">
          <div class="border">
            <h2 className="names">MAYANK</h2>
            <div class="icons">
              <i class="fa fa-instagram" aria-hidden="true"></i>
              <i class="fa fa-linkedin" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <div class="card card2">
          <div class="border">
            <h2 className="names">HARSH</h2>
            <div class="icons">
              <i class="fa fa-instagram" aria-hidden="true"></i>
              <i class="fa fa-linkedin" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div class="card card3">
          <div class="border">
            <h2 className="names">SANIDHYA</h2>
            <div class="icons">
              <i class="fa fa-instagram" aria-hidden="true"></i>
              <i class="fa fa-linkedin" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <div class="card card4">
          <div class="border">
            <h2 className="names">SANJAY</h2>
            <div class="icons">
              <i class="fa fa-instagram" aria-hidden="true"></i>
              <i class="fa fa-linkedin" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
TeamCard.defaultProps = {
  backgroundImg: "https://wallpapercave.com/wp/wp2831956.png",
};
export default TeamCard;
