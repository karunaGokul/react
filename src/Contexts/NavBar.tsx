import React, { Component } from "react";
import { ThemeContext } from "./ThemeContext";

class Navbar extends Component {
  //   static contextType = ThemeContext;
  render() {
    /*  console.log(this.context);
    const { isLightTheme, light, dark }: any = this.context;
    const theme = isLightTheme ? light : dark; */

    return (
      <ThemeContext.Consumer>
        {(context) => {
          const { isLightTheme, light, dark }: any = context;
          const theme = isLightTheme ? light : dark;
          return (
            <nav
              className="p-12"
              style={{ background: theme.ui, color: theme.syntax }}
            >
              <h1>Context App</h1>
              <ul className="p-0">
                <li className="my-0 mx-7 inline-block">Home</li>
                <li className="my-0 mx-7 inline-block">About</li>
                <li className="my-0 mx-7 inline-block">Contact</li>
              </ul>
            </nav>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Navbar;
