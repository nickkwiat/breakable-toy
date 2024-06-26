import React from "react";
import { Link } from "react-router-dom";

import SignOutButton from "../authentication/SignOutButton";

const TopBar = ({ user }) => {
  
  const userId = user?.id

  const unauthenticatedListItems = [
    <li className="topBarButton" key="sign-in">
      <Link to="/user-sessions/new">Sign In</Link>
    </li>,
    <li className="topBarButton" key="sign-up">
      <Link to="/users/new" className="button">
        Sign Up
      </Link>
    </li>
  ];

  const authenticatedListItems = [
    <li className="topBarButton">
        <Link to="/cookbooks/new" className="button">Add New Cookbook</Link>
      </li>,
    <li className="topBarButton" key="sign-out">
      <SignOutButton />
    </li>
  ];
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">Navigation</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to={`/reviews`}>All Reviews</Link>  
          </li>
          <li>
            <Link to={`/cookbooks`}>All Cookbooks</Link>  
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">{user ? authenticatedListItems : unauthenticatedListItems}</ul>
      </div>
    </div>
  );
};

export default TopBar;
