import React from "react";
import classes from "./Toolbar.module.css";
import Menu from "./Menu/Menu";
import Search from "./Search/Search";
import Cart from "./Cart/Cart";
// import Logo from "../../Logo/Logo";
// import NavigationItems from "../NavigationItems/NavigationItems";
// import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const toolbar = () => {
  return (
    <header className={classes.Header}>
      {/* <DrawerToggle clicked={this.props.drawerToggleClicked} />
        <Logo /> */}
      <nav>
        <Menu />
        <Search />
      </nav>
      <Cart />
    </header>
  );
};

export default toolbar;
