const expect = require('expect');
const {isRealString} = require('./validation');

describe('isRealString', () => {
  it('Should reject non string values', () => {
    var aNumber = 7;
    expect(isRealString(aNumber)).toBe(false);
  });

  it('Should reject a string of only spaces', () => {
    expect(isRealString(' ')).toBe(false);
  });

  it('Should accept a string with non space characters', () => {
    expect(isRealString('  hello')).toBe(true);
  });
});
