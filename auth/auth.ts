import { Request, Response, NextFunction } from "express";
import { RESPONSE_STATUS } from "../utils/constants";

export const isCustomer: Function = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // console.log(req.headers.role);
  if (req.headers.role === "customer") {
    next();
  } else {
    res
      .status(RESPONSE_STATUS.UNAUTHORIZED)
      .json({ error: "Your Are Not Authorized to visit This " });
  }
};
export const isVendor: Function = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // console.log(req.headers.role);
  if (req.headers.role === "vendor") {
    next();
  } else {
    res
      .status(RESPONSE_STATUS.UNAUTHORIZED)
      .json({ error: "Your Are Not Authorized to visit This " });
  }
};
export const isUserValid: Function = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // console.log(req.headers.role);
  if (req.headers.role === "vendor" || req.headers.role === "customer") {
    next();
  } else {
    res
      .status(RESPONSE_STATUS.UNAUTHORIZED)
      .json({ error: "Your Are Not Authorized to visit This " });
  }
};
