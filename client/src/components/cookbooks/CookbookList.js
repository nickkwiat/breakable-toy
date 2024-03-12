import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import CookbookTile from "./CookbookTile"

const CookbookList = () => {
    const [cookbooks, setCookbooks] = useState([])

    const getCookbooks = async () => {
        try{
            const response = await fetch("/api/v1/cookbooks")
            if(!response.ok){
            const errorMessage = `${response.status} (${response.statusText})`
            const error = new Error(errorMessage)
            throw error
            }
            const body = await response.json()
            setCookbooks(body.cookbooks)
        } catch(error){
            console.error(`Error in fetch: ${error.message}`)
        }
    } 

    useEffect(()=> {
        getCookbooks()
    }, [])

    const cookbookTiles = cookbooks.map(cookbookObject => {
        const { id, title, author, description, publicationDate } = cookbookObject
        return <CookbookTile key={id} title={title} author={author} description={description} publicationDate={publicationDate} />
      })

    return (
        <div>
            <h1>List of Cookbooks</h1>
            {cookbookTiles}
        </div>
    )
}

export default CookbookList