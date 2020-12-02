import Course from "./Course";

@Course({
    course: 'React17'
})
export default class Student {
 constructor(private name:string) {
     this.name = name;
 }
 public getName() :string {
     return this.name;
 }
}