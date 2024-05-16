import React from "react";

const CookbookReviewTile = ({id, title, content, userName}) => {
    return (
            <ul className="cookbookReviewContent">
                <li key={id}>
                    <h3>{title}</h3>
                    <h5>Posted by: {userName}</h5>
                    <p>{content}</p>
                </li>
            </ul>
    )
}

export default CookbookReviewTile;