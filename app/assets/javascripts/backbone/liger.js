var app = app || {};

// Use {{style}} interpolation instead of <%= erb style %>

_.templateSettings = {
  evaluate : /\{\[([\s\S]+?)\]\}/g,     // {[ console.log("Hello"); ]} - runs
  interpolate : /\{\{([\s\S]+?)\}\}/g   // {{ key }} - interpolates
};


// Seed data: these would really come from the database irl



$(document).ready(function () {

  app.blogPosts = new app.Posts();
  app.blogPosts.fetch().done(function () {
    console.log('all fetched!');
    app.router = new app.AppRouter();
    Backbone.history.start({pushState: Modernizr.history});
  }); 
})








