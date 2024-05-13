import express from "express";
import { Review } from "../../../models/index.js";

const reviewsRouter = new express.Router()

reviewsRouter.get("/", async (req,res)=> {
    try {
        const reviews = await Review.query()
        for(let review of reviews) {
            review.cookbook = await review.$relatedQuery("cookbooks")
            review.user = await review.$relatedQuery("users")
            console.log(review.cookbook)
        }
        return res.status(200).json({ reviews: reviews})
    }catch(err) {
        return res.status(500).json({ errors:err})
    }
})

reviewsRouter.get('/:id', async (req,res)=> {
    try {
        const review = await Review.query().findById(req.params.id)
        return res.status(200).json({ review: review})
    }catch(err) {
        console.log(err)
        return res.status(500).json({ errors:err})
    }
})

reviewsRouter.post("/", async (req, res) => {
    const { title, content, cookbookId, userId } = req.body
    console.log("req.body")
    console.log(req.body)
    try {
        const newReview = await Review.query().insertAndFetch({ title, content, cookbookId, userId })
        return res.status(201).json({review: newReview})
    }catch (error) {
        console.log(error)
        return res.status(500).json({ errors: error })
    }
})

export default reviewsRouter