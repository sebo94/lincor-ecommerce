import React, { Component } from "react";
import classes from "./Layout.module.css";
import Toolbar from '../../components/Toolbar/Toolbar';

// import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
// import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  //   state = {
  //     showSideDrawer: false,
  //   };

  //   sideDrawerClosedHandler = () => {
  //     this.setState({ showSideDrawer: false });
  //   };

  //   sideDrawerToggleHandler = () => {
  //     this.setState((prevState) => {
  //       return { showSideDrawer: !prevState.showSideDrawer };
  //     });
  //   };

  render() {
    return (
      <div className={classes.Layout}>
        <Toolbar
          // transparent={this.props.transparent}
          // drawerToggleClicked={this.sideDrawerToggleHandler}
        />
        {/* <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        /> */}
        <main className={classes.Content}>{this.props.children}</main>
      </div>
    );
  }
}

export default Layout;
