import { Router } from "express";
export const router: any = Router();

//Import Controllers
import {
  addItem,
  deleteItem,
  showAll,
  updateItem,
} from "../controllers/vendorController";
import {
  OrderHistory,
  OrderPlace,
  viewList,
  viewOne,
} from "../controllers/CustomerController";

import { productAddValidation } from "../middlewares/validation/productValidation";
import { productUpdateValidation } from "../middlewares/validation/productValidation";
import { isAdmin, isCustomer, isUserValid, isVendor } from "../auth/auth";
import { usersData } from "../controllers/usersController";
import { addUser } from "../services/usersServices";
import { viewUsers } from "../controllers/adminController";

//Import Validation

router.post(
  "/vendor/product/add",
  isUserValid,
  isVendor,
  productAddValidation,
  addItem
);

router.put(
  "/vendor/product/update/:id",
  isUserValid,
  isVendor,
  productUpdateValidation,
  updateItem
);

router.get("/vendor/product/showall", isUserValid, showAll);

router.delete("/vendor/product/delete/:id", isUserValid, deleteItem);

router.get("/customer/product/viewlist", viewList);

router.get("/customer/product/viewOne", viewOne);

router.get(
  "/customer/product/placeorder/:id",
  isUserValid,
  isCustomer,
  OrderPlace
);

router.get(
  "/customer/product/orderhistory",
  isUserValid,
  isCustomer,
  OrderHistory
);

router.get("/user/userdetails", isUserValid, usersData);

router.post("/user/adduser", isUserValid, isAdmin, addUser);

router.get("/admin/viewusers", isUserValid, isAdmin, viewUsers);
