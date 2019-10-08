import React, { useReducer } from "react";

const ADD = "ADD";

export const initialState = {
  counter: 2,
  todos: [
    {
      item: "Learn about reducers",
      completed: false,
      id: 3892987589
    }
  ]
};

export function reducer(state, action) {
  switch (action.type) {
    case ADD: {
      const newCounter = state.counter + 1;
      const newTodo = {
        item: action.text,
        id: newCounter
      };
      return {
        newCounter,
        todos: [...state.todos, newTodo]
      };
    }
    default:
      return state;
  }
}
