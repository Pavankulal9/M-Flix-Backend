import { IBaseResponse, IValidationError } from "@/types/core.types";
import { ErrorStatus } from "@/types/enum.types";

export class AppError extends Error implements IBaseResponse{
    public readonly statusCode:number;
    public readonly status:string;
    public readonly isValidationError:boolean = false;
    public readonly errors?:IValidationError[];

    constructor(
        statusCode:number,
        message: string,
        errors?: IValidationError[]
    ){
        super(message);

        this.statusCode = statusCode;
        this.status = String(statusCode).startsWith('4')
        ? ErrorStatus.Fail : ErrorStatus.Fail;
        this.isValidationError = Boolean(errors?.length);
        if(this.isValidationError){
            this.errors = errors;
        }

        Error.captureStackTrace(this, this.constructor);
    }

    getOptionalErrorDetails(){
        return {
            ...(this.isValidationError
                ? {isValidationError: this.isValidationError}
                : {}
            ),
            ...(this.errors
                ? {errors: this.errors}
                : {}
            )
        }
    }

    getErrorData(isDevelopment:boolean){
        if(isDevelopment){
            return {
               statusCode:this.statusCode,
               status: this.status,
               message: this.message,
               ...this.getOptionalErrorDetails(),
               stack: this.stack
            }
        }else{
            return{
               statusCode: this.statusCode,
               status: this.status,
               ...this.getOptionalErrorDetails(),
               message: this.message
            }
        }
    }

}