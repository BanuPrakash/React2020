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

Note: arrow functions doesn't have its own context: [this used within arrow function will use the enclosing context]

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
 Arrow functions gets the "context ==> this" from enclosing scope
 whereas the functon gets "global context"

var age = 10;  
function Person() {
  this.age = 42;  
  setTimeout(function () { 
    console.log("this.age", this.age); // yields "10"  
  }, 100);
}

var p = new Person();

===========

var age = 10;  
function Person() {
  this.age = 42;  
  setTimeout(() => {  
    console.log("this.age", this.age); // yields "42"  
  }, 100);
}

var p = new Person();
============================================

5) Template Variable using String literal [ tick marks]

let name = "Smith";

let content = ` 
	<p>first line 
	Name is ${name}
	Good Day
	</p>
`;

content = "<p>first line <br /> Name is " + name + " <br /> Good Day";

====================================

6) Promise API for asynchronous functions

Synchronous functions

function doTask() {
	..
}

let res = doTask();
console.log(res);
console.log("end");

=============
asynchronous functions : assume doTask is async operations
[ making an HTTP call to server or code executing after timeout, click button, ..]

function doTask() {
	..
}

//doTask(); // promise 

doTask().then( (res) => {
		// resolved operation
},
(rej) => {
	// rejected operation
})

console.log("end");


================

doSomeTask().
	then( res => ...).
	then( secres => ....).
	then( third => ...).
	catch(err => console.log(err));

fetch('https://jsonplaceholder.typicode.com/posts/1')
.then( response => response.json() )
.then( body => console.log(body));

===========================================
7) async and await
==================================

8) Generators

	function* doTask() {
		code
		code
		yield "first result";
		code
		code
		yield "second result";
		...
	}


	let iter = doTask(); // iterator

	iter.next();

	iter.next(); {"done": false, "value": "second result"}

	==========

	function* doTask() {

		yield "one";
		yield "two";
		yield "three";

	}

	var iter = doTask()


	iter.next()
	iter.next()
=========================

let p = {"name" : "HP", "price": 135000}

let r = p; // reference
r.price = 54322
p 
{name: "HP", price: 54322}

============

copy instead of reference:
let obj = {...p}

old way:
let obj = Object.clone(p);

=======================================

ES 6 / 7 ==> most of JS engines don't understand them
we need to convert them into ES 5 or lower version
Transpiler ==> Transcompiler
a) Babel
c) Tracuer
==========

9) class 

class Person {
	constructor(name = "", age = 0) {
		this.name = name;
		this.age = age;
	}

	getName() {
		return this.name;
	}
}

let p = new Person("Tim", 23);

internally it is prototype
function Person() {
	this.name =...
}

Person.prototype.getName = function () {
	
}

=============================

10) ES 6 Module system

time.js
export class Time {
	
}

export const add = (x,y) => x + y;

other.js

import {Time, add} from './time';

let t = new Time();

==========


time.js
export default class Time {
	
}
export const add = (x,y) => x + y;

other.js
import Time, {add} from './time';
let t = new Time();

========================

Node.js LTS

Node modules, Webpack after the TEA Break
==============================================

Node.js ==> JavaScript environment built on top of V8 engine

Where can i use node.js
1) server side code ==> APIs
2) Real time application [ chat bot]
3) Streaming 
4) Anyting which is async operations
*** 5) as an environment for building web application ***

=========

simple application

NPM ==> Node package manager

Node installation comes with many pre-defined modules [ http, fs, repl, url, cluster,..]

NPM helps to manage dependencies

npm init -y

creates package.json
==> information about your application 
	==> dependencies [ dependenciies required in production]
	==> devDependencies [ required only for development stage ==> like testing]
==> scripts

===============

package.json ==> maven pom.xml

npm install -D mocha chai request

mocha ==> unit testing
chai ==> assertion library
request ==> to make HTTP calls for testing

Node,js uses Common Module system and not ES 6 module system

========================

Unit testing JS:
 Different librariries / frameworks
 a) Jasmine [ comes with assertion librarires]
 b) JEST [ comes with assertion librarires]
 c) Mocha [ doesn;t have assertion library]

 AAA ==> Assemble Action Assert
 chai --> Assertion library

====================================================

NodeJs as an environmet for buidling web application 

1) we have many "js" / "ts" / "jsx" / "tsx" files 

legacy way of using JS files:
	index.html

	<script src="a.js"> </script>
	<script src="b.js"> </script>
	<script src="c.js"> </script>
	<script src="d.js"> </script>

	problem: many network hits; order should be mainitened

2) we need to do "testing", "linting" "minify" , "uglify" , "code coverage"

3) we need to bundle them "bundle.js"
	
	<script src="bundle.js" > </script>
