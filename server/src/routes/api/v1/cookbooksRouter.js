import express from "express";
import {Cookbook } from "../../../models/index.js"
import objection from "objection"
const { ValidationError } = objection
import cookbooksReviewsRouter from "./cookbooksReviewsRouter.js"

const cookbooksRouter = new express.Router()

cookbooksRouter.use("/api/v1/cookbooks/:id/reviews", cookbooksReviewsRouter)

cookbooksRouter.get("/", async (req,res)=> {
    try {
        const cookbooks = await Cookbook.query()
        for(let cookbook of cookbooks) {
            cookbook.reviews = await cookbooks.$relatedQuery("reviews")
        }
        return res.status(200).json({ cookbooks: cookbooks})
    }catch(err) {
        return res.status(500).json({ errors:err})
    }
})

cookbooksRouter.get('/:id', async (req,res)=> {
    try {
        const cookbook = await Cookbook.query().findById(req.params.id)
        cookbook.reviews = await cookbook.$relatedQuery("reviews")
        for(let review of cookbook.reviews) {
            review.user = await review.$relatedQuery("user")
        }
        cookbook.category = await cookbook.$relatedQuery("category")
        return res.status(200).json({ cookbook: cookbook})
    }catch(err) {
        console.log(err)
        return res.status(500).json({ errors:err})
    }
})

cookbooksRouter.post("/", async (req, res) => {
    const { body } = req
    const { title, author, categoryId, description } = body
    console.log(body)
    
    try {
        const newCookbook = await Cookbook.query().insertAndFetch(body)
        return res.status(201).json({cookbook: newCookbook})
    }catch (error) {
        console.log(error)
    if (error instanceof ValidationError) {
      return res.status(422).json({ errors: error.data })
    }
    return res.status(500).json({ errors: error })
  }
})




export default cookbooksRouter