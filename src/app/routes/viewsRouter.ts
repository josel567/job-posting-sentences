import { Router } from 'express';

const viewsRouter = Router();

viewsRouter.get('/create', async (req, res) => {
    res.render('pages/createSentence');
});

viewsRouter.get('/update/:id', async (req, res) => {
    res.render('pages/updateSentence', { id: req.params.id });
});

export default viewsRouter;