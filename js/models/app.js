var AppModel = Backbone.Model.extend({
  initialize: function() {
    this.fundCategories = new FundCategoryCollection([
      {"name":"Asset Allocation - Lifecycle Portfolios"},
      {"name":"Asset Allocation - Lifestyle Portfolios"},
      {"name":"Conservative"},
      {"name":"Income"},
      {"name":"Growth & Income"},
      {"name":"Growth"},
      {"name":"Aggressive Growth"}
    ]);
  }
});
