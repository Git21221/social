import React from "react";

const Input = ({placeholder, value, type}) => {
  return (
    <>
      <input type={type} value={value} placeholder={placeholder} className="border w rounded-md px-4 py-2 bg-white" />
    </>
  );
};

export default Input;
