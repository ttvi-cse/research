var express = require('express');
var passport = require('../config/passport');
var UserUtils = require('../models/userUtilities');

/**
 * Create router instance
 */
var router = express.Router();
var isLoggedIn = require('../utils/isLoggedIn');
var findUser = UserUtils.findUser;
var viewAllUsers = UserUtils.viewAllUsers;
var updateUser = UserUtils.updateUser;
var deleteUser = UserUtils.deleteUser;

/**
 * Middleware
 */
router.use(passport.initialize());
router.use(passport.session());

/**
 * Routes
 */
router.get('/', function(req, res) {
    return res.status(200).render('pages/index', {errMsg: null});
});

var done = function() {
    console.log('done called');
}

router.route('/login')
    .get(function(req, res) {
        return res.status(200).render('pages/login');
    })
    .post(function(req, res, next) {
        passport.authenticate('local-login', function(err, user, info, done)  {
            if (err) {
                return next(err);
            }
            if (!user) {
                return res.status(409).render('pages/login', {errMsg: info.errMsg});
            }
            req.login(user, function(err) {
                if (err) {
                    console.error(err);
                    return next(err);
                }
                return res.status(302).redirect('/dashboard');
            });
        })(req, res, next);
    });

router.route('/signup')
    .get(function(req, res) {
        return res.status(200).render('pages/signup', {errMsg: null});
    })
    .post(function(req, res, next) {
        passport.authenticate('local-signup', function(err, user, info) {
            if (err) {
                return next(err); // will generate a 500 error
            }
            if (!user) {
                return res.statusCode(409).render('pages/signup', {errMsg: info});
            }
            req.login(user, function(err) {
                if (err) {
                    console.error(err);
                    return next(err);
                }
                return res.status(302).redirect('/dashboard');
            });
        })(req, res, next);
    });

// TODO: Resolve error require Router here

router.get('/dashboard', isLoggedIn, function(req, res, next) {
    var user = req.user;
    var profile = {
        local: {
            username: user.local.username,
            email: user.local.email
        },
        fb: {
            displayName: user.social.fb.displayName,
            email: user.social.fb.email,
            accessToken: user.social.fb.token
        },
        twitter: {
            displayName: user.social.twitter.displayName,
            handle: user.social.twitter.handle,
            location: user.social.twitter.metaData.location,
            description: user.social.twitter.metaData.description
        },
        photo: user.social.twitter.photo || user.social.fb.photo,
        acctLinkStatus: function() {
            var localLink = 'not linked';
            var fbLink = 'not linked';
            var twitterLink = 'not linked';
            if (this.local.email) {
                localLink = 'linked';
            }
            if (this.fb.displayName) {
                fbLink = 'linked';
            }
            if (this.twitter.displayName) {
                twitterLink = 'linked';
            }
            return {
                local: localLink,
                fb: fbLink,
                twitter: twitterLink
            }
        }
    };
    var person = profile.local.username || profile.fb.displayName || profile.twitter.displayName;
    var local = profile.local;
    var facebook = profile.fb;
    var twitter = profile.twitter;
    var currentProfile = function getCurrentProfile() {
        if (local.email) {
            return 'local';
        }
        if (facebook.displayName) return 'facebook';
        return 'twitter';
    }();
    var linkStatus = profile.acctLinkStatus();
    return res.render('pages/dashboard', {
        user: profile,
        currentProfile: currentProfile,
        person: person,
        linkStatus: linkStatus
    });
});

router.get('logout', function(req, res) {
    req.logout();
    req.session.destroy();
    return res.redirect('/');
})

module.exports = router;