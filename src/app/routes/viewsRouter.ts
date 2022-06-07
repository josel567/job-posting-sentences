import { Router } from 'express';

const viewsRouter = Router();

viewsRouter.get('/', async (req, res) => {
    res.render('pages/index');
});

viewsRouter.get('/create', async (req, res) => {
    res.render('pages/createSentence');
});

viewsRouter.get('/update', async (req, res) => {
    res.render('pages/createSentence');
});

export default viewsRouter;