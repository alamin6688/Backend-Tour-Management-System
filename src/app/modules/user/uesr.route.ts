import { Router } from "express";
import { UserControllers } from "./user.controller";
import { validateRequest } from "../../middlewares/validateRequest";
import { createUserZodSchema, updateUserZodSchema } from "./user.validation";
// import { NextFunction, Request, Response } from "express";
// import { JwtPayload } from "jsonwebtoken";
// import AppError from "../../errorHelpers/AppError";
import { Role } from "./user.interface";
import { checkAuth } from "../../middlewares/checkAuth";
// import { verifyToken } from "../../utils/jwt";
// import { envVars } from "../config/env";

const router = Router();

router.post(
  "/register",
  validateRequest(createUserZodSchema),
  UserControllers.createUser
);
router.get(
  "/all-users",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  UserControllers.getAllUsers
);
router.patch(
  "/:id",
  validateRequest(updateUserZodSchema),
  checkAuth(...Object.values(Role)),
  UserControllers.updateUser
);
// /api/v1/user/:id

export const UserRoutes = router;
