// chapter 1 ---task 1
// alert("Welcome vistors to the web")

                            // chapter 1 ---task 2
// alert("Error! Please enter a valid password")

                            // chapter 1 ---task 3
//  alert("Welcome to JS Land....\n Happy Coding!")

                            // chapter 1 ---task 4
// alert("Welcom to JS Land...")
// alert("Happy Coding!")

                            // chapter 1 ---task 5
// console.log(alert("Hello...i can run JS through browsers console"))

                          // chapter 1 ---task 6 
//Implemented! showing alert in html css project
                        
                          // chapter 1 ---task 7
//script is working on all positions


                           // chapter 2-------- task 1
// var username;

                           // chapter 2-------- task 2
// var myName= "Anusha Tariq";
// console.log(myName)

                           // chapter 2-------- task 3
// var msg;
// msg="Hello world";
// alert(msg)

                           // chapter 2-------- task 4
// var name="John Doe";
// var age='15 years';
// var course="Certified Mobile Application Development";

// alert(name)
// alert(age)
// alert(course)

                           // chapter 2-------- task 5
// var me="PIZZA\r\nPIZZ\r\nPIZ\r\nPI\r\nP";
// alert(m);


 
//                              chapter 2-------- task 6
// var email="anushatariq18@gmail.com";
// alert("My email is " + email)

                           // chapter 2-------- task 7
// var book;
// book= "A smarter way to learn JavaScript";
// alert("I am trying to learn from the book " + book)

                           // chapter 2-------- task 8
// document.write("Yah! I can write HTML content through JS")

                           // chapter 2-------- task 9
// var pattern="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(pattern)
// document.write(pattern)








                            // chapter 3------ task 1
// var age;
// age='21 years old';
// alert(age)

                            // chapter 3------ task 2

// var counter=localStorage.getItem("counter");
// localStorage.setItem("counter",++counter);
// alert("You have visited the wewbsite  "+counter" times")





                            // chapter 3------ task 3
// const birthYear="1999";
// document.write("My birth year is " + birthYear + " <br/> Data type of my declared variable is number")
//document.write("Data Type of my declared variable is "+ typeof(birthYear));

                            // chapter 3------ task 4
// var name="Jhon Doe";
// var product="T-shirt";
// var quantity="5";
// document.write(name + " ordered " +  quantity + product+"(s)" + " on XYZ clothing store")  

// Chapter 4 ------ task 1
// var a1,b2,c3;

// chapter 4 ------ task 2
// legal variables
// var _b, n4, OK, birthYear, $i;  

// illegal variables
// var 2cx, -h, ~u, @amb ,&m;

// chapter 4 ------ task 3
// document.write("<h1>Rules for naming JS variables </h1>");
// document.write(" Variable names can only contain numbers , alphabets , _ and $. For example $my_1stVariable <br>")
// document.write(" Variables must begin with a $, _ or alphabet. For example $name, _name or name <br>")
// document.write("Variable names are casesensitive <br>")
// document.write("Variable names should not be JS keywords");

//chapter 21-25 (question 1)
// var fName = prompt("Enter your first name: ");
// var lName = prompt("Enter your last name: ");
// var fullName = fName + " " + lName;
// document.write ("Hello "+ fullName);

// chapter 21-25 (question 2)
// var mobile = prompt("Enter your favourite mobile model");
// var x = mobile.length;
// document.write("My favorite phone is "+ mobile + "<br>");
// document.write("Length of string "+ x);

// chapter 21-25 (question 3)
// var country = "Pakistani";
// var x = country.indexOf("n");
// document.write("String: " + country + "<br>");
// document.write("Index of 'n': "+ x);

// chapter 21-25 (question 4)
// var str = "Hello World";
// var x = str.lastIndexOf('l')
// document.write("String: " + str + "<br>");
// document.write("Last Index of l: " + x);

// chapter 21-25 (question 5)
// var str = "Pakistani";
// var x = str.charAt(3);
// document.write("String: " + str + "<br>");
// document.write("Character at Index 3: " + x);

// chapter 21-25 (question 6)
// var fName = prompt("Enter your first name: ");
// var lName = prompt("Enter your last name: ");
// var s = " ";
// var fullName = fName.concat(s, lName);
// document.write ("Hello "+ fullName);

