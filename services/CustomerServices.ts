import { Request, Response, NextFunction } from "express";
import { client1 } from "../database/connectDB";
import * as QUERY from "../utils/constants";
import { v4 as uuidv4 } from "uuid";

import * as productModel from "../model/productModel";
import * as orderModel from "../model/ordersModel";
import * as User from "../model/userModel";

export const viewList = async (req: Request): Promise<unknown> => {
  return new Promise(async (resolve, reject) => {
    try {
      const search = `%${req.query.search}%`;
      if (req.query.search !== undefined) {
        const result: unknown[] = await productModel.view(
          QUERY.VIEW_BY_SEARCH,
          search
        );
        if (result.length === 0) {
          resolve("Search Not Found");
        }
        resolve(result);
      } else {
        if (
          req.query.category === undefined &&
          req.query.sub_category === undefined
        ) {
          const result: unknown = await productModel.view(QUERY.VIEW_PRODUCTS);
          resolve(result);
        } else if (
          req.query.category !== undefined &&
          req.query.sub_category! == undefined
        ) {
          const result: unknown = await productModel.view(
            QUERY.VIEW_PRODUCT_CAT_SUBCAT,
            req.query.category,
            req.query.sub_category
          );
          resolve(result);
        } else if (req.query.category !== undefined) {
          const result: unknown = await productModel.view(
            QUERY.VIEW_PRODUCT_CAT,
            req.query.category
          );
          resolve(result);
        } else if (req.query.sub_category) {
          const result: unknown = await productModel.view(
            QUERY.VIEW_PRODUCT_SUBCAT,
            req.query.sub_category
          );
          resolve(result);
        } else {
          reject("Unknown Combination");
        }
      }
    } catch (error: any) {
      return reject(error);
    }
  });
};

export const viewOne = async (req: Request): Promise<String> => {
  return new Promise(async (resolve, reject) => {
    try {
      const search = `%${req.query.search}%`;

      const result: string = await productModel.view(
        QUERY.VIEW_BY_SEARCH,
        search
      );
      if (result.length === 0) {
        reject("Sorry Not Found Anything...Try Searching Other Things");
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
      const productList: any = await productModel.view(
        QUERY.VIEW_PRODUCT,
        req.params.id
      );
      if (productList.length === 0) {
        reject(`Product with ID:${req.params.id} does not exists`);
      }
      console.log(productList);
      const product: any = productList[0];
      if (product.quantity > 0) {
        const order_id: string = uuidv4();
        //Creating the Order
        const userData = await User.view(
          QUERY.VIEW_USER_BY_ID,
          req.headers.user_id
        );
        const result: any = await orderModel.create(
          QUERY.INSERT_ORDER,
          order_id,
          req.headers.user_id,
          userData[0].username,
          product.product_id,
          product.product_name,
          product.price
        );
        console.log(result);
        //Reducing the total quantity by 1
        const updateData: any = await productModel.update(
          QUERY.UPDATE_PRODUCT_QTY,
          product.quantity - 1,
          req.params.id
        );
        const orderData: any[] = await orderModel.view(
          QUERY.VIEW_ORDER,
          order_id
        );
        if (result) {
          // const order = {
          //   orderId: orderData[0].order_id,
          // };
          resolve(orderData[0]);
        }
        reject("Oder Could Not be Placed");
      }
      reject(`${product.product_name} is out of Stock..!`);
    } catch (error: any) {
      console.log(error);
      reject(error);
    }
  });
};

export const OrderHistory = async (req: Request): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    try {
      const result: string | object = await orderModel.view(QUERY.VIEW_ORDERS);
      resolve(result);
    } catch (error: any) {
      return reject(error);
    }
  });
};
