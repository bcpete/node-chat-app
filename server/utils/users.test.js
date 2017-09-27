const expect  = require('expect');
const {Users} = require('./users');

describe('Users', () => {
  var users;
  
  beforeEach(() => {
    users = new Users;
    users.users = [{
      id: 1,
      name: 'Brady',
      room: 'Goons'
    }, {
      id: 2,
      name: 'Monica',
      room: 'Bradys lady'
    },{
      id: 3,
      name: 'Sean',
      room: 'Goons'
    }]; 
  });

  it('Should add new user', () => {
    var users = new Users();
    var user  = {
      id: 123, 
      name: 'Brady', 
      room: 'Goons'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('Should return names for Goons', () => {
    var userList = users.getUserList('Goons');
    expect(userList).toEqual(['Brady', 'Sean']);
  });

  it('Should return names for Bradys lady', () => {
    var userList = users.getUserList('Bradys lady');
    expect(userList).toEqual(['Monica']);
  });

  it('Should remove a user from users list', () => {
    var userRemoved = users.removeUser(1);
    expect(userRemoved.id).toBe(1);
    expect(users.users.length).toBe(2);
  });

  it('Should not remove a user from users list', () => {
    var userRemoved = users.removeUser(99);
    expect(userRemoved).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('Should find user', () => {
    var userId = 1;
    var user = users.getUser(userId);
    
    expect(user.id).toBe(userId);
  });

  it('Should not find user', () => {
    var userId = 99;
    var user = users.getUser(userId);

    expect(user).toNotExist();
  });
});