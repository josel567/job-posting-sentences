export interface ITranslationService {
    translate(text: string, targetLang: string): Promise<string>;
}