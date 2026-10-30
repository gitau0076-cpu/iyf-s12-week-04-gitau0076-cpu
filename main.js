// Variable declarations 
let Myname = "Ayan";
let MyAge = 19; //
let isStudent = true
let favouriteColors =["Red, Orange,Purple"] ;
let todaysDate = new Date ()
// Console.log
console.log("My name is: " + Myname);
console.log("My age is: " + MyAge);
console.log("Am I a student: " + isStudent);
console.log("My favourate Colors are: " , favouriteColors);
console.log("Today's date is: " + todaysDate);

// Exercise 1: Number Operations
let c = 15;
let d = 6;
console.log(c + d); //Addition
console.log( c- d); //Subtraction
console.log(c * d); //Multiply
console.log(c / d); //Division
console.log(c % d); //Remainder
console.log(c ** d); //Exponention

// Increment/Decrement
let count = 0;
count++;  // count is now 1
count--;  // count is now 0

//Exercise 2: String Operations
let firstName = "Alma";
let lastname = "Njuaini";

// Concatenation
let fullName = firstName + " " + lastname;

// Template literals (preferred)
let greeting = `Hello, ${firstName}!`;
let message = `${firstName} has ${firstName.length} letters.`;

// String methods
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(firstName.charAt(0));
console.log(fullName.includes("Alma"));

// Exercise 2: Comparison & Logical Operations

// Comparison
console.log(6 > 4);    // true
console.log(6 < 4);    // false
console.log(6 ===6);  // true (strict equality)
console.log(6 == "6"); // true (loose equality - avoid!)
console.log(6 !== 4);  // true

// Logical
console.log(true && true);   // AND
console.log(true || false);  // OR
console.log(!true);          // NOT

// Challenge: Calculate and display
let myAgeYears = 19; // 2007
let currentYear = 2026;

let ageInDays = myAgeYears * 365;
let ageInHours = ageInDays * 24;
let yearTurn100 = currentYear + (100 - myAgeYears); //

console.log("My age in days : " + ageInDays);
console.log("My age in hours: " + ageInHours);
console.log("The year I'll turn 100: " + yearTurn100);

// Exercise 1 : Functions  Declarations
function  greet(name) {
    return 'Hello, ${name}!';
}
const add = function(c,d) {
    return c + d;
};
const multiply = (c, d) => c * d;

// Exercise 2: Build These Functions
// 1. calculateArea(width, height) - returns area of rectangle
function calculateArea(width, height) {
    return width * height
}
// 2.celsiusToFahrenheit(celsius) - converts temperature
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5 + 32);
}
// 3.isEven(number) - returns true if even, false if odd
function isEven(number) {
    return number % 2 == 0;
}
// 4.getInitials(fullName) - returns initials (e.g., "Alma Njuaini" → "AN")
function getInitials(fullName) {
    let names = fullName.split("");
    return names[0][0] + names [1][0];
}
// 5.reverseString(str) - reverses a string
function reverseString(str) {
    return str.split("").reverse().join("");
}

// Test Your Functions (Console Logs)
console.log("Area (5x10):", calculateArea(5, 10));
console.log("Celsius to Fahrenheit (25°C):", celsiusToFahrenheit(25));
console.log("Is 4 even?:", isEven(4));
console.log("Initials for Alma Njuaini:", getInitials("Alma Njuaini"));
console.log("Reversed string (JavaScript):", reverseString)

