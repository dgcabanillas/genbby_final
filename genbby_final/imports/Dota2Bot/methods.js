import { BotClass } from './index.js';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Mongo } from 'meteor/mongo';

const testCollection = new Mongo.Collection('testCollection');

var credential = {
    "steam_name" : "d2gb0004",
    "steam_user" : "d2gb0004",
    "steam_pass" : "passwordrandom123",
    "steam_guard_code" : "steamGuardCodeIfApplicable"
};

testBot = new BotClass(credential);

var botReady = false;

Meteor.startup( () => {
  testBot.Dota2Bot.steamClient.connect();
});

testBot.Dota2Bot.dota2.on("botReady", function() {
  botReady = true;
  console.log("Bot is ready!");
});

Meteor.methods({
  'dota2bot.updateDota2Profile'() {
    let userId = Meteor.userId();
    if(Meteor.isServer){
      let user = Meteor.users.findOne({_id: userId});
      if(!user) {
        throw new Meteor.Error("invalid-userId", "Invalid user Id");
      }

      if(!user.gamerProfile.verifiedSteam) {
        throw new Meteor.Error("no-linked-steam-account", "This user doesn't has a linked steam account");
      }

      const wrappedGetAccountId = Meteor.wrapAsync(testBot.Dota2Bot.dota2.ToAccountId);
      const wrappedGetStats = Meteor.wrapAsync(testBot.Dota2Bot.getStats);
      const wrappedGetMMR = Meteor.wrapAsync(testBot.Dota2Bot.getMMR);

      let steamId = user.gamerProfile.steamId;
      let accountId = testBot.Dota2Bot.dota2.ToAccountID(steamId);

      const stats = wrappedGetStats(accountId);
      const mmr = wrappedGetMMR(accountId);

      Meteor.users.update({_id:userId}, {$set: {"gamerProfile.dota2Profile":stats.toJSON()}});
      Meteor.users.update({_id:userId}, {$set: {"gamerProfile.dota2Profile.MMR":mmr}});

    }
  },

  'dota2bot.getDota2Profile'( userId ){
    return Meteor.user.find({_id: userId}, {"gamerProfile.dota2Profile": 1});
  }
});
