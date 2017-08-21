const express = require("express");
const router = require("express-promise-router")();

const { validateBody, schema } = require("../helpers/routeHelpers")
const UserController = require("../controller/users");

// console.log(typeof(UserController.signUp));
// UserController.signUp();

router.route("/signup")
	.post(validateBody(schema.authSchema), UserController.signUp);

router.route("/signin")
	.post(UserController.signIn);

router.route("/secret")
	.get(UserController.secret);

module.exports = router;