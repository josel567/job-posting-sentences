import * as admin from "firebase-admin";

import { SentencePrimitives, Sentence } from "../domain/models/sentence";
import { ISentenceRepository } from "./ISentenceRepository";

import serviceAccount from "../services/firebase/config/serviceAccountKey.json";

export class FirestoreSentenceRepository implements ISentenceRepository {

    private readonly db: admin.firestore.Firestore;

    constructor() {
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount as admin.AppOptions)
        });

        this.db = admin.firestore();
    }

    public async updateOne(id: string, data: Partial<SentencePrimitives>): Promise<void> {
        await this.db.collection("sentences").doc(id).update(data);
    }

    public async delete(id: string): Promise<void> {
        await this.db.collection("sentences").doc(id).delete();
    }

    public async findOne(id: string): Promise<SentencePrimitives> {
        const docRef = this.db.collection("sentences").doc(id);
        const doc = await docRef.get();

        if(!doc.exists) throw new Error("Document not found");

        return doc.data() as SentencePrimitives;
    }

    public async findAll(): Promise<SentencePrimitives[]> {
        const querySanpshot = await this.db.collection("sentences").get();

        const sentences: SentencePrimitives[] = [];

        querySanpshot.forEach(doc => {
            sentences.push(doc.data() as SentencePrimitives);
        });

        return sentences;
    }

    public async save(sentence: Sentence): Promise<void> {
        const docRef = this.db.collection("sentences").doc();
        await docRef.set({text: sentence.serialize().text});
    }
    
}