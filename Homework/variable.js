// 1. Create a variable.js file and declare variables and assign string, boolean, undefined and null data types, Display all the value with there type.

// let str = "yash";
// let bool = true;
// let ud;
// let nu = null;//In JavaScript null is "nothing". It is supposed to be something that doesn't exist.Unfortunately, in JavaScript, the data type of null is an object.You can empty an object by setting it to null:

// console.log(typeof str + ` ${str}`);
// console.log(typeof bool + ` ${bool}`);
// console.log(typeof ud + ` ${ud}`);
// console.log(typeof nu + ` ${nu}`);

// 2.Declare variables to store your first name, last name, marital status, country and age and display them using interploation method.

// let first_name = "yash";
// let last_name = "shamnani";
// let marital_status = "Not married";
// let country = "India";
// let age = "23";
// console.log(`${first_name}`+` ${last_name}`+ ` ${marital_status}`+ ` ${country}`+ ` ${age}` );

// 3. Decalre a varibale and assign value to it and change all the string characters to capital letters using toUpperCase() method.

// let str = 'yash';
// console.log(str.toUpperCase());

// 4. Check if the string contains a word Script using includes() method.

// let str = "javascript"
// console.log(str.includes('pt'));
// console.log(str[str.length-1]);
// Syntax : string.includes(searchvalue, start);


// 5. Split the string into an array using split() method

//Syntax : string.split(separator, limit)
// let str = "javascript";
// console.log(str.split(""));

// 6. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
// let str = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
// let newarr = str.split(", ")
// console.log(newarr);

// 7. Use lastIndexOf to determine the position of the last occurrence of a script.
// let str = "javascript derived from Ecmascript";
// console.log(str.lastIndexOf('script'));

// 8. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'.
// let str = 'You cannot end a sentence with because because because is a conjunction';
// console.log(str.indexOf('because'));

// 9. Use trim() to remove any trailing whitespace at the beginning and the end of a string.
// let text = "       Hello World!        ";
// console.log(text);
// console.log(text.trim());

// 10. Boolean value is either true or false.
//     - Write three JavaScript statement which provide truthy value.
//     - Write three JavaScript statement which provide falsy value.

//Truthy Value (TRUE VALUE) and Falsy Value (FALSE VALUE)
// In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy. That is, all values are truthy except false, 0, -0, 0n, "", null, undefined, and NaN.
//truthy value
// if ("false"){
//     console.log("truthy");
// }
// if(-42)
// {
//     console.log("truthy");
     
// }
// if(Infinity)
// {
//     console.log("truthy");
     
// }
// if({})
// {
//     console.log("truthy");
    
// }
// //falsy value
// if(!0)
// {
//     console.log('falsy');
// }
// if(!null)
// {
//     console.log('falsy');

// }
// if(!undefined)
// {
//     console.log('falsy');

// }
// 11. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
//     - 4 > 3
    // - 4 >= 3
    // - 4 < 3
    // - 4 <= 3
    // - 4 == 4
    // - 4 === 4
    // - 4 != 4
    // - 4 !== 4
    // - 4 != '4'
    // - 4 == '4'
    // - 4 === '4'
    // - Find the length of python and jargon and make a falsy comparison statement.
    // console.log(4 > 3)
    // console.log( 4 >= 3)
    // console.log(4 < 3)
    // console.log(4 <= 3)
    // console.log(4 == 4)
    // console.log(4 === 4)
    // console.log(4 != 4)
    // console.log(4 !== 4)
    // console.log(4 != '4')
    // console.log(4 == '4')
    // console.log(4 === '4')
    // str = 'python';
    // s = 'jargon';
    // console.log(str.length + " " + s.length);
    // if(!(s==str))
    // {
    //     console.log("falsy");
    // }


    // 12. Use the Date object to do the following activities
    // - What is the year today?
    // - What is the month today as a number?
    // - What is the date today?
    // - What is the day today as a number?
    // - What is the hours now?
    // - What is the minutes now?
    // - Find out the numbers of seconds elapsed from January 1, 1970 to now.

    // let now = new Date();
    // console.log(now.getFullYear())
    // console.log(now.getMonth())
    // console.log(now.getDate())
    // console.log(now.getDay())
    // console.log(now.getHours())
    // console.log(now.getMinutes())
    // console.log(Math.floor(now.getTime()/1000));//getTime() returns the number of milliseconds since January 1, 1970 00:00:00.
    // console.log(now.toString());






    // 13. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
 
