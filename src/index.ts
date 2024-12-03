import {Server} from "net";
import createApplication from "@/app";
import { AppConfig } from "@/config";
import { Logger } from "@/services";

function startServer():Server{
  const app = createApplication();

  return app.listen(AppConfig.App.PORT,async()=>{

    Logger.debug(` App ${AppConfig.App.NAME} with api version ${AppConfig.App.API_VERSION} is starting
    `);
    Logger.debug(`App is listening on PORT:${AppConfig.App.PORT}`);
    
  });
}

startServer();