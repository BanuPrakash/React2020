# React.js

Banuprakash C

Full Stack Architect, Corporate Trainer,

Co-founder Lucida Technologies Pvt Ltd.,

Email: banu@lucidatechnologies.com; banuprakashc@yahoo.co.in

https://www.linkedin.com/in/banu-prakash-50416019/


Github: https://github.com/BanuPrakash/React2020
-------------------------------------------------------------------------
Softwares Required:
1) Chrome Webbrowser with following extensions
	1.1) add React Developer tools
	1.2) add Redux DevTools
	1.3) Lighthouse
2) Visual Studio Code
3) NodeJS Latest LTS

-------------------------------------------------------

	Day 1: JS recap, Functional style of programming, ES 6 features, NodeJs intro Webpack

	Day 2: React : functional components, class components, props and state, ReactContext, 
					Testing using RTL and cypress
					use case

	Day 3: use case ==> React Routers, styled-components, RWD with bootstrap,...

	Day 4: React Hooks, HOC, Performance [ Core Web Vitals ] , Flux Architecture, Redux, ... , 

	JSX and not TSX 
----------------------------------------------------------------------

JavaScript:
	
	Creation Context Phase and Execution Context Phase 

	var g = 10;

	console.log(result); 

	function add(x,y) {
		console.log(this); //window
		return x + y;
	}

	var result = add(4,5);


code runs on JS engine: V8, spider monkey, chakra, Nashorn, .. 

==================================
	
	var g = 10;

	function doTask() {
		var x = 20;
		if(x > g) {
			var y = 30;
			z = 100;
		}
		console.log(g,x,y,z);
	}

	doTask();
	console.log(g,x,y,z);
====================================

	function add (x, y) {
		return
			x + y;
	}

	var res = add(5,6);

	console.log(res); // undefined

	engine starts performing AST [ semi-colon]

 =========================================

 Functional Style of Programming
 --------------------------------
 	Using High Order Functions:
 		a) functions which accept other functions as arguments
 		b) function return a function

 		==> treat function as first-class members 

 		c) not tightly coupled to state of object

 		deposit() withdraw() ==> balance of Account
 	// HOF
 	function forEach(items, action) {
 		for(var i = 0; i < items.length; i++) {
 			action(items[i]);
 		}
 	}

 	var data = [7,3,22,7,21];

 	forEach(data, console.log);
 	forEach(data, alert);
 	======================

 	commonly used HOF:
 		1) map
 		2) filter
 		3) reduce
 		4) forEach
 		5) skip
 		6) limit
 		all callbacks [ registration ]


 		filter ==> subset
 		function filter(items, predicate) {
 			create array
 				loop thro items
 					if( predicate) 
 						add to array
 				end loop
 			return array
 		}

 		==============

 		Map ==> transform
 		function map(items, transformFn) {
 			create array
 				loop thro items
 					add to array (transformFn(item))
  				end loop
 			return array
 		}

 		=============================================
 
https://rxmarbles.com/#map

===========================================

function returning a function ==> HOF

function greeting(msg, name) {
	return msg + " " + name;
}

greeting("Good morning", "Smith");
greeting("Good morning", "Peter");
greeting("Good Day", "Smith");

=================================

function greeting(msg) {
	return function(name) {
		return title + msg + " " + name;
	}
}


var gm = greeting("Good morning");

What is gm ?

gm("Smith");

// closure ==> mechanism where inner functions can access the members of outer function

===========================================================================

memoize 
getEmployee(24); ==> REST calls 

getEmployee(24);  get from cache

============================================

var obj = {
	"name": "Smith",
	"getInfo" : function() {
		return this.name;
	}
}

console.log(obj.name);
console.log(obj.getInfo());

var fn = obj.getInfo; // here context is lost [ this ]
console.log(fn()); // Should i get Smith

var prod = {
	"name": "IPhone"
}
var newFn = obj.getInfo.bind(obj);
console.log(newFn());

=======================


callback

var g = 10;

console.log(g);

setInterval(function some() {
	console.log("timeout!!!")
}, 10);

function add(x,y) {
	return x + y;
}

add(4,5);

document.addEventListener("click", function task() {
	console.log("clicked!!!");
});

===================================================================================
functions as objects:

function Product(name, price) {
	this.name = name;
	this.price;

	getName = function() {
		return this.name;
	}

	getPrice = function () {
		return this.price;
	}
}

var p1 = new Product("a", 33);
var p2 = new Product("b", 313);
p1.getName(); ...



function Product(name, price) {
	this.name = name;
	this.price;
}
Product.prototype.getName = function() {
		return this.name;
	}
Product.prototype.getPrice = function () {
		return this.price;
}
var p1 = new Product("a", 33);
var p2 = new Product("b", 313);

===========================================


ES2015 ==> ES 6 version 

ECMAScript
-----------
ES 6 Features:
1) block level variable
prior to ES 6 we had only global scope and function scope

var g = 10; // global scope

function doTask() {
	var x = 50; // function scope
	if(x > g) {
		let y = 22; // block scope variable
		const PI = 3.14159; // block scope constant
	}
}

2) arrow functions

function add(x,y) {
	return x + y;
}

let add = (x,y) => {
	return x + y;
}

let sub = (x,y) => x - y;

// default arguments
let add = (x = 0, y = 0, z = 0) => x + y + z;


3) Deconstructing arrays

	let colors = ["red", "green", "blue", "pink"];

	old way:

	var red  = colors[0];

	New way:

	let [r,g,...others] = colors;

4) Deconstructing objects

	let p = {
		"name": "iPhone 11",
		"price" : 98000,
		"company" : "apple"
	};

	let {name, price, company} = p;

	let {name:x, price:y} = p;

=================================================



