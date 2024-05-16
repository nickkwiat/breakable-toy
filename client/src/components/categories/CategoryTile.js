import React, { useState, useEffect, useRef } from "react"
import CategoryCookbookTile from "./CategoryCookbookTile";

const CategoryTile = ({id, name, cookbooks}) => {
    const categoryPath = `/categories/${id}`

    const categoryCookbookTiles = cookbooks.map((cookbookObject) => {
        const { id, title, author, categoryId, description, publicationDate } = cookbookObject
        return <CategoryCookbookTile key={id} id={id} title={title} author={author} categoryId={categoryId} description={description} publicationDate={publicationDate} />
    })

    let urlImage = null
    if( name ==='Sweet'){ urlImage = "https://images.unsplash.com/photo-1597528662465-55ece5734101?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} 
    if( name ==='Savory'){ urlImage = "https://images.unsplash.com/photo-1545216560-68430ad77342?q=80&w=2858&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} 
    if( name ==='Drinks'){ urlImage = "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=2757&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} 
    if( name ==='Miscellaneous'){ urlImage = "https://images.unsplash.com/photo-1513507544439-d2cd3d79b274?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNldCUyMHRhYmxlfGVufDB8fDB8fHww"} 

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
        
            <div className="masterContainer" style={{ backgroundImage: `url(${urlImage})`, backgroundPosition: 'center' }} >
                <a href={categoryPath}>
                    <p className="categoryDisplayName">{name}</p> 
                </a>
                <div className="scrolling_Bar-wrap"> 
                    <p><i className="arrow back" onMouseDown={scrollBack} onMouseUp={stopScroll} onMouseLeave={stopScroll}></i></p>
                    <div className="scrolling_Bar" ref={scrollContainerRef}>
                        {categoryCookbookTiles}
                    </div>
                <p><i className="arrow forward" onMouseDown={scrollForward} onMouseUp={stopScroll} onMouseLeave={stopScroll}></i></p>
                </div>
            </div>
        
    )
}

export default CategoryTile