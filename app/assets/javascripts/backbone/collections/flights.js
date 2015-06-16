var liger = liger || {};

// Collection of a particular model
liger.Flights = Backbone.Collection.extend ({
  model: liger.Flight,
  url: '/flights'
});