var FundsView = Backbone.View.extend({
  initialize: function() {
    this.funds = this.options.funds;
  },

  render: function() {
    $.each(this.funds, function(idx, fund){
      this.el += ich.fund(this.fund);
    });
    return this;
  }
})
