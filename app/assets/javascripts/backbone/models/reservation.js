var liger = liger || {};

liger.Reservation = Backbone.Model.extend({
  urlRoot: function () {
    return '/airplanes/:airplane_id/flights/' + this.get(id) + '/reservations'
  },
  defaults: {
    user_id: null,
    row: null,
    column: null
  }
})