
$(document).ready(function(){
  $('#toggle-demo').change(toggleActions);
  $(".nav a").on("click", function(){
    $("ul.nav").find(".active").removeClass("active"); 
    $(this).parent().addClass("active");
  });
  $('[data-toggle="tooltip"]').tooltip();
  
  // $("ul.dropdown-menu>li").click(function(){
  //     if (noneSelected()) { 
  //       $('#toggle-demo').bootstrapToggle('off');
  //       updateBgColor;
  //     } else { 
  //       $('#toggle-demo').bootstrapToggle('on');
  //       updateBgColor;
  //     }
  // });  

  // function noneSelected(){
  //   var n = true;
  //   $("ul.dropdown-menu>li").each(function(){
  //     if ($(this).hasClass("selected")) 
  //       {return n = false};
  //   });
  //   return n;
  // }

  function toggleActions(){  
    updateBgColor();  
    var isToggleOn = $('#toggle-demo').prop('checked');
    if (!isToggleOn) refreshDropdown();
;
  }
  function refreshDropdown(){
    $('.selectpicker').selectpicker('deselectAll');
  }
  function updateBgColor(){  		
  	if($('#toggle-demo').prop('checked')){
  		$('body').removeClass('bg-blue');
  		$('body').addClass('bg-red');
  	} else {
  		$('body').removeClass('bg-red');
  		$('body').addClass('bg-blue');
  	}
  }
  function toggleOn() {
    $('#toggle-demo').bootstrapToggle('on')
  }
  function toggleOff() {
    $('#toggle-demo').bootstrapToggle('off')  
  }
  

});