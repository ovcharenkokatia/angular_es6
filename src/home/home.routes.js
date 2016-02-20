routes.$inject = ['$stateProvider'];

import HomeController from './home.controller.js';
import ContactsController from '../contacts/contacts.controller.js';
import CatalogueController from '../catalogue/catalogue.controller.js';
import UsersController from '../users/users.controller.js';

export default function routes($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      template: require('./home.html'),
      controller: 'HomeController',
      controllerAs: 'home'
    })
    .state('contacts', {
      url: '/contacts',
      template: require('../contacts/contacts.html'),
      controller: 'ContactsController',
      controllerAs: 'contacts'
    })
    .state('catalogue', {
      url: '/catalogue',
      template: require('../catalogue/catalogue.html'),
      controller: 'CatalogueController',
      controllerAs: 'catalogue'
    })
    .state('product', {
      url: '/product/:productID',
      template: require('../product/product.html'),
      controller: 'ProductItemController',
      controllerAs: 'product'
    })
    .state('users', {
      url: '/users',
      template: require('../users/users.html'),
      controller: 'UsersController',
      controllerAs: 'users'
    });
}