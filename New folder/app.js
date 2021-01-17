

//                                        Chapter  31-34


// Getting the current date and time




//Q1 Write a program that displays current date and time in your browser.

// ans
// var a=new Date()
// document.write(a)

// Extracting parts of the date and time

//Q2 Write a program that alerts the current month in words.For example December.



// ans

// function show_now(){
//     var my_month=new Date()
    
    
//     var month_name=new Array(12);
//     month_name[0]="January"
//     month_name[1]="February"
//     month_name[2]="March"
//     month_name[3]="April"
//     month_name[4]="May"
//     month_name[5]="June"
//     month_name[6]="July"
//     month_name[7]="August"
//     month_name[8]="September"
//     month_name[9]="October"
//     month_name[10]="November"
//     month_name[11]="December"
    
//     alert ("Current month = " + month_name[my_month.getMonth()]); 
//     }


// show_now()


// Q3 Write a program that alerts the first 3 letters of the current

// day, for example if today is Sunday then alert will show

// Sun.


// ans



// var d = new Date();
// var weekday=["Sun","Mon","Tue","Wen","Fri","Sat"]

// var n = weekday[d.getDay()];
// alert(n)


// Q4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

// ans


// var time = new Date().getDay();
// if (time < 6) {
//     alert("Its is a hot and dusty day")
// } else if (time < 8) {
//     alert("Its Fun day");
// } else {
//     alert("its a bad day");
// }




// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.



// ans


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

// ans


// var start = new Date(1970, 1, 1).getTime();
// var elapsed = new Date().getTime() - start;
// var ms = elapsed,
//     min = Math.floor((ms / 1000 / 60) << 0),
//     sec = Math.floor((ms / 1000) % 60);
// document.write("Elapsed minutes from 1970,1, 1 is :" + min+ "<br>")
// document.write("Elapsed millisecond from 1970,1,1 is : " + elapsed)



// Q7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.


// ans

// var date = new Date();
// var hours = date.getHours();
// var minutes = date.getMinutes();

// // Check whether AM or PM 
// var newformat = hours >= 12 ? 'PM' : 'AM';

// // Find current hour in AM-PM Format 
// hours = hours % 12;

// // To display "0" as "12" 
// hours = hours ? hours : 12;
// minutes = minutes < 10 ? '0' + minutes : minutes;

// document.write("<h1>" + "It's " + newformat + "</h1>")





// Q8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.



// ans


// var date = new Date();
// var lastDay = new Date(date.getFullYear(), date.getMonth() + 7, 0);
// document.write("<br>" + lastDay);




// Specifying a date and time


// Q9:Create a date object of the starting date of this Ramadan and alert the number of days past since 1 st Ramadan?

// Note: 1 st Ramadan was on June 6, 2019


// ans



// var birth = new Date("June 6,2019")
// var a=new Date
// var birth=birth.getTime()
// var current=a.getTime()
// var total = (current-birth)/(1000*60*60*24)
// var c =total.toFixed(4)
// var b=Math.floor(total)
// alert("Days"+b+"")



// Q10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.



// ans


// var date1 = new Date("Dec 05, 2015 22:50:16");
// var fmilli = date1.getTime();
// var sec = new Date("Jan 01 2015");
// var smilli = sec.getTime();
// diff = fmilli - smilli;
// var passed = Math.floor(diff / (1000 * 60));
// document.write("Reference date will be : " + date1)
// document.write(+passed + " seconds have passed since the beginning of 2015")



// Q11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.

// ans


// var currennt = new Date();
// var time = new Date();
// var extract = time.setHours(time.getHours() - 1);
// document.write("current date is : " + currennt + "</br>");
// document.write("1 hour age : it was : " + time);


// Q12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

// ans

// var reff2015 = new Date("December 05, 2015 23:08:16");
// document.write('<br><br><br> Current Date :' + reff2015);
// reff2015.setFullYear(reff2015.getFullYear() - 100);
// document.write('<br>100 year(s) back, it was ' + reff2015);


// Q13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.


// ans


// var userAge = prompt("Enter your Age");
// var birthYear = new Date().getFullYear() - userAge;
// document.write(`Your Age is ${userAge} <br> Your birth year is ${birthYear}`);


// Q14. Write a program to generate your K-Electric bill in your
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


// ans


// var customerName = "Shehryar Javed Customer";
// var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// var Nmonth = months[new Date().getMonth()];
// var numUnits = 410;
// var charge = 16;
// var netAmount = numUnits * charge;
// var lateCharge = 350;
// var crossAmount = netAmount + lateCharge;

// document.write(`<h1>K-Electric Bill</h1>Customer Name: <b>${customerName}</b><br>Month: <b>${Nmonth}</b><br> Number of units: <b>${numUnits}</b><br>Charges per unit: <b>${charge}</b><br><br>Net Amount Payable(within Due Date) : <b>${netAmount}</b><br>Late payment surchargee: <b>${lateCharge}</b><br>cross Amount Payable (after Due Date): <b>${crossAmount}</b><br>`)




//                                        Chapter  35-38


//                   FUNCTION


// Q1. Write a function that displays current date & time in your
// browser.


// ans

// function date()
// {

//     var a=new Date()
// document.write(a)
// }

// date();

// Q2. Write a function that takes first & last name and then it
// greets the user using his full name.


// ans


// function greet() {
//     var fistName = prompt("Enter your First Name");
//     var lastName = prompt("Enter your Last Name");
//     alert("Welcome Mr/Mrs " + fistName + " "+ lastName);  
// }
// greet();


// Q3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.


// ans



function sumNum() {
    var num1 =  prompt("Enter the first Number");
    var num2 =  prompt("Enter the second Number");
    var b = num1 + num2
    return b;
}
sumNum();