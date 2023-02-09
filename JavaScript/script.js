var database=[
	{
		username:"Carlos",
		password:"12345678"
	},{
		username:"Travis",
		password:"Cactus"
	},{
		username:"Uzi",
		password:"LIR2"
	}];
var newsFeed=[{
	username:"Drake",
	timeline:"Views Out Now!"
},{
	username:"Kanye West",
	timeline:"Wiz Wears cool pants!!!"
},{
	username:"Jordan",
	timeline:"Got the flu"
}];

var userNamePrompt=prompt("Enter Username: ");
var passwordPrompt=prompt("Enter Password: ");


function signIn(userName,passWord){
	// if(userName==database[0].username && passWord==database[0].password){
	// 	console.log(newsFeed)
	// }
	// else{
	// 	alert("Sorry Wrong user name and Password");
	// }
	var flag=false;
	for(var i=0;i<database.length;i++)
	{
		if(database[i].username==userName && database[i].password==passWord)
		{

			flag=true;
			console.log(flag);
		}
	}
	if(flag!=true)
	{
		console.log(flag);
	}

};
signIn(userNamePrompt,passwordPrompt);