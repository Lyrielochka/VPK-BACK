import { DataSource } from "typeorm";
import { User } from "../entities/user.entity";
import { News } from "../entities/news.entity";
import { Diploma } from "../entities/diploma.entity";
import { Profile } from "../entities/profile.entites";

export const TestConnection = new DataSource({
  type: "better-sqlite3",
  database: "db.sqlite",
  entities: [User, Profile, News, Diploma],
  synchronize: true,
  logging: false,
});
