import express from "express";
import {Category, Cookbook} from "../../../models/index.js"
import objection from "objection"
const { ValidationError } = objection

const cookbooksRouter = new express.Router()

cookbooksRouter.get("/", async (req,res)=> {
    try {
        const categories = await Category.query()
        const cookbooks = await Cookbook.query()
        console.log("categories", categories)
        return res.status(200).json({ cookbooks: cookbooks})
    }catch(err) {
        return res.status(500).json({ errors:err})
    }
})

cookbooksRouter.get('/:id', async (req,res)=> {
    try {
        const cookbook = await Cookbook.query().findById(req.params.id)
        return res.status(200).json({ cookbook: cookbook})
    }catch(err) {
        console.log(err)
        return res.status(500).json({ errors:err})
    }
})

cookbooksRouter.post("/", async (req, res) => {
    const { body } = req
    const { title, author, categoryId, description, publicationDate } = body
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