import React, { useReducer } from "react";
import uuid from "uuid";

const ADD = "ADD";

export const initialState = {
  todos: [
    {
      text: "Learn about reducers",
      completed: false,
      id: 3892987589
    }
  ]
};

export function reducer(state, action) {
  switch (action.type) {
    case "add": {
      //   const newCounter = state.counter + 1;
      const newTodo = {
        text: action.text,
        id: uuid()
      };
      return {
        todos: [...state.todos, newTodo]
      };
    }
    default:
      return state;
  }
}
