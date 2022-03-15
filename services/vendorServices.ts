import { Request, Response, NextFunction } from "express";
import { client1 } from "../database/connectDB";
import * as QUERY from "../utils/constants";
import * as productModel from "../model/productModel";
import { v4 as uuidv4 } from "uuid";

export const addItem = async (req: Request): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    try {
      const product_id: string = uuidv4();

      const found: any = await productModel.view(QUERY.PRODUCT_EXISTS,req.body.product_name,req.body.brand_name);

      if (found.length === 0) {
        const result: unknown = await productModel.create(
          QUERY.INSERT_PRODUCT,
          product_id,
          req.body.product_name,
          req.body.brand_name,
          req.body.price,
          req.body.quantity,
          req.body.catogery,
          req.body.sub_catogery,
          
        );
        resolve(result);
      }
      reject(`Product already Exists with name ${req.body.product_name} and brand ${req.body.brand_name}`);
    } catch (error: any) {
      reject(error);
    }
  });
};

export const updateItem = async (req: Request): Promise<boolean | String> => {
  return new Promise(async (resolve, reject) => {
    try {
      let pname: string = "";
      let pbrand: string = "";
      let price: number = 0;
      let qty: number = 0;
      let cat: string = "";
      let subcat: string = "";
      let product: object[] = await productModel.view(QUERY.VIEW_PRODUCT,req.params.id);

      if (product.length === 0) {
        reject(`Product with ID:${req.params.id} does not exists`);
      }
      const pd: any = product[0];
      if (req.body.product_name !== pd.product_name) {
        pname = req.body.product_name;
      } else {
        pname = pd.product_name;
      }
      if (req.body.brand_name !== pd.brand_name) {
        pbrand = req.body.brand_name;
      } else {
        pbrand = pd.brand_name;
      }
      if (req.body.price !== pd.price) {
        price = req.body.price;
      } else {
        price = pd.price;
      }
      if (req.body.quantity !== pd.quantity) {
        qty = req.body.quantity;
      } else {
        qty = pd.quantity;
      }
      if (req.body.catogery !== pd.catogery) {
        cat = req.body.catogery;
      } else {
        cat = pd.catogery;
      }
      if (req.body.sub_catogery !== pd.sub_catogery) {
        subcat = req.body.sub_catogery;
      } else {
        subcat = pd.sub_catogery;
      }

      const result: boolean | string = await productModel.update(QUERY.UPDATE_PRODUCT,
        pname,
        pbrand,
        price,
        qty,
        cat,
        subcat,
        req.params.id
      );
      resolve(result);
    } catch (error: any) {
      return reject(error);
    }
  });
};

export const showItem = async (req: Request): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    try {
      const result: any = await productModel.view(QUERY.VIEW_PRODUCT,req.params.id);
      resolve(result);
    } catch (error: any) {
      return reject(error);
    }
  });
};
  
export const showAll = async (req: any): Promise<void> => {
  return new Promise(async (resolve, reject) => {
    try {
      const result: any = await productModel.view(QUERY.VIEW_PRODUCTS);
      resolve(result);
    } catch (error: any) {
      return reject(error);
    }
  });
};

export const deleteItem = async (req: Request): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    try {
      const product: any = await productModel.view(QUERY.VIEW_PRODUCT,req.params.id);
      if (product.length === 0) {
        reject(`Product with ${req.params.id} doest not exists`);
      }
      const result = await productModel.remove(QUERY.DELETE_PRODUCT,req.params.id);
      resolve(result);
    } catch (error: any) {
      return reject(error);
    }
  });
};
