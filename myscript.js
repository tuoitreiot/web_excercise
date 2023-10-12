function calculateAge(yearBorn) {
	var currentTime = new Date();
	var currentYear = currentTime.getFullYear();
	return currentYear - yearBorn;
	console.log(age);
}

var name =prompt("Enter your name: ");

var yearBorn = prompt("Enter the year you were born: ");
var age;
age = calculateAge(yearBorn);

console.log(name + " is " + age 
+ " years old");

var message = "";
if (age < 18) {
	message += "You are";
	var i =0;
	while(i<5) {
		message+= " very "
		i++;
	}
	message += "young"
	console.log(message);
}

else if ((age>5) && (age<10)) {
	message += "You are a kid"
	console.log(message);
}

else if (age<50) {
	message += "You are quite young";
	console.log(message);
}

else {
	message += "You are over 50 years old";
	console.log(message);
}

var gender = prompt("Are you male or female ? ");
switch (gender) {
	case "male":
		console.log("You are a man");
		break;
	case "female":
		console.log("You are a woman");
		break;
	default:
	console.log("Wrong gender input, undentified")
			
}

var isClose = confirm("Do you want to close current tab ?");

if (isClose ===true) {
	console.log("Bye Bye");
	close(); 
}
else {
	console.log("Thanks for your stand");
}	
