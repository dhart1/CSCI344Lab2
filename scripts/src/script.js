/**
 * This is the entry point for our JavaScript program
 */
function main() {
    var s = new Spotter("twitter.search",
					{q:"asheville", period:120},
					{buffer:true, bufferTimeout:750}
					);
	var color = 'red';
	var count=0;
	var object_array = [];
					
	s.register(function(tweet){
		count++;
		var profile_image="<img src='"+tweet.profile_image_url+"'/>";
		if(count%2===0) {
			color='red';
		}
		else {
			color='blue';
		}
		var object=$("<p class="+color+">"+profile_image + tweet.text +"</p>");
		object.hide();
		$("#tweets").prepend(object);
		object.slideDown();
		
		$("#tweets p:gt(3)").fadeOut(200, function (){
			$("#tweets p:gt(3)").remove();
		});
		
		/*
		if(count > 4){	
		var object_to_remove = $("#tweets p: last-child");
		object_to_remove.fadeout(1000, function () {
			object_to_remove.remove();
		});
		}*/
		
		/*object_array.push(object);
		if(object_array.length>5){
			var object_to_remove=object_array.shift();
			object_to_remove.fadeOut(2000, function() {
				object_to_remove.remove();	
			});
		}*/
			
	});
	s.start();
	
    //your tasks

    //1. Create a spotter and get it to insert tweets into the DOM
    //2. Add profile images (tweet.profile_image_url)
    //3. Make the tweets occur so the most recent are at the top (check jquery documentation)
    //4. Make the tweets slide down (hide/slide down)
    //5. Alternate the colors or the background of the tweets (css)
    //6. Show a maximum of 10 tweets at a time (remove old tweets from the dom) (use arrays)


}

main();
