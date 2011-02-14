var Fund = Backbone.Model.extend({
  initialize: function(spec) {
    if(!spec || !spec.ticker || !spec.name){
      throw "InvlidConstructArgs";
    }

    // unique id for html
    this.set({
      htmlId: 'fund_' + this.cid
    })
  }
});
