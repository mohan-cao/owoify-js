import Word from './Word'
import interleaveArrays from './interleaveArrays';
import { uwuMappingArray, owoMappingArray, uvuMappingArray, specificWordMappingArray } from './presets';

export default function owoify(v:string, level:string="owo") {
  let whitespace: string[] = v.split(/[^\s]+/g);
  let words: Word[] = v.split(/\s+/g).map(x => new Word(x));
  words = words.map(x => {
    x = specificWordMappingArray.reduce((word, f) => f(word), x);
    switch (level) {
      case "uvu":
        x = uvuMappingArray.reduce((word, f) => f(word), x);
      case "uwu":
        x = uwuMappingArray.reduce((word, f) => f(word), x);
      case "owo":
        x = owoMappingArray.reduce((word, f) => f(word), x);
      default:
          break;
    }
    return x;
  });
  return interleaveArrays(whitespace, words).join("");
}
