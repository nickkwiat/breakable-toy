import express from "express";
import {Cookbook} from "../../../models/index.js"

const cookbooksRouter = new express.Router()

cookbooksRouter.get("/", async (req,res)=> {
    try {
        const cookbooks = await Cookbook.query()
        return res.status(200).json({ cookbooks: cookbooks})
    }catch(err) {
        return res.status(500).json({ errors:err})
    }
})

export default cookbooksRouter