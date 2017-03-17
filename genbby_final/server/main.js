import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { check } from 'meteor/check';

import '../lib/methods.js';
import '../imports/Dota2Bot/methods.js';
//import '../imports/publications.js';

Meteor.startup(() => {
  // code to run on server at startup

  Accounts.onCreateUser(function(options, user) {

    //First, get email of "new" user
    // - if his email is already registered to a user
    //   check if it's a new type of sign in (facebook etc)
    //   and add the data to the existing user IF the existing
    //   user has not already used that type for signing in.
    // - else, create a new user.

    let email;
    let existingUser;
    let currentUser;


    if(user.services) {
      if(user.services.facebook) {
        email = user.services.facebook.email;
      } else if(user.services.twitter) {
        email = "twitter@email.com"; // <---- WIP
      }

      if(email)
      {
        existingUser = Meteor.users.findOne({'emails.address': email});
      }

      //Linking a steam account
      if(user.services.steam && Meteor.user() != null)
      {
        Meteor.users.update({_id: Meteor.user()._id}, { $set: { "gamerProfile.steamId": user.services.steam.id } });
        Meteor.users.update({_id: Meteor.user()._id}, { $set: { "gamerProfile.verifiedSteam" : true } });
        Meteor.users.update({_id: Meteor.user()._id}, { $set: { "services.steam" : user.services.steam } });

        currentUser = Meteor.users.findOne({_id: Meteor.user()._id});

        Meteor.users.remove({_id: Meteor.user()._id});

        return currentUser;
      }
    }

    if (existingUser) {
      existingUser.services.facebook = user.services.facebook; // <---- what happens it someone logs in with facebook but no with twitter?
      existingUser.services.twitter = user.services.twitter; // <------
      Meteor.users.remove({_id: existingUser._id});
      return existingUser;
    }

    const newUser = {services:{password:{}},
      userProfile:{},
      gamerProfile:{}
    };
    newUser.createdAt = new Date();

    if(user.services.facebook) {
      let fb = user.services.facebook;
      newUser.userProfile.first_name = fb.first_name;
      newUser.userProfile.last_name = fb.last_name;
      newUser.userProfile.age = fb.age_range.max; // <---- bad
      newUser.userProfile.gender = fb.gender;

      newUser.services.facebook = fb;
      newUser.emails = [{address: fb.email, verified: true}];

    } else if (user.services.twitter) {

    } else { // creating user with register on genbby
      newUser.userProfile.first_name = options.first_name;
      newUser.userProfile.last_name = options.last_name;
      newUser.userProfile.birthdate = options.birthdate;
      newUser.userProfile.gender = options.gender;
      newUser.gamerProfile.gamerTag = options.username;

      newUser.services.password = user.services.password;
      newUser.emails = user.emails;


    }

    newUser.gamerProfile.verifiedSteam = false;
    newUser.gamerProfile.verifiedLol = false;
    newUser.gamerProfile.dota2Profile = {};
    newUser.services.steam = {};

    return newUser;
  });

  Accounts.urls.resetPassword = function(token) {
    return Meteor.absoluteUrl('reset-password/' + token);
  };

  process.env.MAIL_URL = "smtp://genbbybot123%40gmail.com:gennbybot123@smtp.gmail.com:465/";
});

/*
user data:
{
  _id
  createdAt
  services {
    password {
      bcrypt
    }
    facebook {

    }
    twitter {

    }

  }
  userProfile {
    first_name
    last_name
    age
    gender
    country
  }

  emails [
    {address..., verified}
  ]

  gamerProfile {
    gamerTag
    steamId
    lolId
    lolRegion
    verifiedSteam
    verifiedLol
    dota2Profile
  }
}
*/
