import express from "express";
import {Category} from "../../../models/index.js"

const categoriesRouter = new express.Router()

categoriesRouter.get("/", async (req,res)=> {
    try {
        const categories = await Category.query()
        for (let category of categories) {
            category.cookbooks = await category.$relatedQuery("cookbooks")
        }
        return res.status(200).json({ categories: categories})
    }catch(err) {
        return res.status(500).json({ errors:err})
    }
})

categoriesRouter.get('/:id', async (req,res)=> {
    try {
        const category = await Category.query().findById(req.params.id)
        category.cookbooks = await category.$relatedQuery("cookbooks")
        return res.status(200).json({ category: category})
    }catch(err) {
        console.log(err)
        return res.status(500).json({errors:err})
    }
})

export default categoriesRouter


