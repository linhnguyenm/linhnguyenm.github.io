//Exercise 1: 
String.prototype.filter = function( input ) {
    return this.trim().replaceAll(input,"");
};
//Exercise 2
Array.prototype.bubbleSort = function() {
    var swap = function (arr, index1, index2) {
        const temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    };
    

    let stop;

    for (let i = 0; i < this.length; i++){
        for (let j = 0, stop = this.length-i; j < stop; j++){
            if (this[j] > this[j+1]){
                swap(this, j, j+1);
            }
        }
    }
    return this;
}

//Exercise 3
console.log("*********** Exercise 3 ***********");
{
    class Person{
        name;
        age;
        constructor(name, age){
            this.name = name;
        }

       
    }
    class Teacher extends Person {
        constructor(name, age, subject){
            super(name, age);
            this.subject = subject;
        }

        teach = () => {
            console.log(this.name + " is now teaching " + this.subject);
        }
    }


    const teacher1 = new Teacher("John Smith", 38, "Programming");
    teacher1.teach();

    const teacher2 = new Teacher("Diane Margie", 54, "WAP");
    teacher2.teach();
};

// (function (){ 
//     const Person = function(name, age)
//     {
//         this.name = name;
//         this.age = age;
//     }

//     const Teacher = function(name, age, subject) {
//         Person.call(this, name, age);
//         this.subject = subject;
//     }

//     Teacher.prototype = Object.create(Person.prototype);

//     Teacher.prototype.teach = function() {
//         console.log(this.name + " is teaching " + this.subject);
//     }

//     const aPerson = new Person("Linh Nguyen", 34);
    

//     const teacher1 = new Teacher("John Smith", 38, "Programming");
//     teacher1.teach();

//     const teacher2 = new Teacher("Diane Margie", 54, "WAP");
//     teacher2.teach();

// })();
(function (){ 
    //Person object
    const Person = {
        constructor: function(name, age)  {
            this.name = name;
            this.age = age;
        },
        
    
    }


    //Student object
    const Teacher = Object.create(Person);
    Teacher.constructor = function(name, age, subject) {
        this.subject = subject;
        return Person.constructor.call(this, name, age);
    };
    Teacher.teach = function() {
        console.log(this.name + " is teaching " + this.subject);
    }

    const aPerson = Object.create(Person);
    aPerson.constructor("Linh Nguyen", 34);

    const teacher1 = Object.create(Teacher);
    teacher1.constructor("John Smith", 38, "Programming");
    teacher1.teach();

    const teacher2 = Object.create(Teacher);
    teacher2.constructor("Diane Margie", 54, "WAP");
    teacher2.teach();
})();

//Exercise 4
console.log("*********** Exercise 4 ***********");
(function(){
    class Person {
        name;
        age;

        constructor(name, age){
            this.name = name;
            this.age = age;
        }

        greeting() {
            console.log("Greetings, my name is " + this.name + " and I am " + this.age + " years old");
        }

        salute() {
            console.log("Good morning!, and in case I dont see you, good afternoon, good evening and good night!");
        }
    }

    class Student extends Person {
        field;
        constructor(name, age, field){
            super(name, age);
            this.field = field;
        }
        greeting() {
            console.log("Their greeting is “Hey, my name is " + this.name + " and I am studying " + this.field  + ".");
        }
    }

    class Professor extends Person {
        department;

        constructor(name, age, department){
            super(name, age);
            this.department = department;
        }
        greeting() {
            console.log("Good day, my name is " + this.name + " and I am in the " + this.department + " department.");
        }
    }

    const aPerson = new Person("Linh Nguyen", 34);
    aPerson.greeting();
    aPerson.salute();
    
    const aStudent = new Student("John Smith", 30, "WAP");
    aStudent.greeting();
    aStudent.salute();

    const aProfessor = new Professor("Diane Margie", 54, "BDA");
    aProfessor.greeting();
    aProfessor.salute();
})();
console.log("// Using the function constructor approach")
{ 
    //Person object
    const Person = function(name, age)
    {
        this.name = name;
        this.age = age;
    }

    Person.prototype.greeting = () => {
        console.log("Greetings, my name is " + this.name + " and I am " + this.age + " years old");
    }

    Person.prototype.salute = () => {
        console.log("Good morning!, and in case I dont see you, good afternoon, good evening and good night!");
    }

    //Student object
    const Student = function(name, age, field) {
        Person.call(this, name, age);
        this.field = field;
    }
    
    Student.prototype = Object.create(Person.prototype);
    Student.prototype.greeting = () => {
        console.log("Their greeting is “Hey, my name is " + this.name + " and I am studying " + this.field  + ".");
    }

    //Professor object
    var Professor = function(name, age, department) {
        this.department = department;
        return Person.call(this, name, age);
    }
    
    Professor.prototype = Object.create(Person.prototype);
    Professor.prototype.greeting = () => {
        
        console.log("Good day, my name is " + this.name + " and I am in the " + this.department + " department.");
    }
    
    const aPerson = new Person("Linh Nguyen", 34);
    aPerson.greeting();
    aPerson.salute();
    
    const aStudent = new Student("John Smith", 30, "WAP");
    aStudent.greeting();
    aStudent.salute();

    const aProfessor = new Professor("Diane Margie", 54, "BDA");
    aProfessor.greeting();
    aProfessor.salute();
};