//Jeremy Goldman
//SDI_Project 2
//02/10/13
//
//   This is a continuation of the last story about a customer who goes to purchase a mobile phone*
//   For the sake of my sanity, I am not going to include the original story in this project...
//   Sorry :P

//Variables
var custInLine = 8;
var empToHelp = 3;
var waitTime = 20;
var linesRequested = 3;
var lineMax = 5;
var currentLines = 2;
var phoneSelection = ["Galaxy S III", "RAZR HD", "iPhone 5", "Droid Incredible LTE"];
var custCurrentCarrier = "Verizon Wireless";
var supportedCarriers = ["Verizon Wireless", "Sprint", "AT&T"];

//BOOL Function
var hasCustCarrier = function (supportedCarriers, custCurrentCarrier){
	
	if(supportedCarriers.indexOf(custCurrentCarrier > -1){
		console.log("Great! It looks like " + custCurrentCarrier + "is one of our supported carriers!");
		
	}else{
		
		console.log("I'm Sorry.  It looks like we don't support your carrier in store. :(");
		
	}
	
};