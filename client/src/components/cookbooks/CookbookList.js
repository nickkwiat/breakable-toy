import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import CookbookTile from "./CookbookTile"


const CookbookList = ({user}) => {
    
    const unauthenticatedListItems = null

    const authenticatedListItems = [
        <Link to="/cookbooks/new" className="button">Add a Cookbook</Link>] 

    const [cookbooks, setCookbooks] = useState([])
    const[ displayClass, setDisplayClass ] = useState("defaultDisplay")


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
            getDisplayClass()
            console.log(cookbookTiles.length)
        } catch(error){
            console.error(`Error in fetch: ${error.message}`)
        }
    } 

    useEffect(()=> {
        getCookbooks()
    }, [])

    const getDisplayClass = () => {
        console.log(cookbookTiles.length)
        if (cookbookTiles.length === 1) {
            setDisplayClass("xOne")
        } else if (cookbookTiles.length === 2) {
            setDisplayClass("xTwo")
        } else if (cookbookTiles.length === 3) {
            setDisplayClass("xThree")
        } else { setDisplayClass("xFour") }
    }

    const cookbookTiles = cookbooks.map(cookbookObject => {
        const { id, title, author, description, publicationDate } = cookbookObject
        return <CookbookTile key={id} id={id} title={title} author={author} description={description} publicationDate={publicationDate} className={displayClass}/>
      })

    return (
        <div>
            <h1>List of Cookbooks</h1>
            {cookbookTiles}
            {user ? authenticatedListItems : unauthenticatedListItems}
        </div>
    )
}

export default CookbookList