import React from "react";

const CategoryCookbookTile = ({id, title, author, description}) => {
    const CookbookPath = `/cookbooks/${id}`

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

export default CategoryCookbookTile