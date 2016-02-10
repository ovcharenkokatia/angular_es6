routes.$inject = ['$stateProvider'];

import HomeController from './home.controller.js';
import ContactsController from '../contacts/contacts.controller.js';

export default function routes($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      template: require('./home.html'),
      controller: 'HomeController',
      controllerAs: 'home'
    })
    .state('contacts', {
      url: '/contacts',
      template: require('../contacts/contacts.html'),
      controller: 'ContactsController',
      controllerAs: 'contacts'
    });
}