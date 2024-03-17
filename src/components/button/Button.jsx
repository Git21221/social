import React from "react";

const Button = ({ className, content }) => {
  return (
    <>
      <button className={`px-5 py-3 rounded-full ${className}`}>{content}</button>
    </>
  );
};

export default Button;
