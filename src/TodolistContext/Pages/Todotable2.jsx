import React, { useContext } from "react";
import TodoList from "../Components/todolist";
import { AppContext } from "../AppContext";
import InputAddNew from "../Components/InputAddItem";
import Footer from "../Components/Footer";
import "./style.css";
Todotable2.propTypes = {};

function Todotable2() {
  const { todoList } = useContext(AppContext);

  console.log(todoList);
  //   const handleAddTodo = (newTodo) => {
  //     const todo = {
  //       id: Math.random() + 1,
  //       title: newTodo,
  //       status: "unchecked",
  //     };

  //     setTodoList([...todoList, todo]);
  //   };

  //   const handleDeleteItem = (id) => {
  //     // console.log("id", id);
  //     const updateTodoList = todoList.filter((todoList) => todoList.id !== id);
  //     setTodoList(updateTodoList);
  //   };
  //   const clearAll = () => {
  //     setTodoList([]);
  //   };

  //   const handleCheckClick = (id, status) => {
  //     console.log("idUP", id);
  //     console.log("staUP", status);
  //     const index = todoList.findIndex((value) => value.id === id);
  //     console.log("index", index);
  //     const newTodoList = [...todoList];

  //     newTodoList[index] = {
  //       ...newTodoList[index],
  //       status: newTodoList[index].status === "checked" ? "unchecked" : "checked",
  //     };
  //     setTodoList(newTodoList);
  //   };
  //   const countSelected = todoList.filter(
  //     (value) => value.status === "checked"
  //   ).length;

  //   const handleUpdateItem = (newTodo, id) => {
  //     console.log("id", id);
  //     console.log("newtodo", newTodo);
  //     const index = todoList.findIndex((value) => value.id === id);
  //     console.log("ĩnx", index);
  //     const newTodoList = [...todoList];
  //     console.log("newtodo", newTodo);
  //     newTodoList[index] = {
  //       ...newTodoList[index],
  //       title: (newTodoList[index].title = newTodo),
  //     };
  //     setTodoList(newTodoList);
  //   };

  return (
    <div>
      <div className="TodoTable">
        <h2 className="hh2">Hi! I'm To Do List</h2>
        <InputAddNew />
        <TodoList />
        <div className="line"></div>
        <Footer />
      </div>
    </div>
  );
}

export default Todotable2;
