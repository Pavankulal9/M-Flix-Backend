import { Logger } from "@/services";
import { MiddlewareFunction } from "@/types/core.types";

export const loggerMiddleware : MiddlewareFunction = (req,res,next)=>{
    const {method,url} = req;
    const startTime = new Date().getTime();

    res.on('finish',()=>{
        const duration = new Date().getTime() - startTime;
        const {statusCode} = res;
        Logger.http(`${method} ${url} ${statusCode} ${duration}ms`);
    });

    next();
}

