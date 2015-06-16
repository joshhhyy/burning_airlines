var liger = liger || {};

liger.Flight = Backbone.Model.extend({
  urlRoot: '/flights',
  defaults: {
    flight_no: '',
    departure: '',
    destination: '',
    date: '',
  }
});