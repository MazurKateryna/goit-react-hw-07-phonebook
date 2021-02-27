import React from "react";
import "./isAlreadyTrue.css";

let IsAlreadyTrue = ({ onChangeIsAlready }) => {
 setTimeout(onChangeIsAlready, 3000);
 return <p className={alert}> Contact already exists!</p>;
};

export default IsAlreadyTrue;
