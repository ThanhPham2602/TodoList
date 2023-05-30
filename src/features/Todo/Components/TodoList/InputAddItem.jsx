import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.css";
InputAddNew.propTypes = {
  onAdd: PropTypes.func,
};

function InputAddNew(props) {
  const { onAdd } = props;

  const [newtodo, setNewtodo] = useState("");
  const addNewItem = () => {
    if (newtodo.length === 0) return false;
    onAdd(newtodo);
    setNewtodo(" ");
    console.log("new", newtodo);
    return true;
  };
  return (
    <div className="InputAddItem">
      <input
        className="Input"
        type="text"
        onChange={(e) => setNewtodo(e.target.value)}
        value={newtodo}
      />
      <button className="buttonAdd" onClick={addNewItem}>
        Add
      </button>
    </div>
  );
}

export default InputAddNew;
