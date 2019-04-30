// JavaScript Document

// Hide browser warning for everyone
jQuery( function(){	
	jQuery('#myModal1').modal('hide');
	return false;
});

// Show browser warning for IE only
jQuery (function isIE() {
    using_ms_browser = navigator.appName == 'Microsoft Internet Explorer' || (navigator.appName == "Netscape" && navigator.appVersion.indexOf('Edge') > -2) || (navigator.appName == "Netscape" && navigator.appVersion.indexOf('Trident') > -2);
	
	if (using_ms_browser == true){ //==
    	jQuery('#myModal1').modal('show');
	
		jQuery('#myModal1 .button, .modal').click(function() {
			$('.modal, .modal-backdrop' ).hide();
		});

		return false;
	}
});





