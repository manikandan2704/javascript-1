/*let a=10;
let b=13;
console.log(a+b);*/

//calculate area of circle;//



/*calculate area of traingle;*/

/*let A=1/2*6*8;
console.log(A);*/

/*simple Interest;*/

/*let A=8*8*2/100
console.log(A);*/
/*
var marks=[];
marks.push(44);
marks.push(44);
marks.push(44);
marks.push(44);
marks.push(44);
console.log(marks);*/
 
//pop method//

/*var fruits=["mango","banana","apple"];
fruits.pop();
console.log(fruits);*/

//shift method//

/*var mycars=["rols","bmw","thor"];
mycars.shift("thor");
console.log(mycars);*/

//slice method//

/*var subject=["tamil","maths","english","history"]
subject.slice();
console.log(subject);*/

//splice method//
 /*var software=["html","css","javascript","python","c",]
 software.splice();
 console.log(software);*/

 //tostring method//
 /*var software=["html","css","javascript","python","c",]
 software.toString();
 console.log(software);*/

 //unshift method//
 /*var software=[]
 software.unshift(10);
 software.unshift(10);
 software.unshift(10);
 software.unshift(10);
 software.unshift(10);
 console.log(software)*\



 /*Program for calculating Cube
 let A=Math.cbrt(125);
 console.log(A);*\

 /*program for square 
 let A=Math.sqrt(4);
 console.log(A);*/

 /*Program to SWAP two numbers

 let A=25;
 let B=87;
 let c=166;
 console.log(' the value after swapping')*/
   

//  let a=10;
//  let b=45;
//  console.log(a<b);
  

//  num=10;
//  if

 //var p = document.getElementById("p");
 //console.log(p);
 /*let a={
	 name:"mani",
	 age:20,
	 degree:"maths",
 }
 a= function(){
	 for(i=0;i<length.a;i++){
		 console.log(i)
	 }
 }*/
 
 
//function print(){
   // var input = document.getElementById("input");
    // console.log(input.value);

    // var output = document.createElement("P");
    // output.innerText = input.value;
    // document.getElementsByTagName("BODY")[0].appendChild(output);

    /* input.value = "";

    reverseString(input.value);

    
    
}*/
//let a=Math.round(3.2);
// console.log(a);//

moreVowels();
function moreVowels(){
    var input = ["simeon","sakthiganesh","aeiou",];
    var vowelsCount = [0, 0, 0,];
    var vowels = ["a", "e", "i", "o", "u"];
 
    for(let i=0; i<input.length; i++){
        for(let j=0; j<input[i].length; j++){
            if(vowels.includes(input[i].charAt(j))){
                vowelsCount[i] += 1;
            }
        }
    }

    var index=0;
    var f=vowelsCount[0];
    for(let i=1; i<vowelsCount.length; i++){
        if(f<vowelsCount[i]){
            f=vowelsCount[i];
            index = i;
        }
    }
    console.log(input[index]);

}




/*function reverseString(input){
     var inputArr = ["one", "two", "three", "four", "five"];
     var strValue = inputArr[input-1];
     var output="";
     for(let i=strValue.length-1; i>=0; i--){
        output += strValue.charAt(i);
     }
     console.log(output);
}



/*let date=new Date();
date.setDate(11);
console.log(date);
console.log(date.getDate());
*/
/*let u=new Date();
 n=u.toLocaleString();
 console.log(u.toLocaleString());
 
 let x=new Date();
 y=x.toDateString();
 console.log(x.toDateString());
 
 let m=new Date();
 t=m.toString();
 console.log(m.toString());
 
 let l=new Date();
 o=l.toISOString();
 console.log(l.toISOString());*/
 
 
 
 
 




 /*input=parseInt(prompt('enter number'));

 if(input){
     console.log("number");8
 }
 else{
     console.log("string");
 }*/

 /*var num = "100";

 if(typeof num == 'number'){
	console.log(num + " is a number");
 }else{
	console.log(num + " is not a number");
 }*/


/*
 var mani ="-12";
 if(mani>0){
    console.log("it is positive")
 }
 else{
    console.log("it is not positive")
 }
 



 var m=new Date();
 v= m.getMonth();
 if(v>5){
    console.log("good morning")
 }
 else{
    console.log("good evening")
 }



 let t=11;
 if(t % 2==0 ){
    console.log("it is even")
 }
 else{
    console.log("it is odd")
 }


 /*let i=9000;
 if(i<10000&&){
    console.log("you are basic")
 }else if(i<30000 && i>10000){
    console.log("you are medium")
 }
 else{
    console.log("you are advanced")
 }
*/

/*
let age =prompt("enter a number");
let gender =prompt("enter a string");

if( age > 25){    

}if(gender == 'male'){
    console.log("you are eligible")
}else if(age )

x=parseInt(prompt('enter number'));
if(x>25 &&male){
    console.log("you are eligible")
}
else{
    console.log("you are not eligible")
}*/

/*let a=parseInt(prompt("first"));
let b=parseInt(prompt("second"));
let c=parseInt(prompt("third"));
if((a>=b)&&(a>=c)){
    if(b>=c){
        console.log("a is greater than all");
        console.log("b is greater than c");
        console.log("c is smaller than all");
    }else{
        console.log("a is greater than all");
        console.log("c is greater than b");
        console.log("b is smaller than all");
    }
}else if((b>=a)&&(b>=c)){
    if(a>=c){
        console.log("b is greater than all");
        console.log("a is greater than c");
        console.log("c is smaller than all");
    }else{
        console.log("b is greater than all");
        console.log("c is greater than a");
        console.log("a is smaller than all");
    }
}else if((c>=a)&&(c>=b)){
    if(b>=a){
    console.log("c is greater than all");
        console.log("b is greater than a");
        console.log("a is smaller than all");
    }else{
        console.log("c is greater than all");
        console.log("a is greater than b");
        console.log("b is smaller than all");
    }
}else{
    console.log("give number");
}

*/






/*let a=15;
let b=12;
let c=14;
 if(a>b&&a>c){
    console.log("a is great")
 }else if(b>a&&b>c){
    console .log("b is great")
 }
 else{
    console.log(" c is great")
 }
*/











/*
let day= parseInt(prompt("enter your value"));
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}*/




