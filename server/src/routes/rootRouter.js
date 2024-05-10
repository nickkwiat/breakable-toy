import express from "express";

import userSessionsRouter from "./api/v1/userSessionsRouter.js";
import usersRouter from "./api/v1/usersRouter.js";
import categoriesRouter from "./api/v1/categoriesRouter.js";
import clientRouter from "./clientRouter.js";
import cookbooksRouter from "./api/v1/cookbooksRouter.js";

const rootRouter = new express.Router();

rootRouter.use("/", clientRouter);
rootRouter.use("/api/v1/categories", categoriesRouter);
rootRouter.use("/api/v1/cookbooks", cookbooksRouter)
rootRouter.use("/api/v1/user-sessions", userSessionsRouter);
rootRouter.use("/api/v1/users", usersRouter);

export default rootRouter;
