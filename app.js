//Chapter 1 
//Task 1

// alert("Welcome to SMIT");

//Task 2

// alert("Error! Please enter a valid password.");

//Task 3

// alert("Welcome to JS Land....\n Happy Coding!");

//Task 4

// alert("Welcome to JS Land");

// alert("Happy Coding!");

//Task 5

 //alert("Hello... I can run JS through my web browser's console");

//Task 6

//in index.html

//Task 7

//in index.html

//Chapter 2
//Task 1

// var username = "usama";

// //Task 2

// var myName = "Usama Zahid";

// //Task 3

// var message = "Hello World";

// alert(message);

// //Task 4

// var name = "Usama Zahid";
// var age = "15 years old";
// var course = "Certified Mobile Application Development";
// alert(name);
// alert(age);
// alert(course);

// //Task 5

// var pizza = "PIZZA\nPIZZ\nPIZ\nPI\nP";
// alert(pizza);

// //Task 6

// var email = "usamazahid100@gmail.com";
// alert("Your Email: " + email);

// //Task 7

// var book =  "A smarter way to learn JavaScript";
// alert("I am trying to lear from the Book" + book);

// //Task 8

// document.getElementById('demo').innerHTML = "Yah! I can write";

// //Task 9

// alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬");

//Chapter 3
//Task 1

// var age = "I am 15 years old";
// alert(age);

//Task 2

// if(localStorage.getItem("visits") == null){
// localStorage.setItem("visits", 1);
// alert("You Visited: " + 1 + " Times");
// }else{
// var visits = parseInt(localStorage.getItem("visits")) + 1;
// localStorage.setItem("visits", visits);
// alert("You Visited: " + visits + " Times");
// }

//Task 3

// var birthYear = "1990";
// document.getElementById("demo").innerHTML = "My birth year is " + birthYear + "<br/> Data type of my declare variable is " + typeof(birthYear);

//Task 4
// var CustomerName = prompt("Your Name?");
// var ProductName = prompt("Product Name?");
// var Quantity = prompt("Quantity?");
// document.getElementById("demo").innerHTML = CustomerName + " Orderd " + Quantity + " " + ProductName + " on XYZ Cloting store";

//Chapter 4
//Task 1

// var a, b, c;

//Task 2

// var 1, #, -;

//Task 3

// var data = "<h1>Rules for naming JS variables</h1> <br />";
// data += "Variable names can only contain number, $ and _. For example: $any_1stVariable <br />";
// data += "Variable must begin with a letter, $ or _. For example : $name, _name or name <br />";
// data += "Variable names are case sensitive <br />";
// data += "Variable names should not be JS keyword";
// document.getElementById("demo").innerHTML = data;

//Chapter 5
//Task 1
// document.getElementById("demo").innerHTML = 1 + 1;
//Task 2
// document.getElementById("demo").innerHTML = 1 - 1;
// document.getElementById("demo").innerHTML = 1 * 1;
// document.getElementById("demo").innerHTML = 1 / 1;
//Task 3
// var number;
// document.getElementById("demo").innerHTML = "Value after variable declaration is:" + number + "<br/>";

// number = 5  ;
// document.getElementById("demo").innerHTML += "Initial value:  " + number + "<br/>";

// number = number++;
// document.getElementById("demo").innerHTML += "Value after increment is: " + number + "<br/>";

// number += 7;
// document.getElementById("demo").innerHTML += "Value after addition is :" + number + "<br/>";

// number = number--;
// document.getElementById("demo").innerHTML += "Value after decrement is: " + number + "<br/>";

// number = number%3 ;
// document.getElementById("demo").innerHTML += "The remainder is: " + number + "<br/>";

//Task 4
// var ticketCost = 600;
// var requiredTicket = parseInt(prompt("How Many Tickets?"));
// document.getElementById("demo").innerHTML ="Total Cost to buy " + requiredTicket + " is " + ticketCost * requiredTicket + "PKR";

//Task 5

// var table =  parseInt(prompt("Table Number?"));

// for(var i = 1; i<= 10; i++)
// document.getElementById("demo").innerHTML += table + " X " + i + " = " + table * i + "<br>";


//Task 6
// var temp =  parseInt(prompt("Temprature Celcius?"));
// document.getElementById("demo").innerHTML = temp + "<sup>0</sup>C is " + (temp - 32) * 5/9 + "<sup>0</sup>F <br>";

