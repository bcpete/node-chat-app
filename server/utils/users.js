[{
  id: 'fjkdla;fjda',
  name: 'whateer',
  room: 'nameofroom'
}]

// add a user{id, name, room}
// remove user{id}
// getUser{id}
// getUserList{room}

class Users {
  constructor () {
    this.users = [];
  };

  addUser (id, name, room) {
    var user = {id, name, room};
    this.users.push(user);
    return user;
  };


};

module.exports = {Users};