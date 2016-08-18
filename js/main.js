
$(document).ready(function(){
	$('#toggle-demo').change(changeBgColor);
	// JQ
  	function showTextArea(){
  		$("textarea").removeClass("hidden");
  	}
  	function changeBgColor(){  		
		if($(this).prop('checked')){
			$('body').removeClass('bg-blue');
			$('body').addClass('bg-red');
		} else {
		$('body').removeClass('bg-red');
			$('body').addClass('bg-blue');
		}
  	}
});

