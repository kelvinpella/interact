import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import RegisterForm from "./components/RegisterForm";
import UsersList from "./components/UsersList";

function App() {
  return (
    <Router>
      <div className="w-full text-xl h-screen relative font-Roboto bg-white flex flex-col justify-between  ">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/users/:id" component={UsersList} />
          <Route path="/register" component={RegisterForm} />
        </Switch>
        <footer className=" w-full p-2.5 text-greyish text-center  text-xs bg-greyish  md:text-xl">
          <p className=" md:mb-7">
            &copy; {new Date().getFullYear()} Interact from Interphase
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
