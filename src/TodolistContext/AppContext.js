import { createContext, useReducer } from "react";

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const inittodoList = [
    { id: 1, title: "New list item", status: "unchecked" },
    { id: 2, title: "New list item", status: "unchecked" },
    { id: 3, title: "New list item", status: "checked" },
  ];

  const handleAddTodo = (state, action) => {
    const newstate = [...state];
    const todo = {
      id: Math.random() + 1,
      title: action.payload,
      status: "unchecked",
    };
    console.log("payload", action.payload);
    newstate.unshift(todo);
    return newstate;

    // setTodoList([...todoList, todo]);
  };

  // const [todoList, dispatch2] = useReducer(userReducer2, inittodoList);

  const handleCheckClick = (state, action) => {
    // console.log("idUP", id);
    // console.log("staUP", status);
    const index = state.findIndex((value) => value.id === action.payload);
    console.log("index", index);
    const newTodoList = [...state];
    console.log("newtodolist", newTodoList);

    newTodoList[index] = {
      ...newTodoList[index],
      status: newTodoList[index].status === "checked" ? "unchecked" : "checked",
    };
    return newTodoList;
  };

  // dispatch({ type: "addtodo", payload: "item" });
  const handleUpdateItem = (state, action) => {
    console.log("action", action);
    const index = state.findIndex((value) => value.id === action.id);
    // console.log("ĩnx", index);
    const newTodoList = [...state];
    // console.log("newtodo", newTodo);
    // console.log("newList", newTodoList);
    newTodoList[index] = {
      ...newTodoList[index],
      title: (newTodoList[index].title = action.payload),
    };
    return newTodoList;
  };

  const handleDeleteItem = (state, action) => {
    console.log("actiondelete", action);
    const newState = [...state];
    const index = newState.findIndex((task) => task.id === action.payload);
    console.log("dltindex", index);
    newState.splice(index, 1);
    return newState;
  };
  // const countSelected = (state, action) => {
  //   const newCount = state.filter((value) => value.status === "checked").length;
  //   return newCount.length;
  // };

  const userReducer = (state, action) => {
    switch (action.type) {
      case "addNewItem":
        return handleAddTodo(state, action);
      case "deleteItem":
        return handleDeleteItem(state, action);
      case "handleUpdateItem":
        return handleUpdateItem(state, action);
      case "handleCheckClick":
        return handleCheckClick(state, action);
      // case "count":
      //   return
      case "clearAll":
        console.log("state", state);
        return [];
      default:
        return state;
    }
  };

  const [todoList, dispatch] = useReducer(userReducer, inittodoList);
  const countSelected = todoList.filter(
    (value) => value.status === "checked"
  ).length;
  return (
    <AppContext.Provider
      value={{
        todoList,
        // setTodoList,
        // handleCheckClick,
        // handleAddTodo,
        // handleUpdateItem,
        // handleDeleteItem,
        // clearAll,
        countSelected,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
