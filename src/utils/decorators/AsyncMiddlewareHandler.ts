import { AsyncMiddlewareFunction } from "@/types/core.types";
import { NextFunction,Request,Response } from "express";

export function AsyncMiddlewareHandler<T, U extends AsyncMiddlewareFunction>(
    target: undefined,
    context: ClassFieldDecoratorContext<T, U>
){
 return function (asyncFunction: U){
    return async function (
        this: T,
        req: Request,
        res: Response,
        next: NextFunction
    ){
        try {
            await asyncFunction.apply(this, [req,res,next]);
        } catch (error) {
            next(error);
        }
    }
 }
}