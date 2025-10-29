// let person = {
//     fname:"Jaren",
//     lname:"Costales",
//     age:20,
//     Hobbies: ["singing","Playing","Coding"],
//     pets:{
//        1:{
//           name:"lyza",
//           type:"Dog",
//           breed:"Hazky"
//        },
//        2:{
//           name:"sunny",
//           type:"Dog",
//           breed:"shitzu"

//         }

//     }

// };
// console.log(person);

// let jsonText = '{"name": "Jaren", "age": 22, "city": "Cebu"}';

// let user = JSON.parse(jsonText);

// console.log(user);

// 
// Step 1: Declare a function
function calculateGrade(name, score) {
  
  // Step 2: Use condition to decide the grade
  
  let grade;

  if (score >= 90) {
    grade = "A";
  } else if (score >= 80) {
    grade = "B";
  } else if (score >= 70) {
    grade = "C";
  } else if (score >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }

  // Step 3: Return a message (output)
  return `Student: ${name} | Score: ${score} | Grade: ${grade}`;
}

// Step 4: Call the function multiple times
console.log(calculateGrade("Jaren", 95));
console.log(calculateGrade("Norman", 82));
console.log(calculateGrade("Faith", 67));
console.log(calculateGrade("Mika", 50));

