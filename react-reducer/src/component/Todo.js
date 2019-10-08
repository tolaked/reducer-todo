import React from "react";

function Todo({ todo }) {
  console.log(todo.id);
  return (
    <div>
      <h4>{todo.text}</h4>
      <p>{todo.id}</p>
    </div>
  );
}

export default Todo;
