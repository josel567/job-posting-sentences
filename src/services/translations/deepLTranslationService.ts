import * as deepl from 'deepl-node';

import { ITranslationService } from "./ITranslationService";

export class DeepLTranslationService implements ITranslationService {
    private authKey = "83e78bff-2e60-94e8-4df7-1c144d1ca611:fx";
    private translator: deepl.Translator;

    constructor() {
        this.translator = new deepl.Translator(this.authKey);
    }

    public async translate(text: string, targetLang: string): Promise<string> {
        const result = await this.translator.translateText(text, null, targetLang as deepl.TargetLanguageCode);
        return result.text;
    }   
}