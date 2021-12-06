var database = [
	{
		username: "Zsigmond",
		password: "secret123"
	},
	{
		username: "Josh",
		password: "password1"
	},
	{
		username: "Elly",
		password: "Elly773"
	}
];
var newsFeed = [
	{
		username: "James",
		timeline: "Javascript is very interesting!"
	},
	{
		username: "Conor",
		timeline: "How do I sign up or this course?"
	},
	{
		username: "Jess",
		timeline: "I cerated my first website!"
	},
];

var userNamePrompt = prompt("What's you're username?");
var passwordPrompt = prompt("What's you're password?");

function isUserValid(username, password) {
	for (var i = 0; i < database.length; i++) {
		if(database[i].username === username &&
		database[i].password === password) {
			return true;
		}
	}
	return false;
}

function signIn(username, password) {
	if (isUserValid(username, password)) {
		console.log(newsFeed);
	} else {
		alert("Sorry, wrong username or password.");
	}
}

signIn(userNamePrompt, passwordPrompt);