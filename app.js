

// |	STRINGS METHODS|


// 1. Write a program that takes two user inputs for first and last 
// name using prompt and merge them in a new variable titled 
// fullName. Greet the user using his full name.

// var firstName = prompt("type first name");
// var lastName = prompt("type last name");

// var fullName = firstName + lastName;

// alert("welcome "+ fullName);


// 2. Write a program to take a user input about his favorite mobile 
// phone model. Find and display the length of user input in your 
// browser.

// var userMobile = prompt("type your favourite mobile phone model");
// var userOutput = document.querySelector("h1");

// userOutput.innerHTML = "The length of user input: " +userMobile.length;


// 3. Write a program to find the index of letter “n” in the word 
// “Pakistani” and display the result in your browser.

// var myCountry = "pakistan";

// var heading1 = document.querySelector("h1");

// heading1.innerHTML = "index of n is : " + myCountry.indexOf("n");



// 4. Write a program to find the last index of letter “l” in the word 
// “Hello World” and display the result in your browser.

// var World = "Hello World";

// var heading1 = document.querySelector("h1");

// heading1.innerHTML = "last index of l is : "+ World.lastIndexOf("l");


// 5. Write a program to find the character at 3rd index in the word 
// “Pakistani” and display the result in your browser.

// var myCountry = "Pakistan";

// var heading1 = document.querySelector("h1");

// heading1.innerHTML = "the character at 3rd index is : " + myCountry.charAt(3);



// 6. Repeat Q1 using string concat() method.

// var firstName = prompt("type first name");
// var lastName = prompt("type last name");

// var heading1 = document.querySelector("h1");

// heading1.innerHTML = firstName.concat(" "+ lastName);



// 7. Write a program to replace the “Hyder” to “Islam” in the word 
// “Hyderabad” and display the result in your browser.

// var city = "Hyderabad";

// var heading1 = document.querySelector("h1");

// heading1.innerHTML = city.replace("Hyder", "Islam");



// 8. Write a program to replace all occurrences of “and” in the 
// string with “&” and display the result in your browser. var message = “Ali and Sami are best friends. They play cricket and football together.”;

// var friends = "Ali and Sami are best friends. They play cricket and football together.";

// var heading1 = document.querySelector("h1");

// heading1.innerHTML = friends.replace(/and/g, "&" );



// 9. Write a program that converts a string “472” to a number 472.
// Display the values & types in your browser.

// var str = "472";

// document.write("value is : "+ str.valueOf(str)+"<br>");
// document.write("type is : "+ typeof(str)+"<br>");

// var num = parseInt(str);
// document.write("value is : "+ num+"<br>");
// document.write("type is : "+ typeof(num));



// 10. Write a program that take a URL as user input in the 
// following format: (www.facebook.com / www.yahoo.com ). 
// Extract the domain name & show in your browser.

// var userInput1 = prompt("type url in this form", "www.facebook.com")
//???????????????????????????????????????????/


// 11. Write a program that takes user input. Convert and show the 
// input in capital letters.

// var userInput = prompt("type here");

// var heading1 = document.querySelector("h1");

// heading1.innerHTML = userInput.toUpperCase();


// 12. Write a program that takes user input. Convert and show the 
// input in small letters.

// var userInput = prompt("type here");

// var heading1 = document.querySelector("h1");

// heading1.innerHTML = userInput.toLocaleLowerCase();




// 13. Write a program that takes user input. Convert and show the 
// input in title case.

// var userInput = prompt("type here");

// var heading1 = document.querySelector("h1");

// heading1.innerHTML = userInput.toTitleCase();
//???????????????????????????????????


// 14. Write a program that converts the variable num to string.
//  var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

// var num = 35.36;

// var str = num.toString();

// var str2 = str.replace(".", "")

// var heading1 = document.querySelector("h1");

// heading1.innerHTML = "result is : "+ str2;



// 15. Write a program to display the value of x in your browser if a=”3” 
// and b=”3”?

// var a = "3";
// var b = "3";

// var x = a + b;

// var heading1 = document.querySelector("h1");

//  heading1.innerHTML = "value of x is : " + x;


// 16. Write a program to display the value of y in your browser if a=”3” 
// and b=”3”?
//  y = a - b;

// var a = "3";
// var b = "3";

// var y = a - b ;

// var heading1 = document.querySelector("h1");

// heading1.innerHTML = "value of y is :" + y;




// 17. Write a program to take user input and store username in a 
// variable. If the username contains any special symbol among 
// [@ . , !], prompt the user to enter a valid username. For 
// character codes of [@ . , !], refer to ASCII table at the end of 
// this document.
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64
//???????????????????????????????????


// 18. You have an array
//  A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array. 
// After searching, prompt the user whether the given item is 
// found in the list or not. 
// Note: Perform case insensitive search. Whether the user enters 
// cookie, Cookie, COOKIE or coOkIE, program should inform 
// about its availability. Example:

// var bakeryItems = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];

// var userInput = prompt("type item to search");

// // var upperCase = userInput.toUpperCase();

// for(var i = 0; i < bakeryItems.length; i++){
//     if(userInput === bakeryItems[i]){
//         alert("yes");
//         break;
//     }
//     else{
//     alert("no");
//     }
// }

// switch(userInput){
//     case "cake" :
//         alert("it is available");
//         break;
//     case "apple pie" :
//         alert("it is available");
//         break;
//         case "cookie" :
//         alert("it is available");
//         break;
//     case "chips" :
//         alert("it is available");
//         break;
//         case "patties" :
//         alert("it is available");
//         break;
//         default :
//         alert("sorry it is not available")
// }


// 19. Write a program to take two input strings. Using string 
// comparison, tell which string is greater than other or if they 
// both are equal.

//??????????????????????????????



// 20. Write a program to take password as an input from user. The 
// password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements, 
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII 
// table at the end of this document.

//???????????????????????????????????????????


// // 21. Write a program to convert the following string to an array 
// // using string split method.
// //  var university = “University of Karachi”;
// // Display the elements of array in your browser.

// var university = "University of Karachi";

// var universityArr = university.split();

// console.log(universityArr);

// console.log(universityArr.length);



// 22. Write a program to display the last character of a user input.

// var userInput = prompt("type here");

// console.log(userInput.charAt(userInput.length-1));


// 23. You have a string “The quick brown fox jumps over the lazy 
// dog”. Write a program to count number of occurrences of word 
// “the” in given string.

// var fox = "The quick brown fox jumps over the lazy dog";

// console.log(fox.length);




// 24. Write a program to count number of vowels & consonants in 
// given string
//  var str = “Pakistan”;

// var str = "Pakistan";

// var vowelsCount = /[aeiou]/g;
// var consonantsCount = /[^aeiou]g/;//??????????

// console.log(str.match(vowelsCount).length);
// console.log(str.match(consonantsCount).length);


