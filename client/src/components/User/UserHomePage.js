
import React,{ useState, useEffect } from "react";

const UserHomePage = ({user}) => {

    const {id, username} = user
 
    const [userReview, setUserReviews] = useState([])

    const getUserReviews = async () => {

        try {
            const response = await fetch(`api/v1/users/${id}`)
            if (!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`
                const error = new Error(errorMessage)
                throw error
            }
            const body = await response.json()
            console.log("body", body)
            const user= body.user
            const reviews = user.reviews
            console.log("reviews", reviews)
            setUserReviews(reviews)
            
        } catch (error) {
            console.error(`Error in fetch: ${error.message}`)    
        }
    }

    useEffect(() => {
        getUserReviews(0)
    }, [])
    


        return (
            <div>
                <h1>Welcome {username}</h1>
                <h3>My Reviews</h3>
                <ul>
                    <li> REVIEWS GO HERE</li>
                </ul>
            </div>
        )
}

export default UserHomePage;