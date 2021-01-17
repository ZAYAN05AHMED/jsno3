

//                                        Chapter  38-42


// Q1. Write a custom function power ( a, b ), to calculate the value of
// a raised to b

// ans


// function power(a,b)
// {

// var powers = Math.pow(a,b)
// return powers
// }

// var number = prompt("Please enter the Number here") 
// var pow= prompt("Please enter the power here")

// var result = power(number,pow)
// document.write("The power of Number "+number+" to "+pow+" times is "+result)


// Q2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.

// ans

// function leapYear(a)
// {

// if(a%4 === 0 )
// {

// document.write(a+" is a Leap Year")
// }
// else {
//     document.write(a+" is Not a Leap Year")
// }

// }

// var number = +prompt("Please enter the Year here") 

// var result = leapYear(number)



// Q3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions


// ans


// function length1(a,b,c){

// var s= length2(a,b,c)

// var result = s * ( s -a)*(s-b)*(s-c)
// return result

// }

// function length2(a,b,c){

//     var result = (a+b+c)/2
//     return result

// }

// var a = +prompt("Enter the length of first side of a triangle here")
// var b = +prompt("Enter the length of second side of a triangle here")
// var c = +prompt("Enter the length of third side of a triangle here")

// var result = length1(a,b,c)
// document.write("The area of a triangle is "+result)


// Q4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.


// ans



// function mainFunction(a,b,c){

// var avg =  average(a,b,c)

// var percent =  percentage(a,b,c)

// document.write(avg+"<br>"+percent)


// }

// function average(a,b,c)
// {
// var result = (a+b+c) / 3
// var resultFormatted = "The Average Marks are "+result
// return resultFormatted
// return result

// }

// function percentage(a,b,c)
// {
// var result = ((a+b+c) / 300) * 100 
// var resultFormatted = "The Percentage is "+result+"%"
// return resultFormatted

// }


// var firstMarks =+prompt("Enter the marks of first subject here")
// var secondMarks =+prompt("Enter the marks of first subject here")
// var thirdMarks =+prompt("Enter the marks of first subject here")

// var result = mainFunction(firstMarks,secondMarks,thirdMarks)




// Q5. You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now.



// ans


// var str = prompt("Please enter the text here")


// document.write(str.indexOf("i"))

// for (var i=0; i<str.length; i++)
// {
//     document.write(str.slice())
// }


// Q6. Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.


// ans

// var str = prompt("Please enter the text here")

// for (var i=0; i<str.length; i++)
// {
// //     if(str.charAt(i) === "a"||"e"||"i"||"o"||"u")   {
// // //        ||"e"||"i"||"o"||"u"

// if(str.charAt(i) === ("a"||"e"))
// {
// document.write(str.charAt(i)+"<br>")
// }
// }

// var numChars = str.length;
// for (var i = 0; i < numChars; i++) {
// if (str.slice(i, i + 1) === "a"||"e") {

// alert("wovel found");

// }}


// Q7. Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence
// “Pleases read this application and give me gratuity”
// Such occurrences are ea, ea, ui.


// ans


// var isVowel= false

// var  str = "a"
// for (var i = 0; i < str.length; i++){
// var ch = str.charAt(i)
// switch(ch) {
// case  'a':
// case  'e':
// case  'i':

// default :
// alert("Shoot me now!");
// }


// }


// Q8. The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.



// ans


// function convertMeter(a)
// {

// var meter = a*1000
// document.write("The distance between two cities in Meters is "+meter+"<br>")

// }

// function convertFoot(a)
// {
//     var foot = a*1000*3.28084
//     document.write("The distance between two cities in Feets is "+foot+"<br>")

// }

// function convertInch(a)
// {

//     var inch = a*1000*39.3701
//     document.write("The distance between two cities in Feets is "+inch+"<br>")
// }

// function convertCentimeter(a)
// {
//     var centiMeter = a*1000*100
//     document.write("The distance between two cities in Centimeters is "+centiMeter+"<br>")
// }


// var distance =+prompt("Enter the Distance between two Cities here")

// var meter = convertMeter(distance)
// var inch  = convertInch(distance)
// var foot =   convertFoot(distance)
// var centiMeter = convertCentimeter(distance)



// Q9. Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.


// ans

// var input = +prompt("Please enter the Number of Hourse worked here")

// var workHours = 40
// if (input > 40) {

// var overTime = input-workHours
// var overTimeAmount = overTime * 12  
// alert("Your Overtime Payment for "+overTime+" over time hour(s) worked is Rs."+overTimeAmount)
// }

// else {
// alert("Sorry You are not entitled for any Overtime payment")
// }


// Q10. A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the
// withdrawer.


// ans

// const check = parseInt(prompt('Enter the first number '));
// const hun =  Math.floor( check/100); 
// const fif = Math.floor((check % 100) / 50);
// const ten = Math.floor(((check % 100) % 50) / 10);

// document.write("The Notes of 100 required is "+hun+" and the notes of fifty required is "+fif+" and the notes reuired for ten is "+ten);


