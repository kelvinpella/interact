import React from "react";
import Button from "./Button";
import Spinner from "./Spinner/Spinner";
const InstagramCheck = ({ cancelOperation }) => {
  return (
    <div className="w-full h-full absolute top-0 left-0 flex flex-col justify-center items-center ">
      <Spinner />
      <p className="z-50 text-black mt-5 ">Fetching Instagram Profile</p>
      <div className="z-50">
        <Button
          cancel={cancelOperation}
          value="Cancel"
          classValues="bg-70 border border-solid border-greyish text-white px-5 py-2 rounded-md mt-5 mb-2.5 hover:bg-81 hover:text-f8 "
        />
      </div>
      <div className="bg-white absolute top-0 left-0 w-full h-full "></div>
    </div>
  );
};

export default InstagramCheck;
