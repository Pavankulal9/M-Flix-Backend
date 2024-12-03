import { NextFunction, Request, Response } from "express";

export interface IBaseResponse{
    readonly statusCode:number;
    readonly message: string;
    readonly status: string;
}

export interface IValidationError{
    path: string;
    message: string;
}

export interface IFetchParamAndQuery{
    id: string,
    category: string,
    page: number,
    movieName: string,
    genreId: string,
}

export type MiddlewareFunction = (
    req: Request,
    res: Response,
    next: NextFunction
)=> void;

export type ErrorMiddlewareFunction = (
  error: Error,
  ...args: Parameters<MiddlewareFunction>
) => void

export type AsyncMiddlewareFunction = (
    req: Request,
    res: Response,
    next: NextFunction,
)=> Promise<void>;