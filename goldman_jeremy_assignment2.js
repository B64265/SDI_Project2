//Jeremy Goldman
//SDI_Project2
//02/10/13
//
//   This is a continuation of the last story about a customer who goes to purchase a mobile phone*
//   For the sake of my sanity, I am not going to include the original story in this project...
//   Sorry :P

//Variables
var custInLine = 8;
var linesRequested = 3;
var lineMax = 5;
var currentLines = 2;
var monthsSinceUpgrade = 28;
var phoneSelection = ["Galaxy S III", "RAZR HD", "iPhone 5", "Droid Incredible LTE"];
var custCurrentCarrier = "Verizon Wireless";
var supportedCarriers = ["Verizon Wireless", "Sprint", "AT&T"];
var custFirstName = "Jenna";
var custLastName = " Mike-Mayer";

//Procedure function - No return value
var recentlyUpgraded = function(monthsSinceUpgrade){
	
	if(monthsSinceUpgrade >= 18){
		console.log("You havent upgraded to a new phone in a while! You picked a great time to come in!");
	}else{
		
		console.log("It looks like you recently got this phone, but lets see what we can do!");
	}
	
};

//BOOL Function - return BOOL
var hasCustCarrier = function (supportedCarriers, custCurrentCarrier){
	
	if(supportedCarriers.indexOf(custCurrentCarrier > -1)){
		console.log("Great! It looks like " + custCurrentCarrier + "is one of our supported carriers!");
		return true;
		
	}else{
		
		console.log("I'm Sorry.  It looks like we don't support your carrier in store. :(");
		return false;
	}
	
};

// Number Function - return number
var customerLine = function(custInLine){
	var empToHelp = 2;
	
	while(custInLine > 0){
		console.log("There is " + custInLine +" customer(s) in line ahead of you.  We have "+ empToHelp +" employees to work through the line.");
		custInLine--;
	}
	return custInLine;
};

//String Function - return String
var goodBye = function(custFirstName, custLastName){
	
	var empName = "Jeremy";
	
	var thankCustomer = "Thanks for coming in today " + custFirstName + custLastName +"! My name is " + empName +" if you have any questions!";
	
	return thankCustomer;
	
};


