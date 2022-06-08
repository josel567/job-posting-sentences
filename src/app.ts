import 'dotenv/config';
import express, { Express } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import sentencesRouter from './app/routes/sentencesRouter';
import translationsRouter from './app/routes/translationsRouter';
import viewsRouter from './app/routes/viewsRouter';

dotenv.config();

const app: Express = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use('/', viewsRouter);
app.use('/sentences', sentencesRouter);
app.use('/translations', translationsRouter);

app.listen(process.env.PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${process.env.PORT}`);
});