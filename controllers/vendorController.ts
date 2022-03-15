import * as vendorServices from "../services/vendorServices";
import { RESPONSE_STATUS } from "../utils/constants";
import { Result, ValidationError, validationResult } from "express-validator";
import { client1 } from "../database/connectDB";
import { Request, Response, NextFunction, response } from "express";
import { rejects } from "assert";

export let addItem: Function = async (req: Request, res: Response): Promise<any> => {
  try {
    const errors: any = validationResult(req);

    if (errors.errors.length > 0) {
      res.status(RESPONSE_STATUS.BAD_REQUEST).json({ errors });
    } else {
      const result:any= await vendorServices.addItem(req);

      res.status(RESPONSE_STATUS.CREATED).json({ msg: "Added Successfully" });

    }

  } catch (err: any) {
    res.status(RESPONSE_STATUS.BAD_REQUEST).json({ err });
  }
};

export let updateItem: Function = async (req: Request, res: Response): Promise<void> => {
  try {
    const errors: any = validationResult(req);

    if (errors.length > 0) {
      res.status(RESPONSE_STATUS.BAD_REQUEST).json({ errors });
    }
    else {
      const result: boolean | String = await vendorServices.updateItem(req);
      res.status(RESPONSE_STATUS.SUCCESS).json({ result: "Updated Successfully" });
    }
  } catch (err: any) {
    res.status(RESPONSE_STATUS.BAD_REQUEST).json({ error: err });
  }
};

//Fetch All Products Details
export let showAll: Function = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await vendorServices.showAll(req);
    console.log(result)
    res.status(RESPONSE_STATUS.SUCCESS).json({ result });

  } catch (err: any) {
    res.status(RESPONSE_STATUS.BAD_REQUEST).json({ error: err });
  }
};

export let deleteItem: Function = async (req: Request, res: Response): Promise<void> => {
  try {
    const result: any = await vendorServices.deleteItem(req);
    res.status(RESPONSE_STATUS.SUCCESS).json({ result: "Deleted Successfully" });
  } catch (err: any) {
    res.status(RESPONSE_STATUS.BAD_REQUEST).json({ error: err });
  }
};
