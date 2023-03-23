import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { ThemeContext } from "./ThemeContext";

/* class Navbar extends Component {
    static contextType = ThemeContext;
  render() {
     console.log(this.context);
    const { isLightTheme, light, dark }: any = this.context;
    const theme = isLightTheme ? light : dark;

    return (
      multiple context can't be used with two contextType method 
      instead we can use one with contextType and other with consumer type 
      else can use both in consumer type as follows.

      <AuthContext.Consumer>
        {(authContext) => (
          <ThemeContext.Consumer>
            {(themeContext) => {
              const { isAuthenticated, toggleAuth } = authContext;
              const { isLightTheme, light, dark }: any = themeContext;
              const theme = isLightTheme ? light : dark;
              return (
                <nav
                  className="p-12"
                  style={{ background: theme.ui, color: theme.syntax }}
                >
                  <h1>Context App</h1>
                  <div onClick={toggleAuth}>
                    {isAuthenticated ? "Logged In" : "Logged Out"}
                  </div>
                  <ul className="p-0">
                    <li className="my-0 mx-7 inline-block">Home</li>
                    <li className="my-0 mx-7 inline-block">About</li>
                    <li className="my-0 mx-7 inline-block">Contact</li>
                  </ul>
                </nav>
              );
            }}
          </ThemeContext.Consumer>
        )}
      </AuthContext.Consumer>
    );
  }
} */

// using multiple useContext
const Navbar = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const theme = isLightTheme ? light : dark;
  return (
    <nav className="p-12" style={{ background: theme.ui, color: theme.syntax }}>
      <h1>Context App</h1>
      <div onClick={toggleAuth}>
        {isAuthenticated ? "Logged In" : "Logged Out"}
      </div>
      <ul className="p-0">
        <li className="my-0 mx-7 inline-block">Home</li>
        <li className="my-0 mx-7 inline-block">About</li>
        <li className="my-0 mx-7 inline-block">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
