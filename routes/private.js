import { Router } from "express";

import { getPrivateRoute } from "../controllers/private.js";
import { protect } from "../middleware/auth.js";

const privateRouter = Router();

privateRouter.route("/").get(protect, getPrivateRoute);

export default privateRouter;
