const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId, //An ObjectId is a special type typically used for unique identifiers.
    ref: 'User' //reference to User model.The ref option is what tells Mongoose which model to use during population
  },
  username: {
    type: String,
    ref: 'User'
  },

  name: {
    type: String,
  },
  avatar: {
    type: String,
  },
  phoneNumber: {
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
