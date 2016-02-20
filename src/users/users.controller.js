export default class UsersController {
  constructor() {
    this.user = {
      name: 'Denis',
      surname: 'Pitiriakov',
      username: 'husband'
    };

    this.userOne = [];
    console.log(this.userOne);
  }

  addUser(user) {
    this.user=user;
    console.log(this.user)
    this.userOne.push(user)
  }
}