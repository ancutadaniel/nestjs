import { Request, Response } from 'express';

export const logger = (req: Request, res: Response, next) => {
  console.log('Console log request from logger middleware function');
  next();
};
