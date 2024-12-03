import { AppConfig } from "@/config";
import { Logger } from "@/services";
import { ErrorMiddlewareFunction } from "@/types/core.types";
import { AppError } from "@/utils";
import { StatusCodes } from "http-status-codes";

export const errorMiddleware : ErrorMiddlewareFunction = (error,req,res,next)=>{
    Logger.error(error.message);

    if(error instanceof AppError){
        return res
        .status(error.statusCode)
        .json(error.getErrorData(AppConfig.App.IS_DEVELOPMENT));
    }

    res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json(
        new AppError(
           StatusCodes.INTERNAL_SERVER_ERROR,
           AppConfig.App.IS_DEVELOPMENT? error.message : 'Something went wrong'
        ).getErrorData(AppConfig.App.IS_DEVELOPMENT)
    )
}

