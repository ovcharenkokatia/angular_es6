class createUserDirective {
  constructor() {

    let directive = {
      templateUrl: 'src/users/user.html',
      scope: true,
      controller: UsersController,
      controllerAs: 'users',
      bindToController: true
    };

    return directive;
  }
}