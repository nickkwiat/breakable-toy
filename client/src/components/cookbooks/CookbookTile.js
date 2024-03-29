import React from "react";
import { Link } from "react-router-dom";

const CookbookTile = ({id, title, author, description}) => {
    const CookbookPath = `/cookbooks/${id}`
    return (
        <Link to={CookbookPath}>
            <div className="item">
                <h2>{title}</h2>
                <h4>{author}</h4>
                <p id="cookbookDescription">{description}</p>
            </div>
        </Link>
    )
}

export default CookbookTile