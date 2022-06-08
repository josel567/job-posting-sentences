import { ITranslationService } from "../domain/services/translations/ITranslationService";

export class TranslationsController {
    constructor(private readonly translationsService: ITranslationService) {}

    public async translate(text: string, targetLang: string): Promise<string> {
        return await this.translationsService.translate(text, targetLang);
    }
}