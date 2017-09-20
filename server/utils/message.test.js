const expect = require('expect');
const {generateMessage, generateLocationMessage} = require('./message');

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

describe('generateLocationMessage', () => {
  var coords = {
    latitude: 1,
    longitude: 1
  };
  
  it('Should generate correct locationMessage object', () =>{
    var locationMessageObject = generateLocationMessage('Admin', coords);
    expect(locationMessageObject.from).toBe('Admin');
    expect(locationMessageObject.url).toBe(`https://www.google.com/maps?q=1,1`);
    expect(locationMessageObject.createdAt).toBeA('number');
  });
});