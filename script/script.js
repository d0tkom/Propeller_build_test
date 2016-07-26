var position = 0;
var autoplay = true;
$(document).ready(function(){
	// Set the interval to be 5 seconds
	if (autoplay) {
	setInterval(function(){
		carousel(1);
		position++;
		if (position==6) {
			position = 0;
			document.getElementById(5).src = "./image/rectangle.png";
		}
		else {
			document.getElementById(position-1).src = "./image/rectangle.png";
		}
		document.getElementById(position).src = "./image/on.png";
		console.log(position);
	},3000);
	}
});

function carousel(x) {
	$("#carousel ul").animate({marginLeft:-x*1240},1000,function(){
		$(this).find("li:last").after($(this).find("li:first"));
		$(this).css({marginLeft:0});
	})
}


