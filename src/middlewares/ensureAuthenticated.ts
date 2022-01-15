import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthenticate(request: Request, response: Response, next: NextFunction) {

  // Receber o token
  const authToken = request.headers.authorization

  // Validar se token está preenchido
  if (!authToken) {
    return response.status(401).end();
  }

  // Validar se token é valido
  const [, token] = authToken.split(" ")
  try {
    const { sub } = verify(token, "54d097a9a93f41119dcd76edcf08dc02") as IPayload;

    // Recuperar informações do usuário
    request.user_id = sub

    return next();
  }catch(err) {
    return response.status(401).end()
  }

}