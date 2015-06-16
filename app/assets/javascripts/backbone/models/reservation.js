var liger = liger || {};

liger.Reservation = Backbone.Model.extend({
  urlRoot: "/airplanes/:airplane_id/flights/:flight_id/reservations/:reservation_id",
  defaults: {
    user_id: null,
    row: null,
    column: null
  }
})