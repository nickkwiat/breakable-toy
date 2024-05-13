import express from 'express';
import { Review } from '../../../models/index.js';

const cookbooksReviewRouter = new express.Router();

cookbooksReviewRouter.post("/:cookbookId", async (req, res) => {
    const { body } = req
    const { title, content } = body
    const { cookbookId } = req.params
    console.log(body)
    
    try {
        const newReview = await Review.query().insertAndFetch({ title, content, cookbookId })
        return res.status(201).json({review: newReview})
    }catch (error) {
        console.log(error)
        return res.status(500).json({ errors: error })
    }
})

export default cookbooksReviewRouter;