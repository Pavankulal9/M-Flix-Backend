import { IBaseResponse } from "@/types/core.types";

export class AppResponse<T extends object | null> implements IBaseResponse{
    public readonly statusCode: number;
    public readonly status: string;
    public readonly message: string;
    public readonly data : T | null;


    constructor(
        statusCode:number,
        message: string,
        data: T | null = null
    ){
        this.statusCode = statusCode;
        this.status = 'success';
        this.message = message;
        this.data = data;
    }
}