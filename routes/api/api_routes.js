const commentController = require("../../controller/index.js")
const router = require("express").Router();

router.route("/comment")
.get(function(req, res) {
    console.log("working!");
})
 .post(commentController.create);

 console.log('step2')

module.exports = router;