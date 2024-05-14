import React from "react";

const CookbookReviewTile = ({id, title, content, userName}) => {
    return (
        <div>
            <h4>{title}</h4>
            <h5>Posted by: {userName}</h5>
            <p>{content}</p>
        </div>
    )
}

export default CookbookReviewTile;