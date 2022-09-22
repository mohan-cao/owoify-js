import owo from '../src/index';

const mockMath = Object.create(global.Math);
mockMath.random = () => 0.5;
global.Math = mockMath;

test('uvu no', () => {
  const testInput = 'no please not the bees';
  const testOutput = 'nyowo pwease nyowot teh bees';
  expect(owo(testInput, 'uvu')).toBe(testOutput);
});
