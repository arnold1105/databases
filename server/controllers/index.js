var models = require('../models');

module.exports = {
  messages: {

    get: function (req, res) {
      models.messages.get (req, res)
      .then((data) => {
        res.send(data);
      })
      .catch((error) => {
        console.log(error);
      });

    }, 

    post: function (req, res) {
      models.messages.post (req, res)
      .then((note)=>{
        console.log(note)
        res.status(201);
        res.end();
      }) 
      .catch((error)=> {
        console.log(error);
      });
    } 
  },

  users: {
    get: function (req, res) {
      models.users.get(req, res)
      .then((data)=>{
        res.send(data);
      })
      .catch((error)=>{
        console.log(error);
      });
    },
    post: function (req, res) {
      models.users.post(req, res)
      .then((note)=>{
        console.log(note)
        res.status(201)
        res.end();
      })
      .catch((error)=>{
        conosle.log(error);
      })
    }
  }
};

