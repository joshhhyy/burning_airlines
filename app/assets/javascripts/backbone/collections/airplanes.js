var liger = liger || {};

// Collection of a particular model
liger.Airplanes = Backbone.Collection.extend ({
  model: liger.Airplanes,
  url: '/airplanes'
});