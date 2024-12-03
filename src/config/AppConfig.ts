import { configDotenv } from "dotenv";

configDotenv();

const appConfig = {
   App:{
    NAME: process.env.APP_NAME,
    PORT: parseInt(<string>process.env.PORT) || 8000,
    API_VERSION: process.env.API_VERSION,
    IS_DEVELOPMENT: ['development', 'dev', 'local'].includes(
      <string>process.env.NODE_ENV
    ), 
   },
}

const AppConfig = Object.freeze(appConfig);

export { AppConfig };
