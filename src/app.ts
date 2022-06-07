import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

dotenv.config();

const app: Express = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.listen(process.env.PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${process.env.PORT}`);
});