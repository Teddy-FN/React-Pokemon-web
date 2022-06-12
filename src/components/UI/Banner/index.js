import React from "react";
import classes from "./banner.module.css";
const Banner = ({ images, titleBanner, descriptionBanner, imagesRating }) => {
  return (
    <div className={classes["banner-wrapper"]}>
      <div className={classes["banner-container"]}>
        <img src={images} className={classes["img-banner"]} alt="banner" />
        <div className={classes["description-banner"]}>
          <h2>{titleBanner}</h2>
          <p>{descriptionBanner}</p>
          <img
            src={imagesRating}
            className={classes["img-rating"]}
            alt="rating"
          />
          <button className={`${classes["btn"]} ${classes["btn--buy-now"]}`}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
