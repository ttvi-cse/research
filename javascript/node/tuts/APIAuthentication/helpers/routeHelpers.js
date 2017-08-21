const Joi = require("joi");

module.exports = {
	validateBody: function(schema) {
		return (req, res, next) => {
			const result = Joi.validate(req.body, schema);
			if (result.error) {
				return res.status(404).json(result.error);
			}

			if (!req.value) {
				req.value = {};
			}

			req.value["body"] = result.value;
			next();
			//  req.value.body instead req.body
		}
	},

	schema: {
		authSchema: Joi.object().keys({
			email: Joi.string().email().required(),
			password: Joi.string().required()
		})
	}
}