import React, { useState, useEffect, useRef } from "react"

import CategoryTile from "./CategoryTile"

const CategoriesIndex = (props) => {
    
    const [categories, setCategories] = useState([])

    const getCategories = async () => {
        try{
            const response = await fetch("/api/v1/categories")
            if(!response.ok){
            const errorMessage = `${response.status} (${response.statusText})`
            const error = new Error(errorMessage)
            throw error
            }
            const body = await response.json()
            setCategories(body.categories)
        } catch(error){
            console.error(`Error in fetch: ${error.message}`)
        }
    }

    useEffect(()=> {
        getCategories()
    }, [])

    const categoryTiles = categories.map((categoryObject) => {
        const { id, name, cookbooks } = categoryObject;
        if (cookbooks.length === 0) {return null}
        return <CategoryTile key={id} id={id} name={name} cookbooks={cookbooks}/>
    })

    return (
        <div>
            <h1>Categories</h1>
            {categoryTiles}
        </div>
    )
}



export default CategoriesIndex