// var temp =  parseInt(prompt("Temprature Farenheit?"));
// document.getElementById("demo").innerHTML += temp + "<sup>0</sup>F is " + (temp * 9/5) + 32 + "<sup>0</sup>C";

//Task 7
// var price1 = 650;
// var quantity1 = 3;
// var price2 = 100;
// var quantity2 = 7;
// var shipping = 100;

// document.getElementById("demo").innerHTML = "Total Cost of your order is " + price1 * quantity1 + price2 * quantity2 + shipping;

//Task 8

// var english = 80;
// var math = 99;

// document.getElementById("demo").innerHTML =  "Total Marks 200 <br>";
// var total = english + math;
// document.getElementById("demo").innerHTML +=  "Marks Obtained " + total + " <br>";
// var percentage = (english + math)/200*100;
// document.getElementById("demo").innerHTML +=  "Percentage " + percentage + " <br>";

//Task 9

// document.getElementById("demo").innerHTML = "Total Currency in PKR: " + 10 * 150.48;

// //Task 10

// var calc = 2 +5 *10 /2;
// document.getElementById("demo").innerHTML = calc;

//Task 11

// var currentYear = 2020;
// var birthYear = 1994;
// document.getElementById("demo").innerHTML =  currentYear - birthYear;


//Task 12

// var radius = 20;
// var circumference = 2 *  Math.PI * radius;
// var area =  Math.PI * radius * radius;

// document.getElementById("demo").innerHTML = radius + " " + circumference + " " + area;

//Task 13

// var snack = "kit kat";
// var currentage = 25;
// var maxage = 900;
// var snacksperday = 3
// document.getElementById("demo").innerHTML =  maxage - currentage * snacksperday;


//Chapter 6-9
//Task 1

// var number = 10;
// number = ++number;
//  document.getElementById("demo").innerHTML = number;

//  number = number++;
//  document.getElementById("demo").innerHTML += number;

//  number = --number;
//  document.getElementById("demo").innerHTML += number;

//  number = number--;
//  document.getElementById("demo").innerHTML += number;

// //Task 2
//  var a = 2, b = 1;
//  // --a will be 1,
//  // --a - --b will be 0,
//  // --a - --b + ++b will be 1,
//  // --a - --b + ++b + b-- will be 1;

//  // console.log(--a);
//  // console.log(--a - --b);
//  // console.log(--a - --b + ++b);
//  console.log(--a - --b + ++b + b--);
// //Task 3
// var name = prompt("Your Name");
// alert("welcome " + name);
// //Task 4
// //Task 5

// var table =  prompt("Table Number?");
// console.log(table);
// if(table == "")
// 	table = 5;

// for(var i = 1; i<= 10; i++)
// document.getElementById("demo").innerHTML += table + " X " + i + " = " + table * i + "<br>";



//Task 6
// var english = parseInt(prompt("english marsk?"));
// var math = parseInt(prompt("math marsk?"));
// var science = parseInt(prompt("science marsk?"));

// document.getElementById("demo").innerHTML = (english + math + science) /300 * 100;

//Chapter 9-11
//Task 1
// var city = prompt("Your City?");
// if(city == "Karachi")
// 	alert("Welcome to Karachi");
// //Task 2
// var gender = prompt("Your Gender?");
// if(gender == Male){
// 	alert("Sir");
// }else{
// 	alert("Ma'am");
// }

//Task 3
// var color = prompt("Trafic Light Color?");
// if(color == "Red"){
// 	alert("Must Stop");
// }else if(color == "Yellow"){
// 	alert("Ready to move");
// }else if(color == "Green"){
// 	alert("Move now");
// }
// //Task 4
// var remainingfuel = parseInt(prompt("Remaining Fuel?"));
// if(remainingfuel < 0.25){
// 	alert("Please refill the fuel in your car");
// }
//Task 5
// a yes
// b no
// c condition 3
// d  no
// e true
// f yes
//Task 6
// var english = 80;
// var math = 99;

// document.getElementById("demo").innerHTML =  "Total Marks 200 <br>";
// var total = english + math;
// document.getElementById("demo").innerHTML +=  "Marks Obtained " + total + " <br>";
// var percentage = (english + math)/200*100;
// document.getElementById("demo").innerHTML +=  "Percentage " + percentage + " <br>";
// if(percentag >= 90){
// document.getElementById("demo").innerHTML +=  "A Grade";	
// }

