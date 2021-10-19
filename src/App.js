import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <Router>
      <div className="w-screen h-screen relative font-Roboto bg-white flex flex-col justify-between  ">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          {/* <Route path="/register" component={RegisterForm} />  */}
        </Switch>
        <footer className=" w-full p-2.5 text-greyish text-center  text-xs bg-greyish  ">
          <p>&copy; {new Date().getFullYear()} Interact from Interphase</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
