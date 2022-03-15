import { Request, Response, NextFunction } from "express";
import { client1 } from "../database/connectDB";
import * as QUERY from "../utils/constants";
import * as userModel from "../model/userModel";
import { v4 as uuidv4 } from "uuid";
import { error } from "console";



export const addUser = async (req: Request): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    try {
      const id:string = uuidv4()
      const result:unknown = await userModel.create(QUERY.INSERT_USER, id,req.body.username,req.body.role);
      console.log(result);
      resolve(result);  
      
    } catch (error: any) { 
      return reject(error);
    }
  });
};



export const userData = async (req: Request): Promise<any> => {
    return new Promise(async (resolve, reject) => {
      try {
        const result:unknown = await userModel.view(QUERY.VIEW_USERS);
        resolve(result);
      } catch (error: any) {
        return reject(error);
      }
    });
  };