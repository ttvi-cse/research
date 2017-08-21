const JWT = require("jsonwebtoken");
const User = require("../models/user");
const  {JWR_SECRET} = require("../configurations")

signToken = user => {
	return JWT.sign({
		iss: 'CodeWorker',
		sub: user.id,
		iat: new Date().getTime(),
		exp: new Date().setDate(new Date().getDate() + 1)
	}, JWR_SECRET)
}
module.exports = {
	signUp: async (req, res, next) => {
		console.log("UserController.signUp() called");
		const {email, password} = req.value.body;

		// const email = req.value.body.email;
		// const password = req.value.body.password;

		const newUser = new User({ email, password });
		await newUser.save();

		const token = signToken(newUser);

		return res.status(200).json({token});
	},
	signIn: async (req, res, next) => {
		// generate token
		console.log("UserController.signIn() called");
	},
	secret: async (req, res, next) => {
		console.log("UserController.secret() called");
	}
}