// Exercise 3: Default Parameters
function greet(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

console.log(greet());              // Hello, Guest!
console.log(greet("Alma"));       // Hello, Alma!
console.log(greet("Alma", "Hi"));   // Hi, Alma!

/// Build: A function calculateTip(bill, tipPercent = 15) that returns the tip amount.
function calculateTip(bill, tipPercent = 15) {
    return (bill * tipPercent) / 100;
}

// Test calculateTip
console.log("Tip for 1000 bill (default 15%):", calculateTip(1000));
console.log("Tip for 2000 bill (20%):", calculateTip(2000,20));

// Task 7.4: Control Flow
// Exercise 1: If/Else Statements
function getGrade(score) {
    if (score >= 80) {
        return "A";
    } else if (score >= 70) {
        return "B"
    } else if (score >= 60) {
        return "C"
    } else if (score >= 50) {
        return "D"
    } else {
        return "F"
    }
}
// Test getGrade
console.log("Grade for 84 score:" , getGrade (84));
console.log("Grade for 72 score:" , getGrade (72));

// Exercise 2: Switch Statements
function getDayName(dayNumber) {
    switch (dayNumber) {
        case 0:
            return "Saturday";
        case 1:
            return "Sunday";   
        case 2:
            return "Monday";
        case 3:
            return "Tuesday";
        case 4:
            return "Wednesday";
        case 5:
            return "Thursday";
        case 6:
            return "Friday";
        default:
            return "Invalid day";
    }
}

console.log("Day 1 is:", getDayName(1));
console.log("Day 5 is:" , getDayName(5));

// Exercise 3: Loops Examples (Reference)

// For Loop
for (let i = 0; i < 4; i++) {
    // console.log(i)
}
// White Loop
let loopCount = 0;
while (loopCount < 4) {
    // console.log(count);
    loopCount++;
}
// For...of loop
const colors = ["Red","Orange", "Purple"];
for (const color of colors) {
    // console.log(color);
}

// Build These Programs

// 1. Print numbers 1-100
console.log("--- 1. Numbers 1 to 100 ---");
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

// 2. Print only even numbers 1-50
console.log("--- 2. Even Numbers 1 to 50 ---");
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// 3. FizzBuzz (print "Fizz" for multiples of 3, "Buzz" for 5, "FizzBuzz" for both)
console.log("--- 3. FizzBuzz (1 to 30) ---");
for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// 4. Print a triangle of stars
console.log("--- 4. Triangle of Stars ---");
let star = "";
for (let i = 1; i <= 5; i++) {
    star += "*";
    console.log(star);
}

// Mini-Project: Calculator
function addition(c, d) {
    return c + d;
}

function subtract(c, d) {
    return c - d;
}

function multiplication(c, d) {
    return c * d;
}

function divide(c, d) {
    if (d === 0) {
        return "Error: Cannot divide by zero";
    }
    return c / d;
}

function modulus(c, d) {
    return c % d;
}

function power(c, d) {
    return c ** d;
}

function calculate(num1, operator, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        case "%":
            return modulus(num1, num2);
        case "**":
            return power(num1, num2);
        default:
            return "Invalid operator";
    }
}

console.log("--- Calculator Tests ---");

console.log(calculate(30, "+", 20));
console.log(calculate(30, "-", 6));
console.log(calculate(30, "*", 4));
console.log(calculate(30, "/", 2));
console.log(calculate(30, "/", 0));
console.log(calculate(4, "**", 5));
console.log(calculate(20, "%", 5));

// Task 8.1
// Creating arrays
const fruits = ["watermelon", "kiwi", "pomegranate"];
const basicNumbers = [3, 4, 5, 6];
const mixed = ["hello", 36, true, null];

// Accessing elements
console.log(fruits[0]);      // watermelon
console.log(fruits.length);  // 3 

// Modifying arrays
fruits.push("strawberry");        // Add to end
fruits.unshift("banana");        // Add to start
fruits.pop();                   // Remove from end
fruits.shift();                 // Remove from start

//Exercise 2 : Arrary Methods
const numbers = [4, -2, 15, 8, -7, 23, 1]

const doubled = numbers.map (num => num * 2);
console.log("Doubled numbers:", doubled);

const nonNegative = numbers.filter(n => n >= 0);
console.log("Non-negative numbers:", nonNegative);

const firstgreaterThan10 = numbers.find(num => num > 10);
console.log("First number greater than 10:", firstgreaterThan10);

const product = numbers.reduce((acc, n) => acc * n, 1);
console.log("Product of all numbers:", product);

const hasNegative = numbers.some(n => n < 0);
console.log("Has negative:", hasNegative);

const sortedSmallestFirst = [...numbers].sort((a, b) => a - b);
console.log("Sorted numbers:", sortedSmallestFirst);
console.log("Original array remains untouched:", numbers);

// Task 8.2: Objects

const person ={
    firstName: "Moses",
    lastName: "Oketch",
    age : 29,
    isStudent: false,
    hobbies: ["reading", "coding", "hiking"],
    address: {
        street: "123 Main St",
        city: "Nairobi",
        country: "Kenya"
    }

  }
  // Accessing properties
  console.log("First Name:", firstName);
  console.log("Last Name:", person["lastName"]);
  console.log("City:", person.address.city);

  // Modifying properties
  person.age = 30
  person.phone = "0712345678";
  delete person.isStudent

  // Exercise 2: Object Methods
    const calculator = {
        add: function(c, d) {
            return c + d;
        },
        // Shorthand method syntax
        subtract(c, d) {
            return c - d;
        },
        // Arrow function
        multiply: (c, d) => c * d
    };
    console.log(calculator.add(6,4))
    
    // Exercise 3: Objects Iteration
    const grades = { math: 96, 
                    english: 80, 
                    science: 94 
            };
console.log(Object.keys(grades));

console.log(Object.values(grades));

console.log(Object.entries(grades));