// const prompt=require("prompt-sync")({sigint:true}); 
// const baseValue = prompt('Enter the base of a triangle: ');
// const heightValue = prompt('Enter the height of a triangle: ');
// console.log(typeof baseValue);
// // calculate the area
// const areaValue = (baseValue * heightValue) / 2;

// console.log(
//   `The area of the triangle is ${areaValue}`
// );

// 14. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
// let x1 =2,y1=2,x2=6,y2=10;
// let m = (y2-y1)/(x2-x1);
// console.log(m);

// 15 . Calculate the slope, x-intercept and y-intercept of y = 2x -2


// 16. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
// const prompt=require("prompt-sync")({sigint:true}); 
// const prompt = require("prompt-sync")({sigint : true})
// const r = prompt("Enter Radius");
// let area = Math.PI * r * r;
// let c = 2 * Math.PI * r;
// console.log("area is " + area);
// console.log("circumference is " + c);


// 17. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm

// const now = new Date();
// y = now.getFullYear();
// M = now.getMonth()+1;
// d  = now.getDate();
// let h = now.getHours();
// let m = now.getMinutes();
// let s =now.getSeconds();
// console.log(`${y}-${M}-${d} ${h}:${m}:${s}`);
 
// 18. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
// const prompt=require("prompt-sync")({sigint:true}); 
// const age = prompt("enter your age");
// const remage = 18-age;
// if(age>=18)
// {
//     console.log('You are old enough to drive');
// }
// else{
//     console.log('wait for ' + remage+' years to turn 18')
// }

// 19. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
// const prompt=require("prompt-sync")({sigint:true}); 
// const num = prompt("enter number");
// if(num%2==0)
// {
//     console.log('number is even');
// }
// else{
//     console.log('number is odd');
// }
// 20. Write a code which can give grades to students according to theirs scores:
//     - 80-100, A
//     - 70-79, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F
// const prompt=require("prompt-sync")({sigint:true}); 
// const num = prompt("enter number");
// if(num>=80 && num<=100)
// {
//     console.log("grade : A")
// }
// else if(num>=70 && num<=79)
// {
//     console.log("grade : B")
// }
// else if(num>=60 && num<=69)
// {
//     console.log("grade : C")
// }
// else if(num>=50 && num<=59)
// {
//     console.log("grade : D")
// }
// else  
// {
//     console.log("grade : F")
// }
// 21. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//     - September, October or November, the season is Autumn.
//     - December, January or February, the season is Winter.
//     - March, April or May, the season is Spring
//     - June, July or August, the season is Summer

// const prompt=require("prompt-sync")({sigint:true}); 
// const user = prompt("enter month");
// switch(user){
// 	case 'September' :
// 	case 'October' :
// 	case  'November' :
// 	console.log(`the season is Autumn.`);
// 	break;
// 	case 'December' : 
// 	case 'January' :
// 	case 'February' :
// 	console.log('the season is Winter');
// 	break;
// 	case 'March' :
// 	case 'April' :
// 	case 'May' :
// 		console.log(`the season is Spring`);
// }

// 22. Write a program which tells the number of days in a month.
// const prompt=require("prompt-sync")({sigint:true}); 
// const user = prompt("enter month");
// const now = new Date();
// console.log(now.getDate());
// var getDaysInMonth = function(month) {
    // Here January is 1 based
    //Day 0 is the last day in the previous month
//    return  new Date(2022, month, 0).getDate();
  
