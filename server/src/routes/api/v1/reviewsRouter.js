import e from "express";
import express from "express";

const reviewsRouter = new express.Router()

reviewsRouter.get("/", async (req,res)=> {
    try {
        const reviews = await Review.query()
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

export default reviewsRouter