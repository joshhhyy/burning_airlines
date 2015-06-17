var liger = liger || {};

var PlaneView = Backbone.View.extend({
  el: '#main',
  events: {
    "click .freeSeat" : "saveSeat"
  },

  render: function() {
    console.log(this.model.id)
    var airplaneHTML = $('#flightTemplate').html();

    this.$el.html(airplaneHTML);

    $(".freeSeat").on("click", function() {
       $(this).css("background", "red");
   });
  },

})