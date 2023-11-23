import Koa from "koa";
import logger from "koa-logger";
import bodyParser from "koa-bodyparser";
import cors from "@koa/cors";
import dotenv from "dotenv";
import { router } from "./router";

dotenv.config();

const app = new Koa();

app.use(cors({ credentials: true }));

app.use(logger());
app.use(bodyParser());

app.use(router.routes());

app.listen(process.env.PORT);

console.log("The app is now running on port " + process.env.PORT);
