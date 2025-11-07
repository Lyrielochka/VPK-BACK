import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { TestConnection } from "./data-access/test.connection";
import routerProfile from "./routers/profile.router";
import routerUser from "./routers/user.router";
import routerAuth from "./routers/auth.router";
import routerDiploma from "./routers/diploma.router";
import routerNews from "./routers/news.router";
import routerImage from "./routers/image.router";
import { authMiddleware } from "./middlewares/auth.middleware";

dotenv.config();
const app = express();

const runApp = async () => {
  try {
    await TestConnection.initialize();
    await TestConnection.query("PRAGMA foreign_keys = ON;");

    process.on("uncaughtException", async (err) => {
      await TestConnection.destroy();
      process.exit(1);
    });

    app.use(cors());
    app.use(express.json());

    app.use(routerAuth);
    app.use(routerProfile);
    app.use(routerDiploma);
    app.use(routerNews);
    app.use(express.static(path.resolve(__dirname, "..", "public")));
    app.use("/api", routerImage);
    app.use(authMiddleware);
    app.use(routerUser);

    app.listen(3001, () => console.log("Server is running on port 3001"));
  } catch (err) {
    console.error(`${err.name}: ${err.message}`);
  }
};

runApp();
