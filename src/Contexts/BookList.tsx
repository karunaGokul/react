import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

/* class BookList extends Component {
  static contextType = ThemeContext;
  render() { 
    const { isLightTheme, light, dark }: any = this.context;
    const theme = isLightTheme ? light : dark;

    return ( 
      <div className="p-16 mb-12" style={{ background: theme.bg, color: theme.syntax }}>
        <ul className='p-0 list-none'>
          <li className='p-0 mx-auto my-10 rounded-3xl' style={{ background: theme.ui }}>the way of kings</li>
          <li className='p-0 mx-auto my-10 rounded-3xl' style={{ background: theme.ui }}>the name of the wind</li>
          <li className='p-0 mx-auto my-10 rounded-3xl' style={{ background: theme.ui }}>the final empire</li>
        </ul>
      </div>
    );
  }
} */

/* above contextType method cant be used in functional component instead
we can use the useContext hook or context.consumer method */

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div
      className="p-16 mb-12"
      style={{ background: theme.bg, color: theme.syntax }}
    >
      <ul className="p-0 list-none">
        <li
          className="p-0 mx-auto my-10 rounded-3xl"
          style={{ background: theme.ui }}
        >
          the way of kings
        </li>
        <li
          className="p-0 mx-auto my-10 rounded-3xl"
          style={{ background: theme.ui }}
        >
          the name of the wind
        </li>
        <li
          className="p-0 mx-auto my-10 rounded-3xl"
          style={{ background: theme.ui }}
        >
          the final empire
        </li>
      </ul>
    </div>
  );
};

export default BookList;
