//state
var state = {
	factArr :	[
		"I drink soylent 3x per week",
		"In previous roles, I have worn both a fish and a grilled cheese mascot costume",
		"My biggest vice is $1 pizza",
		"I belong to to different clothing subscription boxes",
		"Due to construction, I once had to use 6 forms of of transportation to get to work: Boat, Subway, Bus, Bike, Car, Train",
		"I run a documentary club",
		"Winner of the 2011 Millburn Deli Sandwich Run"
			],
	imgArr : [
		"./images/winter.jpg",
		"./images/nature.jpg",
		"./images/hike.jpg",
		"./images/sun.JPG",
		"./images/pineapple.JPG",
		"./images/nature2.jpg",
	],

	counter : 0,			
}

//modify state

var randomSelection = function(state){
	state.counter = Math.floor(Math.random()*7);
}


//render state

var renderFact = function(state){
	var factState = "<p id='funFact'>" +  state.factArr[state.counter] +" </p>";
	$(".js-text").html(factState);
}

var renderPic = function(state){
	$(".portImg").attr("src", state.imgArr[state.counter])
}

//DOM Manip
var getInfo = function (state){
	randomSelection(state);
	renderFact(state);
	renderPic(state);
}

$(function(){
	getInfo(state);
});






