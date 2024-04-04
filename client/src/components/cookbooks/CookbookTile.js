import React from "react";
import { Link } from "react-router-dom";

const CookbookTile = ({id, title, author, description, className}) => {
    console.log(className) 
    const CookbookPath = `/cookbooks/${id}`
    return (
        <Link to={CookbookPath}>
            <div>
                <h2>{title}</h2>
                <h3>{author}</h3>
                <p>{description}</p>
            </div>
        </Link>
    )
}

export default CookbookTile