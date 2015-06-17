var liger = liger || {};

// Use {{style}} interpolation instead of <%= erb style %>

_.templateSettings = {
  evaluate : /\{\[([\s\S]+?)\]\}/g,     // {[ console.log("Hello"); ]} - runs
  interpolate : /\{\{([\s\S]+?)\}\}/g   // {{ key }} - interpolates
};


// Seed data: these would really come from the database irl



$(document).ready(function () {

  liger.airlinePlanes = new liger.Airplanes();
  liger.airlinePlanes.fetch().done(function () {

    liger.airlineFlights = new liger.Flights();
    console.log('all fetched')
    liger.router = new liger.AppRouter();
    Backbone.history.start();
  }); 
})








