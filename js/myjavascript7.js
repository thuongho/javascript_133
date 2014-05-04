// **** Codes for Home Page ****
//Javascript code for making image pop out
function new_window(url)  
{

	link = window.open(url,
	'_new', 'toolbar=0,menubar=0,scrollbars=1,status=0,resizable=1,top=80,left=400px,fullscreen=0,Height=650px,Width=710px', '');
}


// ***** Codes for part 3 *****
// check password insecure

var redirectMe = function(){

  // get the password from the user
  var password = document.getElementById('n2').value;

  // test to see if password is correct
  if (password != "obama"){
    alert("Incorrect password.");
  } else {
    alert("You're in!");
    window.location.replace("part3_hot.html");
  }
};
