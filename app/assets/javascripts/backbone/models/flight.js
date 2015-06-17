var liger = liger || {};

liger.Flight = Backbone.Model.extend({
  urlRoot: function() {
    return '/airplanes/' + this.get(id) + '/flights'
  },
  defaults: {
    flight_no: null,
    departure: '',
    destination: '',
    date: '',
  }
});