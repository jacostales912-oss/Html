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

let people = [
  {
    firstname: "Jaren",
    lastname: "Costales",
    age: 23,
  },
  {
    firstname: "Orly",
    lastname: "Villaruel",
    age: 23,
  },
  {
    firstname: "Chaun",
    lastname: "Fondales",
    age: 15,
  },
];
for (let i = 0; i < people.length; i++) {
  console.log(`First Name : ${people[i].firstname}`);
  console.log(`Last Name  : ${people[i].lastname}`);
  console.log(`Age        : ${people[i].age}`);
}
