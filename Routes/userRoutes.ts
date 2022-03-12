import express, { Router } from 'express';

const router:any = express.Router();


import { Request, Response, NextFunction, json } from 'express';
import { addItem, deleteItem, showAll, updateItem } from '../Controllers/vendorController';
import { OrderHistory, OrderPlace, viewList,  viewOne } from '../Controllers/CustomerController';





router.post("/vendor/AddItem",addItem);

router.put("/vendor/UpdateItem",updateItem);

router.get("/vendor/ShowAll",showAll);

router.delete("/vendor/delete/:id",deleteItem);//status

router.get("/customer/ViewList",viewList);

router.delete("/customer/viewone/:id",viewOne);

router.post("/customer/placeOrder/:id",OrderPlace);
 
router.get("/customer/orderHistory" , OrderHistory);

module.exports = router;

