import { Sentence, SentencePrimitives } from "../domain/models/sentence";

export interface ISentenceRepository {
    findOne(id: string): Promise<SentencePrimitives>;
    findAll(): Promise<SentencePrimitives[]>;
    save(sentence: Sentence): Promise<void>;
    delete(id: string): Promise<void>;
    updateOne(id: string): Promise<SentencePrimitives>;
}