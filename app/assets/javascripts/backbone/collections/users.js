var liger = liger || {};

// Collection of a particular model
liger.Users = Backbone.Collection.extend ({
  model: liger.User,
  url: '/users'
});