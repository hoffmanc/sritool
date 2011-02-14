var FundCategory = Backbone.Model.extend({
  initialize: function(spec) {
    if(!spec || !spec.name){
      throw "InvlidConstructArgs";
    }

    // unique id for html
    this.set({
      htmlId: 'fund_category_' + this.cid
    })
  }
});
