// FUNCTIONS
// Simple function
function greetUser(name) {
  console.log(`Hello, ${name}! Welcome back.`);
}

greetUser("Luisa");

// Function with return value
function addNumbers(a, b) {
  return a + b;
}

let sum = addNumbers(10, 5);
console.log("Sum:", sum);

// Arrow function
const square = (num) => num * num;
console.log("Square of 6 is:", square(6));


// CONDITIONAL LOGIC (if / else if / else)

let age = 24;

if (age < 18) {
  console.log("You are a minor.");
} else if (age >= 18 && age < 30) {
  console.log("You are a young adult.");
} else {
  console.log("You are an adult.");
}

// Ternary operator (short form)
let isDeveloper = true;
console.log(isDeveloper ? "Yes, you are a developer." : "No, you are not.");

// LOOPS

// For loop
for (let i = 1; i <= 5; i++) {
  console.log(`Count: ${i}`);
}

// While loop
let count = 0;
while (count < 3) {
  console.log(`While loop count: ${count}`);
  count++;
}

// For...of loop (arrays)
let languages = ["Python", "JavaScript", "Django", "SQL"];
for (let lang of languages) {
  console.log(`I can code in ${lang}`);
}

// For...in loop (objects)
let student = { name: "Luisa", course: "Computer Science", year: 2024 };
for (let key in student) {
  console.log(`${key}: ${student[key]}`);
}

console.log("Practice complete!");
