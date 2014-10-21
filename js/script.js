$(document).ready(function() {
	$(".icon-next").click(function() {
		var currentSlide = $(".active-slide");
		var nextSlide = currentSlide.next();
		var slide = document.getElementById("slide");
		var slideWidth = slide.style.height;

		if(nextSlide.length === 0) {
			nextSlide = $(".slide").first();
		}

		currentSlide.fadeOut(600).removeClass("active-slide");
		nextSlide.fadeIn(1600).addClass("active-slide");
	});
});