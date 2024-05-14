
import React,{ useState, useEffect } from "react";

const UserHomePage = ({user}) => {
 
const [userReviews, setUserReviews] = useState([])

// const getUserReviews = async () => {
//     try{
//         const response = await ("apr/v1/")
//     }
// }

    return (
        <div>
            <h1>Welcome {user.username}</h1>
            <h3>Reviews</h3>
            {/* <h3>Comments</h3> */}
        </div>
    )
}

export default UserHomePage;