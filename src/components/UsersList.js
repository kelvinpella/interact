import React, { Component } from "react";
import { firebaseApp } from "../firebase/firebaseApp";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import HeaderLogo from "./HeaderLogo";

// create a firestore database reference
const db = getFirestore(firebaseApp);

// create reference to users collection
const usersRef = collection(db, "users");

class UsersList extends Component {
  state = {
    users: [],
    loading: false,
    showNote: true,
    loader: 1,
  };
  loadUsers = async () => {
    let usersArr = [];
    this.setState({ loading: true });
    //get gender from url params
    const gender = this.props.match.params.id;

    // Create a query against the collection.
    const q = query(usersRef, where("gender", "==", gender));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // doc.data() is object and doc.id is username
      //   console.log(doc.id, " => ", doc.data());
      const user = doc.data();
      const usersArrCopy = usersArr;
      usersArrCopy.push(user);
      usersArr = usersArrCopy;
    });
    // update state
    this.setState({ users: usersArr, loading: false });
  };
  componentDidMount() {
    this.loadUsers();
  }
  copyUsernameHandler = async (username) => {
    await navigator.clipboard.writeText(username);
    window.open(`https://www.instagram.com/${username}`);
  };

  render() {
    let { users, loading, loader } = this.state;
    let usersSlice = users.slice(0, loader * 9);
    let renderedContent;
    if (loading) {
      renderedContent = (
        <div className="w-full animate-pulse px-1.5 py-6  grid  grid-cols-3 items-center justify-center gap-x-1 gap-y-6">
          <div className="m-auto">
            <div className="rounded-full  bg-gray-200 h-12 w-12"></div>
            <div className="w-full h-4 bg-gray-200 rounded  my-1.5 "></div>
            <div className="w-full h-4 bg-gray-200 rounded  my-1.5 "></div>
          </div>
          <div className="m-auto">
            <div className="rounded-full  bg-gray-200 h-12 w-12"></div>
            <div className="w-full h-4 bg-gray-200 rounded  my-1.5 "></div>
            <div className="w-full h-4 bg-gray-200 rounded  my-1.5 "></div>
          </div>
          <div className="m-auto">
            <div className="rounded-full  bg-gray-200 h-12 w-12"></div>
            <div className="w-full h-4 bg-gray-200 rounded  my-1.5 "></div>
            <div className="w-full h-4 bg-gray-200 rounded  my-1.5 "></div>
          </div>
          <div className="m-auto">
            <div className="rounded-full  bg-gray-200 h-12 w-12"></div>
            <div className="w-full h-4 bg-gray-200 rounded  my-1.5 "></div>
            <div className="w-full h-4 bg-gray-200 rounded  my-1.5 "></div>
          </div>
          <div className="m-auto">
            <div className="rounded-full  bg-gray-200 h-12 w-12"></div>
            <div className="w-full h-4 bg-gray-200 rounded  my-1.5 "></div>
            <div className="w-full h-4 bg-gray-200 rounded  my-1.5 "></div>
          </div>
          <div className="m-auto">
            <div className="rounded-full  bg-gray-200 h-12 w-12"></div>
            <div className="w-full h-4 bg-gray-200 rounded  my-1.5 "></div>
            <div className="w-full h-4 bg-gray-200 rounded  my-1.5 "></div>
          </div>
        </div>
      );
    }
    if (!loading && users.length === 0) {
      renderedContent = (
        <div className="w-11/12 mt-2 mx-auto text-black">No users found!</div>
      );
    }
    if (!loading && users.length > 0) {
      renderedContent = (
        <div className="text-center">
          {this.state.showNote && (
            <div className="w-11/12 mt-2 mx-auto text-black text-xs bg-blue-100  ">
              Click 'Chat' to copy username and visit profile.{" "}
              <span
                onClick={() => this.setState({ showNote: false })}
                className="float-right  text-red-600 mr-1.5"
              >
                Close
              </span>
            </div>
          )}
          <div className="w-full px-1.5 py-6 text-sm grid  grid-cols-3 items-center justify-center gap-x-1 gap-y-6">
            {usersSlice.map((user) => (
              <div key={user.username}>
                <div>
                  <img
                    src={user.photo}
                    alt={user.username}
                    className="rounded-full"
                  />
                </div>
                <h2 className="w-full my-1.5 overflow-ellipsis overflow-hidden  text-black">
                  {user.username}
                </h2>
                <button
                  onClick={() => this.copyUsernameHandler(user.username)}
                  className="text-base text-fc rounded-full py-1.5 px-6  bg-de border border-solid border-greyish hover:bg-f8"
                >
                  Chat
                </button>
              </div>
            ))}
          </div>
          {!loading && users.length > usersSlice.length && (
            <input
              className=" mx-auto mb-2 text-sm py-1 px-2 text-greyish  bg-whitish  border border-solid border-greyish rounded-md hover:bg-d8 hover:text-33 "
              type="button"
              value="Load more"
              onClick={() => this.setState({ loader: (loader += 1) })}
            ></input>
          )}
        </div>
      );
    }
    return (
      <div className="w-full text-center">
        <HeaderLogo />
        {renderedContent}
      </div>
    );
  }
}

export default UsersList;
