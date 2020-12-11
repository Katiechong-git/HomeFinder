var express = require("express");
var router = express.Router();

const myDB = require("../db/usersDB.js");

/* GET home page. */
router.get("/", async (req, res, next) => {
	const users = await myDB.getUsers();
	res.json(users);
});

router.post("/create", async (req, res) => {
	const user = req.body;

	console.log("user", user);

	await myDB.createUser(user);

	res.status(200).send({ inserted: true });
});

module.exports = router;
