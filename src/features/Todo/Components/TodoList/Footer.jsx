import React from "react";
import PropTypes from "prop-types";

Footer.propTypes = {};

function Footer(props) {
  const { countSelected, clearAll } = props;
  console.log("object", countSelected);
  return (
    <div>
      <p>Selected: {countSelected}</p>
      <button onClick={clearAll}>ClearAll</button>
    </div>
  );
}

export default Footer;
