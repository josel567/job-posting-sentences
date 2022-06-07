import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import sentencesRouter from './app/routes/sentencesRouter';

dotenv.config();

const app: Express = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use('/sentences', sentencesRouter);

app.listen(process.env.PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${process.env.PORT}`);
});