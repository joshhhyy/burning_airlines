var liger = liger || {};

// liger.Reservations

var Reservations = Backbone.Collection.extend({
  model: liger.Reservation,
  url: "/airplanes/:airplane_id/flights/:flight_id/reservations"
})

liger.Reservations = new Reservations();