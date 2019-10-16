import owo from '../index'
import Word from '../Word'
import { owoMappingArray, specificWordMappingArray } from '../presets'

test('does owo actually work?', () => {
  expect(owo('does owo actually work?')).toBe("dwoes owo actuawwy work?")
})

test('does uwu actually work?', () => {
  expect(owo('does owo actually work?', "uwu")).toBe("dwoes owo actuawwy wowk?")
})

test('not a meme', () => {
  expect(owo(`(Black screen with text The sound of buzzing bees can be heard) According to all known laws of aviation there is no way a bee should be able to fly Its wings are too small to get its fat little body off the ground The bee of course flies anyway because bees don't care what humans think is impossible BARRY BENSON: (Barry is picking out a shirt) Yellow black Yellow black Yellow black Yellow black Ooh black and yellow Let's shake it up a little`, "uwu").toString())
  .toBe(`｡･:*:･ﾟ★,｡･:*:･ﾟ☆Bwack scween wif text Teh swound of buzzing bees can be heawd☆ﾟ･:*:･｡,★ﾟ･:*:･｡ Accwowding two aww knywown waws of aviation thewe is nywo way a bee shwouwd be abwal two fwy Its wings awe twoo smaww two get its fat littwal bwody off teh gwound Teh bee of cwouwse fwies anyway because bees dwon't cawe what humans fwink is impwossibwal BAWWY BENSWON: ｡･:*:･ﾟ★,｡･:*:･ﾟ☆Bawwwy is picking out a shiwt☆ﾟ･:*:･｡,★ﾟ･:*:･｡ Yewwow bwack Yewwow bwack Yewwow bwack Yewwow bwack Ooh bwack and yewwow Wet's shake it up a littwal`)
})

test('owoMap should transform fuck? to fuck?', () => {
  let result = owoMappingArray.reduce((word, f) => f(word), new Word("fuck?"));
  expect(result.toString()).toBe('fuck?')
})

test('specificWordMap should transform fuck? to fwuck?', () => {
  let result = specificWordMappingArray.reduce((word, f) => f(word), new Word("fuck?"));
  expect(result.toString()).toBe('fwuck?')
})