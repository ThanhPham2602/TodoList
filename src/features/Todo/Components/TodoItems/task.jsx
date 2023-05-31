import React, { useState } from "react";
import PropTypes from "prop-types";
import MyComponent from "./abc";
import "./style.css";

Task.propTypes = {
  value: PropTypes.object,
  onChange: PropTypes.func,
  onUpdate: PropTypes.func,
  onDelete: PropTypes.func,
};

function Task(props) {
  const { value, change, deleteTodoItem, updateTodoItem } = props;

  // const [checkupdate, Setcheckupdate] = useState(false);

  return (
    // <li>
    //   <input
    //     type={!checkupdate ? "checkbox" : "text"}
    //     checked={value.status === "checked" ? true : false}
    //     onChange={(value) => {
    //       change(value.target.checked);
    //     }}
    //   />
    //   {!checkupdate ? value.title : ""}

    //   <button
    //     onClick={() => {
    //       Setcheckupdate(!checkupdate);
    //     }}
    //   >
    //     {!checkupdate ? "Update" : "Save"}
    //   </button>
    //   <button onClick={deleteTodoItem}>
    //     {!checkupdate ? "Delete" : "Cancel"}
    //   </button>
    // </li>
    <MyComponent
      deleteTodoItem={deleteTodoItem}
      updateTodoItem={updateTodoItem}
      value={value}
      change={change}
    />
  );
}

export default Task;
