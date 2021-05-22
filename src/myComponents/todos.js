import React from "react";
import Todo from "./todo";

function todos(props) {
  return (
    <div className="container">
      <h2 className="text-center mt-4">Todos List</h2>
      {props.todos.map((todo)=>{
          return     <Todo todo={todo} onDelete = {props.onDelete}/>
      })}
  
    
    </div>
  );
}

export default todos;
