import Ember from 'ember';

export default Ember.Route.extend({
		model: function() {
    return this.store.createRecord('product');
  },

  actions: {
    save: function() {
    	return true;
    },

    cancel: function() {
      return true;
    }
  }
});
