import React from "react";
import { Link } from "react-router-dom";

import CoverArt from "../../assets/SquareOneEpArtwork.jpg";

import "../../styles/pages/squareOneEp.scss";

const SquareOneEp = () => {
  return (
    <div className="ep-container">
      <img src={CoverArt} align="right" alt="Something went wrong :(" />
      <h2> Square One EP out now!</h2>
      <p>Square One is Blue Karma's debut Ep.</p>
      <Link to="/lyrics">lyrics</Link>
    </div>
  );
};

export default SquareOneEp;
