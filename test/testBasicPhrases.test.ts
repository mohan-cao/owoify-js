import owo from '../src/index';

test('owo the fitnessgram pacer test', () => {
  const testInput = `The FitnessGram Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start. The running speed starts slowly but gets faster each minute after you hear this signal bodeboop. A sing lap should be completed every time you hear this sound. ding Remember to run in a straight line and run as long as possible. The second time you fail to complete a lap before the sound, your test is over. The test will begin on the word start. On your mark. Get ready!… Start. ding`;
  const testOutput = `Teh FwitnyessGwam Pacer Test is a multistage aewobic capacity test that pwogwessivewy gets mwore diffwicult as it cwontinyues. Teh 20 meter pacer test wiww begin in 30 secwonds. Linye up at teh start. Teh runnying speed starts swowwy but gets faster each minyute after u hear this signywl bwodebwoop. A sing lap shwould be cwompweted ewery tim u hear this swound. ding Rember two run in a stwaight linye and run as wong as pwossible. Teh secwond tim u fawl two cwompwete a lap befwore teh swound, ywour test is owor. Teh test wiww begin on teh word start. On ywour mark. Get weady!… Start. ding`;
  expect(owo(testInput, 'owo')).toBe(testOutput);
});

test('uvu some basic owo phrases', () => {
  const testInput = 'literally unreadable';
  const testOutput = 'witewawwy unweadabwal';
  expect(owo(testInput, 'uvu')).toBe(testOutput);
});

test('uwu some basic owo phrases', () => {
  const testInput = 'it gets worse and worse';
  const testOutput = 'it gets wose and wose';
  expect(owo(testInput, 'uwu')).toBe(testOutput);
});
