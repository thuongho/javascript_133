// **** Codes for Home Page ****
//Javascript code for making image pop out
function new_window(url)  
{

	link = window.open(url,
	'_new', 'toolbar=0,menubar=0,scrollbars=1,status=0,resizable=1,top=80,left=400px,fullscreen=0,Height=650px,Width=710px', '');
}

// **** Codes for Part 2 ****
// Search a string for a character
function searchMe(){
  // Get the values of the string and search character
  var message = document.getElementById('message').value,
    searchChar = document.getElementById('n1').value;

  var searchLength = searchChar.length; 

  if (message.length == 0){
    alert("please enter a message string.");
  } else if (searchLength > 1 || searchLength == 0){
    alert("The search is broken. Please enter a single character.");
  } else {

    // counter for the number of occurrences
    var countChar = 0;

    for (var i = 0, l = message.length; i < l; i++){
      var currentChar = message.charAt(i);
      if (currentChar == searchChar) {
        countChar++;
      }
    }

    if (countChar == 0){
      
      // assemble HTML to pump into new window:
      var myText = "<html>\n";
      myText += "<head>\n";
      myText += "<title>No Results</title>\n";
      myText += "</head>\n";
      myText += "<body>\n";
      myText += "<div align='center'>\n";
      myText += "<textarea rows='4' cols='30'>Search character not found in text string! \n"; 
      myText += "Original text string: \n'" + message + "'</textarea>\n";
      myText += "<input type='button' value='Close Window' onclick='window.close()'>\n";
      myText += "</div>\n";
      myText += "</body>\n";
      myText += "</html>";

      // open up a new window
      var noResult = window.open("", 'new_window', 'top=0,left=0,fullscreen=0,Height=100px,Width=300px');

      // have browser focus on window
      noResult.focus();

      // pump html into to this new opened window
      noResult.document.write(myText);

      // tell browser that noResult document is finished loading
      noResult.document.close();
            
    } else {
      document.searchme.searchResult.value = ("The number of times '" + searchChar + "' is found: " + countChar);
    }
  }
}

// **** codes for Part 4 ****
// function to validate the user
var rememberMe = function(){

  // get the username and password from the user
  var username = document.getElementById('n1').value,
    password = document.getElementById('n2').value;

  // test to see if username and password is correct
  if (username != "rosebud" || password != "komodo"){
    alert("Incorrect name/password combination.");
  } else {
    alert("Hi rosebud!");
    setCookie("username", "rosebud", 30);
    window.location.replace("part4_signed_in.html");
  }
};

// function to set a cookie
function setCookie(cname, cvalue, expdays){
  // get current date and time
  var currentDay = new Date();

  // set the current time to the future date of when the cookie will expire
  currentDay.setTime(currentDay.getTime() + (expdays*24*60*60*1000));

  // assign expire time to variable 
  var expires = "expires=" + currentDay.toGMTString();

  // write to the cookie
  // format looks like this "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
  document.cookie = cname + "=" + cvalue + "; " + expires;
}

// function to get a cookie
function getCookie(cname){
  var name = cname + "=";
  var cookieArray = document.cookie.split(';');
  for (var i = 0, l = cookieArray.length; i < l; i++){
    var c = cookieArray[i].trim();
    if (c.indexOf(name)==0) return c.substring(name.length,c.length);
  }
  return "";
}

// function to check to see if the username is in the cookie
function checkCookie(){
  var username = getCookie("username");
  var uName = document.getElementById('n1'),
    pWord = document.getElementById('n2');

  if (username != ""){
    alert("Welcome again " + username);
    document.rememberCookies.n1.blur();
    uName.value = "rosebud";
    pWord.value = "komodo";
    
  } 
  // else {

    // username = prompt("Please enter your name:","");
    // if (user != "" && user != null){
    //   // stores the username into a cookie and save it for 365 days
    //   setCookie("username", user, 365)
    // }
  // }
}