var liger = liger || {};

liger.Airplane = Backbone.Model.extend({
  urlRoot: "/airplanes",
  defaults: {
    name: '',
    row: null,
    column: null
  }
});
