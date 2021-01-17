                                // Getting the current date and time





// Q1 Write a program that displays current date and time in
// your browser.




// ANS 
// var a = new Date();
// alert(a)


                                    //   Extracting parts of the date and time


// Q2 Write a program that alerts the current month in words.
// For example December.




// ANS 
// var d = new Date();
// var months = ["January","February","March","April","May","June","July","August","September", "October","November","December"]
// var n = months[d.getMonth()];
// alert(n)





// Q3 Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.



// ANS 
// var a = new Date()
// var day = ["sun","mon","tue","wed","thu","fri","sat"]
// var b = day[a.getDay()]
// alert(b)




                                            // Specifying a date and time





// Q4 Create a date object of the starting date of this Ramadan and alert the number of days past since 1 st Ramadan?
// Note: 1 st Ramadan was on June 6, 2019




// ANS 
// var birth = new Date("June 06, 2019")
// var a = new Date()
// var birth1 = birth.getTime()
// var current = a.getTime()
// var total = (current - birth1)/(1000*60*60*24)
// var c = total.toFixed(4)
// var b = Math.floor(total)
// alert("DAYS "+b+"")




// Q4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.



// ANS 
// var a = new Date().getDay()
// if (a === "saturday"||"sunday"){
//     alert("its funday")
// }else{
//     alert("its working day")
// }



// Q5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.



// ANS 
// var d = new Date();
// if (d.getDate() <= 15) {
//     alert("The Fist Fifteen Days Of Month")
// } else if (d.getDate() <= 31) {
//     alert("The Last Fifteen Days Of Month")
// }


// Q6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.



// ANS 
// var a = new Date()
// document.write("current time is "+a+"<br />")
// var start = new Date(1970, 1, 1).getTime();
// var elapsed = new Date().getTime() - start;
// var ms = elapsed,
//     min = Math.floor((ms / 1000 / 60) << 0),
//     sec = Math.floor((ms / 1000) % 60);
// document.write("Elapsed minutes from 1970,1, 1 is :" + min+ "<br>")
// document.write("Elapsed millisecond from 1970,1,1 is : " + elapsed)




// Q7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.



// ANS 
// var a = new Date()
// var b = a.getHours()
// if (b <= 12){
//     alert("am")
// }else if (b <= 24){
//     alert("pm")
// }




// Q8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.



// ANS 
// var date = new Date();
// var lastDay = new Date(date.getFullYear(), date.getMonth() + 7, 0);
// document.write("<br>" + lastDay);






// Q10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.



// ANS


// var date1 = new Date("Dec 05, 2015 22:50:16");
// var fmilli = date1.getTime();
// var sec = new Date("Jan 01 2015");
// var smilli = sec.getTime();
// diff = fmilli - smilli;
// var passed = Math.floor(diff / (1000 * 60));
// document.write("Reference date will be : " + date1)
// document.write(+passed + " seconds have passed since the beginning of 2015")




// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.



// ANS 
// var currennt = new Date();
// var time = new Date();
// var extract = time.setHours(time.getHours() - 1);
// document.write("current date is : " + currennt + "</br>");
// document.write("1 hour age : it was : " + time);




// Q12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

// ANS

// var reff2015 = new Date("December 05, 2015 23:08:16");
// document.write('<br><br><br> Current Date :' + reff2015);
// reff2015.setFullYear(reff2015.getFullYear() - 100);
// document.write('<br>100 year(s) back, it was ' + reff2015);




// Q13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.



// ANS 
// var a = prompt("enter age")
// var b = new Date()
// var c = b.getFullYear()
// var d = c-a
// alert("your birth year is :"+d)



// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge




// ANS 
// var a = prompt("enter your name")
// var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// var Nmonth = months[new Date().getMonth()];
// var d = prompt("enter units used")
// var e = 16
// var f = d*e
// var late = 350
// var g = d*e+350
// document.write(`<h1>KE BILL</h1><br /><b>NAME OF CUSTOMER : </b> ${a}<br /><b>MONTH :</b> ${Nmonth}<b><br />NUMBER OF UNITS :</b> ${d}<br /><b>YOUR BILL IS(with in due date) :</b> ${f}<br /><b>LATE PAYMENT SURCHARGE :</b>${late}<br /> <b>YOUR BILL IS (after due date) :</b>${g}`)









                                    // chapter 35-38 





// Q1. Write a function that displays current date & time in your
// browser.



// ANS 
// function date(){
//     var a = new Date()
//     document.write(a)
// }
// date()