//Task 7
// var guess = 9;
// var number = parseInt(prompt("Guess the Number"));
// if(number + 1 == guess){
// 	alert("Close enough");
// }

//Task 8
// var number = parseInt(prompt("Enter the Number"));
// if (number % 3 == 0){
// 	alert("divisible");
// }
//Task 9
// var number = parseInt(prompt("Enter the Number"));
// if (number % 2 == 0){
// 	alert("Even");
// }
//Task 10
// var number = parseInt(prompt("Enter the Number"));
// if(number > 40)
// 	alert("its too hot outside");
// else if(number > 30)
// 	alert("The weather today is normal");
// //Task 11
// var number1 = parseInt(prompt("Enter First Number"));
// var number2 = parseInt(prompt("Enter Second Number"));
// var operator = (prompt("Enter the Operator"));
// if(operator == +){
// 	alert(number1 + number2);
// }
//Chapter 14-16
//Task 1
// var student = ["ali", "usama",1 , true];
// console.log(student);
//Task 2
//Task 3
//Task 4
//Task 5
//Task 6
//Task 7
// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "BCOM", "MS", "M. Phil", "PhD"];
// for(var i = 0; i< qualifications.length; i++){
// 	document.getElementById("demo").innerHTML += qualifications[i] + "<br>";
// }
//Task 8 
//Task 9
//Task 10
//Task 11
//Task 12
//Task 13
//Task 14
//Task 15

// var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// var dropdown = "<select>";
// for(var i = 0; i< manufacturers.length; i++){
// dropdown += "<option value="+i+">"+manufacturers[i]+"</option>";
// }
// dropdown += "</select>";
// document.write(dropdown);

//Chapter 17-20
//Task 1
//Task 2
// var array = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];
// document.write(array[0][3]);
//Task 3
//Task 4
//Task 5
//Task 6
//Task 7
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var input = prompt("Enter Name");
// document.write(A.indexOf(input));
//Task 8
// var A = [24, 53, 78, 91, 12];
// var max = 0;
// for(var i = 0; i< A.length; i++){
// if(max < A[i]){
// max = A[i];
// }
// }
// document.write(max);
//Task 9
// var A = [24, 53, 78, 91, 12];
// var min = A[0];
// for(var i = 0; i< A.length; i++){
// if(min > A[i]){
// min = A[i];
// }
// }
// document.write(min);
//Task 10

//Chapter 21  - 25
//Task 1

// var fname = prompt("First Name?")
// var lname = prompt("Last Name?")
// alert("Welcome " + fname + " " +lname)

//Task 2

// var favmovie= prompt("Your Favorite Phone?");
// console.log("My favorite phone is : %s Length of string %s", favmovie, favmovie.length);

//Task 3


// var word= "Pakistani";
// console.log("String : %s \nIndex of string %s", word, word.indexOf("n"));


//Task 4

// var word= "Hello World";
// console.log("String : %s \nLast Index of string %s", word, word.lastIndexOf("l"));


//Task 5

// var word= "Pakistani";
// console.log("String : %s \nLast Index of string %s", word, word.charAt(3));

//Task 6

// var fname = prompt("First Name?")
// var lname = prompt("Last Name?")
// alert("Welcome ".concat(fname, " ", lname))


//Task 7

// var city = "Hydrabad";
// var word= "Islam";
// console.log("City : %s \nAfter replacement %s", city, city.replace("Hydr", word));

//Task 8

// var msg = "Ali and sami are best friends. they play cricket and football together.";
// var word= "&";
// console.log("Sentece : %s \nAfter replacement %s", msg, msg.replace(/and/g, word));


//Task 9

// var num = "472";
// console.log("Value: %s \nType: %s \nValue: %s \nType: %s", num, typeof(num), num, typeof(parseInt(num)))


//Task 10

// var input = prompt("enter text");
// console.log("User Input: %s \nUpper Case: %s", input, input.toUpperCase())
//Task 11


// var input = prompt("enter text");

// var words = input.split(' ');

// var title = [];

// for(i=0; i<words.length; i++){
// 	var letter = words[i].charAt(0).toUpperCase();
// 	title.push(letter + words[i].slice(1))
// }

// console.log(title.join(' '))

//Task 12

