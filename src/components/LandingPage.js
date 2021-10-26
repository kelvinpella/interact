import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/LandingPage/interact.svg";
import InteractText from "../assets/LandingPage/interactText.svg";
import Button from "./Button";

const LandingPage = (props) => {
  const toUsernameForm = () => {
    props.history.push("/register");
  };
  const continueToChatHandler = async (value) => {
    //go to girls/boys list
    props.history.push(
      `/users/${value === "Chat with girls" ? "female" : "male"}`
    );
  };
  return (
    <div className="w-full">
      <header className="w-full p-2.5  text-center bg-greyish  border-b border-solid border-greyish   ">
        <Link to="/" className="w-1/2 m-auto block md:w-1/12 md:ml-32">
          <img src={Logo} alt="logo" className="w-full  " />
        </Link>
      </header>
      <div className=" w-full flex flex-col items-center flex-nowrap md:mx-auto md:mt-24 md:max-w-screen-lg md:grid grid-cols-2 grid-rows-5 justify-items-center   ">
        <div className="w-2/6 my-12 row-span-5 md:w-1/2 ">
          <img src={InteractText} alt="interactText" className="w-full " />
        </div>
        <input
          className="w-11/12   text-greyish py-5 px-2.5 bg-whitish  border border-solid border-greyish rounded-md hover:bg-d8 hover:text-33 md:text-2xl md:px-12 md:py-6 "
          type="button"
          value="Add your instagram username"
          onClick={toUsernameForm}
        ></input>
        <p className="text-sm mt-1 text-greyish md:text-xl md:self-start md:m-2.5 ">
          Username will be listed for chat
        </p>
        <p className="  my-4 md:text-7xl md:md:self-start">OR</p>
        <Button
          continueToChat={(value) => continueToChatHandler(value)}
          value="Chat with girls"
        />
        <Button
          continueToChat={(value) => continueToChatHandler(value)}
          value="Chat with boys"
        />
      </div>
    </div>
  );
};

export default LandingPage;
