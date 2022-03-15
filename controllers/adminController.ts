import * as adminServices from "../services/adminServices";
import { Request, Response, NextFunction } from "express";
import { RESPONSE_STATUS } from "../utils/constants";
import { validationResult } from "express-validator";

export let viewUsers: Function = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const users: unknown = await adminServices.viewUsers(req);
    res.status(RESPONSE_STATUS.SUCCESS).json({ users });
  } catch (error: any) {
    res.status(RESPONSE_STATUS.BAD_REQUEST).json({ error });
  }
};
