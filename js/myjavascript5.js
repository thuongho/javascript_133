// **** Codes for Home Page ****
//Javascript code for making image pop out
function new_window(url)  
{

	link = window.open(url,
	'_new', 'toolbar=0,menubar=0,scrollbars=1,status=0,resizable=1,top=80,left=400px,fullscreen=0,Height=650px,Width=710px', '');
}

// **** Codes for Part 1a ****
// ACR figuring out the values for the checkbox and radio button was hard
// had to use alert
function validate()
{

	// create messages
	var msg1 = "You forgot to fill out your name.",
		msg2 = "Looks like you didn't pick a color.",
		msg3 = "Surely you like one of those categories.",
		msg4 = "Don't be shy. Tell us how many times you exercise per week.";

	var name = document.survey.name.value;
		favColor = document.getElementsByName('color'),
		likes = document.getElementsByName('likes'),
		exercises = document.survey.exercises.value;

	var pickedFavColor = "";

	// test for blank name	  	    
  if (name == "" || name == null)
	{          	
    alert(msg1);
    return false;
  }

  // loop through to find the checked color
  for (i=0, l = favColor.length; i < l; i++) {
  	if (favColor[i].checked){
  		pickedFavColor = favColor[i].value;
  	}
  }          
    
  // test to see if any color is picked
  if (pickedFavColor == ''){
	 	alert(msg2);
	 	return false;
  // } else {
  // 	// test purpose
	 //  alert("My favorite color is " + pickedFavColor);
	}

	// loop for the checkboxes
	var likesArray = [];
	for (i=0, l = likes.length; i < l; i++){
		if (likes[i].checked){
			likesArray.push(likes[i].value);
		}
	}

	// test if any checkbox has been selected
	if (likesArray.length == 0){
		alert(msg3);
		return false;
	// } else {
	// // test purpose
	//   // alert("Checkbox " + likesArray.split(', '));
	//   alert(likesArray.length);
	}

	// test if dropdown list has been selected
	if (exercises == ' '){
		alert(msg4);
		return false;
	// } else {
	// 	// test purpose
	//   alert("Exercise " + exercises);
	}

	alert("I can't get the form to do mailto. \nSo your info is..."
		+ "\n\nName: " + name
		+ " \nFavorite color: " + pickedFavColor
		+ " \nInterested in: " + likesArray.join(', ')
		+ " \nExercise habit: " + exercises);
}

// **** Part 1b ****
var changePage = function(form) {

  var newURL = form.newPage.selectedIndex
  location = form.newPage.options[newURL].value;
};

