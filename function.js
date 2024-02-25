// function displayMsg(name){
//     console.log("Hi my name is",name)
// }

// displayMsg("Vikram")

// function sum([num1,num2,num3]){
//     return num1 + num2 + num3
// }
// let numbers = [4,5,6]
// let result = sum(numbers)

// console.log(result)


// function sumOfAllNumbers(){
//     let sum = 0
//   for(let i= 0;i<arguments.length;i++){
//     sum += arguments[i]
//   }
//   return sum
// }

// let result = sumOfAllNumbers(4,5,8,7,6,2,5,4,6,2,1)
// console.log(result)

/** 
function userInfo(info){
  console.log(`Hi ${info.name} you are ${info.age} years old and you are from ${info.country}`)
}


let userinfomation = {
    name: "Vikram Saini",
    age : 20,
    country: "India"
}

userInfo(userinfomation)


function userInfo(info){
   const {name,age,country} =info
   console.log(`Hi ${name} you are ${age} years old and you are from ${country}`)
  }
  
  
  let userinfomation = {
      name: "Vikram Saini",
      age : 20,
      country: "India"
  }
  
  userInfo(userinfomation)
*/


// let arr = [4 , 5 , 6 , 7 , 8 , 3 , 2 , 4]

// function sumArr(num){
//     let sum = 0
//    for(let i = 0 ; i<num.length;i++){
//     sum += num[i]
//    }
//    return sum
// }
// console.log(sumArr(arr))

// arrow function 
/**
const sumOfAll = (a,b)=> a + b


let result = sumOfAll(7,8)

console.log(result)
 */

// const obj1 = ()=>{
//     console.log(arguments)
// }



// obj1(1,2,3,4,5)

/** 
const sumOfAll = function(num1,num2){
    return num1 + num2
}

let result = sumOfAll(4,6)

console.log(result)
*/

/** 
const person = {
    name:"Vikram Saini",
    age:20,
    greet :function(){
        console.log("Hi" , this.name )
    },
    greet2 :()=>{
     console.log("Hi",this.age)
    }
}

console.log(person.name)
person.greet()
person.greet2()
*/
/** 
const greet = (name="Vikram")=>{
    console.log("Hello",name)

}

greet()
greet("Ajay")
*/


function displayMsg(greet = "Hello vikram "){
    console.log(greet)
}

displayMsg("Hello PW")













