$(document).ready(function(){
	////navbar-toggler
$('.navbar-toggler').click(function(){
	$('.navbar-toggler').toggleClass('change');
})
///adding background and fixed
$(window).scroll(function(){
	let position = $(this).scrollTop();
	if(position >= 149){
		$('.navbar').addClass('navbar-background');
		$('.navbar').addClass('fixed-top');
	}else{
		$('.navbar').removeClass('navbar-background');
		$('.navbar').removeClass('fixed-top');
	}
})
///smooth scroll
$('.nav-item a').click(function(link){
	link.preventDefault();
	let target = $(this).attr('href');
	$('html, body').stop().animate({
		scrollTop:$(target).offset().top
	},3000);
})
$(".nav-item a, .header-link, #back-to-top").click(function(link) {
    link.preventDefault();

    let target = $(this).attr("href");

    $("html, body").animate(
      {
        scrollTop: ($(target).offset().top = 25)
      },
      3000
    );
  });

// init Isotope
var $grid = $('.grid').isotope({
});
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
// layout Isotope after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.isotope('layout');
});
	});