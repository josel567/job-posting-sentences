import { Router } from 'express';

import { TranslationsController } from '../../application/translationsController';
import { DeepLTranslationService } from '../../services/translations/deepLTranslationService';

const translationsRouter = Router();

const translationService = new DeepLTranslationService();
const translationsController = new TranslationsController(translationService);

translationsRouter.get('/', async (req, res) => {
    const { text, targetLang } = req.body;
    const translatedText = await translationsController.translate(text, targetLang);

    return res.json(translatedText); 
});

export default translationsRouter;