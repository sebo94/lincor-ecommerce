import React from "react";
import classes from "./Cart.module.css";

const cart = () => (
  <div className={classes.Cart}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 16 16"
    >
      <use xlinkHref="#cart">
        <g id="cart">
          <path d="M1.5,9l1.2,6h10.6l1.2-6"></path>
          <line x1="0" y1="5.8" x2="16" y2="5.8"></line>
          <line x1="6.2" y1="0.3" x2="4.2" y2="7.7"></line>
          <line x1="9.8" y1="0.3" x2="11.8" y2="7.7"></line>
        </g>
      </use>
    </svg>
  </div>
);

export default cart;
