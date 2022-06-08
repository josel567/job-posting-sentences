import { v4 as uuidv4 } from 'uuid';

export interface SentencePrimitives {
    id: string,
    text: string,
    cats: string[]
}

export class Sentence {
    private readonly id: string;
    private readonly text: string;
    private readonly cats: string[];
    
    constructor(text: string, cats: string[], id?: string) {
        this.text = text;
        this.cats = cats;
        this.id = id ? id : uuidv4();
    }

    static fromPrimitives(sentencePrimitives: SentencePrimitives): Sentence {
        return new Sentence(sentencePrimitives.text, sentencePrimitives.cats, sentencePrimitives.id);
    }

    public serialize(): SentencePrimitives {
        return {
            id: this.id,
            text: this.text,
            cats: this.cats
        }
    }
}