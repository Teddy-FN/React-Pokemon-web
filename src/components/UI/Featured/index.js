import React from "react";
import classes from "./featured.module.css";
import Card from "../Card";

const Featured = ({ data }) => {
  const datasFeatured = data.map((items) => (
    <li className={classes["list-featured"]} key={items.id}>
      <Card className={classes["card-featured"]}>
        <h3>{items.title}</h3>
        <items.icons className={classes["featured-icon"]} />
      </Card>
    </li>
  ));
  return (
    <div className={classes["featured-items"]}>
      <ul className="grid three-cols">{datasFeatured}</ul>
    </div>
  );
};

export default Featured;