// chapter 21-25 (question 7)
// var city = "Hyderabad";
// var city1 = city.replace("Hyder","Islam")
// document.write("City: " + city + "<br>");
// document.write("After replacement: "+ city1);

// chapter 21-25 (question 8)
// var message = "Ali and Sami are best friends. They play cricket and football together";
// var message1 = message.split("and").join("&");
// document.write("String: " + message + "<br>");
// document.write("After replacement: " + message1);

// chapter 21-25 (question 9)
// var x = "472";
// document.write("Value: " + x + "<br>");
// document.write("Type: "+ typeof(x) + "<br>");
// var y = Number(x);
// document.write("Value: "+ y +"<br>");
// document.write("Type: "+ typeof(y));

// chapter 21-25 (question 10)
// var str = prompt("Enter string: ");
// document.write("User Input: "+ str +"<br>");
// document.write("Upper case: "+ str.toUpperCase());

// chapter 21-25 (question 11)
// var str = prompt("Enter your string: ");
// var x =  (str.charAt(0).toUpperCase()+str.slice(1));
// document.write("User Input: "+ str +"<br>");
// document.write("Title case: "+ x);

// chapter 21-25 (question 12)
// var num = 35.36;
// var x = num.toString().replace('.','');
// document.write("Number: " + num + "<br>");
// document.write("Result: " + x + "<br>"); 
// document.write(typeof(x));

// chapter 21-25 (question 13)
// var uname = prompt("Enter username: ");
// for(i=0; i<= uname.length; i++){
//    if(uname.charCodeAt(i)==33||uname.charCodeAt(i)==44||uname.charCodeAt(i)==46||uname.charCodeAt(i)==64)
// {
    // alert("Please enter a valid username");
// }
// }

// chapter 21-25 (question 14)
// var a = ["cake", ";applepie", "cookie", "chips", "patties"]
// var b = prompt("Welcome to ABC Bakery, What do you want to order sir/ma'am?");
// var c = b.toLowerCase();
// if(a.includes(c)){
    // alert(c + " is available at index "+ a.indexOf(c) + " in our bakery.")
// }
// else{
    // alert(c + " is not available in our bakery.")
// }

// chapter 21-25 (question 15)
// var pswd = prompt("Enter password: ");
// document.write("Entered Password: "+ pswd +"<br>")
// var lowerCaseLetters = /[a-z]/g;
// var upperCaseLetters = /[A-Z]/g;
// var numbers = /[0-9]/g;
// if(pswd.length<6){
    // document.write("Password length should not be less than 6. <br> Please enter a valid password.        ")
// }
// if(pswd.match(numbers)&&(pswd.match(upperCaseLetters)||pswd.match(lowerCaseLetters))){
    // if(pswd[0]>=0||pswd[0]<=9){
    // document.write("Password should not begin with a number. <br> Please enter a valid password.");
// }
// }
// else{
    // document.write("Password must contain letters and number. <br> Please enter a valid password.");
// }

// chapter 21-25 (question 16)
// var university = "University of Karachi";
// var x = university.split("");
//  for(i=0; i<x.length; i++){
    // document.write(x[i] + "<br>");
// }

// chapter 21-25 (question 17)
// var str = prompt("Enter a string: ");
// var x = str.length;
// var char = str.charAt(x-1);
// document.write("User Input: "+ str +"<br>")
// document.write("Last character of input: " + char +"<br>")

// chapter 21-25 (question 18)
// var str="The quick brown fox jumps over the lazy dog. ";
// var str1 = str.toLowerCase();
// var x = str1.match(/the/g);
// document.write("Text: " + str +"<br>")
// document.write("There are " + x.length +" occurence(s) of word 'the' ");

// chapter 26-30 (question 1)
// var num = +prompt("Enter a number");
// if(Math.sign(num)===1){
//     var round=Math.round(num);
//     var floor=Math.floor(num);
//     var ceil=Math.ceil(num);
//     document.write("Number: "+num+"<br>" );
//     document.write("Round off value: "+ round+"<br>" )
//     document.write("Floor value: "+ floor+"<br>" )
//     document.write("Ceil value: "+ ceil+"<br>" )
// }
// else{
//     alert("Enter a positive integer. ")
// }

