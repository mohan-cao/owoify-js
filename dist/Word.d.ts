export default class Word {
    word: string;
    replacedWords: Set<string>;
    constructor(word: string);
    replace(searchValue: any, replaceValue: any, replaceReplacedWords?: boolean): Word;
    toString(): string;
}
