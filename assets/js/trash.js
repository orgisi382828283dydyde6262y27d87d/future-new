var carouselCustomeTemplateProps =  {
    width: 470, 				/* largest allowed width */
   height: 272, 				/* largest allowed height */
   slideLayout : 'fill',     /* "contain" (fit according to aspect ratio), "fill" (stretches object to fill) and "cover" (overflows box but maintains ratio) */
   animation: 'slide3D', 	/* slide | scroll | fade | zoomInSlide | zoomInScroll */
   animationCurve: 'ease',
   animationDuration: 1900,
   animationInterval: 2000,
   slideClass: 'jR3DCarouselCustomSlide',
   autoplay: false,
   controls: true,			/* control buttons */
   navigation: ''			/* circles | squares | '' */,
   perspective: 2200,
   rotationDirection: 'ltr',
   onSlideShow: slideShownCallback
       
}
function slideShownCallback($slide){
console.log("Slide shown: ", $slide.find('img').attr('src'))
}

jR3DCarouselCustomeTemplate = $('.jR3DCarouselGalleryCustomeTemplate').jR3DCarousel(carouselCustomeTemplateProps);