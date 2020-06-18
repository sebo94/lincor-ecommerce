import React from "react";
import classes from "./Menu.module.css";

const menu = () => {
  return (
    <div className={classes.Menu}>
      <div className={classes.MenuLeft}>
        <div className={classes.Lang}>
          <span>En</span>
          <div className={classes.LangDrop}>
            <a href="https://www.google.com">It</a>
          </div>
        </div>
        <a className={classes.About} href="https://www.google.com">
          About the brand
        </a>
      </div>

      <div className={classes.MenuRight}>
        <a href="https://www.google.com" className={classes.Category}>
          Men
        </a>
        <a href="https://www.google.com" className={classes.LogoDesktop}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            preserveAspectRatio="xMidYMid"
            viewBox="0 0 118 20"
          >
            <use xlinkHref="#logo">
              <path
                id="logo"
                d="M117.5,19.3h-7.3l-4.7-4.5v4.5h-6.1V0.4h9.8c4.3,0,7.2,3.6,7.2,7c0,3.4-2.1,5.6-4.1,6.5L117.5,19.3z M108.5,5.5
      h-2.9v4.2h2.9v0c1.2,0,2.1-1,2.1-2.1C110.6,6.5,109.7,5.5,108.5,5.5z M85.5,19.7c-5.4,0-9.7-4.3-9.7-9.7c0-5.3,4.3-9.7,9.7-9.7
      c5.4,0,9.7,4.3,9.7,9.7C95.2,15.3,90.9,19.7,85.5,19.7z M85.5,5.9c-2.3,0-4.1,1.8-4.1,4.1c0,2.3,1.8,4.1,4.1,4.1
      c2.3,0,4.1-1.8,4.1-4.1C89.6,7.7,87.8,5.9,85.5,5.9z M66.7,14.1c1.5,0,3-0.3,3.9-1.2l2.8,5c-1.8,1.3-4.3,1.8-6.8,1.8
      c-5.4,0-9.7-4.3-9.7-9.7c0-5.3,4.3-9.7,9.7-9.7c2.5,0,4.9,0.6,6.8,1.8l-2.8,5c-1-0.9-2.4-1.2-3.9-1.2c-2.3,0-4.1,1.8-4.1,4.1
      C62.6,12.3,64.4,14.1,66.7,14.1z M53.2,0.4v18.9h-5L40.9,12v7.3h-6.1V0.4h5.1l7.2,7.4V0.4H53.2z M22.8,0.4h6.6v18.9h-6.6V0.4z
      M0.5,19.3v-6.1V0.4h6.1v12.8h11.9v6.1H6.6H0.5z"
              ></path>
            </use>
          </svg>
        </a>
        <a href="https://www.google.com" className={classes.Category}>
          Women
        </a>
      </div>
    </div>
  );
};

export default menu;
