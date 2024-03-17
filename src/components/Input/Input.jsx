import React from "react";
import './input.css'

const Input = ({placeholder, value, type}) => {
  return (
    <>
      <input type={type} value={value} placeholder={placeholder} className="rounded-3xl px-4 py-2" />
    </>
  );
};

export default Input;
