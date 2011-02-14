var FundCategoryCollection = Backbone.Collection.extend({
  model: FundCategory,
  url: 'json/fund-categories.js',
});
