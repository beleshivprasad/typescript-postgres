import * as vendorServices from "../services/vendorServices";
import { RESPONSE_STATUS } from "../utils/constants";
import { Result, ValidationError, validationResult } from "express-validator";
import { client1 } from "../database/connectDB";
import { Request, Response, NextFunction } from "express";

export let addItem: Function = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const errors: any = validationResult(req);

    if (errors.errors.length > 0) {
      res.status(RESPONSE_STATUS.BAD_REQUEST).json({ errors });
    } else {
    }
    const result = await vendorServices.addItem(req);
    if (result === true) {
      res.status(RESPONSE_STATUS.CREATED).json({ msg: "Added Successfully" });
    } else {
      res.status(RESPONSE_STATUS.BAD_REQUEST).json({ error: result });
    }
  } catch (err: any) {
    res.status(RESPONSE_STATUS.BAD_REQUEST).json({ err });
  }
};

export let updateItem: Function = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const result: boolean | String = await vendorServices.updateItem(req);
    res
      .status(RESPONSE_STATUS.SUCCESS)
      .json({ result: "Updated Successfully" });
  } catch (err: any) {
    res.status(RESPONSE_STATUS.BAD_REQUEST).json({ error: err });
  }
};

//Fetch All Products Details
export let showAll: Function = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const result = await vendorServices.showItem(req);
    res.json({ result });
  } catch (err: any) {}
};

export let deleteItem: Function = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const result = await vendorServices.deleteItem(req);
    res
      .status(RESPONSE_STATUS.SUCCESS)
      .json({ result: "Deleted Successfully" });
  } catch (err: any) {
    res.status(RESPONSE_STATUS.BAD_REQUEST).json({ error: err });
  }
};
