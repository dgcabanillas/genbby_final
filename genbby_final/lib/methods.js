import { Meteor } from 'meteor/meteor';
import { Accounts } from "meteor/accounts-base" ;

if(Meteor.isServer){
	Meteor.publish("profileUser",function(){
		if(this.userId) {
			return Meteor.users.find({_id: this.userId},{"gamerProfile.dota2Profile": 1});
		}else{
			this.ready();
		}
	});
}


Meteor.methods({
	'user.id'(){
		return Meteor.userId();
	}
});

