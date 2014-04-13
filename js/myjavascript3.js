// **** Codes for Home Page ****
//Javascript code for making image pop out
function new_window(url)  
{

	link = window.open(url,
	'_new', 'toolbar=0,menubar=0,scrollbars=1,status=0,resizable=1,top=80,left=400px,fullscreen=0,Height=650px,Width=710px', '');
}

// **** Codes for Part 1 ****
// jQuery script for view/hide instructions
$(document).ready(function(){
	$('.flip').click(function(){
		$('.instruction').slideToggle("slow");
	});
});


// calculating the final grade using hw avg, midterm, final, and ACR		
function gradeMe(){
	var score1, score2, score3, score4, n1, n2, n3, n4, final, arrayNumber;
	score1 = document.getElementById("num1").value;
	score2 = document.getElementById('num2').value;
	score3 = document.getElementById("num3").value;
	score4 = document.getElementById("num4").value;
	n1 = parseInt(score1);
	n2 = parseInt(score2);
	n3 = parseInt(score3);
	n4 = parseInt(score4);
	arrayNumber = [n1,n2,n3,n4];
	for (i=0;i<arrayNumber.length; i++){
		if (isNaN(arrayNumber[i]))
	  {
	  	alert("Please enter integers only for scores.");
	  }
	  else if (arrayNumber[i] > 100 || arrayNumber[i] < 0)
	  {
	  	alert("Scores must be between 0 and 100!");
	  }
	final = (.5 * n1) + (.2 * score2) + (.2 * score3) + (.1 * score4);
	document.math.num5.value = Math.round(final);
	};
	if (final < 70){
		alert("Your final grade is below a C, you will need to retake the course.");
	}
}


// **** Codes for Part 2 ****
// calculate sales total
function totalIt(){

	var qty1, qty2, qty3, qty4, n1, n2, n3, n4, i1, i2, i3, i4, totSale, final, arrayError;
	qty1 = document.getElementById("num1a").value;
	qty2 = document.getElementById('num2a').value;
	qty3 = document.getElementById("num3a").value;
	qty4 = document.getElementById("num4a").value;
	n1 = parseInt(qty1);
	n2 = parseInt(qty2);
	n3 = parseInt(qty3);
	n4 = parseInt(qty4);
	arrayError = [n1,n2,n3,n4];
	for (i=0;i<arrayError.length; i++){
		if (arrayError[i]=="" || arrayError[i]==null || isNaN(arrayError[i]))
		{
			// arrayError[i].innerHTML = "Please enter only integers.";
			// alert(arrayError[i]);
			alert("Please enter only integers.");
		}
	}
	
	// not sure how to stop the script from executing the rest of the codes
	i1 = n1 * 239.99;
	i2 = n2 * 129.75;
	i3 = n3 * 99.95;
	i4 = n4 * 350.89;
	totSale = i1 + i2 + i3 + i4;

	document.sale.num1b.value = parseFloat(i1).toFixed(2);
	document.sale.num2b.value = parseFloat(i2).toFixed(2);
	document.sale.num3b.value = parseFloat(i3).toFixed(2);
	document.sale.num4b.value = parseFloat(i4).toFixed(2);
	document.sale.num5b.value = parseFloat(totSale).toFixed(2);
	document.sale.num6b.value = parseFloat((totSale * 1.09) + 200).toFixed(2); 	
}


// **** Codes for Part 3 ****
// calculate ending balance
function creditMe(){
	var aNum, bal, tChar, tCred, aCred, n1, n2, n3, n4, cBal, summary, arrayError;
	n1 = document.getElementById("n1").value; 
	n2 = document.getElementById("n2").value;
	n3 = document.getElementById("n3").value;
	n4 = document.getElementById("n4").value;
	n5 = document.getElementById("n5").value;
	aNum = parseInt(n1);
	bal = parseInt(n2);
	tChar = parseInt(n3);
	tCred = parseInt(n4);
	aCred = parseInt(n5);
	arrayError = [aNum,bal,tChar,aCred];
	if (n1 == "" || n1==null){
		alert("Please enter an account number.");
	}
	else
	{
	for (i=0;i<arrayError.length; i++){
		if (arrayError[i]=="" || arrayError[i]==null || isNaN(arrayError[i]))
		{
			alert("Please enter only integers.");
		}
	}


	cBal = bal + tChar - tCred
	if (cBal > aCred){
		summary = "\nCredit limit exceeded by " + (cBal - aCred);
	}
	else {
		summary = "\nCredit available is " + (aCred - cBal);
	}
	document.credit.statement.value = ("Account number: " + aNum + "\nCredit limit: " + aCred + "\nBalance at beginning of month: " + bal + "\nTotal amount charged this month: " + tChar + "\nTotal amount of credits this month: " + tCred + "\nCurrent balance: " + cBal + summary );
}
}

//change textarea display
$(document).ready(function(){
	$("#change").click(function(){
		$("#statement").css({
			"color":"white",
			"background":"black",
			"font-style":"bold",
			"font-size":"large"
		});
	});
});


// **** Codes for Part 4 ****
//check to see if the numbers are a Palindrome
function paliMe(){
	var num, phrase;
	num = document.getElementById("p1").value;
	if (isNaN(num)){
		phrase = "Error, please enter only digits.";
	}
	else if (num.length != 5 || num == ""){
		phrase = "Please enter 5 digits.";
	}
	else if (num.charAt(0) == 0){
		phrase = "Cannot start with zero.";
	}
	else if (num.charAt(0) == num.charAt(4) && num.charAt(1) == num.charAt(3)){
		phrase = num + " is a palindrome";
	}
	else {
		phrase = num + " is not a palindrome";
	}
	document.pali.display.value = phrase;
}

// display the instructions
$(function(){
	$('#dialog').dialog({
		autoOpen: false, 
		show: { effect: "blind", duration: 500},
		hide: { effect: "explode", duration: 500}
	});
	$('#opener').click(function(){
		$('#dialog').dialog("open");
	});
});


// **** Codes for part 5 ****
// convert fahrenheit to celsius
function celsius(){
	var t1, temp, cel;
	t1 = document.getElementById("t1").value;
	temp = parseInt(t1);
	if (isNaN(temp)){
		alert("temperature must be a number");
	}
	else{
		cel = ((5/9) * (temp - 32));
		document.temp.convert.value = cel + " C";
	}
}

// convert celsius to fahrenheit
function fahrenheit(){
	var t1, temp, fah;
	t1 = document.getElementById("t1").value;
	temp = parseInt(t1);
	
	if (isNaN(temp)){
		alert("temperature must be a number");
	}
	else{
		fah = (((9/5) * temp) + 32);
		document.temp.convert.value = fah + " F";
	}
}