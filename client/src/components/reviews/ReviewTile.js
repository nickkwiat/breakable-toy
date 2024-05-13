import React from "react";

const ReviewTile = ({id, title, cookbook, user, content}) => {

    return (
        <div>
            <div>
            <h1>{title}</h1>
            <p>{cookbook}</p>
            </div>
            <div>
                <p>posted by: {user} </p>
                <p>{content}</p>
          
            </div>
        </div>
    )
}

export default ReviewTile
