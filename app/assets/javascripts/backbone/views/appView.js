var liger = liger || {};

// Shows the landing page and a summary of all the blog posts
liger.AppView = Backbone.View.extend({
  el: '#main',
  render: function () {
    console.log(this.collection)
    var appHTML = $('#appTemplate').html();
    this.$el.html(appHTML);

    this.collection.each(function (airplane) {
      var airplaneListView = new liger.AirplaneListView({model: airplane});
      airplaneListView.render();
    });
  }
});