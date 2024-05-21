
import React,{ useState, useEffect } from "react";

import UserReviewTile from "./UserReviewTile";

const UserHomePage = ({user}) => {

    const {id, username} = user
 
    const [userReviews, setUserReviews] = useState([])

    const getUserReviews = async () => {

        try {
            const response = await fetch(`api/v1/users/${id}`)
            if (!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`
                const error = new Error(errorMessage)
                throw error
            }
            const body = await response.json()
            const user= body.user
            const reviews = user.reviews
            setUserReviews(reviews)
        } catch (error) {
            console.error(`Error in fetch: ${error.message}`)    
        }
    }
    useEffect(() => {
        getUserReviews()
    }, [])
    
    const userReviewTiles = userReviews?.map((review) => {
        const {id, title, content, cookbook} = review
        return <UserReviewTile key={id} id={id} title ={title} content={content} cookbook={cookbook}/>
    })

    const imgUrl = "https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png"

        return (
            <div style={{display: 'flex', flexDirection: 'column', width: '80vw', alignContent: 'center', justifyContent: 'center'}}>
                <h1>Welcome {username}</h1>
                <div className="aboutMeContainer" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                    <img src={imgUrl} />
                    <div className="aboutMe">
                        <h3>About Me</h3>
                        <p>My name is {username} and I love to cook! I have been cooking for 10 years and I have a passion for cooking healthy meals. I love to share my recipes with others and I am always looking for new recipes to try. I am excited to be a part of this community and I can't wait to share my recipes with you!</p>
                    </div>
                </div>
                <div className="userReviews" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h3> Reviews</h3>
                    <ul>
                        {userReviewTiles}
                    </ul>
                </div>
            </div>
        )
}

export default UserHomePage;