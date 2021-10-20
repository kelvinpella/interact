import React from "react";
import Button from "./Button";
import HeaderLogo from "./HeaderLogo";

const InstagramProfile = (props) => {
  // get profile Information via props
  const { username, fullName, profilePic } = props.profileInfo;
  return (
    <div className="w-full text-center">
      <HeaderLogo />
      <figure className="w-2/5 my-12 mx-auto">
        <img src={profilePic} alt="myphoto" className="w-full" />
        <figcaption className="max-w-full overflow-auto text-base mt-2.5">
          {username}
        </figcaption>
      </figure>
      <h1 className="text-2xl m-6 font-bold max-w-full overflow-auto">
        Welcome, {fullName}
      </h1>
      <div>
        <Button value="Continue to chat" />
        <Button
          value="Change username"
          classValues="bg-70 border border-solid border-greyish text-white px-5 py-2 rounded-md mt-5 mb-2.5 hover:bg-81 hover:text-f8 "
        />
      </div>
    </div>
  );
};

export default InstagramProfile;
