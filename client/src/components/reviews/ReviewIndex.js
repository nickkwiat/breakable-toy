import React, { useState, useEffect } from 'react';
import ReviewTile from './ReviewTile';
import { Link } from 'react-router-dom';

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
            <ReviewTile key={id} id={id} title={title} content={content} userName={user?.username} cookbookTitle={cookbook.title} cookbookId={cookbook.id}/>
        )
    })
    return (
        <div className="reviewContainer">
            <h1 className="pageHead">Reviews</h1>
            {reviewTiles}
            <div className="showPageNav">
          <ul>
            <li><Link to="/">Categories</Link></li>
            <li><Link to="/cookbooks">All Cookbooks</Link></li>
          </ul>
        </div>
        </div>
    )
}

export default ReviewIndex;