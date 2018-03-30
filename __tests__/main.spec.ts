import squirrels from '../src/main';

describe('greeter function', () => {
  // Read more about fake timers: http://facebook.github.io/jest/docs/en/timer-mocks.html#content
  jest.useFakeTimers();


  it('Gives me one squirrel', () => {
  squirrels.single();
  });

  it('Gives me a whole gang of squirrels', () => {
      squirrels.many();
  });

});