//   };
//   console.log(getDaysInMonth(user));

//   24. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

//   moduleobj = require('./countries.js');
//   moduleo = require('./tech.js');
//   console.log(moduleobj.carr[0]);
//   console.log(moduleo.tech[0]);
  // in javascript we can only send functions ,varaible to another 
// file  we can't send the whole
// nodejs provide module.exports to export 
               // module.exports is object provided by node JS by which you can export your functions in key value pair
// JavaScript modules allow you to break up your code into separate files.This makes it easier to maintain a code-base.Modules are imported from external files with the import statement


// 25. In the following shopping cart add, remove, edit items
//     => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     - add 'Meat' in the beginning of your shopping cart if it has not been already added
//     - add Sugar at the end of you shopping cart if it has not been already added
//     - remove 'Honey' if you are allergic to honey
//     - modify Tea to 'Green Tea'
// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// shoppingCart.unshift('Meat');
// let flag = 0;
// for(let i=0;i<shoppingCart.length;i++)
// {
//     if(shoppingCart[i]=='Sugar')
//     {
//         flag=1;
//         break;
//     }
// }
// if(flag==0)
// {
//     shoppingCart.push("Sugar");
// }
// for(let i=0;i<shoppingCart.length;i++)
// {
//     if(shoppingCart[i]=='Honey')
//     {
//         let idx = shoppingCart.indexOf('Honey');
//         shoppingCart.splice(idx,1);
//     }
// }
// for(let i=0;i<shoppingCart.length;i++)
// {
//     if(shoppingCart[i]=='Tea')
//     {
//         shoppingCart[i] = 'Green Tea';
//     }
// }
 
// console.log(shoppingCart);

// 26. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
// let arr = ['India','u.s.a'];
// let flag = 0;
// for(let i=0;i<arr.length;i++)
// {
//     if(arr[i]=='Ethiopia')
//     {
//         flag=1;
//         console.log(arr[i].toUpperCase());
//     }
// }
// if(flag==0)
// {
//     arr.push("Ethiopia");
//     console.log(arr);
// }
// 27. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method
// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// ages.sort()
// console.log(ages);
// console.log(Math.max(...ages));
// console.log(Math.min(...ages));
// if(ages.length%2==0)
// {
//    let idx = ages.length/2;
//    let ans = (ages[idx]+ages[idx-1])/2;
//    console.log(ans);
// }
// else{
//     let idx = Math.floor(ages.length/2);
//     console.log(ages[idx]);
// }
// let sum =0;
// for(let i=0;i<ages.length;i++)
// {
//     sum = sum + ages[i];
// }
// console.log(sum/ages.length);
// console.log(Math.max(...ages)-Math.min(...ages));

// 28. Use for loop to iterate from 0 to 100 and print only prime numbers



// 29. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

// let sumeven = 0;
// let sumodd = 0;
// for(let i=0;i<=100;i++)
// {
//     if(i%2==0)
//     {
//         sumeven = sumeven + i;
//     }
//     else{
//         sumodd = sumodd+i;
//     }
// }
// console.log(sumeven);
// console.log(sumodd);


// 30. Write a script which generates a random hexadecimal number.
// let random = Math.random();
// let str = "0123456789ABCDEF"
// let hexaDec = "";
// for(let i=0;i<6;i++){
// 	let rand = Math.floor(Math.random()*16);
// 	hexaDec = hexaDec + str[rand];
// }
// console.log(hexaDec);


