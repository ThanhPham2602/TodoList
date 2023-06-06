import React, { useState } from "react";
// import PropTypes from "prop-types";
import TodoList from "../Components/TodoList";
import InputAddNew from "../Components/TodoList/InputAddItem";
import "./style.css";
import Footer from "../Components/TodoList/Footer";

TodoTable.propTypes = {
  //   todoList: PropTypes.array.isRequired,
};

function TodoTable(props) {
  const inittodoList = [
    { id: 1, title: "New list item", status: "unchecked" },
    { id: 2, title: "New list item", status: "unchecked" },
    { id: 3, title: "New list item", status: "checked" },
  ];
  const [todoList, setTodoList] = useState(inittodoList);

  const handleAddTodo = (newTodo) => {
    const todo = {
      id: Math.random() + 1,
      title: newTodo,
      status: "unchecked",
    };

    setTodoList([...todoList, todo]);
  };

  const handleDeleteItem = (id) => {
    // console.log("id", id);
    const updateTodoList = todoList.filter((todoList) => todoList.id !== id);
    setTodoList(updateTodoList);
  };
  const clearAll = () => {
    setTodoList([]);
  };

  const handleCheckClick = (id, status) => {
    console.log("idUP", id);
    console.log("staUP", status);
    const index = todoList.findIndex((value) => value.id === id);
    console.log("index", index);

    const newTodoList = [...todoList];

    newTodoList[index] = {
      ...newTodoList[index],
      status: newTodoList[index].status === "checked" ? "unchecked" : "checked",
    };
    setTodoList(newTodoList);
  };
  const countSelected = todoList.filter(
    (value) => value.status === "checked"
  ).length;

  const handleUpdateItem = (newTodo, id) => {
    console.log("id", id);
    console.log("newtodo", newTodo);
    const index = todoList.findIndex((value) => value.id === id);
    console.log("ĩnx", index);
    const newTodoList = [...todoList];
    console.log("newtodo", newTodo);
    newTodoList[index] = {
      ...newTodoList[index],
      title: (newTodoList[index].title = newTodo),
    };
    setTodoList(newTodoList);
  };

  return (
    <div className="TodoTable">
      <h2 className="hh2">Hi! I'm To Do List</h2>
      <InputAddNew onAdd={handleAddTodo} />
      <TodoList
        todolist={todoList}
        onDelete={handleDeleteItem}
        onUpdate={handleUpdateItem}
        onChange={handleCheckClick}
      />
      <div className="line"></div>
      <Footer countSelected={countSelected} clearAll={clearAll} />
    </div>
  );
}

export default TodoTable;
