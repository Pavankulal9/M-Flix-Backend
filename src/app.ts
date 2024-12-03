import express, { Application } from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import { StatusCodes } from "http-status-codes";
import { errorMiddleware, loggerMiddleware } from "@/api/middleware";
import { AppError } from "@/utils";
import { AppConfig } from "@/config";
import routerV1 from '@/api/routes/v1'

export default function createApplication(): Application {
  const app = express();

  app.use(
    cors({
      origin: process.env.CORS_ORIGIN,
      credentials: true,
    })
  );

  app.use(
    express.json({
      limit: "20kb",
    })
  );

  app.use("*", cors());

  app.use(helmet());

  app.use(compression());

  app.use(loggerMiddleware);

  app.use(`/api/${AppConfig.App.API_VERSION}`,routerV1);

  app.use('*',(req,res,next)=>{
     next(new AppError(StatusCodes.NOT_FOUND,'Route not found!'));
  });

  app.use(errorMiddleware);

  return app;
}
