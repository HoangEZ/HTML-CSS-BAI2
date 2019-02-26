$(document).ready(function(){
    $('.gallery-link').magnificPopup({
        type: 'image',
        removalDelay:300,
        mainClass:'mfp-fade'
      });
      $('.btn-play').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
      });
})