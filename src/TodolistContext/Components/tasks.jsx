import React, { useState, useContext } from "react";
// import PropTypes from "prop-types";
import "./style2.css";
import { AppContext } from "../AppContext";

// MyComponent.propTypes = {
//   value: PropTypes.object,
//   onChange: PropTypes.func,
//   onUpdate: PropTypes.func,
//   onDelete: PropTypes.func,
// };
function Tasks(props) {
  const { dispatch } = useContext(AppContext);
  const { value } = props;
  console.log("value", value);
  const [isEditing, setIsEditing] = useState(false);
  const [newTodo, setNewTodo] = useState("");

  const handleUpdateSave = (newTodo, id) => {
    if (isEditing) {
      if (newTodo.length > 0) {
        dispatch({ type: "handleUpdateItem", payload: newTodo, id });
        setIsEditing(false);
      }
    } else {
      setIsEditing(true);
    }
  };

  const handleDeleteCancel = () => {
    if (isEditing) {
      setIsEditing(false);

      console.log("Cancel editing");
    } else {
      dispatch({ type: "deleteItem", payload: value.id });
      console.log("objectvalueid", value.id);
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
              onChange={(e) => {
                console.log("objectID", value.id);
                // dispatch(value.id, e.target.checked);
                dispatch({ type: "handleCheckClick", payload: value.id });
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
                //
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

export default Tasks;
