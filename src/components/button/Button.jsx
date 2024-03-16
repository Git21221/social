import React from "react";

function Button({ width, content }) {
  return (
    <>
      <button className={`px-4 py-2 border rounded-3xl bg-violet-500 text-white w-[${width}]`}>{content}</button>
    </>
  );
}

export default Button;
