var AppController = {
  init: function(spec) {
    //default config
    this.config = {
      connect: true
    };
    _.extend(this.config, spec);

    this.model = new AppModel({
      //nothing goes here yet
    });

    this.view = new AppView({model: this.model});

    return this;
  }
};
