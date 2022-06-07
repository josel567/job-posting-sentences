export interface SentencePrimitives {
    text: string,
    cats: string[]
}

export class Sentence {
    constructor(private readonly text: string, private readonly cats: string[]) {}

    static fromPrimitives(sentencePrimitives: SentencePrimitives): Sentence {
        return new Sentence(sentencePrimitives.text, sentencePrimitives.cats);
    }

    public serialize(): SentencePrimitives {
        return {
            text: this.text,
            cats: this.cats
        }
    }
}