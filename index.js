// break and continue

// var arr=[1,2,3,4,5,6,7]

// // console.log(arr)

// for(var i=0;i<arr.length;i++)
// {
//     if(i==2)
//     {
//         // break
//         // continue  //it means cancle the currunt iteration and continue with the next one
//     }
//     console.log(arr[i])
// }

/************************************************************/

// array method

// let myArr=["Fan","camera",34,null,true]
// console.log(myArr.length)
// console.log(myArr)
// myArr.push(52)
// console.log(myArr.length)
// console.log(myArr)
// myArr.pop()
// console.log(myArr.length)
// console.log(myArr)
// myArr.shift()
// console.log(myArr.length)
// console.log(myArr)
// console.log(myArr.sort())
// let arraynum=[5,2,8,9,1,6]
// arraynum.sort()
// console.log(arraynum)

/*********************************************/

// String Method in JavaScript

// let myString="Good Morning"
// console.log(myString.length)
// console.log(myString)
// console.log(myString.indexOf("Morning"))
// console.log(myString.slice(1,3))
// temp=myString.replace("Good","bad")
// console.log(temp,myString)

/*********************************************/

//dates in JS

let myDate=new Date()
// console.log(myDate)
// console.log(myDate.getTime())
// console.log(myDate.getFullYear())
// console.log(myDate.getDay())

/*********************************************/

//DOM manipulation

let elem=document.getElementById('click')
console.log(elem)

let elemClass=document.getElementsByClassName("container")
console.log(elemClass)
// elemClass[0].style.background="yellow"
elemClass[0].classList.add("bg-primary")
elemClass[0].classList.add("test-success")