// chapter 26-30 (question 2)
// var num = +prompt("Enter a number");
// if(Math.sign(num)===-1 &&){
//     var round=Math.round(num);
//     var floor=Math.floor(num);
//     var ceil=Math.ceil(num);    
//     document.write("Number: "+num+"<br>" );
//     document.write("Round off value: "+ round+"<br>" )
//     document.write("Floor value: "+ floor+"<br>" )
//     document.write("Ceil value: "+ ceil+"<br>" )
// }
// else{
//     alert("Please enter a negative integer. ")
// }

// chapter 26-30  (question 3)
// var num = +prompt("Enter a number: ");
// var num1 = Math.abs(num);
// document.write("The absolute value of "+ num+" is " + num1);

// chapter 26-30 (question 4)
// var val = Math.floor(Math.random() * 6) + 1;
// document.write("Random dice value is : "+ val);

// chapter 26-30 (question 5)
// var val = Math.floor(Math.random() * 2) + 1;
// if(val == 2){
// document.write(val + " <br> Random coin value is : Head");
// }
// else{
    // document.write(val + "<br>Random coin value is : Tail");
    // }
    
// chapter 26-30 (question 6)
// var num = Math.floor(Math.random() * 100) + 1;
// document.write("Random number between 1 and 100 : "+ num);

// chapter 26-30 (question 7)
// var x = /[+-]?\d+(\.\d+)?/g;
// var str = prompt("Enter your weight in kilograms: ");
// var a = str.match(x).map(function(v) { return parseFloat(v); });
// document.write("The weigh of user is "+ a +" kilograms");

// chapter 26-30 (question 8)
// var num = Math.floor(Math.random() * 10) + 1;
// var num1 = +prompt("Enter a number between 1 to 10")
// if(num == num1){
    // document.write("Congratulations, You won.")
// }
// else{
    // document.write("Try Again!")
// }

// chapter 31 to 34 (question 1)
// var date = new Date();
// document.write(date);

// chapter 31 to 34 (question 2)
// var months = ["January","Febuary","March","April","May","June","July","August","September","October","November","December"];
// var date = new Date();
// var month = date.getMonth()
// document.write("Current Month is: "+ months[month]);

// chapter 31 to 34 (question 3)
// var date = new Date();
// var day = date.toString().slice(0,3);
// alert("Today is " + day);

// chapter 31 to 34 (question 4)
// var days =["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
// var date = new Date();
// var day = date.getDay();
// var a = days[day];
// if(a == "Saturday" || a =="Sunday"){
//     alert("It's Fun Day");
// }

// chapter 31 to 34 (question 5)
// var date = new Date();
// var day = date.getDay();
// if(day < 16){
//     alert("First fifteen days of the month.");
// }
// else{
//     alert("Last Days of the month.");
// }

// chapter 31 to 34 (question 6)
// var date=new Date();
// var  a = date.getTime();
// var min = a /(1000*60);
// document.write("Elapsed miliseconds since January 1,1970: "+ a );
// document.write("Elapsed miliseconds since January 1,1970: "+ min);

// chapter 31 to 34 (question 7)
// var date=new Date();
// var a =date.getHours()
// if(a >= 12){
// alert("It's PM");
// }
// else{
//     alert("It's AM");
// }

// chapter 31 to 34 (question 8)
// var laterDate=new Date(new Date().getFullYear(), 11, 31);
// document.write("Later Date: "+ laterDate);

// chapter 31 to 34 (question 9)
// var date =new Date();
// var a = date.getTime()
// var b = new Date('25 Apr,2020');
// var c = b.getTime();
// var d = a-c;
// var f = d/(1000*60*60*24);
// var days=Math.floor(f);
// document.write(days +" days have passed since 1st Ramzan, 2020");

// chapter 31 to 34 (question 10)
// var date = new Date('Dec 5 2015');
// var a = date.getTime()
// var b = new Date('1 Jan,2015');
// var c = b.getTime();
// var d = a-c;
// var f = (d/1000);
// document.write("On refernce date "+ date);
// document.write(f + " seconds had passed since begining of 2015.");

