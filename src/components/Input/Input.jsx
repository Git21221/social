import React from "react";
import "./input.css";

const Input = ({ placeholder, value, type, className }) => {
  return (
    <>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        className={className}
      />
    </>
  );
};

export default Input;
