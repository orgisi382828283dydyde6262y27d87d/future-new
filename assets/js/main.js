
$(document).ready(function(){
	var slideImages = [ {src: '../../spects/spect1.jpg'},
	              		{src: '../../spects/spect2.jpg'},
	              		{src: '../../spects/spect3.jpg'},
	              		//{src: '../jRCarousel/images/04.jpg'},
	              		//{src: '../jRCarousel/images/05.jpg'} 
                      ]
	//var jR3DCarousel;
	
	jR3DCarousel = $('.jR3DCarouselGallery').jR3DCarousel({
		width: 528, 		/* largest allowed width */
		height: 336, 		/* largest allowed height */
		slides: slideImages /* array of images source */
	});

  })
