/* eslint-disable no-await-in-loop, no-restricted-syntax */
import {Comment} from "../../models/index.js"

class CommentSeeder {
    static async seed() {
        const commentData = [
            { 
                content: "",
                reviewID: "",
                userId: ""
            }
        ]

        for (const singleCommentData of commentData) {
            const currentComment = await Comment.query().findOne({ content: singleCommentData.content })
            if (!currentComment) {
                await Comment.query().insert(singleCommentData)
            }
        }
    }
}
 export default CommentSeeder

