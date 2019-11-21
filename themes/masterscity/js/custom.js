$(document).ready(function(e){
	
$(".tp-add").on("click", function(e){
 $('html,body').animate({ scrollTop: 0 }, 'slow');
 e.preventDefault();	
	
});


	
	
	
	//  $(".text-service").hide('slow');
	//  $(".text-turn").hide('slow');
	
$(".uk-image-link-service").hover(
	   function(){ 
	 // $(".text-service").show('slow');
	  $(".uk-bg-cover-service").addClass("uk-hover");
	   
	   },
       function(){ 
	   //$(".text-service").hide('slow');
	   $(".uk-bg-cover-service").removeClass("uk-hover");
	   }	
);

$(".uk-image-link-turn").hover(
	   function(){ 
	  
	   //  $(".text-turn").show('slow'); 
         $(".uk-bg-cover-turn").addClass("uk-hover");
	   },
       function(){ 
	
	 //  $(".text-turn").hide('slow'); 
	   $(".uk-bg-cover-turn").removeClass("uk-hover");
	   }
  	
);

var slideUpServ = {
    distance: '150%',
    origin: 'left',
    opacity: null,
	delay: 2000
};

var slideUpTurn = {
    distance: '150%',
    origin: 'right',
    opacity: null,
	delay: 2000
};

//$(".uk-cover-container").fadeInScroll();
ScrollReveal().reveal('.serv', slideUpServ);
ScrollReveal().reveal('.turn', slideUpTurn);


$(".sidemenu").fly_sidemenu({
    btnContent: "<span id='open-side-nav' class='nav-side uk-navbar-toggle' ></span>", // This option let you define what appears inside the side menu button. You can add your custom icon here. This option accepts all HTML tags. The default value is "=" string.
    position: "left", // This option will let you define where the sidebar will appear on the page. Available options are "top", "left", "right", "bottom". The default value is "left"
    customSelector: "li", // In case you do not want to use lists, simply define your own css selector here. The default value is "li".
    hideButton: false // You can disable the auto creation of toggle button by changing this to true. The default value is false.
  });


//var root = $("body");
//var child = root.children();
//root.prepend("<div class='side-nav-wrapper'></div>");
var toggle = false;
var btn = $("#open-side-nav3").click (function () {
		setTimeout (function () {
			//$(".fsm-wrapper").prepend(btn);
			//btn.toggleClass ("opened")
			//btn.css({"top":btn.offset().top; })
			$(".sidemenu").toggleMenu();
			$(".fsm-container").unbind();
		},100)
   // $(".side-nav-wrapper").append(child);
   // root.addClass("side-nav-container")
  //  $(".side-nav-container").prepend($("#nav-content"));
  //  $("#nav-content").toggle();
	//root.toggleClass("open");
//	$(".side-nav-wrapper").height('100vh');
//	$(".side-nav-wrapper").toggleClass("open-nav");

})
           


	
});