import React from "react"
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Dashboard from "./components/Dashboard"
import Login from "./components/Login"
import Signup from "./components/Signup"
import { AuthProvider } from "./Auth.js"
import PrivateRoute from "./PrivateRoute"

//adding in a test. 

function App() {
  return (
    <AuthProvider>
      <Route>
        <div>
          <PrivateRoute exact path="/" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </div>
      </Route>
    </AuthProvider>
  );
}

export default App;
