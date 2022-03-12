import { Request, Response, NextFunction } from "express";
import { client1 } from "../database/connectDB";
import * as QUERY from "../utils/constants";
import { v4 as uuidv4 } from "uuid";

import * as productModel from "../model/productModel";
import * as orderModel from "../model/ordersModel";

export const viewList = async (req: Request): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await productModel.view(QUERY.VIEW_PRODUCTS);
      resolve(result);
    } catch (error: any) {
      return reject(error);
    }
  });
};

export const viewOne = async (req: Request): Promise<String | Object> => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await productModel.view(QUERY.VIEW_PRODUCT, req.params.id);
      if (result.length === 0) {
        reject("Product Not Found ...! Invalid Product ID");
      }
      resolve(result);
    } catch (error: any) {
      reject(error);
    }
  });
};

export const OrderPlace = async (req: Request): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    try {
      const productList: any[] = await productModel.view(
        QUERY.VIEW_PRODUCT,
        req.params.id
      );
      const product = productList[0];
      if (productList.length === 0) {
        reject(`Product with ID:${req.params.id} does not exists`);
      }
      if (product.quantity > 0) {
        const order_id = uuidv4();
        //Creating the Order
        const result = await orderModel.create(
          QUERY.INSERT_ORDER,
          order_id,
          req.headers.user_id,
          req.headers.username,
          req.params.id,
          product.product_name,
          product.price
        );
        //Reducing the total quantity by 1
        const updateData = await productModel.update(
          QUERY.UPDATE_PRODUCT_QTY,
          product.quantity - 1,
          req.params.id
        );
        const orderData: any[] = await orderModel.view(
          QUERY.VIEW_ORDER,
          order_id
        );

        if (result) {
          resolve({ order: orderData[0] });
        }
        reject("Oder Could Not be Placed");
      }
      reject(`${product.product_name} is out of Stock..!`);
    } catch (error: any) {
      reject(error);
    }
  });
};

export const OrderHistory = async (req: Request): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await orderModel.view(QUERY.VIEW_ORDERS);
      resolve(result);
    } catch (error: any) {
      return reject(error);
    }
  });
};
