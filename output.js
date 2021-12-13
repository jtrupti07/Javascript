"use strict"
//displaying the js elements in different ways

//innerHTML
//document.write() : writing output in html file
//window.alert()  : generate alert and reuse the page
//console.log() : writing in browser console


//document.write(5*6)
//document.write("Hello" + "World !!")
var a=13
//window.alert(10+25 + a)
//window.alert(a)
console.log(10+98)

var x=13

/*
for the alert dialog box

function warn()
{
    alert("This is a warning message")
    document.write("This is a warning message")
}
*/

/*
   For the confirm dialog box    

function getConfirmation()
{
    var retval=confirm("Do you want to continue?")
    if(retval==true){
        document.write("User wants to continue")
        return true
    }else{
        document.write("user does not want to continue")
        return false
    }

}
*/


function getValue()
{
    var retval=prompt("Enter your name: ","your name here")
    document.write("you have Entered: " + retval)

}



