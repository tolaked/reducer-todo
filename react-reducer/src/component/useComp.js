import React, { useReducer } from "react";
import { initialState, reducer } from "../reducers";
import AddTodo from "../component/AddTodo";
import Todo from "./Todo";

function useComp() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <AddTodo add={text => dispatch({ type: "add", text: text })} />
      {state.todos.map(t => (
        <Todo key={t.id} todo={t} />
      ))}
    </div>
  );
}

export default useComp;
