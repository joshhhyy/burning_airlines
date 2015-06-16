var liger = liger || {};

liger.Flight = Backbone.Model.extend({
  urlRoot: "/airplanes/:airplane_id/flights/:flight_id",
  defaults: {
    flight_no: null,
    departure: '',
    destination: '',
    date: '',
  }
});