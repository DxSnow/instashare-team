const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  userID: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  userName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
  },
  phoneNumber: {
    type: String
  },
  email: {
    type: String
  },
  gender: {
    type: String
  },
  bio: {
    type: String
  },
  website: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  numberOfPosts: {
    type: Number,
    default: 0
  },
  numberOfFollowers: {
    type: Number,
    default: 0
  },
  numberOfFollowings: {
    type: Number,
    default: 0
  },
  temporarilyDisabled:{
    type: Boolean,
    default: false
  }
});
//take the UserSchema and create a collection in the mongodb
module.exports = Profile = mongoose.model('Profile', profileSchema);
