// **** Codes for Home Page ****
//Javascript code for making image pop out
function new_window(url)  
{

	link = window.open(url,
	'_new', 'toolbar=0,menubar=0,scrollbars=1,status=0,resizable=1,top=80,left=400px,fullscreen=0,Height=650px,Width=710px', '');
}

// part 1 ACR
// took me forever to figure out why my php isn't working until I read the forum notes. 
// to access the php file, it is based on relative path

// part 2 ACR
// figure out how to capture the responseText and output it without recreating the HTTPRequest
// over and over. Created the Request as a function and used a condition statement inside it.
// depending on the URL, it will output to the correct textbox.

