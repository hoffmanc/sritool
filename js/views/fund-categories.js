var FundCategoriesView = Backbone.View.extend({
  initialize: function() {
    this.fundCategories = this.options.funds;
  },

  render: function() {
    $.each(this.fundCategories, function(idx, fundCategory){
      this.el += ich.fundCategory(this.fundCategory);
    });
    return this;
  }
})
