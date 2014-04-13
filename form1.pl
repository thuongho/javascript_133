#!/usr/local/bin/perl

# The above statement must be the first statement and it tells the 
# server where to find the perl interpreter so that the script can run
# (NOTE: this statement is machine dependent) 


do  "cgi-lib.pl" ||die "Fatal Error: Can't load cgi library";

# The above statement calls subroutines in the cgi-lib.pl library, 
# which are needed to run a perl program
# If cgi-lib.pl fails to load, then an error message is printed 


&ReadParse;

# The above line reads the stream of name=value pairs from the form
# and puts the values in a perl table called  in


print "Content-type: text/html\n\n";

# The above line indicates the Mime type of the information
# that the script is sending back to the browser thru the Web server
# In perl, a \n is a "carriage return, next line"
# \n\n is required here



# The next line says to output the following information, until the
# the statement    _END_   is reached

print<<"_END_";


<html>

<head>
<title>Survey Confirmation</title>

<meta http-equiv="Page-Enter"
 content="RevealTrans(Duration=3.000,Transition=2)">

<style>

body {font-family: comic sans ms; background-color: silver;}
a {text-decoration: none;}
a:hover {color: red;}

</style>

</head>

<body>

<div align="center">


<table bgcolor="#f5f5dc" cellpadding="5">
<tr>
<td>
<h1>Survey Confirmation</h2>
<p>Hi <span style="color: blue;">$in{'name'}</span>,</p>
<p>Thank you for taking your time in filling out our survey.</p>
<p>Just want to make sure that the following information about you is correct.</p>

<p>Looks like your favorite color is <span style="color: green">$in{'color'}</span>.</p>
<p>You like: 

<span style="color: green">$in{'sports'}</span>
<span style="color: green">$in{'science'}</span>
<span style="color: green">$in{'economy'}</span>
<span style="color: green">$in{'food'}</span>
<span style="color: green">$in{'animals'}</span>
<span style="color: green">$in{'adventure'}</span>
<span style="color: green">$in{'technology'}</span>
<span style="color: green">$in{'fantasy'}</span>

</p> 

<p>Your gym behavior is: <span style="color: green">$in{'exercises'}</span></p>


<p><hr></p>

<p align="center">
<a href="http://fog.ccsf.org./~tho36/cnit132/HW8a.html">Return to survey.</a></p>


</td>
</tr>
</table>
</div>
</body>
</html>

_END_
;





