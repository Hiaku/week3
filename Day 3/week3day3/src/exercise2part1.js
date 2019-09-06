/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// 1
// Function Declaration
//Observe: no return type, no type on parameters
function add(n1, n2){
   return n1 +n2;
}

// Function Expression
var sub = function(n1,n2){
  return n1 - n2;
} 

// Callback example
var cb = function(n1,n2, callback){
  return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
};

// 2
// 2.1
console.log(add(1,2));
// Results in 3 since the number 1 and 2 gets send to the function add.

// 2.2
console.log(add);
// Results in the function getting printet out.

// 2.3
console.log(add(1,2,3));
// Results in 3 since it will ignore the last number and just do the 2 first which are 1 and 2

// 2.4
console.log(add(1));
// Results in "Not a Number" or NaN

// 2.5
console.log(cb(3,3, add));
// it takes the 3 and 3 and put into the n1 and n2. Then through the callback function sends the numbers to the function add which returns 6.

// 2.6
console.log(cb(4,3,sub));
// It does almost the same as previous but this time puts it in the sub function which subtract the numbers which returns as 1.

// 2.7
console.log(3,3,add());
// Gives you an error since you try and use the callback function but do not give it any values/input.

// 2.7
console.log(cb(3,"hh", add));
// Results in 3 + hh = 3hh. This happens since js is not sensitive to numbers or letters.

// 3
var cb2 = function(n1,n2,callback){
    try{
        if(typeof n1 === "number"){
            if(typeof callback === "function"){
                return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
            }
        }
    }catch(e){
        console.log(e);
    }
};

// 4
function mul(n1, n2){
    return n1 * n2;
}
// Uses the mul as a callback for cb
console.log(cb(1,2,mul));

