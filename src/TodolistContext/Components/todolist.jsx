import React, { useContext } from "react";
// // import PropTypes from "prop-types";
import Tasks from "./tasks";
import "./style.css";
import { AppContext } from "../AppContext";
// TodoList.propTypes = {
//   todolist: PropTypes.array,
//   onUpdate: PropTypes.func,
//   onDelete: PropTypes.func,
//   onChange: PropTypes.func,
// };

function TodoList() {
  const { todoList } = useContext(AppContext);
  console.log("todolist", todoList);

  return (
    <ul className="todolist">
      {todoList.map((value, index) => (
        <Tasks value={value} key={value.id} />
      ))}
    </ul>
  );
}

export default TodoList;
