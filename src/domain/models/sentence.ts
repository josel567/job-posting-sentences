export interface SentencePrimitives {
    text: string,
    cats: string[]
}

export class Sentence {
    constructor(private readonly text: string, private readonly cats: string[]) {}

    public serialize(): SentencePrimitives {
        return {
            text: this.text,
            cats: this.cats
        }
    }
}