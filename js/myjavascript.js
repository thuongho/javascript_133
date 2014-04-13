// **** Codes for Home Page ****
//Javascript code for making image pop out
function new_window(url)  
{

	link = window.open(url,
	'_new', 'toolbar=0,menubar=0,scrollbars=1,status=0,resizable=1,top=80,left=400px,fullscreen=0,Height=650px,Width=710px', '')

}
// 
// $(document).ready(function()){
// 	$('th').click(function()){
// 		$(this).fadeOut('slow');
// 	});
// });
// $(document).ready(function() {
//     $('.but').click(function() {
//         $(this).fadeOut('slow');
//     });
// });

// **** Codes for Part 2 ****
// calculating the sum, avg, product, smallest, and largest input
function doMath()
{
	var number1, number2, number3, n1, n2, n3, sum, avg, prod, small, large;
	number1 = document.getElementById("num1").value;
	number2 = document.getElementById("num2").value;
	number3 = document.getElementById("num3").value;
	n1 = parseInt(number1);
	n2 = parseInt(number2);
	n3 = parseInt(number3);
	sum = n1 + n2 + n3;
	avg = (n1 + n2 + n3)/3;
	prod = n1 * n2 * n3;
	small = Math.min(n1,n2,n3);
	large = Math.max(n1,n2,n3)
	alert("Sum: " + sum + "\nAverage: " + avg + "\nProduct: " + prod + "\nSmallest Number: " + small + "\nLargest Number: " + large);
}

// **** Codes for Part 3 ****
// count the negatives, positives, and zeros
function countMe()
{
	var number1, number2, number3, number4, number5, n1, n2, n3, n4, n5, neg, pos, zer, arrayNumbers;
	number1 = document.getElementById("num1").value;
	number2 = document.getElementById("num2").value;
	number3 = document.getElementById("num3").value;
	number4 = document.getElementById("num4").value;
	number5 = document.getElementById("num5").value;
	n1 = parseInt(number1);
	n2 = parseInt(number2);
	n3 = parseInt(number3);
	n4 = parseInt(number4);
	n5 = parseInt(number5);
	neg = 0; pos = 0; zer = 0;
	arrayNumbers = [n1,n2,n3,n4,n5]
	for (var i=0; i < arrayNumbers.length; i++){
		if(arrayNumbers[i] > 0){
			pos += 1;
		}
		else if(arrayNumbers[i] < 0){
			neg += 1;
		}
		else {
			zer += 1;
		}
	};
	document.math.result.value = ("The numbers you input are: " + number1 + ", " + number2 + ", " + number3 + ", " + number4 + ", " + number5 + "\nTotal Negative Numbers: " + neg + "\nTotal Positive Numbers: " + pos + "\nTotal Zeros: " + zer);
};

//part 3 fade the results
$(document).ready(function(){
	$('button').click(function(){
		$('#result').fadeTo("slow", 0.5);
	});
});