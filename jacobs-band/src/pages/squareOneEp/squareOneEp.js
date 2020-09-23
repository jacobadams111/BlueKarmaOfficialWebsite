import React from "react";
import { Link } from "react-router-dom";
import CoverArt from "../../assets/SquareOneEpArtwork.jpg";
import "../../styles/pages/squareOneEp.scss";

const SquareOneEp = () => {
  return (
    <div className="ep-container">
      <div className="row">
        <img src={CoverArt} align="right" alt="Something went wrong :(" />
      </div>
      <div className="row">
        <h2> Square One EP out now!</h2>
        <p>Square One is Blue Karma's debut Ep.</p>
        <p>1. Arrays In My Brain</p>
        <p>2. Magnetic Girl</p>
        <p>3. Locked Out</p>
        <p>4. On The Other Side</p>
        <p>5. Something's Missing</p>
        <p>6. Arrays In My Brain</p>
        <Link to="/lyrics">lyrics</Link>
      </div>
    </div>
  );
};

export default SquareOneEp;
