import * as customerServices from "../services/CustomerServices";
import { Request, Response, NextFunction } from "express";
import { RESPONSE_STATUS } from "../utils/constants";

export let viewList: Function = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const result = await customerServices.viewList(req);
    res.status(RESPONSE_STATUS.SUCCESS).json({ result });
  } catch (error: any) {
    res.status(RESPONSE_STATUS.SUCCESS).json({ error });
  }
};

export let viewOne: Function = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const result = await customerServices.viewOne(req);
    res.status(RESPONSE_STATUS.SUCCESS).json({ data: result });
  } catch (err: any) {
    res.status(RESPONSE_STATUS.BAD_REQUEST).json({ error: err });
  }
};
export let OrderPlace: Function = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const result = await customerServices.OrderPlace(req);
    res.status(RESPONSE_STATUS.SUCCESS).json({ result });
  } catch (error: any) {
    res.status(RESPONSE_STATUS.BAD_REQUEST).json({ error });
  }
};
export let OrderHistory: Function = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const result = await customerServices.OrderHistory(req);
    res.status(RESPONSE_STATUS.SUCCESS).json({ result });
  } catch (error: any) {
    res.status(RESPONSE_STATUS.BAD_REQUEST).json({ error });
  }
};
