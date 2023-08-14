var express = prompt("Enter your operation, for example 2+2",""); 
if(!express) alert("Ok, it's over!");


express = express.replace(/\s/g, '');
var number1 = +express.charAt(0);
var sign = express.charAt(1);
var number2 = +express.charAt(2);

switch(sign){
case "+" : alert(number1 + number2);  break;
case "-" : alert(number1 - number2);  break;
case "*" : alert(number1 * number2);  break;
case "/" : alert(number1 / number2);  break;
 default : alert("Not a correct operation");
}