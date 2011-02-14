var FundCategoryView = Backbone.View.extend({
  initialize: function() {
    this.fundCategory = this.options.fundCategory;
  },

  render: function() {
    //"ich" is ICanHax.js magic
    this.el = ich.fundCategory(this.fundCategory);
    return this;
  }
})
