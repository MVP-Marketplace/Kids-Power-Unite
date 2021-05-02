import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProfessionalsForm from "./components/ProfessionalsForm";
import { AuthProvider } from "./Auth.js";
import PrivateRoute from "./PrivateRoute";
import Home from "./components/Home";
import MyNavbar from "./components/Navbar";
import MyFooter from "./components/MyFooter";
import ReferChild from "./components/ReferChild";
import DonatePage from "./components/DonatePage";
import ReferChildForm from "./components/ReferChildForm";


//adding in a test.

function App() {
  return (
    <AuthProvider>
      <Route>
        <div>
          <MyNavbar />
          <Route exact path="/" component={Home} />
          <PrivateRoute exact path="/Dashboard" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route
            exact
            path="/professionalsform"
            component={ProfessionalsForm}
          />
          <Route exact path="/referchild" component={ReferChild} />
          <Route exact path="/referchildform" component={ReferChildForm}/>
          <Route exact path="/donate" component={DonatePage}/>
          <MyFooter />
        </div>
      </Route>
    </AuthProvider>
  );
}

export default App;
