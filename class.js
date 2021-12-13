// class Gender{
//     constructor(){
//         this.gender="male";
//     }
//     printGender(){
//         console.log(this.gender);
//     }
// }


// class Person extends Gender {
//     constructor(){
//         super();
//         this.name="max";
//     }

//     printMyName(){
//         console.log(this.name);
//     }
// }

// const person = new Person();
// person.printMyName();
// person.printGender();


//spread operator for arrays
// const numbers=[1,2,3];
// const newNumbers=[...numbers,4];

// console.log(newNumbers);


//spread operator for objects
// const person={
//     name:"max"
//   };
  
//   const newPerson={
//     ...person,
//     age:28
//   }
//   console.log(newPerson);


//rest operator
// const filter =(...args)=>{
//     return args.filter(el => el ===1);
// }
// console.log(filter(1,21,1,1,0,3));



//Array Destructuring
let num1,num2,num3;
const numbers=[1,2,3];
[num1,,num3]=numbers;
console.log(num1,num3);