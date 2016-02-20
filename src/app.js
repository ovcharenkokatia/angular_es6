import angular from 'angular';
import uirouter from 'angular-ui-router';
require('../styles/index.scss');

import routing from './home/home.routes.js';

import HomeController from './home/home.controller.js';
import ContactsController from './contacts/contacts.controller.js';
import CatalogueController from './catalogue/catalogue.controller.js';
import ProductItemController from './product/product.controller.js';
import UsersController from './users/users.controller.js';
import createUserDirective from './users/users.directive.js';

export default angular.module('app', [uirouter])
  .config(routing)
  .controller('HomeController', HomeController)
  .controller('ContactsController', ContactsController)
  .controller('CatalogueController', CatalogueController)
  .controller('ProductItemController', ProductItemController)
  .controller('UsersController', UsersController)
.directive('createUserDirective', () => new createUserDirective());
