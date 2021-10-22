import React, { useState } from "react";
import { useHistory } from "react-router";
import Button from "./Button";
import HeaderLogo from "./HeaderLogo";
import { firebaseApp } from "../firebase/firebaseApp";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadString,
  getDownloadURL,
} from "firebase/storage";

// create a firestore database reference
const db = getFirestore(firebaseApp);
// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage(firebaseApp);

const InstagramProfile = ({ profileInfo }) => {
  const history = useHistory();
  const [toChat, setToChat] = useState(false);
  let renderedContent, renderedButtons;
  // store downloaded image url from firebase
  const [firebaseImageUrl, setFirebaseImageUrl] = useState("");
  // toggle render between profile info and errors

  const uploadImageHandler = async () => {
    const { username, profilePic } = profileInfo;
    // Create a storage reference from our storage service
    // this is the image reference
    const storageRef = ref(storage, username);

    // For Data URL strings
    try {
      await uploadString(storageRef, profilePic, "data_url");
      // retrieve url and set in state
      setFirebaseImageUrl(await getDownloadURL(storageRef));
    } catch (error) {
      //TODO
      console.log("Failed to upload image");
    }
  };

  const uploadDataHandler = async () => {
    // upload image first and retrieve it's url
    await uploadImageHandler();
    const { username, name, gender } = profileInfo;
    // save profile info to database
    try {
      // create user doc reference first to the 'users' collection
      const userRef = doc(db, "users", username);
      await setDoc(userRef, {
        username,
        name,
        gender,
        photo: firebaseImageUrl,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const continueToChat = async () => {
    setToChat(true);
    // save profile information to firebase if available.
    if (profileInfo) {
      await uploadDataHandler();
    }
  };
  //toggle chat options for chat
  if (!toChat) {
    renderedButtons = (
      <div>
        <Button continueToChat={continueToChat} value="Continue to chat" />
        <Button
          cancel={() => history.push("/")}
          value="Change username"
          classValues="bg-70 border border-solid border-greyish text-white px-5 py-2 rounded-md mt-5 mb-2.5 hover:bg-81 hover:text-f8 "
        />
      </div>
    );
  } else {
    renderedButtons = (
      <div className="">
        <div className="z-20 relative">
          <Button value="Chat with girls" />
        </div>
        <div className="z-20 relative">
          <Button value="Chat with boys" />
        </div>
        <div className="bg-white opacity-80 absolute top-0 left-0 w-screen h-screen "></div>
      </div>
    );
  }
  if (profileInfo) {
    // get profile Information via props
    const { username, name, profilePic } = profileInfo;
    renderedContent = (
      <>
        <figure className="w-2/5 my-12 mx-auto">
          <img src={profilePic} alt="myphoto" className="w-full" />
          <figcaption className="max-w-full overflow-auto text-base mt-2.5">
            {username}
          </figcaption>
        </figure>
        <h1 className="text-2xl m-6 font-bold max-w-full overflow-auto">
          Welcome, {name}
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

  return (
    <div className="w-full text-center relative">
      <HeaderLogo />
      {renderedContent}
      {renderedButtons}
    </div>
  );
};

export default InstagramProfile;
