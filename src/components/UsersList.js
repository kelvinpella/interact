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
  };
  loadUsers = async () => {
    let usersArr = [];
    this.setState({ loading: true });
    //get gender from url params
    const gender = this.props.match.params.id;
    console.log(gender);
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
  render() {
    const { users, loading } = this.state;
    let renderedContent;
    if (loading) {
      renderedContent = <div>Loading!</div>;
    }
    if (!loading && users.length === 0) {
      renderedContent = <div>No users found!</div>;
    }
    if (!loading && users.length > 0) {
      renderedContent = (
        <div className="w-full px-1.5 py-6 text-sm grid  grid-cols-3 items-center justify-center gap-x-1 gap-y-6">
          {users.map((user) => (
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
              <button className="text-base text-fc rounded-full py-1.5 px-6  bg-de border border-solid border-greyish hover:bg-f8">
                Chat
              </button>
            </div>
          ))}
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
