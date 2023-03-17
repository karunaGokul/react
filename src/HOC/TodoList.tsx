import React, { useEffect, useState } from "react";
import HOC from "./HOC";

const TodoList = ({data}: any) => {
 /*  const [todos, setTodos] = useState([]);
  const [terms, setTerms] = useState("");

  useEffect(() => {
    const fetchTodo = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const json = await response.json();
      setTodos(json);
      console.log(json);
    };
    fetchTodo();
  }, []); */
  
  let renderTodo = data.map((todo: any) => {
    return (
      <div key={todo.id}>
        <strong>{todo.title};</strong>
      </div>
    );
  });

  /* let filteredTodo = todos.slice(0,10).filter(({title}: any) => {
    return title.indexOf(terms) >= 0
  }).map((todo: any) => {
    return (
        <div key={todo.id}>
            <strong>
            {todo.title};
            </strong>
        
    </div>
    );
  }) */

  return (
    <div>
      <h4>{renderTodo}</h4>
    </div>
  );
};

const SearchTodo = HOC(TodoList, "todos");

export default SearchTodo;
