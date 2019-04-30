// JavaScript Document

// Hide browser warning for everyone
jQuery( function(){	
	jQuery('#myModal1').modal('hide');
	return false;
});

// Get IE or Edge browser version (IE dropped condition comment support from IE11)
jQuery (function isIE() {
    var ua = window.navigator.userAgent; //Check the userAgent property of the window.navigator object
    var msie = ua.indexOf('MSIE '); // IE 10 or older
    var trident = ua.indexOf('Trident/'); //IE 11

    return (msie > 0 || trident > 0);
});
	
// Show browser warning for IE only
jQuery (function ShowIEAlert(){
    if(isIE()){
    	jQuery('#myModal1').modal('show');
	
		jQuery('#myModal1 .button, .modal').click(function() {
			$('.modal, .modal-backdrop' ).hide();
		});

		return false;
    }
});


