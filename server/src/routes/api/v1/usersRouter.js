import express from "express";
import { ValidationError } from "objection";

import { User } from "../../../models/index.js";

const usersRouter = new express.Router();

usersRouter.post("/", async (req, res) => {
  const { email, username, password } = req.body;
  try {
    const persistedUser = await User.query().insertAndFetch({ email,username, password });
    console.log("persistedUser: ", persistedUser)
    return req.login(persistedUser, () => {
      return res.status(201).json({ user: persistedUser });
    });
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(422).json({ errors: error.data });
    }
    return res.status(500).json({ error: error.message });
  }
});

usersRouter.get("/:id", async (req, res) => {
  try {
    const user = await User.query().findById(req.params.id)
    user.reviews = await user.$relatedQuery("reviews")
    for(let reviews of user.reviews) {
      reviews.cookbook = await reviews.$relatedQuery("cookbook")
    }
    return res.status(200).json({ user:user})
  } catch (err) {
    console.log(err)
    return res.status(500).json({ errors: err})
  }
});

export default usersRouter;
