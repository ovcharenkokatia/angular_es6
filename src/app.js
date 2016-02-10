import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './home/home.routes.js';
import HomeController from './home/home.controller.js';
import ContactsController from './contacts/contacts.controller.js';

export default angular.module('app', [uirouter])
  .config(routing)
  .controller('HomeController', HomeController)
  .controller('ContactsController', ContactsController);