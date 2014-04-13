//part 2 calculating the sum, avg, product, smallest, and largest input
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

function countMe()
{
	var number1, number2, number3, number4, number5, n1, n2, n3, n4, n5, neg, pos, zer, arrayNumbers;
	number1 = document.getElementById("numb1").value;
	number2 = document.getElementById("numb2").value;
	number3 = document.getElementById("numb3").value;
	number4 = document.getElementById("numb4").value;
	number5 = document.getElementById("numb5").value;
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

//part 4 display 7-10
function theRest(){
var htmlOutput = "";

htmlOutput += "<table border = '1'>";
htmlOutput += "<tr>"
htmlOutput += "<th>Number</th>"
htmlOutput += "<th>Square</th>"
htmlOutput += "<th>Cube</th>"
htmlOutput += "</tr>"

// for(var i=1; i<=6; i++){
// 	var num, sqr, cub;
// 	num = i;
// 	sqr = num * num;
// 	cub = sqr * num;
// 	tblOutput += "<tr>";
// 	tblOutput += "<td>" + num + "</td>";
// 	tblOutput += "<td>" + sqr + "</td>";
// 	tblOutput += "<td>" + cub + "</td>";
// 	tblOutput += "</tr>";
// };

htmlOutput += "</table>";

//set the div block to the tblOutput
document.getElementById("theTable").innerHTML = htmlOutput;
};

function process() {

// Set the htmlOutput variable to a string that contains an HTML table

var htmlOutput = "";

htmlOutput += "<table border = '1'>";
htmlOutput += "<tr><th>State</th><th>Capital</th></tr>";
htmlOutput += "<tr><td>California</td><td>Sacramento</tr>";
htmlOutput += "<tr><td>New York</td><td>Albany</tr>";
htmlOutput += "<tr><td>Texas</td><td>Austin</tr>";
htmlOutput += "</table>";

// Set the contents of the <div> block to the contents of htmlOutput

document.getElementById("theTable").innerHTML = htmlOutput;

}