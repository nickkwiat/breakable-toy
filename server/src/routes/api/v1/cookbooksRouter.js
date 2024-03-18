import express from "express";
import {Cookbook} from "../../../models/index.js"
import objection from "objection"
const { ValidationError } = objection

const cookbooksRouter = new express.Router()

cookbooksRouter.get("/", async (req,res)=> {
    try {
        const cookbooks = await Cookbook.query()
        return res.status(200).json({ cookbooks: cookbooks})
    }catch(err) {
        return res.status(500).json({ errors:err})
    }
})

cookbooksRouter.post("/", async (req, res) => {
    const { body } = req
    const { title, author, description, publicationDate } = body

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