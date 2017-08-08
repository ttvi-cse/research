module.exports = {
	signUp: async (req, res, next) => {
		// email and password
		// req.value.body
		console.log("content of req.value.body", req.value.body);
		console.log("UserController.signUp() called");
		return res.status(200).json()
	},
	signIn: async (req, res, next) => {
		// generate token
		console.log("UserController.signIn() called");
	},
	secret: async (req, res, next) => {
		console.log("UserController.secret() called");
	}
}