import { Router } from 'express';
import { CrudSentenceController } from '../../application/crudSentenceController';
import { FirestoreSentenceRepository } from '../../infrastructure/firestoreSentenceRepository';

const sentencesRouter = Router();

const sentenceRepository = new FirestoreSentenceRepository();
const crudSentenceController = new CrudSentenceController(sentenceRepository);

sentencesRouter.post('/', async (req, res) => {
    const {text, cats} = req.body;

    await crudSentenceController.create(text, cats);

    return res.json("Sentence created");
});

sentencesRouter.get('/:id', async (req, res) => {
    const {id} = req.params;
    
    const sentence = await crudSentenceController.get(id);

    return res.json(sentence.serialize());
});

sentencesRouter.get('/', async (req, res) => {    
    const sentences = await crudSentenceController.getAll();

    return res.json(sentences.map(sentence => sentence.serialize()));
});

sentencesRouter.patch('/:id', async (req, res) => {
    const {id} = req.params;
    
    const sentence = await crudSentenceController.update(id);

    return res.json(sentence.serialize());
});

sentencesRouter.delete('/:id', async (req, res) => {
    const {id} = req.params;
    
    await crudSentenceController.delete(id);

    return res.json("Sentence deleted");
});

export default sentencesRouter;