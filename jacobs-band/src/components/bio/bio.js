import React from "react";

import selfie from "../../assets/bioPic.jpg";

import "../../styles/components/bio.scss";

const Bio = () => {
  return (
    <div className="bio-container">
      <div className="row">
        <h2>Who is Blue Karma?</h2>
        <p>
          Jacob Adams is multi-instrumentalist, producer, and songwriter who is
          known as Blue Karma. At the age of 24, he experiments endlessly in his
          home studio in Wilmington, North Carolina. His music paints a vivid
          interpretaion of a man who gets lost inside his head. Inspired by
          artists like Tame Impala, Unknown Mortal Orchestra, and King Gizzard,
          Adams wishes to add his own flavor to the neo-psychedelic music scene.
          His goal is to inspire people to pick up an instrument, create art,
          and follow a dream.
        </p>
      </div>
      <div className="row">
        <img src={selfie} align="left" alt="Something went wrong :(" />
      </div>
    </div>
  );
};

export default Bio;
