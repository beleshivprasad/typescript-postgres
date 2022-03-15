//import Client from 'pg';
import { Client } from "pg";
import path from "path";
import { createSchema } from "./createSchema";
require("dotenv").config({ path: path.join(__dirname, "../config/.env") });

//Postgre database instance client
export const client1: any = new Client({
  host: process.env.dbHOST,
  port: Number(process.env.dbPORT),
  user: process.env.dbUSER,
  password: process.env.dbPASSWORD,
  database: process.env.dbDATABASE,
});

//Connection Function
export function connectDB() {
  client1.on("connect", () => {
    console.log("Database Connection Successfull");
    //Creating Schema After Successfull Connection
    createSchema();
  });

  client1.on("error", (err: any) => {
    console.log("this is error", err);
  });
  client1.connect();
}
