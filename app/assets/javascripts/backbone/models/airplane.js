var liger = liger || {};

liger.Airplane = Backbone.Model.extend({
  urlRoot: "/planes/:plane_id",
  defaults: {
    name: '',
    row: null,
    column: null
  }
});

