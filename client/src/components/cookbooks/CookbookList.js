import React, { useState, useEffect, useRef } from "react"
import CookbookTile from "./CookbookTile"

const CookbookList = ({ user }) => {

    
    // UI/ eventlistener  section
    const scrollContainerRef = useRef();
    
    const [scrollIntervalId, setScrollIntervalId] = useState(null)
    
    const scrollBack = () => {
        const scrollContainer = scrollContainerRef.current
        if (scrollContainer) {
            const id = setInterval(() => {
                scrollContainer.scrollBy({ left: -200, behavior: 'smooth' })
            }, 100)
            setScrollIntervalId(id)
        }
    }
    
    const scrollForward = () => {
        const scrollContainer = scrollContainerRef.current
        if (scrollContainer) {
            const id = setInterval(() => {
                scrollContainer.scrollBy({ left: 200, behavior: 'smooth' })
            }, 100)
            setScrollIntervalId(id)
        }
    }
    
    const stopScroll = () => {
        if (scrollIntervalId) {
            clearInterval(scrollIntervalId)
            setScrollIntervalId(null)
        }
    };
    // UI/ eventlistener end of section
    
    const [cookbooks, setCookbooks] = useState([])
    
    const getCookbooks = async () => {
        try {
            const response = await fetch("/api/v1/cookbooks")
            if (!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`
                const error = new Error(errorMessage)
                throw error
            }
            const body = await response.json()
            setCookbooks(body.cookbooks)
        } catch (error) {
            console.error(`Error in fetch: ${error.message}`)
        }
    }

    useEffect(() => {
        getCookbooks()
    }, [])
    
    const cookbookTiles = cookbooks.map(cookbookObject => {
        const { id, title, author, categoryId, description, publicationDate } = cookbookObject
        return <CookbookTile key={id} id={id} title={title} author={author} categoryId={categoryId} description={description} publicationDate={publicationDate} />
    })
    
    return (
        <div className="allCookbookContainer grid">
            {cookbookTiles}
        </div>
    )
}

export default CookbookList