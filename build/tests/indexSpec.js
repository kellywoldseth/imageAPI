import add from '../index';
it('adds 2 nums', function () {
    var val = add(3, 4);
    expect(val).toBe(5);
});
it('adds 0 + 0 falsy', function () {
    expect(add(0, 0)).toBeFalsy();
});
