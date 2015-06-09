$(document).ready(function(){
	for(var i=1; i<=100; i++){
		// creates a div element and instead of console.log you would have to use "div.text"
		var div=$("<div>"); 
		if(i%15 == 0) {
			div.text("fizzbuzz");
		}
		else if(i%3 == 0) {
			div.text("fizz");	
		} 
		else if(i%5 == 0) {
			div.text("buzz");	
		}
		else{
			div.text(i);
		}
		//selects the body element 
		$("body").append(div);
	}
});



//Notes from mentor: to get js source go here http://jquery.com/download/ --> then right click and copy link address --> <script src="paste link here">
//Notes from mentor: type localhost:8080 in the browser to look at your work and right click to view page source
//Notes from mentor: if you need to have a lot of conditions then add more "else if" statements in btw
//Notes from mentor: if(i%15 == 0) basically means "if i is divisible by 15 it is true because the remainder is 0"