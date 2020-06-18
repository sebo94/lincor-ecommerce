import React, { useState } from "react";
import classes from "./Search.module.css";

const Search = () => {
  const [searchFocus, setSearchFocus] = useState(false);
  const handleChange = () => console.log("this is working ");
  const handleSearchClick = () => {
    console.log("i am working ")
  };
  return (
    <div className={classes.Search}>
      {/* <div className={classes.Test}>
        <span>Search</span>
        <input onChange={handleChange} />
      </div> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        preserveAspectRatio="xMidYMid"
        viewBox="0 0 16 16"
        onClick={handleSearchClick}
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
};

export default Search;
