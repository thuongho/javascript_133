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
