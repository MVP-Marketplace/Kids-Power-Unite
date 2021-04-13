import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import "./components/style.scss"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Home from "./components/Home";
import Signup from "./components/Signup";
import ProfessionalsForm from "./components/ProfessionalsForm";
import { AuthProvider } from "./Auth.js";
import PrivateRoute from "./PrivateRoute";
import MyNavbar from "./components/Navbar";
import MyFooter from "./components/MyFooter";
import ReferChild from "./components/ReferChild";
import Home from "../src/components/Home";
import referChildForm from "./components/ReferChildForm";

//adding in a test.

function App() {
  return (
    <AuthProvider>
      <Route>
        <div>
          <MyNavbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route
            exact
            path="/professionalsform"
            component={ProfessionalsForm}
          />
          <Route exact path="/referchild" component={ReferChild} />
          <Route exact path="/referchildform" component={referChildForm} />
          <MyFooter />
        </div>
      </Route>
    </AuthProvider>
  );
}

export default App;
