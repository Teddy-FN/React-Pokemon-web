import React from "react";
import classes from "./card.module.css";

const Card = (props) => {
  const classesName = `${props.className} ${classes["card-login"]}`;
  return <div className={classesName}>{props.children}</div>;
};

export default Card;
