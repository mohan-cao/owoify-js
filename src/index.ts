import Word from './Word';
import { interleaveArrays } from './util/utility';
import {
  uwuMappingArray,
  owoMappingArray,
  uvuMappingArray,
  specificWordMappingArray,
} from './presets';

/**
 * owoify everything
 * @param v word to owoify
 * @param level level of owo-ness. (owo -> uwu -> uvu)
 */
export default function owoify(v: string, level: string = 'owo'): string {
  let whitespace: string[] = v.split(/[^\s]+/g);
  let words: Word[] = v.split(/\s+/g).map(x => new Word(x));
  words = words.map(x => {
    specificWordMappingArray.reduce((word, f) => f(word), x);
    switch (level) {
      case 'uvu':
        uvuMappingArray.reduce((word, f) => f(word), x);
      case 'uwu':
        uwuMappingArray.reduce((word, f) => f(word), x);
      case 'owo':
        owoMappingArray.reduce((word, f) => f(word), x);
      default:
        break;
    }
    return x;
  });
  return interleaveArrays(whitespace, words).join('');
}

export function uwuify(v: string): string {
  return owoify(v, 'uwu');
}

export function uvuify(v: string): string {
  return owoify(v, 'uvu');
}