// 31. Sort the webTechs array and mernStack array
// countries Array : https://gist.github.com/incredimike/1469814
const countryList = [
	"Afghanistan",
	"Albania",
	"Algeria",
	"American Samoa",
	"Andorra",
	"Angola",
	"Anguilla",
	"Antarctica",
	"Antigua and Barbuda",
	"Argentina",
	"Armenia",
	"Aruba",
	"Australia",
	"Austria",
	"Azerbaijan",
	"Bahamas (the)",
	"Bahrain",
	"Bangladesh",
	"Barbados",
	"Belarus",
	"Belgium",
	"Belize",
	"Benin",
	"Bermuda",
	"Bhutan",
	"Bolivia (Plurinational State of)",
	"Bonaire, Sint Eustatius and Saba",
	"Bosnia and Herzegovina",
	"Botswana",
	"Bouvet Island",
	"Brazil",
	"British Indian Ocean Territory (the)",
	"Brunei Darussalam",
	"Bulgaria",
	"Burkina Faso",
	"Burundi",
	"Cabo Verde",
	"Cambodia",
	"Cameroon",
	"Canada",
	"Cayman Islands (the)",
	"Central African Republic (the)",
	"Chad",
	"Chile",
	"China",
	"Christmas Island",
	"Cocos (Keeling) Islands (the)",
	"Colombia",
	"Comoros (the)",
	"Congo (the Democratic Republic of the)",
	"Congo (the)",
	"Cook Islands (the)",
	"Costa Rica",
	"Croatia",
	"Cuba",
	"Curaçao",
	"Cyprus",
	"Czechia",
	"Côte d'Ivoire",
	"Denmark",
	"Djibouti",
	"Dominica",
	"Dominican Republic (the)",
	"Ecuador",
	"Egypt",
	"El Salvador",
	"Equatorial Guinea",
	"Eritrea",
	"Estonia",
	"Eswatini",
	"Ethiopia",
	"Falkland Islands (the) [Malvinas]",
	"Faroe Islands (the)",
	"Fiji",
	"Finland",
	"France",
	"French Guiana",
	"French Polynesia",
	"French Southern Territories (the)",
	"Gabon",
	"Gambia (the)",
	"Georgia",
	"Germany",
	"Ghana",
	"Gibraltar",
	"Greece",
	"Greenland",
	"Grenada",
	"Guadeloupe",
	"Guam",
	"Guatemala",
	"Guernsey",
	"Guinea",
	"Guinea-Bissau",
	"Guyana",
	"Haiti",
	"Heard Island and McDonald Islands",
	"Holy See (the)",
	"Honduras",
	"Hong Kong",
	"Hungary",
	"Iceland",
	"India",
	"Indonesia",
	"Iran (Islamic Republic of)",
	"Iraq",
	"Ireland",
	"Isle of Man",
	"Israel",
	"Italy",
	"Jamaica",
	"Japan",
	"Jersey",
	"Jordan",
	"Kazakhstan",
	"Kenya",
	"Kiribati",
	"Korea (the Democratic People's Republic of)",
	"Korea (the Republic of)",
	"Kuwait",
	"Kyrgyzstan",
	"Lao People's Democratic Republic (the)",
	"Latvia",
	"Lebanon",
	"Lesotho",
	"Liberia",
	"Libya",
	"Liechtenstein",
	"Lithuania",
	"Luxembourg",
	"Macao",
	"Madagascar",
	"Malawi",
	"Malaysia",
	"Maldives",
	"Mali",
	"Malta",
	"Marshall Islands (the)",
	"Martinique",
	"Mauritania",
	"Mauritius",
	"Mayotte",
	"Mexico",
	"Micronesia (Federated States of)",
	"Moldova (the Republic of)",
	"Monaco",
	"Mongolia",
	"Montenegro",
	"Montserrat",
	"Morocco",
	"Mozambique",
	"Myanmar",
	"Namibia",
	"Nauru",
	"Nepal",
	"Netherlands (the)",
	"New Caledonia",
	"New Zealand",
	"Nicaragua",
	"Niger (the)",
	"Nigeria",
	"Niue",
	"Norfolk Island",
	"Northern Mariana Islands (the)",
	"Norway",
	"Oman",
	"Pakistan",
	"Palau",
	"Palestine, State of",
	"Panama",
	"Papua New Guinea",
	"Paraguay",
	"Peru",
	"Philippines (the)",
	"Pitcairn",
	"Poland",
	"Portugal",
	"Puerto Rico",
	"Qatar",
	"Republic of North Macedonia",
	"Romania",
	"Russian Federation (the)",
	"Rwanda",
	"Réunion",
	"Saint Barthélemy",
	"Saint Helena, Ascension and Tristan da Cunha",
	"Saint Kitts and Nevis",
	"Saint Lucia",
	"Saint Martin (French part)",
	"Saint Pierre and Miquelon",
	"Saint Vincent and the Grenadines",
	"Samoa",
	"San Marino",
	"Sao Tome and Principe",
	"Saudi Arabia",
	"Senegal",
	"Serbia",
	"Seychelles",
	"Sierra Leone",
	"Singapore",
	"Sint Maarten (Dutch part)",
	"Slovakia",
	"Slovenia",
	"Solomon Islands",
	"Somalia",
	"South Africa",
	"South Georgia and the South Sandwich Islands",
	"South Sudan",
	"Spain",
	"Sri Lanka",
	"Sudan (the)",
	"Suriname",
	"Svalbard and Jan Mayen",
	"Sweden",
	"Switzerland",
	"Syrian Arab Republic",
	"Taiwan",
	"Tajikistan",
	"Tanzania, United Republic of",
	"Thailand",
	"Timor-Leste",
	"Togo",
	"Tokelau",
	"Tonga",
	"Trinidad and Tobago",
	"Tunisia",
	"Turkey",
	"Turkmenistan",
	"Turks and Caicos Islands (the)",
	"Tuvalu",
	"Uganda",
	"Ukraine",
	"United Arab Emirates (the)",
	"United Kingdom of Great Britain and Northern Ireland (the)",
	"United States Minor Outlying Islands (the)",
	"United States of America (the)",
	"Uruguay",
	"Uzbekistan",
	"Vanuatu",
	"Venezuela (Bolivarian Republic of)",
	"Viet Nam",
	"Virgin Islands (British)",
	"Virgin Islands (U.S.)",
	"Wallis and Futuna",
	"Western Sahara",
	"Yemen",
	"Zambia",
	"Zimbabwe",
	"Åland Islands"
];

