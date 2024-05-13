import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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

    const cookbookReviewTiles = cookbook.reviews?.map((reviewtile) => {
      return(
        <CookbookReviewTile />
      )
    })

    return(
      <div>
      <h1>{cookbook.title}</h1>
      <h3> By {cookbook.author}</h3>
      <p>{cookbook.description}</p>
      <p>Category: {categoryName}</p>
      <div>
        <ul>
          <li><Link to="/">Back to Cookbooks</Link></li>
          <li><Link to={`/cookbooks/${cookbook.id}/reviews/new`}>Add a Review</Link></li>
        </ul>
      </div>
      <div>
        {cookbookReviewTiles}
      </div>
  </div>
    )
}

export default CookBookShowPage;