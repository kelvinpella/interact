import React from "react";
import { useHistory } from "react-router";
import Button from "./Button";
import HeaderLogo from "./HeaderLogo";

const InstagramProfile = ({ profileInfo }) => {
  const history = useHistory();
  // toggle render between profile info and errors
  let renderedContent;

  if (profileInfo) {
    const { username, fullName, profilePic } = profileInfo;
    renderedContent = (
      <>
        <figure className="w-2/5 my-12 mx-auto">
          <img src={profilePic} alt="myphoto" className="w-full" />
          <figcaption className="max-w-full overflow-auto text-base mt-2.5">
            {username}
          </figcaption>
        </figure>
        <h1 className="text-2xl m-6 font-bold max-w-full overflow-auto">
          Welcome, {fullName}
        </h1>
      </>
    );
  } else {
    renderedContent = (
      <p className="text-xl my-12 font-bold max-w-full overflow-auto">
        Ooops! Failed to fetch profile.
        <br /> Check Username <br />
        and <br />
        Try again.
      </p>
    );
  }
  // get profile Information via props

  return (
    <div className="w-full text-center">
      <HeaderLogo />
      {renderedContent}
      <div>
        <Button value="Continue to chat" />
        <Button
          cancel={() => history.push("/")}
          value="Change username"
          classValues="bg-70 border border-solid border-greyish text-white px-5 py-2 rounded-md mt-5 mb-2.5 hover:bg-81 hover:text-f8 "
        />
      </div>
    </div>
  );
};

export default InstagramProfile;
