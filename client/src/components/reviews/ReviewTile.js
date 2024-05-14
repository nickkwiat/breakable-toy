import React from "react";

const ReviewTile = ({id, title, cookbookTitle, userName, content}) => {

    return (
        <div>
            <div>
            <h3>{cookbookTitle} : {title}</h3>
            </div>
            <div>
                <p>posted by: {userName} </p>
                <p>{content}</p>
            </div>
        </div>
    )
}

export default ReviewTile
