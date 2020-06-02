import React from "react";
import classes from "./Search.module.css";

const search = () => (
  <div className={classes.Search}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 16 16"
    >
      <use xlinkHref="#search">
        <g id="search">
          <circle class="st0" cx="6.9" cy="6.9" r="5.5"></circle>
          <line class="st0" x1="10.9" y1="10.9" x2="15.1" y2="15.1"></line>
        </g>
      </use>
    </svg>
  </div>
);

export default search;
