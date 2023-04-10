import React, { useState } from "react";
import "./App.css";

import Form from "./Form/Form";
import AdvancedForm from "./Form/AdvancedForm";
import CustomHook from "./Hooks/CustomHook";
import Screen from "./Hooks/Screen";

/* import BookList from "./Contexts/BookList";
import Navbar from "./Contexts/NavBar";
import ToggleTheme from "./Contexts/ToggleTheme";
import ThemeContextProvider from "./Contexts/ThemeContext";
import AuthContextProvider from "./Contexts/AuthContext";
import BookContextProvider from "./Contexts/BookContext"; */

// import NovelList from "./Hooks/NovelList";

/* import SearchTodo from "./HOC/TodoList";
import TodoList from "./HOC/TodoList";
import SearchUser from "./HOC/UserList";

import UserList from "./HOC/UserList"; */

function App() {
  const [view, setView] = useState("basic");

  return (
    <div className="max-w-screen-sm my-14 mx-auto text-center">
      <CustomHook />
      <Screen />

     {/*  <nav>
        <h3 onClick={() => setView("basic")}>Basic</h3>
        <h3 onClick={() => setView("advanced")}>Advanced</h3>
      </nav>
      {view == "basic" ? <Form /> : <AdvancedForm /> } */}

      {/* <NovelList /> */}

      {/* 
      <div>
        <UserList />
       <SearchUser />
      </div>
      <div>
        <TodoList />
        <SearchTodo />
      </div> */}
      {/* <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
          <ToggleTheme />
        </AuthContextProvider>
      </ThemeContextProvider> */}
    </div>
  );
}

export default App;