4) we need to make our code compatable with browser [ typescript, ES6/7]
	transcompiler ==> babel or tsc

JavaScript build tools: Grunt, Gulp, Webpack
===============================================
function Course(config:any) { 
    return function (target:any) {
      Object.defineProperty(
          target.prototype,
          'course',
          {value: () => config.course} 
      )
    }
  }
   "cypress": "cypress open",
    "cypress-test": "cypress run"
  
    "devDependencies": {
    "@cypress/code-coverage": "^3.8.2",
    "@cypress/instrument-cra": "^1.4.0",
    "cypress": "^5.5.0"
  }

=============

 state = {
        "customers" :[{
            "id": 1,
            "firstName": "Rachel",
            "lastName": "Green ",
            "gender": "female",
            "address": "Blore"
        },
        {
            "id": 2,
            "firstName": "Chandler",
            "lastName": "Bing",
            "gender": "male",
            "address": "West Street"
        },
        {
            "id": 3,
            "firstName": "Joey",
            "lastName": "Tribbiani",
            "gender": "male",
            "address": "Kattegat"
        },
        {
            "id": 4,
            "firstName": "Monica",
            "lastName": "Geller",
            "gender": "female",
            "address": "some address"
        },
        {
            "id": 5,
            "firstName": "Ross",
            "lastName": "Geller",
            "gender": "male",
            "address": "some address "
        },
        {
            "id": 6,
            "firstName": "Phoebe",
            "lastName": "Buffay",
            "gender": "female",
            "address": "some address"
        }
    ],
    };

=============

Day 2:
------
	Functional style of programming ==> HOF ==> Closure
	prototype ==> adding methods to our class / objects
	ES 6 features
	Node.js environment for building web application
	Webpack ==> babel for transcompiler

	Java:

	class Person {
		private String name;
		Person() { }

		public String getName() {

		}
	}

	JS:
	FUNCTION CONSTRUCTOR:
	function Person(name, age) {
		this.name = name; // state
	}

	Person.prototype.getName = function () { return this.name; }
	new Person("..", 31);
	=======

	ES 6:
	class Person {
		constructor(name, age) {
			this.name = name;
			this.age = age;
		}

		 getName() {
		 	return this.name
		}
	}

==================================================

 "sourceMap": true

 a.ts  ==> a.map.js ===> a.js [ executed on Browser ]


"module": "es6" [ export and import]

"module": "commonjs", [ module.exports and require]

====================

TypeScript ==> layer on JS ==> introduces concept of data types to JavaScript

ts --> tsc --> js [ executes on JS engine]


typeof x


data types in typescript:

1) boolean

	var flag:boolean = false;

	flag = "1"; // tsc will throw an error on this line

2) string

	var name:string = 'Raj';

	name = 100; //error

3) number
	var x: number = 10;

4) any

	var data: any;

	data = 200;

	data = [4,6,7,2];

	data = "test";

5) array

	let elems:number[] = [4,6,2,7,1];

6) enum
	
	enum Priority {
		LOW,
		MED,
		HIGH
	}

	let high:Priority = Priority.HIGH;

==============================================================================

functions in typescript
-----------------------

function add(x:number, y: number) : number {
	return x + y;
}

add(4,5); // valid

add("a", 10) ; // tsc error


function add(x,y) { } // valid in typescript

function add(x:number, y: number) : void {
	console.log( x + y );
}

=======================================

interfaces

for shape

interface Person {
	id:number,
	name:string,
	address?:string //optional
}

function addPerson(person:Person) {
	// code
}

addPerson( { "id": 55, "name": "sam"});

===========================

interface Timer {
	setTimer(no: number) : void
}


class Game implements Timer {
	
	setTimer(no:number) {
		// code 
	}
}

====================================

classes in typescript

class Person {
	private name:string;
	private age: number;

	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	public getName() : string {
		return this.name;
	}
}


let p:Person = new Person("a", 22);

p.getName(); 

p.name; // error

-------------------

class Person {
	 
	constructor(private name:string, private age:number) {
		this.name = name;
		this.age = age;
	}

	public getName() : string {
		return this.name;
	}
}

-----------

class x extends y {
	
}

---------------------------------------------------

Decorators: @decoratorName


@Component({
	styles: ...
	template: ...
})
class AppComponent {
	product
}

@Component({
	styles: ...
	template: ...
})
class CardComponent {
	row
}


class Person {
	
	@Upper()
	private firstName:string;

	@Valid()
	private getEmail(): string {

	}
}

npm i -D typescript ts-loader

============================

codepen.io

15 min tea break

npx create-react-app customerapp

===============================================================================

React.js v17

data ==> rendered ==> view

