//state
var state = {
	factArr :	[
		"Benjy's first name is actually Sheridan",
		"In High School, Benjy was on the cover of NJ Monthly",
		"Benjy usually eats 1 slice of $1 pizza a day",
		"In High School, Benjy ran hurdles",
		"In College, Benjy studied Neuroscience and Behavior",
		"In a 2 month trip, Benjy travelled to 17 countries",
		"Benjy is in a Documentary Club",
			],
	imgArr : [
		"./images/winter.jpg",
		"./images/nature.jpg",
		"./images/hike.jpg",
		"./images/arrow.JPG",
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