// chapter 31 to 34 (question 11) 
// var date=new Date();
// var year=date.getFullYear();
// var month=date.getMonth();
// var day=date.getDay();  
// var hour =date.getHours();
// var min = date.getMinutes();
// var sec = date.getSeconds();
// var x =new Date(date.setHours(hour +1));
// document.write("Current date: "+ date );
// document.write(" 1 hour ago, it was "+ x);

// chapter 31 to 34 (question 12)
// var date=new Date();
// var year=date.getFullYear();
// var month=date.getMonth();
// var day=date.getDay();  
// var hour =date.getHours();
// var min = date.getMinutes();
// var sec = date.getSeconds();
// var x = new Date(date.setFullYear(year-100));
// alert("Current date: "+ date + " Hundred years back, it was "+ x );

// chapter 31 to 34 (question 13)
// var age = prompt("Enter your age: ");
// var date = new Date();
// var year= date.getFullYear();
// var x = year-age;
// document.write("Your age is: "+ age + "<br>");
// document.write("Your birth year is: " + x );

// chapter 31 to 34 (question 14)
// var name = prompt("Enter your name:");
// var days =["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
// var date=new Date();
// var day=date.getDay();
// var x =days[day];
// var unit = +prompt("Enter units:");
// var charges = +prompt("Enter charges");
// var late = +prompt("Enter Late charges");
// var net=unit*charges;
// var gross=net+late;
// net=Math.round(net).toFixed(2);
// gross=Math.round(gross).toFixed(2);
// document.write("K-Electric Bill </h1>"+"<br>")
// document.write("Customer Name : "+"<b>"+name+"</b>"+"<br>");
// document.write("Month : "+"<b>"+x +"</b>"+"<br>")
// document.write("Number of units : "+"<b>"+unit+"</b>"+"<br>");
// document.write("Charges per units : "+"<b>"+charges+"</b>"+"<br><br>");
// document.write("Net Amount Payable (within Due Date) : "+"<b>"+net+"</b>"+"<br>");
// document.write("Late Payment Surcharges : "+"<b>"+late+"</b>"+"<br>");
// document.write("Gross Amount Payable (after Due Date) : "+"<b>"+gross+"</b>"+"<br>");

//chapter 35-38 (question 1)
// function currentDate(){
//     var date= new Date();
//     document.write(date);
// }
// currentDate();

//chapter 35-38 (question 2)
// function name(){
//     var fName = prompt("Enter your firstname: ");
//     var lName = prompt("Enter your lastname: ");
//     var fullName = fName + " " + lName;
//     document.write("Hello " + fullName);
// }
// name();

//chapter 35-38 (question 3)
// function sum(){
//     var num1 = +prompt("Enter first number: ");
//     var num2 = +prompt("Enter second number: ");
//     var a = num1 + num2;
//     document.write("Sum is:  " + a);
// }
// sum();

//chapter 35-38 (question 4)
// function calculator(num1,operator,num2){
//     var num1 = +prompt("Enter first number: ");
//     var num2 = +prompt("Enter second number: ");
//     var operator = +prompt("Enter operator: ");
//     if(operator === '+'){
//         return num1+num2;
//     }
//     else if(operator === '-'){
//         return num1-num2;
//     }
//     else if(operator==='*'){
//         return num1*num2;
//     }
//     else if(operator==='/'){
//         return num1/num2;
//     }
// }
// var x = calculator();
// document.write("The result is:  " + x);

//chapter 35-38 (question 5)
// function square(num){
//     x = num*num;
// document.write("Square of " +num + " is: "  + x);
// }
// square(9);

//chapter 35-38 (question 6)
// function factorial(num){
//     var x = num
//     for(i=1; i<num; i++){
//         x = x*i;
//     }
//    document.write("Factorial of " + num + " is: "  + x);
// }
//factorial(5);

//chapter 35-38 (question 7)
// function numbers(){
//     var num1 = +prompt("Enter first number:");
//     var num2 = +prompt("Enter second number:");
//     var a =0;
//     for(i=1; i<=num2 && i>=num1; i++){
//         a++;
//         document.write(a + "<br>");
//     }
// }
// numbers();

//chapter 35-38 (question 8)
// function calculateHypotenuse(){
//     var num1= +prompt("Enter perpendicular: ");
//     var num2=+prompt("Enter base: ");
//     var p=calculateSquare(num1);
//     var b=calculateSquare(num2);
//     var h;
//     h=p+b;
//     var x = calculateSquare(h);
//     alert("Hypotenuse : "+ x );
//     function calculateSquare(a){
//     return a*a;
//     }
// }
// calculateHypotenuse();


