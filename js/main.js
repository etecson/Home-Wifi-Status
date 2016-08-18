
$(document).ready(function(){
  $('#toggle-demo').change(changeBgColor);
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

