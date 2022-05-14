// 1. Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F
// 2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer
// 3. Check if a day is weekend day or a working day. Your script will take day as an input.


// 1- 
// const score=90;
// switch(true) {
//     case (score>=80 && score<100):
//       console.log('A');
//       break;
//     case (score>=70 && score<=79):
//       console.log('B');
//       break;
//     case (score>=60 && score<=69):
//       console.log('C');
//       break;
//     default:
//       console.log(score) ;
// }

// 2-
// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("Enter month: ", answer=>{
//     switch(true){
//       case(answer==='September' || answer==='October' || answer==='November'):
//         console.log('Autum');
//         break;
//       case(answer==='December' || answer==='January' || answer==='February'):
//         console.log('Winter');
//         break;
//       case(answer==='March' || answer==='April' || answer==='May'):
//         console.log('Spring');
//         break;
//       case(answer==='June' || answer==='July' || answer==='August'):
//         console.log('Summer');
//         break;
//       default:
//         console.log('Invalid month');
//     }

//     rl.close();
// });


// 3- 
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is the day today? ", answer=>{
    (
        answer.toLowerCase()==='monday'
        || answer.toLowerCase()==='tuesday'
        || answer.toLowerCase()==='wednesday'
        || answer.toLowerCase()==='thursday'
        || answer.toLowerCase()==='friday'
    )
    ? console.log(`${answer} is a working day`)
    : console.log(`${answer} is a weekend`)

    rl.close();
});