jest.mock('../src/util/logger', () => {
  const originalModule = jest.requireActual('../src/util/logger');

  //Mock the default export and named export 'foo'
  return {
    __esModule: true,
    ...originalModule,
    debug: console.debug,
  };
});
