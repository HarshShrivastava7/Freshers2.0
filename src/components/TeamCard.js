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
              <a
                target="_blank"
                class="fa fa-instagram"
                aria-hidden="true"
                href="https://www.instagram.com/ayushparihar007/"
              ></a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/ayush-parihar-91307b248"
                class="fa fa-linkedin"
                aria-hidden="true"
              ></a>
            </div>
          </div>
        </div>
        <div class="card card1">
          <div class="border">
            <h2 className="names">MAYANK</h2>
            <div class="icons">
              <a
                target="_blank"
                class="fa fa-instagram"
                aria-hidden="true"
                href="https://www.instagram.com/mayank_rampuriya/"
              ></a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/mayankrampuriya"
                class="fa fa-linkedin"
                aria-hidden="true"
              ></a>
            </div>
          </div>
        </div>
        <div class="card card2">
          <div class="border">
            <h2 className="names">HARSH</h2>
            <div class="icons">
              <a
                target="_blank"
                class="fa fa-instagram"
                aria-hidden="true"
                href="https://www.instagram.com/harsh.7781/"
              ></a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/harsh-shrivastava-7b5122228"
                class="fa fa-linkedin"
                aria-hidden="true"
              ></a>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div class="card card3">
          <div class="border">
            <h2 className="names">SANIDHYA</h2>
            <div class="icons">
              <a
                target="_blank"
                class="fa fa-instagram"
                aria-hidden="true"
                href="https://www.instagram.com/sanidhytomar_47/"
              ></a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/sanidhya-tomar-1b3ab8225"
                class="fa fa-linkedin"
                aria-hidden="true"
              ></a>
            </div>
          </div>
        </div>
        <div class="card card4">
          <div class="border">
            <h2 className="names">SANJAY</h2>
            <div class="icons">
              <a
                target="_blank"
                class="fa fa-instagram"
                aria-hidden="true"
                href="https://www.instagram.com/smartclicker_sanjay/"
              ></a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/sanjay-patel-392b9822a"
                class="fa fa-linkedin"
                aria-hidden="true"
              ></a>
            </div>
          </div>
        </div>
        <div class="card card5">
          <div class="border">
            <h2 className="names">MOHIT</h2>
            <div class="icons">
              <a
                target="_blank"
                class="fa fa-instagram"
                aria-hidden="true"
                href="https://instagram.com/mohit.6193?igshid=ZDdkNTZiNTM="
              ></a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/mohit-kumar-yadav-b80032247"
                class="fa fa-linkedin"
                aria-hidden="true"
              ></a>
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
