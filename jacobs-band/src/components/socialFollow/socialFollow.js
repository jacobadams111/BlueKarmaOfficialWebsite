import React from "react";
import {
  faYoutube,
  faSpotify,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../../styles/components/social.scss";

const SocialFollow = () => {
  return (
    <div className="social-container">
      <a
        href="https://www.facebook.com/WhoisBlueKarma/"
        className="facebook social"
      >
        <FontAwesomeIcon icon={faFacebook} size="3x" />
      </a>
      <a href="https://www.youtube.com/c/BlueKarma" className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="3x" />
      </a>
      <a
        href="https://www.spotify.com" // TODO: change link to go to your profile
        className="spotify social"
      >
        <FontAwesomeIcon icon={faSpotify} size="3x" />
      </a>
      <a
        href="https://www.instagram.com/bluekarmaofficial/"
        className="instagram social"
      >
        <FontAwesomeIcon icon={faInstagram} size="3x" />
      </a>
    </div>
  );
};

export default SocialFollow;
