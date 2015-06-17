var liger = liger || {};

liger.AirplaneListView = Backbone.View.extend({
  tagname: 'li',
  events: {
    'click' : 'showFlight'
  },

  render: function() {
    var airplaneListTemplate = $('#airplaneListTemplate').html();
    var airplaneHTML = _.template(airplaneListTemplate);

    this.$el.html( airplaneHTML(this.model.toJSON()) );

    $('#airplanes').append(this.$el);
  },

  showFlight: function() {
    liger.router.navigate('airplanes/' + this.model.get('id'), true)
  }


})