// Q2. Write a function that takes first & last name and then it
// greets the user using his full name.



// ANS 
// function name(){
//     var a = prompt("enter your first name")
//     var b = prompt("enter your last name")
//     var c = a+" "+b
//     alert(c)
// }
// name()




// Q3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.



// ANS 
// function sum(){
//     var a = +prompt("enter first number")
//     var b = +prompt("enter second number")
//     return a + b
    
// }
// var z = sum()
// alert(z)




// Q4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.



// ANS 
// function Calculate(a,b,c){
//     var result = eval(a+b+c);
// return result
// }
// var a = prompt("1")
// var b = prompt("operator")
// var c = prompt("2")
// var show =  Calculate(a,b,c)
// document.write(show)




// Q5. Write a function that squares its argument.



// ANS 
// function square(){
//    var a = prompt("enetr value")
//    var b = a*a
//    return b
// }
// var c = square()
// alert(c)





// Q6. Write a function that computes factorial of a number.



// ANS 
// function factorialization(num) {
    
//     if (num === 0 || num === 1)
//       return 1;
//     for (var i = num - 1; i >= 1; i--) {
//       num *= i;
//     }
    
//     return document.write(num);
//   }
//   factorialization(prompt(""));




// Q7. Write a function that take start and end number as inputs
// & display counting in your browser.



// ANS 
// function counts(num1,num2) {
//     for (let i = num1; i <= num2; i++) {
//         document.write(i)
//     }
// }
// counts(prompt(""),prompt(""))




// Q8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()



// ANS 
// function calHypotenus(base,perpendicular) {
//     function calSquare(num) {
//         return Math.pow(num,2)
//     }
//     var hypotenus = calSquare(base) + calSquare(perpendicular);
//     return document.write(hypotenus)
// }

// calHypotenus(prompt(""),prompt(""));




// Q9. Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables



// ANS 
// function calcArea(height,width) {
//     var area = height * width
//     return document.write(area+"<br>");
// }
// var height = 100;
// var width =100;
// calcArea(10,10);

// calcArea(height,width);







// Q10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.





// ANS 

// function checkPalindrome(str){
//        var cstr = str.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
//         var count = 0;
//         if(cstr==="") {
//             console.log("Nothing found!");
//             return false;
//         }
//         if ((cstr.length) % 2 === 0) {
//             count = (cstr.length) / 2;
//         } else {
//             if (cstr.length === 1) {
//                 console.log("Entry is a palindrome.");
//                 return true;
//             } else {
//                 count = (cstr.length - 1) / 2;
//             }
//         }
//         for (var x = 0; x < ccount; x++) {
//             if (cstr[x] != cstr.slice(-1-x)[0]) {
//                 console.log("Entry is not a palindrome.");
//                 return false;
//             }
//         }
//         console.log("The entry is a Palindrome.");
//         return document.write("this string is palindome");
//     }

//     checkPalindrome("madam");
//  var user = prompt("Enter Any thing to convert first letter to capital");
// function toTitleCase(str) {
//     return str.replace(/\w\S*/g, function(txt){
//         return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//     });
// }





// Q11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'



// ANS 
// var a = "the quick brown fox"
// var titlecase =a.toTitleCase();
// document.write("Example String "+a+" <br> Expected Output :"+titlecase);




// Q12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'




// ANS 
// function largestWord(string) {
//     var str = string.split(" ");
//     var largest = 0;
//     var word = null;
//     for (var i = 0; i < str.length; i++) {
//         if (largest < str[i].length) {
//             largest = str[i].length;
//             word = str[i];
//         }
//     }
//     return word;
// }
// var largest = largestWord("Web Development Tutorial");
// document.write("Example String "+"Web Development Tutorila"+ "<br> Expected Output :"+largest);



// Q13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'




// ANS 
// function Occur(string,word) {
//     var regex = new RegExp(word,"g")
//     var result = (string.match(regex) || []).length;
//     return document.write(result);
// }

// checkOccur("Hellow world is world hellow","o");





// Q14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2





// ANS 
// function  Circum(radius) {
//     var result = 2 * (3.14) *radius
//     return document.write("The circumference of "+ radius +" is "+result+"<br>")
// }
// function  Area(radius) {
//     var result = 3.14 * (Math.pow(radius,2));
//       return document.write("The area of "+ radius +" is "+result)
// }
// Circum(35);
// Area(35);





                                // chapter 38-42 




/// Q1. Write a custom function power ( a, b ), to calculate the value of
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


