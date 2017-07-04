//state
var state = {
	factArr :	[
		"My biggest vice is $1 pizza",
		"My first name is actually Sheridan",
		"I was on the cover of NJ Monthly",
		"I run a documentary club",
		"I ran a grilled cheese delivery business in college"
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
	state.counter = Math.floor(Math.random()*5);
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






