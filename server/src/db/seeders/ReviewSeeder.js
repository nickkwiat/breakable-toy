/* eslint-disable no-await-in-loop, no-restricted-syntax */
import {Review} from "../../models/index.js"

class ReviewSeeder {
    static async seed() {
        const reviewsData = [
            { 
                content: "",
                rating: "",
                cookbookId: "",
                userId: "",
                postTime: ""
            }

        ]

        for (const singleReviewsData of reviewsData) {
            const currentReview = await Review.query().findOne({ content: singleReviewsData.content })
            if (!currentReview) {
                await Review.query().insert(singleReviewsData)
            }
        }
    }
}
 export default ReviewSeeder