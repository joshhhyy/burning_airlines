var liger = liger || {};

// Collection of a particular model
var Flights = Backbone.Collection.extend ({
  model: liger.Flight,
  url: "/airplanes/:airplane_id/flights"
});

liger.Flights = new Flights();