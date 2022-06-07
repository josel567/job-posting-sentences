import { Sentence } from "../domain/models/sentence";
import { ISentenceRepository } from "../infrastructure/ISentenceRepository";

export class CreateSentenceController {
    constructor(private readonly sentenceRepository: ISentenceRepository){}


    public async create(text: string, cats: string[]) {
        const sentence = new Sentence(text, cats);
        await this.sentenceRepository.save(sentence);
    }
}