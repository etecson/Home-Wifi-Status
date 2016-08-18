
$(document).ready(function(){
	$('html').load(changeBgColor);
	$('#toggle-demo').change(changeBgColor());
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

  	function setCookie(elementValue) {
  	    document.cookie = elementValue;
  	}

  	function getCookie(cname) {
  	    var name = cname + "=";
  	    var ca = document.cookie.split(';');
  	    for(var i = 0; i < ca.length; i++) {
  	        var c = ca[i];
  	        while (c.charAt(0) == ' ') {
  	            c = c.substring(1);
  	        }
  	        if (c.indexOf(name) == 0) {
  	            return c.substring(name.length, c.length);
  	        }
  	    }
  	    return "";
  	}

  	function checkCookie() {
  	    var user = getCookie("username");
  	    if (user != "") {
  	        alert("Welcome again " + user);
  	    } else {
  	        user = prompt("Please enter your name:", "");
  	        if (user != "" && user != null) {
  	            setCookie("username", user, 365);
  	        }
  	    }
  	}
});

