'use strict';

var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var UserSchema = mongoose.Schema({
    local: {
        username: String,
        email: {
            type: String,
            unique: true
        },
        password: String
    },
    social: {
        fb: {
            id: String,
            token: String,
            displayName: String,
            email: String,
            photo: String,
        },
        twitter: {
            id: String,
            token: String,
            displayName: String,
            handle: String,
            photo: String,
            metaData: {
                location: String,
                description: String
            }
        }
    }
});

UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};

UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

var UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;