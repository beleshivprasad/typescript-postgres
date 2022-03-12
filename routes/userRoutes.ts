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
import { isCustomer, isUserValid, isVendor } from "../auth/auth";

//Import Validation

router.post("/vendor/product/add", isVendor, productAddValidation, addItem);

router.put("/vendor/product/update/:id", isVendor, updateItem);

router.get("/vendor/product/showall", isVendor, showAll);

router.delete("/vendor/product/delete/:id", isVendor, deleteItem); //status

router.get("/customer/product/viewlist", isCustomer, viewList);

router.post("/customer/product/placeorder/:id", isCustomer, OrderPlace);

router.get("/customer/product/orderhistory", isUserValid, OrderHistory);

router.get("/customer/product/:id", isCustomer, viewOne);
