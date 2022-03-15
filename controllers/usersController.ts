import * as userServices from "../services/usersServices";
import { Request, Response, NextFunction } from "express";
import { RESPONSE_STATUS } from "../utils/constants";
import { validationResult } from "express-validator";

export let addUser: Function = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const errors: any = validationResult(req);

    console.log(errors);
    if (errors.errors.length > 0) {
      res.status(RESPONSE_STATUS.BAD_REQUEST).json({ errors });
    } else {
      const result: unknown = await userServices.addUser(req);
      res.status(RESPONSE_STATUS.SUCCESS).json({ result });
    }
  } catch (error: any) {
    res.status(RESPONSE_STATUS.BAD_REQUEST).json({ error });
  }
};
export let usersData: Function = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const result: unknown = await userServices.userData(req);
    res.status(RESPONSE_STATUS.SUCCESS).json({ result });
  } catch (error: any) {
    res.status(RESPONSE_STATUS.BAD_REQUEST).json({ error });
  }
};