// var num = 35.36;
// console.log(num.toString().replace('.', ''));


//Task 13

// var username = prompt("Enter username");
// var pattern = /[!,.@]/g;

// if(username.match(pattern) != null)
// alert("Please Enter valid username");


// for(let ch of username){
// 	var ascii = ch.charCodeAt()
// 	if(ascii == 33 || ascii == 44 || ascii == 46 || ascii == 64){
// 		alert("Please Enter valid username");
// 	}
// }

//Task 14

// var arr = ["cake", "apple", "cookie", "chips", "patties"];
// var found = false;
// var input = prompt("enter search");

// for(let a of arr){
// 	// console.log(a);
// 	// console.log(input.toLowerCase());
// 	if(input.toLowerCase() == a){
// 		console.log("found");
// 		found = true;
// 		break;

// 	}
// }
// if(!found){
// 	console.log("not found");
// }


//Task 15


// var password = prompt("password");
// var pattern = /[!`~@#$%^&*()-_=+\|{}'";:/?.,<>]/g;
// var error = "";

// if(password.match(pattern) != null)
// 	error += "Invalid Character\n";
// else if(!isNaN(password.charAt(0)))
// 	error += "Fitst Character Cannot Be Number\n";
// else if(password.length < 6)
// 	error += "Length cannot be less than 6 digit\n";

// console.log(error);


//Task 16

// var university = "University of Karachi";
// for(let words of university){
// 	console.log(words)
// }


//Task 17

// var input = prompt("Enter your text");
// console.log(input.slice(-1))

//Chapter 21  - 25
//Task 1

// var number = Number(prompt("Enter your Number"))
// console.log(Math.round(number))
// console.log(Math.floor(number))
// console.log(Math.ceil(number))

//Task 2

// var number = Number(prompt("Enter your Number"))
// console.log(Math.round(number))
// console.log(Math.floor(number))
// console.log(Math.ceil(number))

//Task 3

// var number = Number(prompt("Enter your Number"))
// console.log(Math.abs(number))


//Task 4

// console.log(Math.floor(Math.random() * 6) + 1)

//Task 5

// if((Math.floor(Math.random() * 2) + 1) == 1)
// 	console.log("Heads")
// else
// 	console.log("Tails")


//Task 6

// console.log(Math.floor(Math.random() * 100) + 1)

//Task 7

// var number = prompt("Enter your weight");
// var pattern = /\d+\.*\d*/g;

// console.log("%s Kilograms", number.match(pattern)[0]);

//Task 8

// var secret = (Math.floor(Math.random() * 10) + 1)
// console.log(secret)
// var input = Number(prompt("Enter Number"))
// if(input == secret)
// alert("Congratulations")
// else
// alert("try again");

//Chapter 31  - 34
//Task 1

// var date = new Date();
// console.log(date);

//Task 2
// var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
// var date = new Date();
// console.log(months[date.getMonth()]);

//Task 3

// var days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
// var date = new Date();
// console.log(days[date.getDay()]);

//Task 4

// var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
// var date = new Date();

// if(days[date.getDay()] == "Sat" || days[date.getDay()] == "Sun")
// console.log("It's Fun Day");

//Task 5

// var date = new Date();
// var currentDate = date.getDate();
// if(currentDate < 16)
// console.log("First fifteen days of month")
// else if(currentDate > 16)
// console.log("Last days of month")

//Task 6
// let ms =new Date('1970-01-02');
// console.log(ms.getTime());

// let ms2 =new Date('2015-12-05 22:32:23');
// console.log(ms2.getTime());

// let ms3 =new Date();
// console.log(ms3.getTime());

// console.log(Number(ms3)/60000);
//Task 7

//Task 8

// let hours = new Date().getHours();
// console.log(hours);
// if(hours < 12)
// console.log("AM")
// else
// console.log("PM")
//Task 9

// let laterDate =new Date('2020-12-31');
// console.log(laterDate);

//Task 10

// let ramadanDate =new Date('2015-06-15').getTime();
// let today = new Date().getTime();

// console.log((today - ramadanDate)/60000/60/24);


//Task 11
// let refrenceDate =new Date('2015-06-15').getTime();
// let today = new Date().getTime();

// console.log((today - refrenceDate)/60000);

//Task 12

// let now = new Date().getTime();
// let newDate = now + 60000 * 60;

// let future = new Date(newDate);
// console.log(future)

