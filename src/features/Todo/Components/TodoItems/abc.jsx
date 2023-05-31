import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.css";

MyComponent.propTypes = {
  value: PropTypes.object,
  onChange: PropTypes.func,
  onUpdate: PropTypes.func,
  onDelete: PropTypes.func,
};
function MyComponent(props) {
  const { value, change, deleteTodoItem, updateTodoItem } = props;
  // console.log("value", value);
  const [isEditing, setIsEditing] = useState(false);
  const [newTodo, setNewTodo] = useState("");

  const handleUpdateSave = (newTodo, id) => {
    if (isEditing) {
      // Xử lý lưu dữ liệu
      // console.log("object", id);
      if (newTodo.length > 0) {
        updateTodoItem(newTodo, id);
        // onUpdate={() => {
        //   updateItem(newTodo, id);
        // }}
        console.log("Save data:", newTodo);
        console.log("object id", id);
        setIsEditing(false);
      }
    } else {
      // Bắt đầu chỉnh sửa

      setIsEditing(true);
    }
  };

  const handleDeleteCancel = () => {
    if (isEditing) {
      // Hủy chỉnh sửa
      setIsEditing(false);

      console.log("Cancel editing");
    } else {
      deleteTodoItem();
      console.log("Delete data");
    }
  };

  return (
    <li className="abcLi">
      <div className="task">
        {isEditing ? (
          <input
            className="updateinput"
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
        ) : (
          <div>
            <input
              className="inputcheckmark"
              type="checkbox"
              checked={value.status === "checked" ? true : false}
              onChange={(value) => {
                change(value.target.checked);
              }}
            />{" "}
            <span class="checkmark"></span>
            {/* <span className="checkmark::after"></span> */}
          </div>
        )}
        <div className="actionbutton">
          <span className="title">{isEditing ? "" : value.title}</span>
          <div>
            <button
              className="button"
              onClick={
                // isEditing
                //   ? () => handleUpdateSave(newTodo, value.id)
                //   : () => console.log("123")
                () => handleUpdateSave(newTodo, value.id)
              }
            >
              {isEditing ? "Save" : "Update"}
            </button>
            <button className="button" onClick={handleDeleteCancel}>
              {isEditing ? "Cancel" : "Delete"}
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default MyComponent;
