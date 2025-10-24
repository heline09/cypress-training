// JavaScript Fundamentals Practice

//VARIABLES
// Using var, let, and const
var name = "Luisa";          // old syntax (function-scoped)
let age = 24;                // modern (block-scoped)
const country = "Kenya";     // constant, cannot be reassigned

console.log("Name:", name);
console.log("Age:", age);
console.log("Country:", country);


//DATA TYPES

// String
let greeting = "Hello, world!";
console.log(typeof greeting); // "string"

// Number
let year = 2025;
console.log(typeof year); // "number"

// Boolean
let isDeveloper = true;
console.log(typeof isDeveloper); // "boolean"

// Undefined
let project;
console.log(typeof project); // "undefined"

// Null
let score = null;
console.log(typeof score); // "object"

// OBJECTS

let student = {
  name: "Luisa Shikuku",
  course: "Computer Science",
  skills: ["Python", "Django", "SQL", "JavaScript"],
  isGraduated: false,
  details: function() {
    return `${this.name} is studying ${this.course}`;
  }
};

console.log(student.details());
console.log("Main Skill:", student.skills[0]);

// Add a new property
student.university = "Kenyatta University";
console.log("Updated Student:", student);

// ARRAYS
let fruits = ["Mango", "Banana", "Apple", "Orange"];

console.log("First fruit:", fruits[0]);
console.log("All fruits:", fruits);

// Add items
fruits.push("Pineapple");
console.log("After adding:", fruits);

// Remove last item
fruits.pop();
console.log("After removing:", fruits);

// Loop through array
for (let fruit of fruits) {
  console.log(`I like ${fruit}`);
}

// Array of objects
let users = [
  { name: "Luisa", role: "Developer" },
  { name: "John", role: "Tester" },
  { name: "Mary", role: "Designer" }
];

// Accessing array of objects
users.forEach(user => {
  console.log(`${user.name} works as a ${user.role}`);
});

// COMBINING OBJECTS & ARRAYS
let company = {
  name: "Tech Innovators",
  employees: users, // reusing the 'users' array
  location: "Nairobi"
};

console.log(`${company.name} has ${company.employees.length} employees.`);

