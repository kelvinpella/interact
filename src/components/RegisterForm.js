import React, { useRef, useState } from "react";
import axios from "axios";
import HeaderLogo from "./HeaderLogo";
import Button from "./Button";
import InstagramCheck from "./InstagramCheck";
import InstagramProfile from "./InstagramProfile";
const {
  REACT_APP_INSTAGRAM_API_URL,
  REACT_APP_INSTAGRAM_API_HOST,
  REACT_APP_INSTAGRAM_API_KEY,
} = process.env;

const RegisterForm = (props) => {
  const CancelToken = axios.CancelToken;
  const cancelTokenRef = useRef();
  const history = props.history;
  const [username, setUsername] = useState("");
  const [gender, setGender] = useState("female");
  const [error, setError] = useState(true);
  const [loading, setLoading] = useState(false);
  const [profileInfo, setProfileInfo] = useState({});
  const usernameRef = useRef();
  const usernameNoteRef = useRef();

  // The following functions are responsible for handling instagram images
  async function parseURI(d) {
    var reader = new FileReader();
    reader.readAsDataURL(d);
    return new Promise((res, rej) => {
      reader.onload = (e) => {
        res(e.target.result);
      };
    });
  }

  async function getDataBlob(data) {
    var res = await fetch(data.profile_pic_url_hd);
    var blob = await res.blob();
    var profilePic = await parseURI(blob);
    setProfileInfo({
      username: data.username,
      fullName: data.full_name.match(/\S+/)[0],
      profilePic,
    });
    return;
  }
  // end of special instagram image function.

  const radioChangeHandler = (event) => {
    setGender(event.target.value);
  };

  const inputFieldChangeHandler = (event) => {
    setUsername(event.target.value);
  };
  const invalidInputField = () => {
    usernameRef.current.style.cssText = "border: 1px solid #d93025;";
    usernameNoteRef.current.innerHTML = `${usernameRef.current.name} can't be empty.`;
    usernameNoteRef.current.style.cssText = "color:  #d93025;";
  };

  const validInputField = () => {
    usernameRef.current.style.cssText = "border: 1px solid #707070;";
    usernameNoteRef.current.innerHTML = "Looks good!";
    usernameNoteRef.current.style.cssText = "color: #707070;";
  };

  const inputValidityHandler = () => {
    // trim inputValue and remove '@' if present
    const trimmedUsername = username.trim();
    const replacedUsername = trimmedUsername.replace(/^@*\s*/g, "");
    setUsername(replacedUsername);

    if (/^\S+$/.test(username)) {
      setError(false);
      validInputField();
    } else {
      setError(true);
      invalidInputField();
    }
  };

  const isValid = () => {
    if (error) return false;
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isValid()) {
      // Get instagram details from username
      setLoading(true);
      // save token for current request
      cancelTokenRef.current = CancelToken.source();
      await axios({
        method: "GET",
        url: REACT_APP_INSTAGRAM_API_URL,
        params: { username },
        headers: {
          "x-rapidapi-host": REACT_APP_INSTAGRAM_API_HOST,
          "x-rapidapi-key": REACT_APP_INSTAGRAM_API_KEY,
        },
        cancelToken: cancelTokenRef.current.token,
      })
        .then((response) => {
          const data = response.data;
          getDataBlob(data);
          const url = history.location.pathname;
          history.push(url + `/profile/${data.username}`);
        })
        .catch(function (error) {
          if (axios.isCancel(error)) {
            setLoading(false);
          } else {
            setLoading(false);
          }
        });
      return;
    }
    // show errors
    invalidInputField();
  };

  let renderedContent = (
    <div className="w-full">
      <HeaderLogo />
      <div className="w-10/12 text-xl text-black mx-auto mt-14">
        <form className=" w-full " onSubmit={handleSubmit}>
          <div className=" w-full  ">
            <div className=" inline-block w-3/4 align-top">
              <label htmlFor="username" className="w-full mt-2.5 ">
                Instagram username
              </label>
              <input
                className=" w-full p-1 mt-2.5 rounded-md  text-base bg-white text-2e border border-solid border-greyish focus:borderHover outline-none"
                id="username"
                name="username"
                type="text"
                ref={usernameRef}
                onKeyPress={(e) => e.key === "Enter" && e.preventDefault()}
                onChange={inputFieldChangeHandler}
                onBlur={inputValidityHandler}
                value={username}
              ></input>
            </div>
            <span className=" inline-block align-top italic text-greyish text-base ">
              (Required)
            </span>
          </div>
          <p ref={usernameNoteRef} className="text-sm mt-1 text-greyish ">
            Begin without '@' symbol
          </p>
          <div className="mt-4">
            <div className=" inline-block w-3/4 align-top">
              <label className="mt-2.5 ">Gender</label>
              <div className="ml-6 ">
                <div className=" inline-block  align-top ml-4">
                  <label className="mt-1 text-lg" htmlFor="male">
                    <input
                      className=" mr-2 "
                      id="male"
                      type="radio"
                      name="gender"
                      value="male"
                      onChange={radioChangeHandler}
                    ></input>
                    Male
                  </label>
                </div>
                <div className=" inline-block  align-top ml-4">
                  <label className=" mt-1 text-lg " htmlFor="female">
                    <input
                      className=" mr-2"
                      id="female"
                      type="radio"
                      name="gender"
                      value="female"
                      checked
                      onChange={radioChangeHandler}
                    ></input>
                    Female
                  </label>
                </div>
              </div>
            </div>
            <span className="inline-block align-top italic text-greyish text-base ">
              (Required)
            </span>
          </div>
          <div className="w-full flex items-center justify-between ">
            <div>
              <Button
                cancel={() => history.goBack()}
                value="Back"
                classValues="bg-70 border border-solid border-greyish text-white px-5 py-2 rounded-md mt-5 mb-2.5 hover:bg-81 hover:text-f8 "
              />
            </div>
            <div>
              <Button
                value="Submit"
                buttonType="submit"
                classValues="bg-de border border-solid border-greyish text-white px-5 py-2 rounded-md mt-5 mb-2.5  hover:bg-f8"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
  // Fetch profile information
  if (loading) {
    renderedContent = (
      <div>
        <HeaderLogo />
        <InstagramCheck
          cancelOperation={() => {
            cancelTokenRef.current.cancel();
          }}
        />
      </div>
    );
  }
  // show profile info when available
  if (Object.keys(profileInfo).length > 0) {
    renderedContent = <InstagramProfile profileInfo={profileInfo} />;
  }
  return renderedContent;
};

export default RegisterForm;
