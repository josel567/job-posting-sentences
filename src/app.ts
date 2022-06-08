import 'dotenv/config';
import express, { Express } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import sentencesRouter from './apps/sentences/routes/sentencesRouter';
import translationsRouter from './apps/sentences/routes/translationsRouter';
import viewsRouter from './apps/sentences/routes/viewsRouter';
import path from 'path';

dotenv.config();

const app: Express = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use('/', viewsRouter);
app.use('/sentences', sentencesRouter);
app.use('/translations', translationsRouter);

app.listen(process.env.PORT, () => {
  console.log(`⚡️[server]: Server is running at port ${process.env.PORT}`);
  console.log(process.env.serviceAccountKey); 
});