import React from "react";
import PropTypes from "prop-types";
import "./style.css";
Footer.propTypes = {};

function Footer(props) {
  const { countSelected, clearAll } = props;
  console.log("object", countSelected);
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
