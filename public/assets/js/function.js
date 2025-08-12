$(document).ready(function() {
	
	
	$('.thumbnails').owlCarousel({
		loop:true,
		margin: 10,
		nav:false,  
		//		navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>' , '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		dots:false,
		items:4,
		autoplay: false
	});

	
	$('.best-slider-sim').owlCarousel({
		loop:true,
		margin:20,
		nav:false,  
//		navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>' , '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		dots:false,
		items:5,
		autoplay:true,
		autoplayTimeout:2000,
		autoplayHoverPause:true,
		responsiveClass:true,
		responsive:{
			0:{  
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:4
			}
		}
	});
	

	$('.dep-store').owlCarousel({
		loop:true,
		margin:20,
		nav:false,  
//		navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>' , '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		dots:false,
		items:5,
		autoplay:true,
		autoplayTimeout:2000,
		autoplayHoverPause:true,
		responsiveClass:true,
		responsive:{
			0:{  
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:5
			}
		}
	});
	
    $('.test-slider').owlCarousel({ 
		loop:true,
		margin:20,
		nav:true,  
		navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>' , '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		dots:true,
		autoplay:true,
		autoplayTimeout:2000,
		autoplayHoverPause:true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
		}
	})
 
 $('.btnNext').click(function(){
  $('.nav-tabs > .active').next('li').find('a').trigger('click');
  $('.nav-tabs > .active').next('li').addClass('active').siblings().removeClass('active');
  $('.nav-tabs > .active').prev('li').addClass('done');
});

$('.btnPrevious').click(function(){
  $('.nav-tabs > .active').removeClass('done');
  $('.nav-tabs > .active').prev('li').find('a').trigger('click');
});
jQuery('.sign-form ul.nav.nav-tabs li a').click(function () {
    var dataimage = jQuery(this).data('image');
  //  alert(dataimage)
    jQuery('.formrimg img#pic_update').attr('src',dataimage);
})
 
});
 