import Course from "./Course";

@Course({
    course: 'English'
})

export default class Training {
    constructor(private facultyName:string) {
        this.facultyName = facultyName;
    }
    public getName() :string {
        return this.facultyName;
    }
   }