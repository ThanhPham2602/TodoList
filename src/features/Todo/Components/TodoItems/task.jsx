import React, { useState } from "react";
import PropTypes from "prop-types";

Task.propTypes = {
  value: PropTypes.object,
  onChange: PropTypes.func,
  onUpdate: PropTypes.func,
  onDelete: PropTypes.func,
};

function Task(props) {
  const { value, change, deleteTodoItem, updateTodoItem } = props;

  const [checkupdate, Setcheckupdate] = useState(false);

  return (
    <li>
      <input
        type={!checkupdate ? "checkbox" : "text"}
        checked={value.status === "checked" ? true : false}
        onChange={(value) => {
          change(value.target.checked);
        }}
      />
      {!checkupdate ? value.title : ""}
      {!checkupdate ? (
        <button
          onClick={() => {
            Setcheckupdate(!checkupdate);
          }}
        >
          Update
        </button>
      ) : (
        <button
          onClick={() => {
            Setcheckupdate(!checkupdate);
          }}
        >
          SAVE
        </button>
      )}

      <button onClick={deleteTodoItem}>
        {/* {!checkupdate ? "Delete" : "Cancel"} */}
        Delete
      </button>
    </li>
  );
}

export default Task;
