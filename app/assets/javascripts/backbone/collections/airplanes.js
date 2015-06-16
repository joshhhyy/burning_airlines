var liger = liger || {};

// Collection of a particular model
// liger.Airplanes 

liger.Airplanes = Backbone.Collection.extend({
  model: liger.Airplane,
  url: '/airplanes'
});




