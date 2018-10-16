class Person {
    constructor (anyway){
        this.age = anyway.age;
        this.name = anyway.name; 
    }

    info(){
      console.log("The person is called " + this.name + " and is " + this.age + " years old. ");
    }
}

const person = new Person( {age: 44, name: 'Tom' });
person.info() // The person is called Tom and is 44 years old
console.log(person.age);
console.log(person.name);

class Student extends Person {
    constructor (anyway){
        super(anyway);
        this.gpa = anyway.gpa; 
    }
    info(){
        console.log("The person is called " + this.name + " and is " + this.age + " years old. " + "He has an overall GPA of " +
        this.gpa + " in the university." );
      }
}

const student = new Student( {age: 44, name: 'Tom', gpa: "4.0"} );
console.log(student);
console.log(student.info()); 