import { SentencePrimitives, Sentence } from "../domain/models/sentence";
import { ISentenceRepository } from "./ISentenceRepository";

export class FirestoreSentenceRepository implements ISentenceRepository {
    public async updateOne(id: string): Promise<SentencePrimitives> {
        throw new Error("Method not implemented.");
    }
    public async delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    public async findOne(id: string): Promise<SentencePrimitives> {
        throw new Error("Method not implemented.");
    }
    public async findAll(): Promise<SentencePrimitives[]> {
        throw new Error("Method not implemented.");
    }
    public async save(sentence: Sentence): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
}