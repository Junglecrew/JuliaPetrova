$(document).ready(function() {


	$("#portfolio_grid").mixItUp();

	$(".popup").magnificPopup({type:"image"});
	$(".popup_content").magnificPopup({type:"inline", midClick:true, showclosebtn: true, closeBtnInside:true, closeOnContentClick: true});

	$(".top_text h1").animated("fadeInDown", "fadeOutUp");
	$(".top_text p, .section_header").animated("fadeInUp", "fadeOut");
	$(".animation_1").animated("flipInY", "flipOutY");
	$(".animation_2").animated("fadeInLeft", "fadeOut");
	$(".animation_3").animated("fadeInRight", "fadeOut");
	$(".animation_4").animated("zoomIn", "fadeOut");

	$(".left .resume_item").animated("fadeInLeft", "fadeOut");
	$(".right .resume_item").animated("fadeInRight", "fadeOut");

	function heightDetect(){
		$(".main_head").css("height", $(window).height());
	};	
	heightDetect()
	$(window).resize(function() {
		heightDetect();
	});

	$(".toggle_mnu").click(function() {
  		$(".sandwich").toggleClass("active");
	});

	$(".top_mnu ul a").click(function(){
		$(".top_mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");
	}).append("<span>");

	$(".toggle_mnu").click(function(){
		if ($(".top_mnu").is(":visible")) {
			$(".top_text").removeClass("h_opasify");
			$(".top_mnu").fadeOut(600);	
			$(".top_mnu li a").removeClass("fadeInUp animated");
		} else {
			$(".top_text").addClass("h_opasify");
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li a").addClass("fadeInUp animated");
			$(".top_mnu").click(function() {
				$(".top_text").removeClass("h_opasify");
			});
		}
	});



	$("input,select,textarea").jqBootstrapValidation(); 

	$(".top_mnu ul a").mPageScroll2id(); 


});

$(window).load(function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});
