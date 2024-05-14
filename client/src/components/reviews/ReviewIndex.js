import React, { useState, useEffect } from 'react';
import ReviewTile from './ReviewTile';

const ReviewIndex = (props) => {

    const [reviews, setReviews] = useState()

    const getReviews = async () => {
        try {
            const response = await fetch("/api/v1/reviews")
            if (!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`
                const error = new Error(errorMessage)
                throw error
            }
            const body = await response.json()
            console.log("REviews: ",body.reviews)
            setReviews(body.reviews)
        } catch (error) {
            console.error(`Error in fetch: ${error.message}`)
        }
    }
    
    useEffect (() => {
        getReviews()
    }, [])


    const reviewTiles = reviews?.map((reviewObject) => {
        const {id, title, content, user, cookbook} = reviewObject
        return (
            <ReviewTile key={id} id={id} title={title} content={content} userName={user?.username} cookbookTitle={cookbook.title} />
        
        )
    })
    return (
        <div>
            <h1>Reviews</h1>
            {reviewTiles}
        </div>
    )
}

export default ReviewIndex;