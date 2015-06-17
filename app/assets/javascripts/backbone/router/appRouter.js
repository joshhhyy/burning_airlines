var liger = liger || {};

// Router is similar to routes.rb in Rails but with code actions as well

liger.AppRouter = Backbone.Router.extend({
  routes: {
    'index'             : 'index',
    'airplanes/:id'     : 'viewAirplane'
  },

  // Pretty much a GET/

  index: function () {
    console.log('number of airplanes ', liger.airlinePlanes.length)
    var appView = new liger.AppView({collection: liger.airlinePlanes});
    appView.render();
  },

  // Pretty much a GET/posts/:id

  viewAirplane: function (id) {
    var airplane = app.airplanes.get(id);
    var flightView = new flightView({model: airplane});
    flightView.render();
  }
});