//Task 13

// let now = new Date().getTime();
// let newDate = now - 60000 * 60 * 24 * 365 * 100;

// let past = new Date(newDate);
// console.log(past)

//Task 14
// var birthYear = Number(prompt("Your Birth Year"));

// let now = new Date().getFullYear() - birthYear;
// console.log(now)


//Task 15

// var customerName = "Usama";
// var currentMonth = "Jun";
// var numberofunits =300;
// var chargesperunit = 15;
// var netpayable = numberofunits * chargesperunit;
// var latepaymentsurcharge = netpayable * 0.3;
// var grosspayableafterdue = netpayable + latepaymentsurcharge;

// document.write(customerName + "<br>" + currentMonth  + "<br>" + numberofunits  + "<br>" + chargesperunit  + "<br>" + netpayable  + "<br>" + latepaymentsurcharge  + "<br>" + grosspayableafterdue)


//Chapter 35  - 38
// //Task 1
// let currentDate = ()=>{
// 	console.log(new Date())
// }
// currentDate();

// //Task 2

// let greeting = (firstname, lastname)=>{
// 	console.log("Welcome %s %s", firstname, lastname)
// }
// greeting("usama", "zahid");
// //Task 3
// let sum = (first, second)=>{
// 	return first + second;
// }
// let first = Number(prompt("First Number"));
// let second = Number(prompt("Second Number"));
// console.log(sum(first, second));
//Task 4

// let calculate = (first, second, operator)=>{
// 	var result;
// 	console.log(operator)
// 	switch(operator){
// 		case "+":
// 		result = first + second
// 		break;
// 		case "-":
// 		result = first - second
// 		break;
// 		case "*":
// 		result = first * second
// 		break;
// 		case "/":
// 		result = first / second
// 		break;
// 		case "%":
// 		result = first % second
// 		break;
// 		default :
// 		result = "Invalid Operation"
// 	}
// 	return result;

// }
// let first = Number(prompt("First Number"));
// let operator = prompt("Operator");
// let second = Number(prompt("Second Number"));
// console.log(calculate(first, second, operator));

//Task 5
// let square = (num)=>{
// 	return num * num
// }
// console.log(square(3))

//Task 6

// let factorial = (num)=>{
// 	var result = 1;
// 	while(num > 0){
// 		 result *= num
// 		 num--
// 	}
// 	return result;
// }
// console.log(factorial(4))

//Task 7
// let counting = (start, end)=>{
// 	while(start <= end){
// 		console.log(start++)
// 	}
// }
// counting(2, 100);

//Task 8

// let square = (num)=>{
// 	return num * num
// }

// let hypotneuse = (base, perpendicular)=>{
// 	return square(base) + square(perpendicular)
// }

// console.log(hypotneuse(3, 5))
//Task 9
// width = 2;
// height = 2;
// let area = (width, height)=>{
// 	return width * height
// }

// console.log(area(width, height));
// console.log(area(3, 5));

//Task 10

// let checkPalindrome = (word)=>{

// 	if(word == word.split("").reverse().join(""))
// 		return "isPalindrome"
// }

// console.log(checkPalindrome("racecar"))

//Task 11

// let toTitleCase = (input)=>{
// 	let words = input.split(" ");
// 	let result = [];
// 	for(let w of words)
// 		result.push(w.slice(0, 1).toUpperCase() + w.slice(1));
// 	console.log(result.join(" "));

// }
// toTitleCase("the quick brown fox")


//Task 12


// let longestWord = (input)=>{
// 	let words = input.split(" ");
// 	let maxLen = "";
// 	for(let i of words){
// 		if(i.length > maxLen.length)
// 			maxLen = i
// 	}
// 	console.log(maxLen)
// }
// longestWord("Web Development Tutorial");

//Task 13

// let occurance = (string, letter)=>{
// 	let regex = new RegExp(letter, "g");
// console.log(string.match(regex).length)		
// }

// occurance("world of cards", "o")


//Task 14


// let calcCircumference = (radius)=>{
// 	console.log(2 * 3.142 * radius);
// }

// calcCircumference(3);


// let calcArea = (radius)=>{
// 	console.log(3.142 * radius * radius);
// }

// calcArea(3);



//Chapter 38 - 42
//Task 1

// function power(a, b){
// 	return Math.pow(a, b);
// }

// console.log(power(2,3))
//Task 2

