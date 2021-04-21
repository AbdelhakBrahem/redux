import React from "react";
import { useSelector } from "react-redux";
import Todoitem from "./Todoitem";

function TodoList() {
  const todos = useSelector(state => state)
  return (
    <div className="col my-4 ">
      {todos.map(todo => {
        return <Todoitem key={todo.id} todo={todo}/>
      })}
    </div>
  );
}

export default TodoList;
