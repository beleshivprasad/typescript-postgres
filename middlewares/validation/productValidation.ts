import { body } from "express-validator";

export const productAddValidation: any[] = [
  body("product_name")
    .notEmpty()
    .withMessage("Product Name is Required")
    .isString()
    .withMessage("Invalid Product Name"),
  body("brand_name")
    .notEmpty()
    .withMessage("Branch Name is Required")
    .isString()
    .withMessage("Invalid Brand Name"),
  body("price")
    .notEmpty()
    .withMessage("Price  is Required")
    .custom((data: any) => {
      if (typeof data == "string") {
        return false;
      }
      return true;
    })
    .withMessage("Invalid Price "),
  body("quantity")
    .notEmpty()
    .withMessage("Quantity  is Required")
    .custom((data: any) => {
      if (typeof data == "string") {
        return false;
      }
      return true;
    })
    .withMessage("Invalid Quantity "),
  body("catogery")
    .notEmpty()
    .withMessage("Category Name is Required")
    .isString()
    .withMessage("Invalid Category Name"),
  body("sub_catogery")
    .notEmpty()
    .withMessage("Sub-Category Name is Required")
    .isString()
    .withMessage("Invalid Sub-Category Name"),
];
