import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('products', function() {
    this.route('new');
    this.route('show');
    this.route('edit');
  });
  
  this.route('logs', function() {
    this.route('new');
    this.route('show');
    this.route('edit');
  });
});

export default Router;
