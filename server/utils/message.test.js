const expect = require('expect');
const {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('Should generate correct message object', () => {
    var from = "Brady";
    var text = "Test text wooo";

    var messageObject = generateMessage(from, text);
    expect(messageObject.text).toBe(text);
    expect(messageObject.from).toBe(from);
    expect(messageObject.createdAt).toBeA('number');
  });
});