import React, { useState, useEffect } from 'react';


const ReviewIndex = (props) => {

    const [Reviews, setReviews] = useState()

    const getReviews = async () => {
        try {
            const response = await fetch("api/api/v1/reviews")
            if (!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`
                const error = new Error(errorMessage)
                throw error
            }
            const body = await response.json()
            setReviews(body.reviews)
        } catch (error) {
            console.error(`Error in fetch: ${error.message}`)
        }
    }
    
    useEffect (() => {
        getReviews()
    }, [])


    const reviewTiles = Reviews.map((review) => {
        return (
            <ReviewTile
                key={review.id}
                id={review.id}
                title={review.title}
                content={review.content}
                cookbook={review.cookbook}
                user={review.user}
            />
        
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