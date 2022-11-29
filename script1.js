//  i did all task of day 6 but some variables are same variable name 
//  so i command all the code please uncommand the code 
// one by one and check it out 




//https://medium.com/@reach2arunprakash/guvi-zen-class-find-the-culprits-and-nail-them-9ee6c67c44fb


alert("I’m invoked!")


// // <!-- Explain the below how it works -->
// alert("I'm JavaScript!"); // its text is inside ("") so it consider string
// alert('Hello') // this line is not having semicolon JavaScript is clever and it can add the semicolons where needed automatically.
// alert(`Wor
//  ld`) // using back sticks in javascript it brak the line easyly
// alert(3 +
// 1
// + 2); // this is multiple line code and its working its a arithmaticoperation its take functional based operation so its no need to write in same line

// // Fix the below to alert Guvi geek


// let admin=9, fname=10.5; 
// fname = "Guvi ";
// lname = "geek"
// admin = fname+lname;
// alert( admin ); // "Guvi geek"

// Fix the below to alert hello Guvi geek

// let fname=10.5; 
// fname = "Guvi ";
// lname = "geek"
// let name = fname+lname;
// alert( `'hello ${name}'` );

//Fix the below to alert sum of two numbers
// let a = prompt("First number?");
// let b = prompt("Second number?");
// let x=parseInt(a);
// let y=parseInt(b);

// alert(x + y);



//If you run the below scritpt you will get “Code is Blasted” 
//Explain Why the Code is blasted and how to diffuse it and get “Diffused”.

// var a = 2> 12;
// //Don't touch below this
// if (a) {
//   console.log("Code is Blasted")
// }
// else
// {
//   console.log("Diffused") 
// }

// How to get the success in console.

// let a = prompt("Enter a number?");
// let x=parseInt(a);
// //Don't modify any code below this
// if (a) {
//  console.log( 'OMG it works for any number inc 0' );
// }
// else
// {
//  console.log( "Success" );
// }

//  How to get the correct score in console.
// let value = prompt('How many runs you scored in this ball');
// let a =parseInt(value)
// if (value == 4) {
//       console.log("You hit a Four");
// } else if (value == 6) {
//       console.log("You hit a Six");
// } else {
//       console.log("I couldn't figure out");
// }


// Fix the code to welcome the Employee

// let login = 'Employee';
// let message = (login = 'Employee') ? (login = 'Director') ? 'Greetings':'':
//   ((login = '') ? 'No login' :'');
// console.log(message);

//Fix the code to welcome the boss

// You cant change the value of the msg
// let message;
// if (null || 2 || undefined )
// {
//   message = "welcome boss";
// }
// else
// {
//   message = "Go away";
// }
//   console.log(message);

// Fix the code to welcome the boss
// let message;
// let lock ;
// //Dont change any code below this 
// if (null || lock || undefined )
// {
//   message = "Go away";
// }
// else
// {
//  message = "welcome";
// }
//   console.log(message);

// Fix the code to welcome the boss

// let message;
// let lock ;
// //Dont change any code below this
// if (lock && " " || undefined )
// {
//   message = "Go away";
// }
// else
// {
//  message = "welcome";
// }
// console.log(message);

// Change the code to print

//You can change only 2 characters
// let i = 3;
// while (i) {
//   console.log( i-- );
// }

//Change the code to print 1 to 10 in 4 lines

// let num =1 
// console.log(num,num+1,num+2,)

// console.log(num+3,num+4,num+5,)

// console.log(num+6,num+7,num+8,)
// console.log(num+9)

// Change the code to print even numbers

//You are allowed to modify only one character 
// for (let num = 2; num <= 20; num += 2) {
//     console.log(num)
//   }

// Change the code to print all the gifts

// let gifts = ["teddy bear", "drone", "doll"];
// for (let i = 0; i < 3; i++) {
//   console.log(`Wrapped ${gifts[i]} and added a bow!`);
// }


// Fix the code to disarm the bomb.
// let countdown = 100;
// while (countdown > 0) {
//   countdown--;
//   if(countdown != 0)
//   {
//    console.log("bomb triggered");
//   }
// }


