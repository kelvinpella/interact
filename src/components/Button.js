import React from "react";

const Button = ({ value }) => {
  return (
    <input
      className="w-3/4 text-2xl text-fc py-2.5 px-5 mb-5 bg-de border border-solid border-greyish rounded-md hover:bg-f8"
      type="button"
      value={value}
    ></input>
  );
};

export default Button;
