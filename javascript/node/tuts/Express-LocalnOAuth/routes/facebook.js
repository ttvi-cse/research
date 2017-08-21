var express = require('express');
var Facebook = require('facebook-node-sdk');
var config = require('../config/config');

/**
 * Create router instance
 */
var router = express.Router();
var appId = config.fb.appID;
var secret = config.fb.appSecret;
/**
 * Middleware
 */
router.use(Facebook.middleware({appId: appId, secret: secret}));

/**
 * Routes
 */
router.get('/', function(req, res) {
    if (req.user.social.fb.id) {
        var endPt = '/v2.5/' + req.user.social.fb.id + '/feed';
        req.facebook.api(endPt, function(err, data) {
            if (err) {
                console.error(err);
            }
            return res.json(data);
        })
    }
    else {
            return res.status(403).json('you need a facebook account');
    }
})
module.exports = router;