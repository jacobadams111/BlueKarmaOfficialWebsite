import React from "react";
import Logo from "../../assets/Logo Black.png";
import "../../styles/components/headerlogo.scss";

const HeaderLogo = (props) => {
  return (
    <div className="Logo-header">
      <img
        src={Logo}
        align="left"
        alt="Logo missing"
        onClick={() => props.clicked()}
      />
    </div>
  );
};

export default HeaderLogo;
