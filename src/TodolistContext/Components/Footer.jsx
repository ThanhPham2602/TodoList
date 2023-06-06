import React, { useContext } from "react";
// import PropTypes from "prop-types";
import "./style.css";
import { AppContext } from "../AppContext";
Footer.propTypes = {};

function Footer() {
  const { dispatch, countSelected } = useContext(AppContext);
  const clearAll = () => {
    dispatch({ type: "clearAll" });
  };
  // const countSelected = () => {
  //   dispatch({ type: countSelected });
  // };
  // console.log("object", countSelected);
  return (
    <div className="footer1">
      <div className="footer2">
        <p>Selected: {countSelected}</p>
        <p className="clearall" onClick={clearAll}>
          ClearAll
        </p>
      </div>
    </div>
  );
}

export default Footer;
