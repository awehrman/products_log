import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
    save: function() {
      return true;
    },

    cancel: function() {
      return true;
    },

    delete: function(product) {
      var self = this;

      product.destroyRecord().then(function(){
        console.log('removed');
        self.transitionTo('products.index');
      });
    }
  }
});
