var FundCollection = Backbone.Collection.extend({
  model: Fund,
  url: 'json/funds.json'
});
