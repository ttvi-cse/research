const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

// create a schema
const userSchema = new Schema({
	email: {
		type: String,
		required: true,
		unique: true,
		lowercase: true
	},
	password: {
		type: String,
		required: true
	}
});

userSchema.pre('save', async function(next) {
	//  this.password
	try {
		// Generate a salt
		const salt = await bcrypt.genSalt(10);
		// Generate a password hash (salt + hash)
		const passwordHash = await bcrypt.hash(this.password, salt);
		// console.log('salt', salt);
		// console.log('normal password', this.password);
		// console.log('hashed password', passwordHash);
		this.password = passwordHash;
		next();
	} catch (error) {
		next(error);
	}
});

userSchema.methods.isValidPassword = async function(newPassword) {
	try {
		return await bcrypt.compare(newPassword, this.password);
	} catch (error) {
		throw new Error(error);
	}

}

// create a model
const User = mongoose.model('user', userSchema);

// export the model
module.exports = User;
