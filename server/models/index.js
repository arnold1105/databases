var db = require('../db');

//  connect.query(); 

//the model will call sql queries on the db obj being passed in above. and return the data to the controller...

module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

