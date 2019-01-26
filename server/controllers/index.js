var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(req, res)
      .then((data) => {
        res.send(data);
      }
        //atttach teh data to the response 
      )
      .catch(err);

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post((err, data) => {

      })
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

