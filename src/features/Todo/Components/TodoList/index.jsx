import React, { useState } from "react";
import PropTypes from "prop-types";
import Task from "../TodoItems/task";
TodoList.propTypes = {
  todolist: PropTypes.array,
  onUpdate: PropTypes.func,
  onDelete: PropTypes.func,
  onChange: PropTypes.func,
};

function TodoList(props) {
  const { todolist, onDelete, onChange, onUpdate } = props;
  console.log("todolist", todolist);

  return (
    <ul>
      {todolist.map((value, index) => (
        <Task
          key={index}
          value={value}
          change={(e) => {
            onChange(value.id, e);
          }}
          updateTodoItem={() => {
            onUpdate(value);
          }}
          deleteTodoItem={() => {
            onDelete(value.id);
          }}
        />
      ))}
    </ul>
  );
}

export default TodoList;