// function leapYear(year){
// 	if((year / 4) % 2 == 0){
// 		console.log("leapYear")
// 	}
// }

// leapYear(2016);
// leapYear(2013);
//Task 3

// function areaOfTriangle(a, b, c){
// 	let S = (a + b + c) / 2;
// 	let area = S*(S - a)*(S - b)*(S - c);
// 	console.log(area);
// }

// areaOfTriangle(2, 2, 2);
//Task 4

// function average(mark1, mark2, mark3){
//  return (mark1 + mark2 + mark3) / 3;
// }

// function percentage(average){
// 	return ((average * 3) / 300) * 100;
// }
// function avgPercentage(mark1, mark2, mark3){
// 	let avgMarks = average(mark1, mark2, mark3);
// 	console.log(`average marks ${avgMarks}`);
// 	console.log(percentage(avgMarks));
// }

// avgPercentage(60, 80, 85);

//Task 5

// function findIndex(char, string){
// 	chars = string.split('');
// 	chars.forEach(function(item, index){
// 		if(item == char){
// 			console.log(index);
// 		}
// 	})
// }

// findIndex('c', 'abcdefg');



//Task 6

// let vowels = ['a', 'e', 'i', 'o', 'u'];
// let result;
// function removeVowels(string){
// 	vowels.forEach(c =>{
// 		result = ([...string].filter(v => v !== c));
// 		string = result;
// 	})
// console.log(result.join(''))
// }

// removeVowels("education")

//Task 7

// let input = "Pleases read this application and give me gratuity";
// let set = "";
// let findings = [];

// function findVowels(input){
// 	[...input].forEach(i => {
// 		switch(i){
// 			case 'a':
// 				set += i;
// 				break;
// 			case 'e':
// 				set += i;
// 				break;
// 			case 'i':
// 				set += i;
// 				break;
// 			case 'o':
// 				set += i;
// 				break;
// 			case 'u':
// 				set += i;
// 				break;
// 			default:
// 				set = "";
// 		}

// 		if(set.length == 2){
// 			findings.push(set);
// 			set = "";
// 		}
// 	});
// 	console.log(`findings are: ${[...findings]}`);
// }

// findVowels(input);

//Task 8

// let distance = prompt("Enter Dinstance");

// function toMeter(distance){
// 	return distance * 1000;
// }

// function toFeet(distance){
// 	return distance * 3280.84;
// }

// function toInch(distance){
// 	return distance * 39370.08;
// }

// function toCentimeter(distance){
// 	return distance * 100000.0032;
// }


// console.log(`
// 	meters: ${toMeter(distance)} 
// 	feet: ${toFeet(distance)} 
// 	inch: ${toInch(distance)} 
// 	centimeter: ${toCentimeter(distance)}
// 	`);

//Task 9

// let otHours = 90;
// let otRate = 12.00;
// let otLimit = 40;

// function calcOt(otHours){
// 	if(otHours > otLimit){
// 		console.log(otHours * otRate);
// 	}
// }

// calcOt(otHours);
//Task 10



// function calcDenomination(){
// 	let amount = prompt("Enter Cash.");
// 	let hundreds = 0;
// 	let fifties = 0;
// 	let tens = 0;
// 	while(amount >= 100){
// 		amount -= 100;
// 		hundreds++;
// 		if(amount <= 100){
// 			while(amount >= 50){
// 				amount -= 50;
// 				fifties++;
// 				if(amount <= 50){
// 					while(amount >= 10){
// 						amount -= 10;
// 						tens++;
// 					}
// 				}
// 			}
// 		}
// }
// 	console.log(`${hundreds}, ${fifties}, ${tens}`)
// }

// calcDenomination();


//Chapter 43  - 48
//Task 1
// function showAlert(){
// 	alert("Hello");
// }
//Task 2
// function showAlert(){
// 	alert("Hello");
// }
//Task 3
// let students = [
// {
// 	roll: 1,
// 	name: "Student1",
// 	class: 1,
// },
// {
// 	roll: 2,
// 	name: "Student2",
// 	class: 2,
// },
// {
// 	roll: 3,
// 	name: "Student3",
// 	class: 3,
// },
// {
// 	roll: 4,
// 	name: "Student4",
// 	class: 4,
// },
// ];

// let table = document.getElementById('students_table');

