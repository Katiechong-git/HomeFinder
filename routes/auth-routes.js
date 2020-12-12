var express = require("express");
var router = express.Router();
var passport = require("passport");

router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login?msg='Error auth'",
  }),
  function (req, res) {
    console.log("Logged in", req.body);
    res.redirect("/");
  }
);

// router.post("/login", async (req, res) => {
//   const { username, password, email } = req.body;
//   console.log(username);
// });

router.get("/getUser", (req, res) =>
  res.send({ username: req.user ? req.user.username : null })
);

router.get("/logout", function (req, res) {
  req.logout();
  // res.redirect("/");
  res.send({});
});

module.exports = router;
