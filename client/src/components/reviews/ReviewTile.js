import React from "react";

const ReviewTile = ({cookbookId, title, cookbookTitle, userName, content}) => {

    return (
            <div >
            <div className="tileContent reviewContent">
            <a href={`/cookbooks/${cookbookId}`}><h3>{cookbookTitle} : {title}</h3></a>
            </div>
            <div className="reviewContent">
                <p className="authorByUser">posted by: {userName} </p>
                <p>{content}</p>
            </div>
        </div>
    )
}

export default ReviewTile
 