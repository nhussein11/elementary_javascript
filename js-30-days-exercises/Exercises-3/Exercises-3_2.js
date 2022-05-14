let users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }


// let maxLenght=0;
// let person;
// for (user in users){
//     const {skills} = users[user];
//     (skills.length>maxLenght) 
//     ? (maxLenght=skills.length , person=user) 
//     :''
// }
// console.log(user)

/*
Count logged in users,count users having greater than equal to 50 points from the following object.
Find people who are MERN stack developer from the users object

Set your name in the users object without modifying the original users object

Get all keys or properties of users object

Get all the values of users object

*/

/*So... */


let usersLogged=0;
let usersPoints=0;

Object.entries(users).forEach(([key,value]) => {
  let logged=value['isLoggedIn'];
  let points=value['points'];

  logged ? usersLogged++ : usersLogged;
  points>=50 ? usersPoints++: usersPoints;

  let skills=value['skills'];
  let stack='';
  skills.forEach((item)=>
    stack+= item[0]
  )
  //console.log(stack.includes('MERN'))
  stack.includes('MERN') ? console.log(key+' is a MERN´s FAN') : ''
});

console.log('usersLogged: ',usersLogged);
console.log('usersPoints: ',usersPoints);

objToAppend={Nico:{}};
users={... users, ... objToAppend};
console.log(users);


console.log(Object.keys(users))
console.log(Object.values(users))

