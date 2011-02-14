var AppView = Backbone.View.extend({
  initialize: function() { 
    this.model = new AppModel();
    //model event binding
  },

  events: {
    //user events (e.g., clicks) to which we want to respond
  },

  //populate main template
  render: function() {
    this.el = ich.app(this.model);

    return this;
  }
});
