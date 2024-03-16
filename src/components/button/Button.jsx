import React from "react";

const Button = ({ className, content }) => {
  return (
    <>
      <button className={`px-4 py-2 rounded-full ${className}`}>{content}</button>
    </>
  );
};

export default Button;