// Whats the msg printed and why?

// var lemein = "0"; //data type is string so add msg it consider string value
// var lemeout = 0;
// var msg = "";
// if (lemein) {
//  msg += "hi"; //hi was print because the hi and "0" both are string data type
//  }
// if (lemeout) {
//  msg += 'Hello';
// }
// console.log(msg);// 



// GUVI: Zen Class — Part 2 : Find the culprits and nail them — debugging javascript loops

// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var new_string = '';
 
// for (var i = 0; i < 11; i++) {
//  (new_string += numsArr[i])
 
// }
// console.log(new_string); 

//Write a code to print the numbers in the array

// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var new_string = "";
 
// for (var i = 0; i < 11; i++) {
//  new_string += numsArr[i] + "," 
// }
// console.log(new_string);

// Write a code to print from last to first with spaces (Make sure there is no space after the last element 1)
// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var new_string = "";
 
// for (var i = 11; i> 0; --i ) {
//  new_string += numsArr[i-1]    
// }
// console.log(new_string);

//Write a code to replace the array value — If the number is even, replace it with ‘even’.
// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// for (var i = 0; i <=10; i++) {
//  if(numsArr[i] %2 == 0 )
//  {
//  numsArr[i] = 'even'
//  }
// }
// console.log(numsArr);

//Write a code to add all the numbers in the array

// var numsArr = [ 1,2,3,4,5,6,7,8,9,10,11];
// var sum =0;
// for (var i = 0; i <=10; i++) {

// sum+=numsArr[i]
 
// }
// console.log(sum);

//Write a code to add the even numbers only

// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var sum=0;
// for (var i = 0; i <10; i++) {
//  if(numsArr[i]%2==0){
//  sum += numsArr[i]}
// }
// console.log(sum);

// Write a code to add the even numbers and subract the odd numbers

// var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
// var str_all="";
// for (var i = 0; i < numsArr.length; i++) {
//  var inner_array = numsArr[i];
//  for(var j = 0 ; j < inner_array.length;j++ )
//      str_all +=inner_array[j]
// }
// console.log(str_all);

// Write a code to replace the array value — If the index is even, replace it with ‘even’.

// var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
// var str_all=0;
// for (var i = 0; i < numsArr.length; i++) {
//  var inner_array = numsArr[i];
//  for(var j = 0 ; j < inner_array.length;j++ )
//       if(numsArr[i][j] %2 == 0 )
//       {
//          numsArr[i][j] = "even"
//        }
// }
// console.log([numsArr]);

// Write a code to print elements in the inner arrays in reverse

// var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
// var str_all=[];
// for (var i =numsArr.length-1 ; i >= 0; i--) {
//  var inner_array = numsArr[i];
//  for(var j = inner_array.length-1; j >= 0 ;--j )
//      str_all +=inner_array[j]
// }
// console.log(str_all);

// Write a code to add elements in the inner arrays based on odd or even values
// var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
// var sum_odd=0;
// var sum_even=0;
// for (var i = 0; i < numsArr.length; i++) {
//  var inner_array = numsArr[i];
//  for(var j = 0 ; j < inner_array.length;j++ ){
//  if(numsArr[i][j]%2!=0)
//  {
//  sum_odd += numsArr[i][j]
//  }
//  else
//  {
//  sum_even += numsArr[i][j]
//  }
// }
// }
// console.log(sum_odd);
// console.log(sum_even);


// GUVI: Zen Class — Part 3: Find the culprits and nail them — debugging javascript


// Fix the code to get the largest of three.
// aa = (f,s,t) => {
//     var f,s,t;
//     console.log(f,s,t);
//     if(f>s &&f>t){
//     console.log(f)}
//     else if(s>f && s>t){
//     console.log(s)}
//     else{
//     console.log(t)}
//    }
//    aa(1,2,3);

