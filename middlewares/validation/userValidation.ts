import { body, param } from "express-validator";

export const addUserValidation: any[] = [
  body("username")
    .notEmpty()
    .withMessage("Username Must be Provided")
    .isLength({ min: 6 })
    .withMessage("Username Must be 6 character Long"),
  body("role")
    .custom((data) => {
      if (data === "vendor" || data === "customer" || data === "admin") {
        return true;
      }
      return false;
    })
    .withMessage("Role is Not Valid"),
];
