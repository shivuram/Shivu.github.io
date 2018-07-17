
//RegForm JS Validation

function checking()                                   
{
    var name = document.forms["RegForm"]["Name"]; 
    var email = document.forms["RegForm"]["EMail"]; 
   if (name.value == "")                                 
    {
        window.alert("Please enter your name.");
        name.focus();
        return false;
    }

  //RegExp - Pattern of Characters
  //Validate the Inputs
  //[@ is not present] 
  // [ tld (Top Level domain) can not start with dot "." ]
  //[ No character before @ ]
  //[ ".b" is not a valid tld ]
  //[ Should not be start with "." ]

   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(RegForm.Email.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}

 //Fill the form details to download CV

function checkbox()
{

var confirmmessage = "Please fill the form below to Download CV";
  var go = "#Sendmessage";
 
  var message = "Thank You";
 
  if (confirm(confirmmessage)) {
 
      window.location = go;
 
  } else {
 
 //Action Was Cancelled By User

       alert(message);
 
  }


}

/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});
 /*Scroll to top when arrow up clicked END*/

$window = $(window);
$window.scroll(function() {
  $scroll_position = $window.scrollTop();
    if ($scroll_position > 100) { // if body is scrolled down by 300 pixels
        $('.header-section').addClass('sticky');

        // to get rid of jerk
        header_height = $('.header-section').innerHeight();
        $('body').css('padding-top' , header_height);
    } else {
        $('body').css('padding-top' , '0');
        $('.header-section').removeClass('sticky');
    }
 });

