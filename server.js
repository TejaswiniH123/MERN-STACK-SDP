//BASICS OF JAVASCRIPT


console.log("Hello World");
let x=5;
console.log(x);
// even or odd
function check_even(num){
    if(num%2==0){
        console.log("The number is even");
    }
    else{
        console.log("The number is odd");
    }
}
check_even(x);

// factorial
let n=4;
function factorial(n){
    if(n<=1){
        return 1;
    } else {
        return n*factorial(n-1);
    }
}
console.log("The factorial of "+n+" is "+factorial(n));

//simple program with loop
for(let i=1;i<=5;i++){
    console.log("Iteration number: "+i);
}
//code to add two numbers
let a=10;
let b=20;
let sum=a+b;
console.log("The sum of "+a+" and "+b+" is "+sum);

//code using switch statements
let day=3;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
        break;
}

// Arrays and looping through them
let fruits=["Apple","Banana","Cherry"];
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}
//objetcs (key-value pairs)
let person={
    name:"John",
    age:30,
    city:"New York"
};
console.log("Name: "+person.name);
console.log("Age: "+person.age);
console.log("City: "+person.city);

//using readline to take user input
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question('Enter a number to check if it is even or odd: ', num => {
    check_even(parseInt(num));
    readline.close();
});

//using readline module to take user input in simpl code
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter a number to calculate its factorial: ', number => {
    console.log("The factorial of "+number+" is "+factorial(parseInt(number)));
    rl.close();
});