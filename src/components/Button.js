import React from "react";

const Button = ({
  value,
  classValues,
  buttonType,
  cancel,
  goToChat,
  continueToChat,
}) => {
  const clickHandler = () => {
    if (cancel) {
      cancel();
    }
    if (goToChat) {
      goToChat();
    }
    if (continueToChat) {
      // value = 'chat with' girls/boys
      continueToChat(value);
    }
  };
  return (
    <input
      className={
        classValues
          ? classValues
          : "w-3/4 text-2xl text-fc py-2.5 px-5 mb-5 bg-de border border-solid border-greyish rounded-md hover:bg-f8 md:text-3xl md:mb-8"
      }
      type={buttonType ? buttonType : "button"}
      value={value}
      onClick={clickHandler}
    ></input>
  );
};

export default Button;
