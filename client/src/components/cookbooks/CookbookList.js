import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import CookbookTile from "./CookbookTile"


const CookbookList = props => {
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
            getDisplay(body.cookbooks.length);
        } catch(error){
            console.error(`Error in fetch: ${error.message}`)
        }
    }

    const [itemDisplay, setItemDisplay] = useState(null)

    const getDisplay = async () => {
        if(cookbooks.length === 1){
            setItemDisplay("oneItem")
    } else if(cookbooks.length === 2){
        setItemDisplay("twoItems")
    } else if(cookbooks.length === 3){
        setItemDisplay("threeItems")
    } else {setItemDisplay("fourItems")}
    
}

    useEffect(()=> {
        getCookbooks()
    }, [])


    const cookbookTiles = cookbooks.map(cookbookObject => {
        const { id, title, author, description, publicationDate } = cookbookObject
        return <CookbookTile key={id} id={id} title={title} author={author} description={description} publicationDate={publicationDate} />
      })

    return (
        <div>
            <div className="container">
                <h1 >Current Top Reads</h1>
            </div>
            <div className="container" id="cookbookContainer">
                {cookbookTiles}
            </div>
            <div id="button" className="container">
                <Link to="/cookbooks/new" >Add a Cookbook</Link>
            </div>
        </div>
    )
}

export default CookbookList
