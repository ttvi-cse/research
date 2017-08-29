const express = require("express");
const router = require("express-promise-router")();
const passport = require('passport');
const passportConf = require('../passport');

const { validateBody, schema } = require("../helpers/routeHelpers")
const UserController = require("../controller/users");

// console.log(typeof(UserController.signUp));
// UserController.signUp();

const passportLocal = passport.authenticate('local', {session: false});
const passportJWT = passport.authenticate('jwt', {session: false});

router.route("/signup")
	.post(validateBody(schema.authSchema), passportLocal, UserController.signUp);

router.route("/signin")
	.post(validateBody(schema.authSchema), passportJWT, UserController.signIn);

router.route("/secret")
	.get(, UserController.secret);

module.exports = router;