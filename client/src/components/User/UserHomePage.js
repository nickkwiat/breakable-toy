
import React,{ useState, useEffect } from "react";

const UserHomePage = ({user}) => {
 


    return (
        <div>
            <h1>Welcome {user.username}</h1>
            <h3>Reviews</h3>
            <h3>Comments</h3>
        </div>
    )
}

export default UserHomePage;