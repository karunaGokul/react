import React from "react";
import "./App.css";
import BookList from "./Contexts/BookList";
import Navbar from "./Contexts/NavBar";
import ToggleTheme from "./Contexts/ToggleTheme";
import ThemeContextProvider from "./Contexts/ThemeContext";
import AuthContextProvider from "./Contexts/AuthContext";
import BookContextProvider from "./Contexts/BookContext";

// import NovelList from "./Hooks/NovelList";

/* import SearchTodo from "./HOC/TodoList";
import TodoList from "./HOC/TodoList";
import SearchUser from "./HOC/UserList";
import Form from "./Form/Form";
import UserList from "./HOC/UserList"; */

function App() {
  return (
    <div className="max-w-screen-sm my-14 mx-auto text-center">
      {/* <NovelList /> */}

      {/* <Form />
      <div>
        <UserList />
       <SearchUser />
      </div>
      <div>
        <TodoList />
        <SearchTodo />
      </div> */}
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
          <ToggleTheme />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
