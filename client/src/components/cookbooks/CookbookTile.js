import React from "react";

const CookbookTile = ({title, author, description, publicationDate}) => {

    return (
        <div>
            <h2>{title}</h2>
            <h3>{author}</h3>
            <p>{description}</p>
            <p>{publicationDate}</p>
        </div>

    )
}



export default CookbookTile