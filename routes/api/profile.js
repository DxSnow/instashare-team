const express = require('express');
const router = express.Router();
const passport = require("passport");

// Load Profile Model
const Profile = require("../../models/Profile");
// Load User Model
const User = require("../../models/User");
// Load Validation
const validateProfileInput = require("../../validation/profile");

// @route GET /api/profile/register
// @desc Register a user
// @access Public
router.get('/register', (req,res) => res.json({msg: 'profile work!'}));

// @route   GET api/profile
// @desc    Get current users profile
// @access  Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};

    Profile.findOne({ userID: req.user.id })
      .populate("userID", ["username", "avatar"])
      .then((profile) => {
        if (!profile) {
          errors.noprofile = "There is no profile for this user";
          return res.status(404).json(errors);
        }
        res.json(profile);
      })
      .catch((err) => res.status(404).json(err));
  }
);

// @route   POST api/profile
// @desc    Create or edit user profile
// @access  Public
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateProfileInput(req.body);
    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }
    //Get fields
    /*const userFields = {};
    userFields.user = req.user.id;
    if(req.body.username) userFields.username = req.body.username;*/
    // Get fields
    const profileFields = {};
    profileFields.userID = req.user.id;
    if (req.body.username) profileFields.username = req.body.username;
    if (req.body.avatar) profileFields.avatar = req.body.avatar;
    if (req.body.phoneNumber) profileFields.phoneNumber = req.body.phoneNumber;
    if (req.body.gender) profileFields.gender = req.body.gender;
    if (req.body.bio) profileFields.bio = req.body.bio;

    if (req.body.website) profileFields.website = req.body.website;
    if (req.body.date) profileFields.date = req.body.date;
    if (req.body.numberOfFollowers) profileFields.numberOfFollowers = req.body.numberOfFollowers;
    if (req.body.numberOfFollowings) profileFields.numberOfFollowings = req.body.numberOfFollowings;
    if (req.body.temporarilyDisabled) profileFields.temporarilyDisabled = req.body.temporarilyDisabled;

    /*User.findOne({ user: req.user.id }).then((user) => {
      if (user) {
        // Update
        User.findOneAndUpdate(
          { user: req.user.id },
          { $set: userFields },
          { new: true }
        ).then((user) => res.json(user))
          .catch(err => console.log(err));
      } else{
        console.log("else case");
      }
    });*/

    Profile.findOne({ userID: req.user.id }).then((profile) => {
      if (profile) {
        // Update
        Profile.findOneAndUpdate(
          { userID: req.user.id },
          { $set: profileFields },
          { new: true }
        ).then((profile) => res.json(profile));
      } else {
        // Create
        // Check if username exists
        Profile.findOne({ username: profileFields.username }).then((profile) => {
          if (profile) {
            errors.username = "This username is taken. Try a new one.";
            return res.status(400).json(errors);
          }
          // Save Profile
          new Profile(profileFields)
            .save()
            .then((profile) => res.json(profile));
        });
      }
    });
  }
);
module.exports = router;
