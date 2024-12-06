import https from "https";
import fs from 'fs';
import {Server} from "net";
import createApplication from "@/app";
import { AppConfig } from "@/config";
import { Logger } from "@/services";

function startServer():Server{
  const app = createApplication();

  const options = {
  key: fs.readFileSync("/etc/ssl/private/selfsigned.key"),
  cert: fs.readFileSync("/etc/ssl/certs/selfsigned.crt"),
 };

  return https.createServer(options, app).listen(process.env.PORT, () => {
    Logger.debug(` App ${AppConfig.App.NAME} with api version ${AppConfig.App.API_VERSION} is starting
            `);
    Logger.debug(`App is listening on PORT:${AppConfig.App.PORT}`);
  });
}

startServer();