import React, { useState, useEffect } from "react";


const CategoryShowPage = (props) => {
    const [category, setCategory] = useState({})
    

    const categoryId = props.match.params.id

    useEffect(() => {
        const fetchCategory = async () => {
          try {
            const response = await fetch(`/api/v1/categories/${categoryId}`);
            if (!response.ok) {
              throw new Error("Failed to fetch category");
            }
            const categoryData = await response.json();
            setCategory(categoryData.category);
          } catch (error) {
            console.error("Error fetching category:", error);
          }
        }

        fetchCategory()
    }, [])

    return(
        <div>
            <h1>{category.name}</h1>
            <p> this is the category show page</p>
        </div>
    )
}

export default CategoryShowPage;