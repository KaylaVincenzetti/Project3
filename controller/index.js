var db = require("../models");

module.exports = {
  

  
  create: function(req, res) {
    db.Comment.create(req.body).then(function(data) {
        console.log("added comment to database");
        console.log(data);
        res.json(data);
    
    });
  },
  
}
