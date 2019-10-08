import React, { useReducer } from "react";
import { initialState, reducer } from "../reducers";

function useComp() {
  const [todo, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      {todo.map((el, index) => (
        <h3 key={index}>{el.item}</h3>
      ))}
    </div>
  );
}

export default useComp;
