import Person from './Person';

import {add, sub} from './compute';

import Student from './Student';

let p = new Person("Raj", 33);
let res = add(4,5);

console.log("hello world!");

console.log(p.getDetails());
console.log(res);

let s = new Student("Raj");

console.log(s.getName(), s.subject());
