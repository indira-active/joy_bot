//framework used for slackbot
var Botkit = require('botkit');

var controller = Botkit.slackbot({
	debug: false
})


//array used to store lust of team members 
var fullTeamList = [];
//array used to store users in a channel


//connect the bot to stream of messages(slack rtm messaging api)
controller.spawn({
	token: 'xoxb-230959860769-Ne80biViSwKx6nyKUMKK37Mh'
}).startRTM(function (err,bot) {
	if(err) {
		throw new Error(err)
	}

	//get all active users
	bot.api.users.list({presence:true}, function(err, res) { 
		if(res.hasOwnProperty('members') && res.ok) {
			var total = res.members.length;
			for(var i = 0; i < total; i++) {
				var member = res.members[i]
				if(member.presence === 'active') {
				fullTeamList.push(' \n user: ' + member.name)
				}
			}
			

			// console.log(res)
		}
	
		
	})


})




	//bot will listen for the following message and respond with current active users
	controller.hears('who is active',['direct_message','direct_mention', 'mention'], function(bot,message) {
		bot.reply(message,'Here you got ' + 'this will be the list of active users ' + fullTeamList.join(''))

	})
















