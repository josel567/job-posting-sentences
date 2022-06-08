import { Router } from 'express';
import { CrudSentenceController } from '../../../contexts/sentences/application/crudSentenceController';
import { FirestoreSentenceRepository } from '../../../contexts/sentences/infrastructure/firestoreSentenceRepository';

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
    const { page, size } = req.query;
    
    const sentences = await crudSentenceController.getAll(Number(page), Number(size));
    const serializedSentences = sentences.map(sentence => sentence.serialize());

    res.render('pages/index', {
        sentences: serializedSentences
    });
});

sentencesRouter.put('/:id', async (req, res) => {
    const {id} = req.params;
    const { text, cats } = req.body;

    console.log(id);
    
    
    await crudSentenceController.update(id, { text, cats });

    return res.json("Document updated");
});

sentencesRouter.delete('/:id', async (req, res) => {
    const {id} = req.params;
    
    await crudSentenceController.delete(id);

    return res.json("Sentence deleted");
});

export default sentencesRouter;