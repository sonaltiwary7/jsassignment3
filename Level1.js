//QUESTION 1 
var firtstName = "sonal";
var lastName = "tiwary";
var country = "India";
var city = "deoghar";
var age = 21;
var isMarried = false;
var year = 2021;
console.log(typeof firtstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

//Question 2
let stringType = typeof '10';
let numberType = typeof 10;
console.log (stringType == numberType);

//Question 3
const result = parseInt('9.8') == 10;
console.log(result);

//Question 4
let x1,x2,x3;
x1=1;
x2= "1";
x3=[1];
let y1,y2,y3;
y1= 2;
y2= "";
y3= [];
if(x1)
{
    console.log("x1 is truthy");
}
else{
    console.log("x1 is falsy")
}
if(y1)
{
    console.log("y1 is truthy");
}
else{
    console.log("y1 is falsy")
}

//Question 5
console.log(4 > 3);//true
console.log(4 >= 3); //true
console.log(4 < 3); //false
console.log(4 <= 3); //false
console.log(4 == 4); //true
console.log(4 === 4); //true
console.log(4 != 4); //false
console.log(4 !== 4);//flase
console.log(4 != '4'); //false
console.log(4 == '4'); //true
console.log(4 === '4'); //false
console.log('python'.length == 'jargon'.length);//true

//Question 6
console.log(4>3&&10<12); //true
console.log(4>3&&10>12); //false
console.log(4>3||10<12); //true
console.log(4>3||10>12); //true
console.log(!(4>3));//false
console.log(!(4<3));//true
console.log(!(false));//true
console.log(!(4>3&&10<12));//false
console.log(!(4>3&&10>12));//true
console.log(!(4==='4'));//true
console.log('dragon'.includes('on')&&'python'.includes('on'));//false


// Question 7
let x = new Date();
console.log(x);
console.log(x.getFullYear());
console.log(x.getMonth());
console.log(x.getDate());
console.log(x.getDay());
console.log(x.getHours());
console.log(x.getMinutes());
console.log(Math.floor(x.getTime() / 1000));


