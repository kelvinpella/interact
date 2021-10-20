import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/LandingPage/interact.svg";
import InteractText from "../assets/LandingPage/interactText.svg";
import Button from "./Button";

const LandingPage = (props) => {
  const toUsernameForm = () => {
    props.history.push("/register");
  };

  return (
    <div className=" w-full flex flex-col items-center flex-nowrap">
      <header className="w-full p-2.5  text-center bg-greyish  border-b border-solid border-greyish   ">
        <Link to="/" className="w-1/2 m-auto block">
          <img src={Logo} alt="logo" className="w-full  " />
        </Link>
      </header>
      <div className="w-2/6 my-12 ">
        <img src={InteractText} alt="interactText" className="w-full " />
      </div>
      <input
        className="w-11/12   text-greyish py-5 px-2.5 bg-whitish  border border-solid border-greyish rounded-md hover:bg-d8 hover:text-33 "
        type="button"
        value="Add your instagram username"
        onClick={toUsernameForm}
      ></input>
      <p className="text-sm mt-1 text-greyish">
        Username will be listed for chat
      </p>
      <p className="  my-4">OR</p>
      <Button value="Chat with girls" />
      <Button value="Chat with boys" />
    </div>
  );
};

export default LandingPage;
