var liger = liger || {};

var FlightView = Backbone.View.extend({
  el: '#main',
  events: {
    // 'click .box'
  },

  render: function() {
    var airplaneHTML = $('#airplaneTemplate').html();

    this.$el.html(airplaneHTML);
  }
})