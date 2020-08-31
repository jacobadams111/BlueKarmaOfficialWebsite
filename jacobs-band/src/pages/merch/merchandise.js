import React from "react";

//import imgPath from "../../assets/Blue Karma Logo-03.png";
import BasicLogoSticker from "../../assets/BasicLogoSticker.jpg";
import HoloSticker from "../../assets/HoloSticker.jpg";
import SquareSticker from "../../assets/SquareSticker.jpg";

import Product from "./product";

import "../../styles/pages/merch.scss";

const MerchandisePage = () => {
  return (
    <div id={"merch"} className={"merchandise-page"}>
      <h2>Merch</h2>
      <div className={"merch-products"}>
        <Product title="Coming Soon!" image={BasicLogoSticker}></Product>
        <Product title="Coming Soon!" image={HoloSticker}></Product>
        <Product title="Coming Soon!" image={SquareSticker}></Product>
      </div>
    </div>
  );
};

export default MerchandisePage;
