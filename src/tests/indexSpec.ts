import add from '../index';

//testing jasmine -- delete when real tests are ready
it('adds 2 nums', () => {
  const val = add(3, 4);
  expect(val).toBe(7);
});

it('adds 0 + 0 falsy', () => {
  expect(add(0, 0)).toBeFalsy();
});
