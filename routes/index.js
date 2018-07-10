const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api/api_routes");

// API Routes
router.get('/', function() {
  console.log('hello');
})
console.log('step1');

router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

module.exports = router;