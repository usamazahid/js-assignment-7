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