// chapter 35-38 (question 9)
// function area(width,height){
//     var a = width*height;
//     document.write("Area of the rectangle is : " +a+ "<br>")
// }
// var height = 2;
// var width = 7;
// var a = area(4,9); //argument as value
// var a = area(width,height); //argument as varaible

//chapter 35-38----task 10
// function palindrome(str){    
//     var x ='';
//     for(i=str.length-1; i>=0; i--)
//     { 
//        x +=str[i]
//     }
//   if(x === str){
//     alert('The word is a palindrome')
//     }
//     else{
//     alert('The word is not a palindrome')
//     }
// }
// var word = prompt("Enter a word");
// palindrome(word);

//chapter 35-38 (question 11)
// function capital(str){
// var x = str.split(' ');
// var arr =[];
// for(i=0; i<x.length; i++){
//   arr.push(x[i].charAt(0).toUpperCase()+x[i].slice(1));
 // }
// return arr.join(" ");
// }
// var x = capital('the quick brown fox');
// document.write("EXAMPLE STRING : "+"the quick brown fox"+"<br>")
// document.write("EXPECTED STRING : "+ x +"<br>")

//chapter 35-38 (question 12)
// function longest(str)
// {
//   var arr = str.match(/\w[a-z]{0,}/gi);
//   var arr1 = arr[0];
//   for(i = 1 ; i < arr.length ; i++)
//   {
//     if(arr1.length < arr[i].length)
//     {
//     arr1 = arr[i];
//     } 
//   }
//   return arr1;
// }
// var x= longest('Web Development Tutorial')
// document.write("EXAMPLE STRING : "+"Web Development"+"<br>")
// document.write("EXPECTED OUTPUT : "+ x+"<br>")


//chapter 35-38 (QUESTION 13)
// function name(a,b){
// var num = 0;
    // for(i=0;i<a.length;i++){
        // if(a.charAt(i)===b){
            // num+=1;
        // }
    // }
    // document.write("EXAMPLE  : "+ a +"<br>");
//  document.write("LETTER : "+ b +"<br>");
//  document.write("Number Of Occurences : "+ num+"<br>");
// }
// name('anusha','n');

//chapter 35-38  (question 14)
// function calcCircumference(r){
    // var x = Math.PI;
    // var y = 2 * x *r;
//  document.write("The Circumference of the circle is : "+ y +"<br>")
//  }
// function calcArea(r){
    // var x = Math.PI;
    // var a = x*r*r;
//  document.write("The Area of the circle is : "+
// a +"<br>")
// }
// calcArea(6)
// calcCircumference(6);

// Chapter 38 - 42
//Question 1
// function power(a,b){
//     var r =Math.pow(a,b);
//     console.log(r)
// }
// power(2,3)

// Question 2
// function leapYear(year){
//     if( (0 == year % 4) && (0 != year % 100) || (0 == year % 400) )   {
//         alert(year+" is a leap year");  
//     }    else
//     {
//         alert(year+" is not a leap year");  
//     }
// }
// var year=+prompt("Enter Year");
// leapYear(year);

// Question 3
// function triangle(S,a,b,c){
//     var area=S*(S-a)*(S-b)*(S-c)
//     document.write("<h1> Area of Triangle : "+area)
// }
// function sides(a,b,c){
// var S = ( a + b + c ) / 2;
// document.write("<h1> S : "+ S)
// return S;
// }
// var a=+prompt("Enter one side");
// var b=+prompt("Enter second side");
// var c=+prompt("Enter third side");
// var s=sides(a,b,c)
// triangle(s,a,b,c)

