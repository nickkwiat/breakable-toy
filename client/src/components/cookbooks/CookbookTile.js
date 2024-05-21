import React from "react";

const CookbookTile = ({id, title, author, description}) => {
    const urlImage = "https://images.unsplash.com/photo-1621944190310-e3cca1564bd7?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const CookbookPath = `/cookbooks/${id}`
    return (
        <a href={CookbookPath} >
            <div className="tile cookbookTile" style={{ backgroundImage: `url(${urlImage})`, backgroundPosition: 'center', backgroundSize: 'contain' }}>
            {/* <div className="tile cookbookTile"> */}
                <h3 className="bookTitle">{title}</h3>
                <p className="bookAuthor">{author}</p>
                <p className="bookDescription">{description}</p>
            </div>
        </a>
    )
}

export default CookbookTile