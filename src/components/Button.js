import React from "react";

const Button = ({ value, classValues, buttonType, cancel, continueToChat }) => {
  const clickHandler = () => {
    if (cancel) {
      cancel();
    }
    if (continueToChat) {
      continueToChat();
    }
  };
  return (
    <input
      className={
        classValues
          ? classValues
          : "w-3/4 text-2xl text-fc py-2.5 px-5 mb-5 bg-de border border-solid border-greyish rounded-md hover:bg-f8"
      }
      type={buttonType ? buttonType : "button"}
      value={value}
      onClick={clickHandler}
    ></input>
  );
};

export default Button;
