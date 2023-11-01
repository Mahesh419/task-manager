import { Router } from "express";

import {
  loginController,
  registerController,
} from "../controllers/authController";

const router = Router();

router.post("/signin", loginController);
router.post("/signup", registerController);

export default router;
