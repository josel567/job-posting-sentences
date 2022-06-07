import { Router } from 'express';
import { CreateSentenceController } from '../../application/createSentenceController';
import { FirestoreSentenceRepository } from '../../infrastructure/firestoreSentenceRepository';

const sentencesRouter = Router();

sentencesRouter.post('/', async (req, res) => {
    const {text, cats} = req.body;

    const sentenceRepository = new FirestoreSentenceRepository();
    const createSentenceController = new CreateSentenceController(sentenceRepository);
    
    await createSentenceController.create(text, cats);

    return res.json("Sentence created");
});

export default sentencesRouter;