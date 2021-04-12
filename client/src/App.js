import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProfessionalsForm from "./components/ProfessionalsForm";
import { AuthProvider } from "./Auth.js";
import PrivateRoute from "./PrivateRoute";
import MyNavbar from "./components/Navbar";
import MyFooter from "./components/MyFooter";
import ReferChild from "./components/ReferChild";

//adding in a test.

function App() {
  return (
    <AuthProvider>
      <Route>
        <div>
          <MyNavbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/Dashboard" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route
            exact
            path="/professionalsform"
            component={ProfessionalsForm}
          />
          <Route exact path="/referchild" component={ReferChild} />
          <MyFooter />
        </div>
      </Route>
    </AuthProvider>
  );
}

export default App;
