import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//import HomePage from "../../pages/homePage/home";
//import Lyrics from "../../pages/lyrics/lyrics";

import HeaderLogo from "../header/headerlogo";

import "../../styles/components/header.scss";

const Header = (props) => {
  const HomeRef = React.createRef();
  const VideosRef = React.createRef();
  const MerchRef = React.createRef();
  // const ContactsRef = React.createRef();

  const handleClick = () => {
    props.handleToggle(!props.motion);
  };

  return (
    <div className={"App-header"}>
      <HeaderLogo />
      <button onClick={() => handleClick()}>
        {props.motion ? "Motion ON" : "Motion OFF"}
      </button>
      <ul className={"header-links"}>
        {/* <a href="#contact-page">
          <li ref={ContactsRef}>Contact</li>
        </a> */}
        <a href="#merch">
          <li ref={MerchRef}>Merch</li>
        </a>
        <a href="#vids">
          <li ref={VideosRef}>Videos</li>
        </a>
        <a href="#home">
          <li ref={HomeRef}>Home</li>
        </a>
      </ul>
    </div>
  );
};

export default Header;
