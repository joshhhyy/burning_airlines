var liger = liger || {};

liger.Reservations = Backbone.Collection.extend({
  model: liger.Reservation,
  url: "/airplanes/:airplane_id/flights/:flight_id/reservations"
})