// Fix the code to Sum of the digits present in the number
// let n = [1,2,3];
// console.log(add(n));
// function add(n)
// {
// let sum = 10;
// for(var i=0;i<n.length;i++){
//  sum+=n[i]
//  }
//  return sum;
// }


// Fix the code to Sum of all numbers using IIFE function


// const arr = [9,8,5,6,4,3,2,1];
// let sum = 0;
// (function() {  
//  for (var i = 0; i <= arr.length; i++){
// sum += arr[i];
//  }
//  console.log(sum)
//  return sum; 
// })();

// Fix the code to gen Title caps.

// var arr = ["guvi", "geek", "zen", "fullstack"];
// var ano = function(arro) {
//  for (var i = 0; i <= arro.length; i++) {
//  console.log(arro[i][0].toUpperCase() + arro[i].substr(1));
//  }
// }
// ano(arr);

// Fix the code to return the Prime numbers

// const newArray=[1,3,2,5,10,11,12,13,15,16,18];
// const myPrime=newArray.filter((num)=>{
//  for(let i=2;i<=Math.sqrt(num);i++){
//  if(num%i===0)
//  {
//  return false;
//  }
//  }
//  return true;
// });
// console.log(myPrime);
// const newArray=[1,3,2,5,10,11,12,13,15,16,18];
// const myPrime=newArray.filter((num)=>{
//  for(let i=2;i<=Math.sqrt(num);i++){
//  if(num%i===0)
//  {
//  return false;
//  }
//  }
//  return true;
// });
// console.log(myPrime);

// Fix the code to sum the number in that array

// const num = [10, 20, 30, 40,50,60,70,80,90,100] 
// const sum = (a, b) =>a + b
// const sum1 = num.reduce(sum)
// console.log(sum1);

// Fix the code to rotate an array by k times and return rotated array using IIFE function

// var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
// var k = 3;
// k = arr.length % k;
// (function() {
//  out = arr.slice(k + 1, arr.length);
//  var count = out.length;
//  for (var i = 0; i < k + 1; i++) {
//  out[count] = arr[i];
//  count += 1;
//  }
//  console.log(out);})();


// Fix the code to gen Title caps.

// var arr = ['guvi', 'geek', 'zen', 'fullstack'];
// (function() {
//  for (var i = 0; i <= arr.length; i++) {
//  console.log(arr[0][i].toUpperCase() + arr[i]);
//  }
// })();

// print all odd numbers in an array using IIFE function


// (function() {
//     var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
//  for (var i = 0; i < arr.length; i++) {
//  if (arr[i] % 2 !== 0) {
//  console.log(arr[i]);
//  }}
// })();

// Fix the code to reverse.

// (function(str){
//     str1 = str.split("").reverse().join("");
//     console.log(str1); 
//    })("abcd")

// Fix the code to remove duplicates.

// var res = function(arr){
//     let newArr = [];
//     for(var i=0; i < arr.length; i++){
        
//     if(newArr.indexOf(arr[i]) === -1) {
//     newArr.push(arr[i]);
//     } }
//     console.log(newArr)
//    }
//    res(["guvi","geek","guvi","duplicate","geeK"])


// Fix the code to give the below output:

// const input =[[["firstname","vasanth"],["lastname","Raje"],["age",24],["role","JSWizard"]],
//     [["firstname","Sri"],["lastname","Devi"],["age",28],["role", "Coder"]]];
  
//   const output = input.map(a => Object.fromEntries(a));
  
//   console.log(output);

// Fix the code to give the below output:

// var as=[12,34,5,6,2,56,6,2,1];
// var s=as.reduce(function(a,c){  
//  if(c%2!=0)
//  {
//  return a+c;
//  }
//  return a});
// console.log(s-(as[0]));

// Fix the code to give the below output:

// aa = data=>{
//     var a=data;
//    for(i=0;i<a.length-1;i++){
//     var l='';
//     var s=a[i+1]
//     var b=a[i]
//     l+=s
//     l+=b
//    i=i+1
   
//    }  
//    if((a.length%2)!=0){
//     l+=a[a.length+1]
//    }
//    console.log(l);
//    }
//    aa("1234");
