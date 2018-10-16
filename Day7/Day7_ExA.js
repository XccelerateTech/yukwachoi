function Person(Name, Age){
    this.name = Name; 
    this.age = Age;  
    console.log(this.name);
    console.log(this.age);
}

var Girl = new Person("carrot", 10);