Server side rendering 	==> to the client it sends view [ html]
	JSP, ASP.NET, PHP, EJS, JADE , PUG, 

Client side rendering
	data is fetched to client machine [ Browser] and converted into views

	JavaScript: jQuery , Mustache, Handlebars, underscore ==> view templates

	issues with handling single page applications: SPA

	1) we need to have different views for different url

		http://amazon.com/mobiles/iphone

		http://amazon.com/mobiles/pixel

		http://amazon.com/cart

	2) Data binding [ JSON ==> placeholder ]. don;t need to refersh entire screen

	3) Dependency Injection

===========
Model View Controller

Backbone.js, React.js, Angular, Vue, ...

Angular Framework 								
	1) MVC
	2) builtin Dependency Injection container

React is just a view library ( view part; no controller and no model)

===============================================================

let Welcome = React.createElement("h1",{style:{'color':'red'}}, "Welcome to React 17");

ReactDOM.render(Welcome, document.getElementById("app"))

Virtual DOM

Welcome = {
	tagName : "h1",
	style : ...
	textcontext : "Welcome to ..."
}

========================================

functional components and class components

Functional components returns JSX [ JavaScript + XML]
it should have one root element

function Welcome() {
  return <div>
        <h1>
          Welcome to React.js
        </h1>
    </div>
}

ReactDOM.render(<Welcome />, document.getElementById("app"))


props : mechanism using which parent component passes data to child 

function Welcome(props) {
  return <div>
        <h1>
           {props.title} in {props.name}
        </h1>
    </div>
}

ReactDOM.render(<Welcome title="Welcome to programming" name="Adobe"/>, document.getElementById("app"));

function Welcome({title, name}) {
  return <div>
        <h1>
           {title} in {name}
        </h1>
    </div>
}

ReactDOM.render(<Welcome title="Welcome to programming" name="Adobe"/>, document.getElementById("app"))

==========

class Welcome extends React.Component {
	 // instance varaibels

  constructor(props) {
    super(props);
  }
  render() {
    let {title, name} = this.props;
    return <div>
        <h1>
           {title} in {name}
        </h1>
    </div>
  }

  handleClick() {

	}

  handleSubmit() {

	}
}

ReactDOM.render(<Welcome title="Welcome g" name="Adobe"/>, document.getElementById("app"));

Preference : use class component if we have state and behaviour

const data =[  
   {  
      "name":"Baked Salmon",
      "ingredients":[  
         {  
            "name":"Salmon",
            "amount":1,
            "measurement":"l lb"
         },
         {  
            "name":"Pine Nuts",
            "amount":1,
            "measurement":"cup"
         },
         {  
            "name":"Butter Lettuce",
            "amount":2,
            "measurement":"cups"
         },
         {  
            "name":"Yellow Squash",
            "amount":1,
            "measurement":"med"
         },
         {  
            "name":"Olive Oil",
            "amount":0.5,
            "measurement":"cup"
         },
         {  
            "name":"Garlic",
            "amount":3,
            "measurement":"cloves"
         }
      ],
      "steps":[  
         "Preheat the oven to 350 degrees.",
         "Spread the olive oil around a glass baking dish.",
         "Add the salmon, garlic, and pine nuts to the dish.",
         "Bake for 15 minutes.",
         "Add the yellow squash and put back in the oven for 30 mins.",
         "Remove from oven and let cool for 15 minutes. Add the lettuce and serve."
      ]
   },
   {  
      "name":"Fish Tacos",
      "ingredients":[  
         {  
            "name":"Whitefish",
            "amount":1,
            "measurement":"l lb"
         },
         {  
            "name":"Cheese",
            "amount":1,
            "measurement":"cup"
         },
         {  
            "name":"Iceberg Lettuce",
            "amount":2,
            "measurement":"cups"
         },
         {  
            "name":"Tomatoes",
            "amount":2,
            "measurement":"large"
         },
         {  
            "name":"Tortillas",
            "amount":3,
            "measurement":"med"
         }
      ],
      "steps":[  
         "Cook the fish on the grill until hot.",
         "Place the fish on the 3 tortillas.",
         "Top them with lettuce, tomatoes, and cheese."
      ]
   }
];

<Recipe ... />

ReactDOM.render(<Menu title="Delicious recipes" recipes={data} />, document.getElementById("app"))

Post lunch ==> 2:00

npx create-react-app customerapp

===========================================


code of Ashish:
function Menu({recepies}) {
  return <div> 
      recepies.map (r =>  <h1> {r.name} </h1>    );

    </div>
}

function Recepie({recepie}) {
  return (<li>{recepie.name}</li>)
}

ReactDOM.render(<Menu title= "Delecious recipes" recepies={data}/>, document.getElementById("app"));

