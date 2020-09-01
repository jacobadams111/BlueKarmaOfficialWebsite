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
        <Product title={'3" Vinyl Sticker'} image={BasicLogoSticker}></Product>
        <Product title={'4" Holographic Sticker'} image={HoloSticker}></Product>
        <Product title={'3" Square Sticker'} image={SquareSticker}></Product>
      </div>
    </div>
  );
};

export default MerchandisePage;
