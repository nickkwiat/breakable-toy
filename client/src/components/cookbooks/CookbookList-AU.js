import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import CookbookTile from "./CookbookTile"



const CookbookListAU = ({user}) => {
    
    const unauthenticatedListItems = null

    const authenticatedListItems = [
        <Link to="/cookbooks/new" className="button">Add a Cookbook</Link>] 

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
        return <CookbookTile key={id} id={id} title={title} author={author} description={description} publicationDate={publicationDate}/>
      })
      console.log(cookbookTiles)
    return (
        <div>
            <h1>Cookbooks</h1>
            <div className="scrolling-wrapper">
                <img src="https://images.unsplash.com/photo-1597528662465-55ece5734101?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" id="scrollbar-background"/>
                <p className="categoryDisplayName">Savory Place Holder</p>
                {cookbookTiles}
            </div>
            
            {user ? authenticatedListItems : unauthenticatedListItems}
        </div>
    )
}

export default CookbookListAU