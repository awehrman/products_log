import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
    return this.store.createRecord('log');
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
