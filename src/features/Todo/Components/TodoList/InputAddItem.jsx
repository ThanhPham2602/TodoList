import React, { useState } from "react";
import PropTypes from "prop-types";

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
    <div>
      <input
        type="text"
        onChange={(e) => setNewtodo(e.target.value)}
        value={newtodo}
      />
      <button onClick={addNewItem}>Add</button>
    </div>
  );
}

export default InputAddNew;
