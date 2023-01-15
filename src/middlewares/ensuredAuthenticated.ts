import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

import { UserRepository } from '../modules/accounts/repositories/implementations/UserRepository';

interface IPayload {
  sub: string,
  exp: number
}

export async function ensuredAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({ message: "Unauthorized" })
  }

  const [, token] = authHeader.split(' ');

  try {
    const { exp, sub: user_id } = verify(token, 'd6919312cac7020e8822b612223a3cc7') as IPayload;
    const userRepository = new UserRepository();
    const user = userRepository.findById(user_id)

    if (!user) {
      return response.status(404).json({ message: "User does noy exist" })
    }

    next();

  } catch {
    return response.status(401).json({ message: "Invalid Token" })
  }

}