// Question 4
// function marks(marks1,marks2,marks3){
//     var averageMarks=average(marks1,marks2,marks3)
//     var per=percentage(averageMarks)
//     document.write("<h1> Average Marks: "+averageMarks+"<br>")
//     document.write("<h1> Percentage: "+per+"%"+"<br>")
// }
// function percentage(ave){
//     var totalMarks=300;
//     var per=(ave/totalMarks)*100;
//     var finalPer=per.toFixed(2)
//     return finalPer;
// }
// function average(marks1,marks2,marks3){
// var average=(marks1+marks2+marks3)/3;
// var finalAve=average.toFixed(2)
// return finalAve;
// }
// var marks1=+prompt("Enter marks in 1st subject");
// var marks2=+prompt("Enter marks in 2nd subject");
// var marks3=+prompt("Enter marks in 3rd subject");
// marks(marks1,marks2,marks3)

// Question 5
// function indexes(name,char){
//         document.write("<h1> Name: "+name+"<br>")
//     document.write("<h1> Character: "+char+"<br>")
//     for(var i=0;i<=name.length;i++){
//         if(name[i]===char){
//     document.write("<h1> Index: "+i+"<br>")
//         }
//     }
// }
// var name=prompt("Enter your name")
// var char=prompt("Enter letter whose index you want?")
// indexes(name,char)

// Question 6
// function removeVowels(str){
//     var vowels = "aieuo";
//     var strArr = str.toLowerCase().split("");
//     var newArr = strArr.filter(function(letter){
//         if(vowels.indexOf(letter)  == -1){
//             return letter;    
//         }
//     });
//     var string = "";
//     newArr.forEach(function(letter){
//         string += letter;
//     });
//     return string;
// }
// var sen=prompt("Enter string")
// var res=removeVowels(sen);
// document.write("<h1>String : "+sen+"<br>")
// document.write("<h1>String After vowels removed : "+res+"<br>")

// Question 7
// function occ(str) {
//     var count = 0;
//     let vowel = false;
//     for (const char of str.toLowerCase()) {
//       switch (char) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//           {
//             if (vowel) {
//               count++;
//               vowel = false;
//             } else {
//               vowel = true;
//             }
//             break;
//           }
//         default:
//           vowel = false
//       }
//     }
//     return count
//   }
//   var str = "Pleases read this application and give me gratuity";
//   var occ=occ(str)
//   document.write(occ)

// Question 8
// function meters(distance){
//     var m=distance*1000;
//     document.write("<h1>Distance in meters: "+m+"<br>")
//     feet(m)
//     function feet(m){
//         var f=m* 3.28084;
//         document.write("<h1>Distance in feet: "+f+"<br>")
//         inches(f)
//         function inches(f){
//             var i=f*12;
//             document.write("<h1>Distance in inches: "+i+"<br>")
//             cm(i)
//             function cm(i){
//                 var c=i*2.54
//                 document.write("<h1>Distance in cm: "+c+"<br>")
//             }
//         }
//     }    
// }
// var distance=prompt("Enter distance in km")
// document.write("<h1>Distance in km : "+distance+"<br>")
// meters(distance)

// Question 9
// function pay(workingHours){
//     var over_time;
//     var over_time_pay;
//     if(workingHours>40)
//     { over_time = workingHours - 40;
//         over_time_pay = over_time * 12.00;
//         document.write("<h1>Overtime Pay is "+over_time_pay.toFixed(2))
// }
// else{
//     document.write("<h1>You have to work for more than 40 hours to get over time pay ")
// }
// }
// var workingHours=prompt("Enter Employees working hours")
// pay(workingHours)

// Question 10
// function denominations(amount){
// var h=parseInt(amount/100);
// var f=parseInt((amount % 100) / 50);
// var t=parseInt(((amount % 100) % 50) / 10);
//         document.write("<h1> You have "+h+" hunderd notes "+f+" fifty notes "+t+" ten notes")
// }
// var amount=prompt("Enter amount of withdrawal")
// denominations(amount)

// Chapter 43-48
// Question 1
// function greeting(){
//     alert("Hello world")
// }

// Question 2
// function imagealert(){
//     alert("Thanks for purchasing a phone from us")
// }

// Question 3
// function deleteRec(row){
//     var a=document.getElementsByClassName(row)[0]
//     a.remove();
// }

// Question 4
// function imageover(){
//     var img=document.getElementsByClassName('img')[0];
//     img.src="./mob1.jpg"
// }
// function imageout(){
//     var img=document.getElementsByClassName('img')[0];
//     img.src="./mob2.jpg"
// }

