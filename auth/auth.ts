import { Request, Response, NextFunction } from "express";
import { RESPONSE_STATUS } from "../utils/constants";
import * as User from "../model/userModel";
import * as QUERY from "../utils/constants";

export const isCustomer: Function = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await User.view(QUERY.VIEW_USER_BY_ID, req.headers.user_id);
  if (user.length > 0 && user[0]?.role === "customer") {
    next();
  } else {
    res
      .status(RESPONSE_STATUS.UNAUTHORIZED)
      .json({ error: "Your Are Not Authorized to visit This " });
  }
};

export const isVendor: Function = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await User.view(QUERY.VIEW_USER_BY_ID, req.headers.user_id);
  if (user.length > 0 && user[0]?.role === "vendor") {
    next();
  } else {
    res
      .status(RESPONSE_STATUS.UNAUTHORIZED)
      .json({ error: "Your Are Not Authorized to visit This " });
  }
};

export const isUserValid: Function = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.headers.user_id) {
    const userData = await User.view(
      QUERY.VIEW_USER_BY_ID,
      req.headers.user_id
    );
    if (userData.length === 0) {
      res
        .status(RESPONSE_STATUS.UNAUTHORIZED)
        .json({ error: "Invalid User ID " });
      return;
    }
    next();
  } else {
    res.status(RESPONSE_STATUS.UNAUTHORIZED).json({ error: "Not Authorized" });
  }
};

export const isAdmin: Function = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userData = await User.view(QUERY.VIEW_USER_BY_ID, req.headers.user_id);
  if (req.headers.user_id && userData[0]?.role === "admin") {
    next();
  } else {
    res
      .status(RESPONSE_STATUS.UNAUTHORIZED)
      .json({ error: "Your Are Not Authorized to visit This " });
  }
};
