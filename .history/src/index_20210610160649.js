
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "bootstrap/scss/bootstrap.scss";
import "react-fontawesome";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";
import "assets/css/filter.css?v=1.3.0";
// pages
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import Catalog from "Coaches/views/Catalog";
import Coach from "Coaches/views/Coach";
import Login from "Authentification/Login";
import SignUp from "Authentification/SignUp";
import App from "App";

import Profile from "Clients/Profile";
import ProfileCoach from "src/Coaches/views/ProfileCoach.js";
import RegisterPage from "Authentification/RegisterPage";
import Test from "Programs/views/test";
import ProgramForm from "Programs/views/ProgramForm.js";



// others

ReactDOM.render(
  
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={(props) => <Index {...props} />} />
      <Route path="/app" render={(props) => <App {...props} />} />

      <Route
        path="/nucleo-icons"
        render={(props) => <NucleoIcons {...props} />}
      />
      
      <Route
        path="/landing-page"
        render={(props) => <LandingPage {...props} />}
      />
      <Route
        path="/profile-page"
        render={(props) => <ProfilePage {...props} />}
      />
         <Route
        path="/register"
        render={(props) => <RegisterPage {...props} />}
      />
          <Route
        path="/Coaches"
        render={(props) => <Catalog {...props} />}
      />
       <Route
        path="/Coach/:id"
        render={(props) => <Coach {...props} />}
      />

      <Route
      path="/signup"
      render={(props) => <SignUp {...props} />}
    />
      <Route
        path="/login"
        render={(props) => <Login {...props} />}
      />

      <Route
        path="/client-profile"
        render={(props) => <Profile {...props} />}
      />

        <Route
        path="/coach-profile"
        render={(props) => <Profile {...props} />}
      />  

<Route
        path="/test"
        render={(props) => <Test {...props} />}
      />

<Route
        path="/program"
        render={(props) => <ProgramForm {...props} />}
      />
      <Redirect to="/signup" />

    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
