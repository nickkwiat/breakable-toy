import React, { useState, useEffect, useRef } from "react"
import CategoryCookbookTile from "./CategoryCookbookTile";

const CategoryTile = ({id, name, cookbooks}) => {
    const categoryPath = `/categories/${id}`
console.log(cookbooks)

    const categoryCookbookTiles = cookbooks.map((cookbookObject) => {
        const { id, title, author, categoryId, description, publicationDate } = cookbookObject
        return <CategoryCookbookTile key={id} id={id} title={title} author={author} categoryId={categoryId} description={description} publicationDate={publicationDate} />
    })

    let testUrlImage = "https://images.unsplash.com/photo-1597528662465-55ece5734101?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

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

    return (
        <a href={categoryPath}>
            <div className="masterContainer" style={{ backgroundImage: `url(${testUrlImage})` }} >
                <p className="categoryDisplayName">{name}</p> 
                <div className="scrolling_Bar-wrap"> 
                    <p><i className="arrow back" onMouseDown={scrollBack} onMouseUp={stopScroll} onMouseLeave={stopScroll}></i></p>
                    <div className="scrolling_Bar" ref={scrollContainerRef}>
                        {categoryCookbookTiles}
                    </div>
                <p><i className="arrow forward" onMouseDown={scrollForward} onMouseUp={stopScroll} onMouseLeave={stopScroll}></i></p>
                </div>
            </div>
        </a>
    )
}

export default CategoryTile