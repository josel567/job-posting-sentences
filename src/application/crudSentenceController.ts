import { Sentence } from "../domain/models/sentence";
import { ISentenceRepository } from "../infrastructure/ISentenceRepository";

export class CrudSentenceController {
    constructor(private readonly sentenceRepository: ISentenceRepository){}

    public async create(text: string, cats: string[]) {
        const sentence = new Sentence(text, cats);
        await this.sentenceRepository.save(sentence);
    }

    public async get(id: string): Promise<Sentence> {
        const sentencePrimitives = await this.sentenceRepository.findOne(id);
        return Sentence.fromPrimitives(sentencePrimitives);
    }

    public async getAll(): Promise<Sentence[]> {
        const allSentencePrimitives = await this.sentenceRepository.findAll();

        return allSentencePrimitives.map(sentencePrimitives => {
            return Sentence.fromPrimitives(sentencePrimitives);
        });
    }

    public async update(id: string): Promise<Sentence> {
        const sentencePrimitives = await this.sentenceRepository.updateOne(id);
        return Sentence.fromPrimitives(sentencePrimitives);
    }

    public async delete(id: string): Promise<void> {
        await this.sentenceRepository.delete(id);
    }
}