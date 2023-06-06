import React, { useState, useContext } from "react";
// import PropTypes from "prop-types";
import { AppContext } from "../AppContext";
// InputAddNew.propTypes = {
//   handleAddTodo: PropTypes.func,
// };

function InputAddNew() {
  const { dispatch } = useContext(AppContext);
  const [newtodo, setNewtodo] = useState("");

  const addNewItem = new Promise(
    (resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    }

    // dispatch({ type: "addNewItem", payload: newtodo });
    // setNewtodo(" ");
    // console.log("new", newtodo);
  );
  const handleAddTodo = () => {
    console.log(newtodo.length);

    if (newtodo.length === 0) return;

    addNewItem
      .then((result) => {
        dispatch({ type: "addNewItem", payload: newtodo });
        setNewtodo("");
        alert("Success");
      })
      .catch((error) => alert("Error"));
  };
  // addNewItem
  //   .then((result) => alert("Success"))
  //   .catch((error) => alert("Error"));
  return (
    <div className="InputAddItem">
      <input
        className="Input"
        type="text"
        onChange={(e) => setNewtodo(e.target.value)}
        value={newtodo}
      />
      <button className="buttonAdd" onClick={handleAddTodo}>
        Add
      </button>
    </div>
  );
}

export default InputAddNew;