// students.map((student, index) => {
// 	table.innerHTML += `<tr>
// 							<td>
// 							${student.roll}
// 							</td>
// 							<td>
// 							${student.name}
// 							</td>
// 							<td>
// 							${student.class}
// 							</td>
// 							<td>
// 							<button onClick="deleteRow(this)">Delete</button>
// 							</td>
// 						</tr>
// 						`;
// })

// function deleteRow(element){
// 	var row = element.parentNode.parentNode;
// 	row.parentNode.removeChild(row);
// }
//Task 4

// var img = document.getElementById('picChange');
// img.onmouseover = function(){img.src = "img/2.jpg"};
// img.onmouseout = function(){img.src = "img/1.jpg"};

//Task 5
// var counter = document.getElementById('counter');
// function increase(){
// var currentValue = parseInt(counter.innerHTML);
// currentValue++;
// counter.innerHTML = currentValue;
// }

// function decrease(){
// var currentValue = parseInt(counter.innerHTML);
// currentValue--;
// counter.innerHTML = currentValue;
// }


//Chapter 49  - 52
//Task 1
// let submit = document.getElementById('submit');
// submit.addEventListener('click', submitForm);

// function submitForm(){
// document.getElementById('name').innerHTML = document.getElementById('input_name').value
// document.getElementById('email').innerHTML = document.getElementById('input_email').value
// document.getElementById('username').innerHTML = document.getElementById('input_username').value
// document.getElementById('password').innerHTML = document.getElementById('input_password').value
// }

//Task 2

// let hidden = true;
// var hiddenContent = document.getElementById('more');
// var visibility = document.getElementById('visibility');
// hiddenContent.style.display = "none";

// function morefunc(){
// 	hidden = !hidden;
// 	hiddenContent.style.display = hidden ? "none":"inline" ;
// 	visibility.innerHTML = hidden ? "Reade More..." : "Read Less";
// }

//Task 3

// let students = [
// {
// 	roll: 1001,
// 	name: "Student1",
// 	class: 1,
// },
// {
// 	roll: 1002,
// 	name: "Student2",
// 	class: 2,
// },
// {
// 	roll: 1003,
// 	name: "Student3",
// 	class: 3,
// },
// {
// 	roll: 1004,
// 	name: "Student4",
// 	class: 4,
// },
// ];

// let table = document.getElementById('students_table'),rIndex;

// students.map((student, index) => {
// 	table.innerHTML += `<tr>
// 							<td>${index + 1}</td>
// 							<td>${student.roll}</td>
// 							<td>${student.name}</td>
// 							<td>${student.class}</td>
// 							<td>
// 							<button onClick="editRow(this)">Edit</button>
// 							<button onClick="deleteRow(this)">Delete</button>
// 							</td>
// 						</tr>
// 						`;
// })


// let roll = document.getElementById('input_roll');
// let name = document.getElementById('input_name');
// let standard = document.getElementById('input_standard');

// function deleteRow(element){
// 	var row = element.parentNode.parentNode;
// 	row.parentNode.removeChild(row);
// }

// function editRow(element){
// 	var row = element.parentNode.parentNode;
// 	rIndex = row.cells[0].innerHTML;
// 	roll.value = row.cells[1].innerHTML;
// 	name.value = row.cells[2].innerHTML;
// 	standard.value = row.cells[3].innerHTML;
// }


// let update = document.getElementById('update');
// update.addEventListener('click', updateRow);

// function updateRow(element){
// 	table.rows[rIndex].cells[1].innerHTML = roll.value;
// 	table.rows[rIndex].cells[2].innerHTML = name.value;
// 	table.rows[rIndex].cells[3].innerHTML = standard.value;
// }



// let submit = document.getElementById('submit');
// submit.addEventListener('click', addRow);

// function addRow(){
// 	table.innerHTML += `<tr>
// 							<td>${table.rows.length}</td>
// 							<td>${roll.value}</td>
// 							<td>${name.value}</td>
// 							<td>${standard.value}</td>
// 							<td>
// 							<button onClick="editRow(this)">Edit</button>
// 							<button onClick="deleteRow(this)">Delete</button>
// 							</td>
// 						</tr>
// 						`;
// }

//Chapter 53  - 58
//Task 1


//Task 2

// let image = document.getElementById('image1');
// image.addEventListener('click', modal);

// function modal(){
// 	console.log('modal');
// }

