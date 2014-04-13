// **** Codes for Home Page ****
//Javascript code for making image pop out
function new_window(url)  
{

	link = window.open(url,
	'_new', 'toolbar=0,menubar=0,scrollbars=1,status=0,resizable=1,top=80,left=400px,fullscreen=0,Height=650px,Width=710px', '');
}

// **** Codes for Part 2 ****
// calculate sales total
function totalIt(){

	// get hours worked input
	var hw1 = document.getElementById("hrWorked1").value,
		hw2 = document.getElementById('hrWorked2').value,
		hw3 = document.getElementById("hrWorked3").value,
		hw4 = document.getElementById("hrWorked4").value,
		hw5 = document.getElementById("hrWorked5").value,
		hw6 = document.getElementById("hrWorked6").value,
		hw6 = document.getElementById("hrWorked6").value,

	// get rate of pay from input
	hr1 = document.getElementById("hrRate1").value,
	hr2 = document.getElementById("hrRate2").value,
	hr3 = document.getElementById("hrRate3").value,
	hr4 = document.getElementById("hrRate4").value,
	hr5 = document.getElementById("hrRate5").value,
	hr6 = document.getElementById("hrRate6").value,

	el1 = document.getElementById("num1b"),
	el2 = document.getElementById("num2b"),
	el3 = document.getElementById("num3b"),
	el4 = document.getElementById("num4b"),
	el5 = document.getElementById("num5b"),
	el6 = document.getElementById("num6b"),

	// convert them to integers
	w1 = parseFloat(hw1),
	w2 = parseFloat(hw2),
	w3 = parseFloat(hw3),
	w4 = parseFloat(hw4),
	w5 = parseFloat(hw5),
	w6 = parseFloat(hw6),
	r1 = parseFloat(hr1),
	r2 = parseFloat(hr2),
	r3 = parseFloat(hr3),
	r4 = parseFloat(hr4),
	r5 = parseFloat(hr5),
	r6 = parseFloat(hr6);

	var arrayGrossPayOut = [el1,el2,el3,el4,el5,el6],
		arrayWorked = [w1,w2,w3,w4,w5,w6],
		arrayRate = [r1,r2,r3,r4,r5,r6],
		arrayGross = [];
	for (var i=0, l = arrayWorked.length; i < l; i++){

		// need to enter in a number
		if (arrayWorked[i]=="" || arrayWorked[i]==null || isNaN(arrayWorked[i]) ||
			arrayRate[i]=="" || arrayRate[i]==null || isNaN(arrayRate[i])) {
			alert("Please enter only integers.");

		// if worked over 40 hours
		} else if (arrayWorked[i] > 40) {
			arrayGross.push((arrayWorked[i] - 40) * (0.5 * arrayRate[i]) +
				(arrayWorked[i] * arrayRate[i]));

			// rate * hours worked
		} else {
			arrayGross.push(arrayRate[i] * arrayWorked[i]);
		}
	}
	
	// output the gross
	for (var i=0, l = arrayGross.length; i < l; i++) {
		var element = arrayGrossPayOut[i],
			gross = arrayGross[i];
		element.value = parseFloat(gross).toFixed(2);
		// element.value = parseFloat(gross);
	}		
}

// **** Codes for Part 4 ****
// calculate the retail price and total for the week with switch
function calcIt() {

	// get the product value
	var item1 = document.getElementById("item1").value,
		item2 = document.getElementById("item2").value,
		item3 = document.getElementById("item3").value,
		item4 = document.getElementById("item4").value,
		item5 = document.getElementById("item5").value;

	// get the quantity input value
	var qty1 = document.getElementById("qty1").value,
		qty2 = document.getElementById("qty2").value,
		qty3 = document.getElementById("qty3").value,
		qty4 = document.getElementById("qty4").value,
		qty5 = document.getElementById("qty5").value;

	// get the element for the total
	var total1 = document.getElementById("num1b"),
		total2 = document.getElementById("num2b"),
		total3 = document.getElementById("num3b"),
		total4 = document.getElementById("num4b"),
		total5 = document.getElementById("num5b"),
		total6 = document.getElementById("num6b");

	var arrayItems = [item1,item2,item3,item4,item5],
		arrayQty = [qty1,qty2,qty3,qty4,qty5],
		arrayTotal = [total1,total2,total3,total4,total5],
		gross = 0;

	for (var i = 0, l = arrayItems.length; i < l; i++) {
		
		// change quantity to number to do test
		var number = parseInt(arrayQty[i]),
			total = arrayTotal[i],
			cost = 0;

		if (isNaN(number) || number < 0) {
			alert("Please enter positive integers only for the quantity.");
		} else {
		
			// switch to handle the product price 
			switch(arrayItems[i]) {
				case "1":
					cost = number * 2.98;
					break;
				case "2":
					cost = number * 4.50;
					break;
				case "3":
					cost = number * 9.98;
					break;
				case "4":
					cost = number * 4.49;
					break;
				case "5":
					cost = number * 6.87;
					break;
			}
			total.value = cost.toFixed(2);	
			gross = gross + cost;
		}
	}
	total6.value = gross.toFixed(2);
}


// **** Codes for Part 5 ****
// jQuery script for view/hide instructions
$(document).ready(function(){
	$('.flip').click(function(){
		$('.instruction').slideToggle("slow");
	});
});