import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";

import "../assets/scss/main.scss";

import getCurrentUser from "../services/getCurrentUser";

import RegistrationForm from "./registration/RegistrationForm";
import SignInForm from "./authentication/SignInForm";
import TopBar from "./layout/TopBar";

import AuthenticatedRoute from "./authentication/AuthenticatedRoute";
import CookbookForm from "./cookbooks/CookbookForm";
import CookbookListAU from "./cookbooks/CookbookList-AU";
import CookbookList from "./cookbooks/CookbookList";
import CookBookShowPage from "./cookbooks/CookbookShowPage";
import UserHomePage from "./User/UserHomePage";


const App = (props) => {
  const [currentUser, setCurrentUser] = useState(undefined);
  const fetchCurrentUser = async () => {
    try {
      const user = await getCurrentUser();
      setCurrentUser(user);
    } catch (err) {
      setCurrentUser(null);
    }
  };
  useEffect(() => {
    fetchCurrentUser();
  }, []);
  
  return (
    <Router>
      <TopBar user={currentUser} />
      <Switch>
        <AuthenticatedRoute exact path="/profile" component={UserHomePage} user={currentUser} />
        <AuthenticatedRoute exact path="/cookbooks/new" component={CookbookForm} user={currentUser} />
        <AuthenticatedRoute exact path="/cookbooks" component={CookbookListAU} user={currentUser} />
        {/* <Route>
          <CookbookList exact path="/" component={CookbookList} user={currentUser}/>
        </Route> */}
        <Route exact path="/" component={CookbookList} user={currentUser} />
        <Route exact path="/cookbooks/:id" component={CookBookShowPage} />
        <Route exact path="/users/new" component={RegistrationForm} />
        <Route exact path="/user-sessions/new" component={SignInForm} />
      </Switch>
    </Router>
  );
};

export default hot(App);