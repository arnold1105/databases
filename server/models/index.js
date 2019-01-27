var db = require('../db');
var count = 0;

//the model will call sql queries on the db obj being passed in above. and return the data to the controller...
module.exports = {
  messages: {
    get: function () {
      return new Promise(function(resolve, reject) {
        db.query('SELECT * FROM messages;', function(error, data, fields){
          if(error) {
            reject(error);
          }
          resolve(data);
        });
      });
    },
    
    post: function (req, res) {
      return new Promise(function(resolve, reject){
        console.log("request body: ", req.body, "username", req.body.username);
        count += 1;
        db.query(`INSERT INTO messages (id, username, text, roomname) VALUES ('${count}', '${req.body.username}', '${req.body.text}', '${req.body.roomname}');`, function(error, data, fields){
          if (error){
            reject(error);
          }
          var successNotification ='your message has been posted';
          resolve(successNotification);
        });
      });
    } 
  },

  users: {
    get: function (req, res) {
      
    },
    post: function () {}
  }
};