// countryList.sort();
// 32. Array Questions
//     - Extract all the countries contain the word 'land' from the countries array and print it as array
//     - Find the country containing the hightest number of characters in the countries array
//      
//     - Extract all the countries containing only four characters from the countries array and print it as array
//     - Extract all the countries containing two or more words from the countries array and print it as array
//     - Reverse the countries array and capitalize each country and stored it as an array

// let landarr = [];
// for(let i=0;i<countryList.length;i++)
// {
//     if(countryList[i].includes('land')==true)
//     {
//         landarr.push(countryList[i]);
//     }
// }
// console.log(landarr);

// let max = 0;
// let maxcountry = "";
// for(let i=0;i<countryList.length;i++)
// {
//     if(countryList[i].length>max)
//     {
//         max = countryList[i].length;
//         maxcountry = countryList[i];
//     }
// }
// console.log(maxcountry);
// let arr=[];
// for(let i=0;i<countryList.length;i++)
// {
//     if(countryList[i].length==4)
//     {
//         arr.push(countryList[i])
//     }
// }
// console.log(arr);


// let arr = countryList.filter((e)=> {return e.length==4})
// console.log(arr);
// let landarr = [];
// for(let i=0;i<countryList.length;i++)
// {
//     if(countryList[i].includes(' ')==true)
//     {
//         landarr.push(countryList[i]);
//     }
// }
// console.log(landarr);


// for(let i=0;i<countryList.length;i++)
// {
//     console.log(countryList[i].split(' '));

// }




// let reversearr = []
// for(let i=0;i<countryList.length;i++)
// {
//    reversearr.push(countryList[i].toUpperCase());
// }
// console.log(reversearr.reverse());


// const array1 = [1, 4, 9, 16];

// Pass a function to map
// const map1 = array1.map(x => {return x * 2});

// console.log(map1);