import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CookbookReviewTile from "./CookbookReviewTile.js";

const CookBookShowPage = (props) => {
    const [cookbook, setCookbook] = useState({})
  
    const cookBookId = props.match.params.id

    useEffect(() => {
      fetchCookbook()
    }, [])
    
    const fetchCookbook = async () => {
      try {
        const response = await fetch(`/api/v1/cookbooks/${cookBookId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch cookbook");
        }
        const cookbookData = await response.json();
        setCookbook(cookbookData.cookbook);
      } catch (error) {
        console.error("Error fetching cookbook:", error);
      }
    }

    const category = cookbook.category
    const categoryName = category ? category.name : "";

    const noReviews = <Link to={`/cookbooks/${cookbook.id}/reviews/new`}><p id="noReviews">Be the first to review this cookbook</p></Link>

    const cookbookReviewTiles = cookbook.reviews?.map((reviewObject) => {
      const {id, title, content, user, cookbookId} = reviewObject
      return(
        <CookbookReviewTile key={id} id={id} title={title} content={content} userName={user?.username} cookbookId={cookbookId} />
      )
    })

    return(
      <div className="showPageContainer">
        <div className="cookbookContents">
          <h2>{cookbook.title}</h2>
          <p> By {cookbook.author}</p>
          <p>{cookbook.description}</p>
          <div className="cookbookReviewContent">
            {cookbookReviewTiles && cookbookReviewTiles.length > 0 ? cookbookReviewTiles : noReviews}
          </div>
        </div>
        <div className="showPageNav">
          <ul>
            <li><Link to="/">Back to Categories</Link></li>
            <li><Link to={`/cookbooks/${cookbook.id}/reviews/new`}>Add a Review</Link></li>
            <li><Link to="/cookbooks">All Cookbooks</Link></li>
          </ul>
        </div>
      </div>
    )
}

export default CookBookShowPage;