// Question 5
// var count=0;
// function increment(){
// count=count+1;
// var a=document.getElementsByClassName("counter")[0];
// a.innerHTML=count;
// }
// function decrement(){
//     count=count-1;
//     var a=document.getElementsByClassName("counter")[0];
//     a.innerHTML=count;
//     }

//Chapter 49-52
// Question 1
// function signup(){
//     var fname=document.getElementsByClassName('formdata')[0].value;
//     var formDisplay=document.getElementsByClassName("formdatadisplay")[0]
//     var node=document.createElement("H2")
//     var fn=document.createTextNode("First name : "+fname+"");
//     node.appendChild(fn)
//     formDisplay.appendChild(node);
//     var lname=document.getElementsByClassName('formdata')[1].value;
//     var formDisplay=document.getElementsByClassName("formdatadisplay")[0]
//     var node=document.createElement("H2")
//     var ln=document.createTextNode("Last name : "+lname);
//     node.appendChild(ln)
//     formDisplay.appendChild(node);
//     var num=document.getElementsByClassName('formdata')[2].value;
//     var formDisplay=document.getElementsByClassName("formdatadisplay")[0]
//     var node=document.createElement("H2")
//     var nu=document.createTextNode("Number : "+num+"");
//     node.appendChild(nu)
//     formDisplay.appendChild(node);
//     var email=document.getElementsByClassName('formdata')[3].value;
//     var formDisplay=document.getElementsByClassName("formdatadisplay")[0]
//     var node=document.createElement("H2")
//     var en=document.createTextNode("Email : "+email);
//     node.appendChild(en)
//     formDisplay.appendChild(node);
//     var password=document.getElementsByClassName('formdata')[4].value;
//     var formDisplay=document.getElementsByClassName("formdatadisplay")[0]
//     var node=document.createElement("H2")
//     var pwd=document.createTextNode("Password : "+password+"");
//     node.appendChild(pwd)
//     formDisplay.appendChild(node);
// }

// Question 2
// function myFunc(){
//     var more=document.getElementById("more");
//     more.style.display='block'
//     var dots=document.getElementById("dots");
//     dots.style.display="none";
// }

// Question 3
// function createRow(){
//     var stdName= document.getElementById('name');
//     var stdClass= document.getElementById('std-class');
//     var stdTable= document.getElementsByClassName('student-table')[0];
//     var tableRow= document.createElement('tr');
//     var tableData1= document.createElement('td');
//     var tableData2= document.createElement('td');
//     var tableData3= document.createElement('td');
//     var tableData4= document.createElement('td');
//     tableData1.innerText=stdName.value;
//     tableData2.innerText=stdClass.value;
//     var deleteBtn= document.createElement('button');
//     deleteBtn.setAttribute('onclick', 'deleteRow()');
//     deleteBtn.setAttribute('class', 'deleteRow');
//     deleteBtn.innerText="DELETE";
//     tableData3.appendChild(deleteBtn);
//     var editBtn= document.createElement('button');
//     editBtn.setAttribute('class', 'editRow');
//     editBtn.innerText="EDIT"
//     tableData4.appendChild(editBtn);
//     tableRow.appendChild(tableData1);
//     tableRow.appendChild(tableData2);
//     tableRow.appendChild(tableData3);
//     tableRow.appendChild(tableData4);
//     stdTable.appendChild(tableRow);
//   stdName.value=" ";
//   stdClass.value=" ";
//   editBtn.addEventListener('click', editRow);
  
