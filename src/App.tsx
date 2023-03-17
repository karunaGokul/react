import React from "react";
import "./App.css";
import SearchTodo from "./HOC/TodoList";
import TodoList from "./HOC/TodoList";
import SearchUser from "./HOC/UserList";
// import Form from "./Form/Form";
import UserList from "./HOC/UserList";

function App() {
  return (
    <div className="App">
      {/* <Form /> */}
      <div>
       {/*  <UserList /> */}
       <SearchUser />
      </div>
      <div>
        {/* <TodoList /> */}
        <SearchTodo />
      </div>
    </div>
  );
}

export default App;
