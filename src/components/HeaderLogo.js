import React from "react";
import InteractText from "../assets/LandingPage/interactText.svg";
const HeaderLogo = (props) => {
  return (
    <div className="w-full pt-5 pb-2.5 bg-greyish border-b border-solid border-greyish">
      <header className="w-3/5 m-auto">
        <img src={InteractText} alt="Interact Logo" className="w-full" />
      </header>
    </div>
  );
};

export default HeaderLogo;
