import React from "react";
import Image from "../images/ashton-bingham-EQFtEzJGERg-unsplash.jpg";

function UserCard() {
  return (
    <body>
      <div className="container">
        <div className="card">
          <div className="personal-info">
            <img src={Image} className="card-image" />
            <h2 className="card__name">Ramin Aslami</h2>
            <h5 className="subname">Frontend developer</h5>

            <div className="personal-info-buttons">
              <button class="btn draw-border">Follow</button>
              <button class="btn draw-border">LinkedIn</button>
            </div>

            <div className="about-section">
              <h3>About</h3>
              <p>
                I am a frontend developer with a particular interest in making
                things simple and automating daily tasks. I try to keep up with
                security and best practices, and am always looking for new
                things to learn.
              </p>
              <h3>Intrests</h3>
              <p>
                Food expert. Music scholar. Reader. Internet fanatic. Bacon
                buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee
                fanatic.
              </p>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default UserCard;