for (const [subject, score] of Object.entries(grades)){
   console.log(`${subject}:${score}`);
}
// Task 8.3 Arrary Objects
 const students = [
        { name: "Esther", age: 20, grade: 90, major: "Computer Science" },
        { name: "Barbra", age: 22, grade: 80, major: "Mathematics" },
        { name: "Charlie", age: 19, grade: 95, major: "Computer Science" },
        { name: "Derrick", age: 21, grade: 88, major: "Chemistry" },
        { name: "Eva", age: 23, grade: 92, major: "Computer Science" } ,
    ];
    const allNames = students.map(s => s.name);
    console.log("All student names:", allNames);

    const highGradeStudents = students.filter(s => s.grade > 80);
    console.log("Students with grades above 80:", highGradeStudents);

    const charlie = students.find(s => s.name === "Charlie");
    console.log("Charlie:", charlie);

    const avgGrade = students.reduce((sum, s) => sum + s.grade, 0) / students.length;
    console.log("Average grade:", avgGrade);

    const csMajors = students.filter(s => s.major === "Computer Science");
    console.log("Computer Science majors:", csMajors);

    const sortedByGrade = [...students].sort((a, b) => a.grade - b.grade);
    console.log("Students sorted by grade:", sortedByGrade);

    const hasStudentAbove90 = students.some(s => s.grade > 90);
    console.log("Is there any student with grade above 90?", hasStudentAbove90);

    const allPassing = students.every(s => s.grade >= 60);
    console.log("Do all students have passing grades?", allPassing);

    // Task 8.4 : JSON
    const postsJson = '[{"id": 1, "title": "Welcome", "Likes":12, "published":true},{"id": 2, "title": "Draft ideas", "Likes":0,"published":false},{"id": 3, "title": "Week 4 recap", "Likes":30,"published":true}]';
    console.log(typeof postsJson); // "string"

    const posts = JSON.parse(postsJson);
    console.log(typeof posts); // "object" (array)

    const publishedPosts = posts.filter(post => post.published);
    console.log("Published posts:", publishedPosts);

    const sortedByLikes = [...posts].sort((a, b) => b.Likes - a.Likes);
    console.log("Posts sorted by likes:", sortedByLikes);

    const formattedPostsJson = sortedByLikes.map(p => `${p.title} - ${p.Likes} likes`);
    console.log("Formatted posts (JSON):", formattedPostsJson);

    const backToJson = JSON.stringify(publishedPosts);
    console.log("Back to JSON:", backToJson);

    // Mini-Project: Student Grade Tracker

    const gradeTracker = {
        students: [],

        addStudent(name, grades) {
            this.students.push({ name, grades });
        },
        getStudent(name) {
            const student = this.students.find(s => s.name === name);
            if (student) {
                return student;
            }
            return `Student ${name} not found.`;
        },

        getStudentAverage(name) {
            const student = this.students.find(s => s.name === name);
            if (!student || !student.grades) return null;

            const gradesArray = Object.values(student.grades);
            if (gradesArray.length === 0) return 0;

            const total = gradesArray.reduce((sum, item) => sum + Number(item), 0);
            return total / gradesArray.length;
        },

        getSubjectAverage(subject) {
            const subjectGrades = this.students
                .map(student => student.grades?. [subject])
                .filter(grade => grade !== undefined);
        

            if (subjectGrades.length === 0) {
                return `No grades found for ${subject}.`;
            }

            return subjectGrades.reduce((sum, grade) => sum + grade, 0) / subjectGrades.length;
        },

        getTopStudent() {
            if (this.students.length === 0) {
                return "No students available.";
            }

            let topStudent = this.students[0];
            let topAverage = this.getStudentAverage(topStudent.name);
            for (const student of this.students) {
                const studentAverage = this.getStudentAverage(student.name);
                if (studentAverage > topAverage) {
                    topStudent = student;
                }
            }
            return topStudent;
        },

        getStrugglingStudents() {
            return this.students.filter(student => {
                const average = this.getStudentAverage(student.name);
                return average !== null && average < 60;
            });
        },

        getLetterGrade(score) {
            if (score >= 90) return "A";
            if (score >= 80) return "B";
            if (score >= 70) return "C";
            if (score >= 60) return "D";
            return "F";
        },

        generateReportCard(name) {
            const student = this.getStudent(name);
            if (typeof student === "object") {
                const average = this.getStudentAverage(name);
                const letterGrade = this.getLetterGrade(average);
                return {
                    name: student.name,
                    average,
                    letterGrade
                };
            }
            return `Student ${name} not found.`;
        }
    }; 
          // Test Data   
            gradeTracker.addStudent("Esther", { math: 85, english: 90, science: 78 });
            gradeTracker.addStudent("Barbara", { math: 92, english: 88, science: 95 });
            gradeTracker.addStudent("Charlie", { math: 78, english: 82, science: 70 });
            gradeTracker.addStudent("Derrick", { math: 95, english: 92, science: 88 });
            gradeTracker.addStudent("Eva", { math: 55, english: 60, science: 50 });
        
          // Console Logs
            console.log(gradeTracker.getStudentAverage("Esther").toFixed(2));
            console.log(gradeTracker.getSubjectAverage("math").toFixed(2));
            console.log(gradeTracker.getTopStudent().name);
            console.log(gradeTracker.getStrugglingStudents().map(s => s.name));
            console.log(gradeTracker.getLetterGrade(95.67));
            console.log(gradeTracker.generateReportCard("Derrick"));

