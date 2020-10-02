import React from "react";
import "./Spinner.css";
const Spinner = () => {
  return (
    <div className="lds-ring mx-auto">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Spinner;
