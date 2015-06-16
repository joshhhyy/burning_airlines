var liger = liger || {};

// Collection of a particular model
// liger.Airplanes 

var Airplanes = Backbone.Collection.extend({
  model: liger.Airplane,
  url: '/airplanes'
});

liger.Airplanes = new Airplanes();


