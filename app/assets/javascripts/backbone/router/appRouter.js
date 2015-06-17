var liger = liger || {};

// Router is similar to routes.rb in Rails but with code actions as well

liger.AppRouter = Backbone.Router.extend({
  routes: {
    'index'             : 'index',
    'airplanes/:id'     : 'viewAirplane',
    'airplanes/:id/flights' : 'viewFlights'
  },

  // Pretty much a GET/

  index: function () {
    console.log('number of airplanes ', liger.airlinePlanes.length)
    var appView = new liger.AppView({collection: liger.airlinePlanes});
    appView.render();
  },

  // Pretty much a GET/posts/:id

  viewAirplane: function (id) {
    var airplane = liger.airlinePlanes.get(id);
    var planeView = new PlaneView({model: airplane});
    planeView.render();
  },

  viewFlights: function(id) {
    var flight = liger.airlineFlights.get(id);
    var flightsView = new FlightsView({collection: liger.airlineFlights})
    flightsView.render();
  }
});