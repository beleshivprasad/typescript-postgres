import { Request, Response, NextFunction } from "express";
import * as QUERY from "../utils/constants";
import * as User from "../model/userModel";

export const viewUsers = async (req: Request): Promise<String> => {
  return new Promise(async (resolve, reject) => {
    try {
      const result: string = await User.view(QUERY.VIEW_USERS);
      resolve(result);
    } catch (error: any) {
      reject(error);
    }
  });
};
