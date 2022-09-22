import owo from '../src/index';

test('rember happy day', () => {
  expect(
    owo(
      `pls remember that when you feel scare or frightened
  never forget ttimes when you feeled happy
  
  when day is dark alway remember happy day`,
      'owo'
    )
  ).toBe(`pls rember that wen u fell scare or fwigten
  nyewer fworget ttimes wen u feeled happy
  
  wen day is dark alway rember happy day`);
});
