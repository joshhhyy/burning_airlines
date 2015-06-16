var liger = liger || {};

liger.AirplaneListView = Backbone.View.extend({
  tagname: 'li',
  events: {
    'click' : 'showAirplane'
  },

  render: function() {
    var airplaneListTemplate = $('#airplaneListTemplate').html();
    var airplaneHTML = _.template(airplaneListTemplate);

    this.$el.html( airplaneHTML(this.model.toJSON()) );

    $('#airplanes').append(this.$el);
  }
})