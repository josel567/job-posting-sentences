import { Router } from 'express';
import { CrudSentenceController } from '../../application/crudSentenceController';
import { FirestoreSentenceRepository } from '../../infrastructure/firestoreSentenceRepository';

const viewsRouter = Router();

viewsRouter.get('/', async (req, res) => {

    const sentenceRepository = new FirestoreSentenceRepository();
    const crudSentenceController = new CrudSentenceController(sentenceRepository);
    const sentences = await crudSentenceController.getAll();

    res.render('pages/index', {
        sentences
    });
});

viewsRouter.get('/create', async (req, res) => {
    res.render('pages/createSentence');
});

viewsRouter.get('/update', async (req, res) => {
    res.render('pages/createSentence');
});

export default viewsRouter;