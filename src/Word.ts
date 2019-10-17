function searchValueContainsReplacedWords(
  searchValue: string,
  replaceValue: string,
  replacedWords: Set<String>
): boolean {
  return Array.from(replacedWords).some(
    word => word.replace(searchValue, replaceValue) !== word
  );
}

export default class Word {
  word: string;
  replacedWords: Set<string>;

  constructor(word: string) {
    this.word = word.trim();
    this.replacedWords = new Set();
  }

  replace(
    searchValue: any,
    replaceValue: any,
    replaceReplacedWords: boolean = false
  ): Word {
    if (
      !replaceReplacedWords &&
      searchValueContainsReplacedWords(
        searchValue,
        replaceValue,
        this.replacedWords
      )
    )
      return this;
    const replacingWord: string = this.word
      .replace(searchValue, replaceValue)
      .trim();
    const matchArray: RegExpMatchArray | null = this.word.match(searchValue);
    const replacedWords: string[] =
      matchArray !== null
        ? Array.from(matchArray).map(x => x.replace(x, replaceValue))
        : [];
    if (replacingWord !== this.word) {
      for (const word of replacedWords) {
        this.replacedWords.add(word);
      }
      this.word = replacingWord;
    }
    return this;
  }

  toString() {
    return this.word;
  }
}
