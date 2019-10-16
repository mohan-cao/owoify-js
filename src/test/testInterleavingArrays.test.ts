import interleaveArrays from './../interleaveArrays';

test('interleave a split string into a whitespace array', () => {
  let whitespace = "does owo actually work?".split(/[^\s]+/g);
  let words = "does owo actually work?".split(/\s+/g);
  expect(interleaveArrays(whitespace, words)).toEqual(["", "does", " ", "owo", " ", "actually", " ", "work?", ""])
})