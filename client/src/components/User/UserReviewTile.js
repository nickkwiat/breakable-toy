import React from "react";

const UserReviewTile =( {title, content, cookbook}) => {
    console.log("cookbook", cookbook)
    return (
        <li className="userReview">
            <h4>{cookbook.title}</h4>
            <h5>{title}</h5>
            <p>{content}</p>
        </li>
    )
}

export default UserReviewTile