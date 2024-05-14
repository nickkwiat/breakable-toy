import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CookbookReviewTile from "./cookbookReviewTile";

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

    console.log(cookbook)
    console.log(cookbook.reviews)

    const noReviews = <p>Be the first to review this cookbook</p>

    const cookbookReviewTiles = cookbook.reviews?.map((reviewObject) => {
      const {id, title, content, user, cookbookId} = reviewObject
      console.log("reviewObject.user", reviewObject.user)
      return(
        <CookbookReviewTile key={id} id={id} title={title} content={content} userName={user?.username} cookbookId={cookbookId} />
      )
    })

    return(
      <div>
      <h1>{cookbook.title}</h1>
      <h3> By {cookbook.author}</h3>
      <p>{cookbook.description}</p>
      <p>Category: {categoryName}</p>
      <div>
        {cookbookReviewTiles && cookbookReviewTiles.length > 0 ? cookbookReviewTiles : noReviews}
      </div>
      <div>
        <ul>
          <li><Link to="/">Back to Cookbooks</Link></li>
          <li><Link to={`/cookbooks/${cookbook.id}/reviews/new`}>Add a Review</Link></li>
        </ul>
      </div>
      </div>
    )
}

export default CookBookShowPage;