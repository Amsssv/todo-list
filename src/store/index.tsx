import React, { FC, ReactNode, useContext, useEffect, useReducer } from "react";
import { State, ActionTypes, Action, Status } from "./types";

const initialState: State = {
  items: [],
  editingId: null,
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionTypes.ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case ActionTypes.REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(({ id }) => id !== action.payload),
      };
    case ActionTypes.EDIT_ITEM:
      return {
        ...state,
        editingId: action.payload,
      };
    case ActionTypes.SAVE_EDITED_ITEM:
      return {
        ...state,
        items: state.items.reduce(
          (acc, item) =>
            item.id === action.payload.id
              ? [...acc, action.payload]
              : [...acc, item],
          []
        ),
        editingId: null,
      };
    case ActionTypes.CANCEL_EDITED_ITEM:
      return {
        ...state,
        editingId: null,
      };
    case ActionTypes.SET_STATUS:
      return {
        ...state,
        items: state.items.reduce(
          (acc, item) =>
            item.id === action.payload.id
              ? [...acc, action.payload]
              : [...acc, item],
          []
        ),
      };
    default:
      return state;
  }
};

const TodoContext = React.createContext(null);

const useTodos = () => {
  const context = useContext(TodoContext);
  return context;
};

const init = (state: State) => ({
  ...state,
  items:
    (localStorage.getItem("todos") &&
      JSON.parse(localStorage.getItem("todos"))) ||
    [],
});

const TodoProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state.items));
  }, [state.items]);

  const addTodoItem = (title: string, description: string) => {
    const id = state.items.length + 1;
    dispatch({
      type: ActionTypes.ADD_ITEM,
      payload: { id, title, description, status: Status.PENDING },
    });
  };

  const removeTodoItem = (id: number) => {
    dispatch({
      type: ActionTypes.REMOVE_ITEM,
      payload: id,
    });
  };

  const editTodoItem = (id: number) => {
    dispatch({
      type: ActionTypes.EDIT_ITEM,
      payload: id,
    });
  };

  const saveEditedTodoItem = (
    id: number,
    title: string,
    description: string,
    status: Status
  ) => {
    dispatch({
      type: ActionTypes.SAVE_EDITED_ITEM,
      payload: { id, title, description, status },
    });
  };

  const cancelEditedTodoItem = () => {
    dispatch({
      type: ActionTypes.CANCEL_EDITED_ITEM,
    });
  };

  const setTodoStatus = (
    id: number,
    title: string,
    description: string,
    status: string
  ) => {
    dispatch({
      type: ActionTypes.SET_STATUS,
      payload: { id, title, description, status },
    });
  };

  return (
    <TodoContext.Provider
      value={{
        state,
        addTodoItem,
        removeTodoItem,
        editTodoItem,
        saveEditedTodoItem,
        cancelEditedTodoItem,
        setTodoStatus,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { TodoProvider, useTodos };
