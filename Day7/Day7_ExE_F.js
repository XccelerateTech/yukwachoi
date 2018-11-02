// EX_E
class Person {
    constructor(input){
        this.name = input.name;
        this.age = input.age;
    }

    info(){
        return `The person is called ${this.name} and is ${this.age} years old`
    }
}

const person = new Person( {age: 44, name: 'Tom' });
console.log(person.info()); // The person is called Tom and is 44 years old

//Ex_F

class Student extends Person {
    constructor (input){
        super(input);
        this.GPA = input.GPA
    }

    info(){
        return `The person is called ${this.name} and is ${this.age} years old.He has an overall GPA of ${this.GPA} in the university.`
    }
}

const student = new Student( {age: 44, name: 'Tom', GPA:'4.0' });
console.log(student.age);
console.log(student.name);
console.log(student.GPA);
console.log(student.info());