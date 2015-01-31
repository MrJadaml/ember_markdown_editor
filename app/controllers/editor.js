import Ember from 'ember';

export default Ember.Controller.extend({
  isSelected: 'false',

  actions: {
    mossTheme: function() {
      this.set('themeLeft', 'moss');
    },
    shadowTheme: function() {
      this.set('themeLeft', 'shadow');
    },
    fireTheme: function() {
      this.set('themeLeft', 'fire');
    }
  }
});
