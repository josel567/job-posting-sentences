import { Sentence, SentencePrimitives } from "../domain/models/sentence";

export interface ISentenceRepository {
    findOne(id: string): Promise<SentencePrimitives>;
    findAll(page?: number, size?: number): Promise<SentencePrimitives[]>;
    save(sentence: Sentence): Promise<void>;
    delete(id: string): Promise<void>;
    updateOne(id: string, data: Partial<SentencePrimitives>): Promise<void>;
}