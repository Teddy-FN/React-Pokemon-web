import React from "react";
import Container from "../../UI/Container";
import { DATA_STORE } from "../../../DUMMY_STORE";
import { priceFormat } from "../../../utils/priceFormat";
import "./style.css";
import { Icons } from "../../../assets";

const Store = (props) => {
  console.log(DATA_STORE);
  const datasItems = (items) => {
    console.log("INI ITEMS BRAY", items);
  };
  return (
    <div>
      <Container>
        <div className="grid-four-cols">
          {DATA_STORE.map((items) => (
            <div className="card">
              <img src={items.img} alt="product" className="img-products" />
              <div className="product-details">
                <p className="product-name">{items.productName}</p>
                <div className="price-wrapper">
                  <p className="product-price">
                    Rp. {priceFormat(items.price)}
                  </p>
                  <Icons.RiHeartLine
                    className="icons-wishlist"
                    onClick={() => datasItems(items)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Store;