Rishab:
const data =[  
   {  
      "name":"Baked Salmon",
      "ingredients":[  
         {  
            "name":"Salmon",
            "amount":1,
            "measurement":"l lb"
         },
         {  
            "name":"Pine Nuts",
            "amount":1,
            "measurement":"cup"
         },
         {  
            "name":"Butter Lettuce",
            "amount":2,
            "measurement":"cups"
         },
         {  
            "name":"Yellow Squash",
            "amount":1,
            "measurement":"med"
         },
         {  
            "name":"Olive Oil",
            "amount":0.5,
            "measurement":"cup"
         },
         {  
            "name":"Garlic",
            "amount":3,
            "measurement":"cloves"
         }
      ],
      "steps":[  
         "Preheat the oven to 350 degrees.",
         "Spread the olive oil around a glass baking dish.",
         "Add the salmon, garlic, and pine nuts to the dish.",
         "Bake for 15 minutes.",
         "Add the yellow squash and put back in the oven for 30 mins.",
         "Remove from oven and let cool for 15 minutes. Add the lettuce and serve."
      ]
   },
   {  
      "name":"Fish Tacos",
      "ingredients":[  
         {  
            "name":"Whitefish",
            "amount":1,
            "measurement":"l lb"
         },
         {  
            "name":"Cheese",
            "amount":1,
            "measurement":"cup"
         },
         {  
            "name":"Iceberg Lettuce",
            "amount":2,
            "measurement":"cups"
         },
         {  
            "name":"Tomatoes",
            "amount":2,
            "measurement":"large"
         },
         {  
            "name":"Tortillas",
            "amount":3,
            "measurement":"med"
         }
      ],
      "steps":[  
         "Cook the fish on the grill until hot.",
         "Place the fish on the 3 tortillas.",
         "Top them with lettuce, tomatoes, and cheese."
      ]
   }
];

function Menu({title, recipes}) {
  return <div> 
    <h1>
      {title}
      </h1>
     {
      recipes.map(m =>   <Recipes recipe={m}/>) 
     
    </div>
}

function Recipes({recipe}) {
  return <div>
         <h2>
          {recipe.name}
         </h2>
          { 
            recipe.ingredients.map(r => <Ingredients ingredient={r}/>)
          }
          <h3>
            Steps:
         </h3>
          { 
            recipe.steps.map(r => <Steps step={r}/>)
          }
        </div>
}

function Ingredients({ingredient}){
  return <div>
          *
          {ingredient.name}
        </div>
}

function Steps({step}){
  return <div>
    {step}
  </div>
}
ReactDOM.render(<Menu title="Delicious Recipes" recipes={data}/>, document.getElementById("app"));

============================================================================================

npx create-react-app customerapp

create-react-app is an npm executable module which generates a scaffolding code with webpack config and babel

=======

npx create-react-app customerapp --typescript

================


npm i -g create-react-app

create-react-app customerapp

==========


webpack ==> entry ==> index.js

index.js ==> includes App.js

webapck creates a bundle.js and adds it at runtime into index.html

index.html

<div id="root"></div> // <App/> is rendered here

 <div className="App">

without react:  <div class="App">

=============================================

props ==> mechaism ==> data from parent to child

state ==> Object will have state and behaviour

Button 
	caption, color, size, enabled ==> state
	onclick, onmouseover ==> actions ==> behaviour



 class Sample extends Component {

 state = {
		 "name" : "A",
 		 "age" : 22
	}


	...

	task() {

		// async operation
		this.setState({
				"age" : 99
		}, () => {
				// push to server, make an api call, log updates
		});
	}
}



 this.state.customers.map(c => <CustomerRow customer={c} delEvent={this.deleteCustomer.bind(this)} key={c.id} />)
 this.state.customers.map(c => <CustomerRow customer={c} delEvent={(id) => this.deleteCustomer(id)} key={c.id} />)
                
 ============================

 React Testing Library [ RTL] is a wrapper on top of JEST ==> additional assertion apis to test components

 container.querySelector('input[type=text]')

 Angular TestBED ==> Jasmine

getByXXXX() ==> throws exception if not found

queryByXXX() ==> returns null if not found

findByXXX() ==> for Promise based component creation


getByRoleName("button")
getByText(/text/i);
getByPlaceHolderText(...);
getByTestId(..); 

<div data-testid="12"></div>

====================

code Coverage:

npm test -- --coverage

===============

componentDidMount() ==> Life cycle method

component constructor ==> render() [ FCP] ==>  componentDidMount() ==> render();

Any API calls should be done componentDidMount()

=============

react-router-dom ; styled-components; React Context; bootstrap; font awesome

npx create-react-app phoneapp

==============================