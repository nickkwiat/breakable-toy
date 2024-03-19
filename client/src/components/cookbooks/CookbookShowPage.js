import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CookBookShowPage = (props) => {
    const [cookbook, setCookbook] = useState({})
    

    const cookBookId = props.match.params.id

    useEffect(() => {
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

        fetchCookbook()
    }, [])

    return(
        <div>
            <h1>{cookbook.title}</h1>
            <h3> By {cookbook.author}</h3>
            <p>{cookbook.description}</p>
            <p> Published: {cookbook.publicationDate}</p>
            <Link to="/cookbooks">Back to Cookbooks</Link>
        </div>
    )
}

export default CookBookShowPage;