//   }
//   function deleteRow(){
//     var deleteItem= document.getElementsByClassName('deleteRow')[0].parentElement.parentElement;
//     deleteItem.remove();
//   }
//   function editRow(event){
//       var editForm= document.getElementById('editForm');
//       editForm.style.display="block";
//       var editname= document.getElementById('editname');
//       var editclass= document.getElementById('editclass');
//       editname.value=event.target.parentElement.parentElement.children[0].innerText;
//       editclass.value=event.target.parentElement.parentElement.children[1].innerText;
//       event.target.parentElement.parentElement.remove();
//   }
//   function saveChange(){
//       var editForm= document.getElementById('editForm');
//       editForm.style.display="none";
//       var editname= document.getElementById('editname');
//       var editclass= document.getElementById('editclass');
//       var stdTable= document.getElementsByClassName('student-table')[0];
//       var tableRow= document.createElement('tr');
//       var tableData1= document.createElement('td');
//       var tableData2= document.createElement('td');
//       var tableData3= document.createElement('td');
//       var tableData4= document.createElement('td');
//       tableData1.innerText=editname.value;
//       tableData2.innerText=editclass.value;
//       var deleteBtn= document.createElement('button');
//       deleteBtn.setAttribute('onclick', 'deleteRow()');
//       deleteBtn.setAttribute('class', 'deleteRow');
//       deleteBtn.innerText="DELETE";
//       tableData3.appendChild(deleteBtn);
//       var editBtn= document.createElement('button');
//       editBtn.setAttribute('class', 'editRow');
//       editBtn.innerText="EDIT"
//       tableData4.appendChild(editBtn);
//       tableRow.appendChild(tableData1);
//       tableRow.appendChild(tableData2);
//       tableRow.appendChild(tableData3);
//       tableRow.appendChild(tableData4);
//       stdTable.appendChild(tableRow);
//       editBtn.addEventListener('click', editRow);
//   }

//Chapter 52-57
//Question 1
// var img=['1.jpg','2.jpg','3.jpg','4.png','5.jpg','6.jpg','7.png','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','14.png','15.jpg',];
// var images=document.getElementById('images');
// for(var i=0;i < img.length;i++){
// var imgTag = document.createElement('img')
// imgTag.setAttribute('width','200px')
// imgTag.setAttribute('height','200px')
// imgTag.setAttribute('src', img[i])
// imgTag.addEventListener('click', modalDisplay)
// console.log(imgTag)
// images.appendChild(imgTag)
// }

// function modalDisplay(e){
// var modal= document.getElementById('modal');
// modal.classList.remove('modal-close');
// modal.classList.add('modal-open')
// modal.style.display = "block";
// var modalImg= document.getElementById('modal-img')
// modalImg.setAttribute('src', e.target.src)
// console.log(modalImg)
// }
// function onClosedImag(){
//     var modal= document.getElementById('modal');
//     modal.classList.add('modal-close')
//     modal.classList.remove('modal-open')
//     setTimeout(()=>{ modal.style.display = "none"; }, 550)
// }


// Question 2
// function zoomIn(){
//   var a = document.getElementById('para');
//   a.style.fontSize = "40px";
// }
// function zoomOut(){
//   var a = document.getElementById('para');
//   a.style.fontSize = "30px";
// }

//Chapter 58-67
// Question 1(i)
//var a = document.getElementById("main-content");

//Question 1(ii)
//console.log(a.childNodes);

//Question 1(iii)
// var x = document.getElementsByClassName("render");
// for(var i = 0; i<= x.length; i++){
//   var b = x[i].innerHTML;
//   document.write(b + "<br>");
// }

//Question 1(iv)
// var inp = document.getElementById("first-name");
// inp.value = "First Name";

//Question 1(v)
// var c = document.getElementById("last-name");
// c.setAttribute("value", "Last Name");
// var d = document.getElementById("email");
// d.setAttribute("value","Email Address");

// Question 2(i)
// var type = document.getElementById("form-content");
// document.write(type.nodeType);

// Question 2(ii)
// var c = document.getElementById("last-name");
// document.write(c.nodeType);
// document.write (c.hasChildNodes());
// document.write("<p>The element having id = 'last-name' doesn't have any child nodes.</p>");

// Question 2(iii)
// var c = document.getElementById("last-name");
// var y = document.createElement("p");
// var z = document.createTextNode("Now, the element with id = 'last-name' has a child node.");
// y.appendChild(z);
// c.appendChild(y);
// document.write(c.hasChildNodes() + "<br>");
// document.write(y.nodeName);
// var a = document.getElementById("main-content");
// a.appendChild(y);

// Question 2(iv)
// var a = document.getElementById("main-content");
// document.write(a.firstChild.nodeName + "<br>");
// document.write(a.lastChild.nodeName);

// Question 2(v)
// var c = document.getElementById("last-name");
// document.write(c.nextSibling.nodeName + "<br>");
// document.write(c.previousSibling.nodeName);

// Question 2(vi)
// var d = document.getElementById("email");
// document.write(d.parentNode.nodeName + "<br>");
// document.write(d.nodeType);







