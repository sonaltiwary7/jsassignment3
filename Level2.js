//Question 1
let base = prompt("enter base of traingle:");
let height = prompt("enter height of traingle:");
let area = 0.5* base * height;
console.log("The area of traingle is " +area);

//Question 2
let sidea = parseFloat(prompt("enter side a of traingle:"));
let sideb = parseFloat(prompt("enter side b of traingle:"));
let sidec = parseFloat(prompt("enter side c of traingle:"));
let perimeter = sidea + sideb + sidec;
console.log("The perimeter of traingle is " +perimeter);

//Question 3
let length = parseFloat(prompt("enter length of rectangle:"));
let width = parseFloat(prompt("enter width of rectangle:"));
let area1 = length * width;
let perimeter1 = 2 * (length + width);
console.log("The area of rectangle is " +area1);
console.log("The perimeter of rectangle is " +perimeter1);

//Question 4
let pi = 3.14;
let radius = parseFloat(prompt("enter radius of circle:"));
let area2 = pi * radius * radius;
let circum = 2 * pi * radius;
console.log("The area of circle is " +area2);
console.log("The circumference of circle is " +circum);

//Question 5
let slope = 2; 
let xintercept = 2/slope;
let yintercept = -2;
console.log("the value of slope is: "+slope);
console.log("the value of x intercept is: "+xintercept);
console.log("the value of y intercept is: "+yintercept);

//Question 6
let x1 = 2;
let x2 = 6;
let y1 = 2;
let y2 = 10;
let slope1 = (y2-y1)/(x2-x1);
console.log("The slope : "+slope1);

//Question 7
if(slope == slope1)
{
    console.log("both slopes equal");
 } else{
        console.log("both slopes are not equal");
    }


//Question 8


//Question 9
let hours = parseFloat(prompt("enter hours :"));
let rate = parseFloat(prompt("enter raye per hour:"));
let earning = hours * rate;
console.log("His weekly earning is " +earning);


//Question 10
let mame = prompt("enter your name :");
if(name.length > 7)
{
    console.log("your name is long");
}else{
    console.log("your name is short");
}


//Question 11
let firstName = 'Asabeneh';
let LastName = 'yetayeh';
if(firstName.length > LastName.length)
{
    console.log("Your first name, "+firstName + "is longer than your family name, "+LastName);
}
else{
    console.log("equal");
}


//Question 12
let myAge = 250;
let yourAge = 25;
let old = myAge - yourAge;
console.log("I am "+old+ " years older than you.")


//Question 13
let meYear = prompt("Enter your birth year: ");
let currentYear = new Date().getFullYear();
let certYear = currentYear - meYear;
let driveYear = 18 - certYear;
 
if(certYear>=18){
    console.log("You are "+certYear+" you are old enough to drive");
}
else{
    console.log("You are "+certYear+", you will be allowed to drive after"+driveYear+" years");
}


//Question 14
let Year = prompt("Enter the number of years : ");
let second = 60;
let minute = 60;
let hour = 24;
let days = 365;
let totalSeconds = days*hour*minute*second;
let livedSecond = Year*totalSeconds;
console.log("You lived "+livedSecond+" seconds.");


//Question 15
let currentDate = new Date();
let year = currentDate.getFullYear();
let month = currentDate.getMonth();
let date = currentDate.getDate();
let Hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
console.log(`${year}-${month}-${date} ${hours}:${minutes}`);
console.log(`${date}-${month}-${year} ${hours}:${minutes}`);
console.log(`${date}/${month}/${year} ${hours}:${minutes}`);