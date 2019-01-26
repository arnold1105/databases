var db = require('../db');

//  connect.query(); 

//the model will call sql queries on the db obj being passed in above. and return the data to the controller...

module.exports = {
  messages: {
    get: function (req, res) {
      console.log(req, res);
      var getMessagesPromise = new Promise(function(resolve, reject) {
        db.query('SELECT * FROM messages', function(err, data){
          if(err) {
            reject(err);
          }
          resolve(data);
        });
      });
    },
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

