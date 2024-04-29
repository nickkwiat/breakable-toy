import React from "react";
import { Link } from "react-router-dom";

const CookbookTile = ({id, title, author, description}) => {
    const CookbookPath = `/cookbooks/${id}`
    console.log('Tile Path info', id, title, author, description)
    return (
        <a href={CookbookPath}>
            <div className="tile">
                <h3 className="bookTitle">{title}</h3>
                <p className="bookAuthor">{author}</p>
                <p className="bookDescription">{description}</p>
            </div>
        </a>
    )
}

export default CookbookTile