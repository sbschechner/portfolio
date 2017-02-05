//state
var state = {
factArr :	[
		"Benjy's first name is actually Sheridan",
		"In High School, Benjy was on the cover of NJ Monthly",
		"Benjy usually eats 1 slice of $1 pizza a day",
		"In High School, Benjy ran hurdles",
		"in College, Benjy studied Neuroscience and Behavior",
		"In a 2 month trip, Benjy travelled to 17 countries",
			],
counter : 0,			
}

//modify state

var randomSelection = function(state){
	state.counter = math.floor(math.random()*7);
	console.log(state.counter);
}


//render state

var renderFact = function(state){
	var factState = "<p>" +  state.factArr[state.counter] +" </p>";
	$(".js-text").html(factState);
}


//DOM Manip
var getFacts = function (state){
	randomSelection(state);
	renderFact(state);
}

$(function(){
	getFacts(state);
});


