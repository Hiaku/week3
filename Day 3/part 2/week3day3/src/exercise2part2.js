/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// Callbacks (with map, filter and forEach)

// Default array used for exercises
var name = ["Lars", "Jan", "Peter", "Bo", "Frederik"];

// 1
// Makes new array. Checks the old array word for word if they have less or equal to 3 letters in their names.
//var result = function (name) {
//    return name.filter(word => word.length <= 3);
//};
var result = name.forEach(function(name) {
    console.log(result.filter(name => name.length <= 3));
});

var result = function(name){
    result = name.filter(name => name.length <= 3);
    result.forEach(function(element){
       console.log(element); 
    });
};
// Gives you the list of peoples names the are left.
console.log(result);

// 2
const map = name.map(x => x.toUpperCase());
console.log(map);

// 3
// Starts by putting li in front and bag of the names and then back into the array
var newlinenames = name.map(name => "<li>" + name + "</li>");
// Puts the ul infront of the li and names
newlinenames.unshift("<ul>");
// Puts the /ul in the bag of the li and names 
newlinenames.push("</ul>");
// breaks each person and corresponding li up in different lines
console.log(newlinenames.join("\n"));

// 4

var cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];

// 4
// A
// Cars newer than 1999 filtered 
var newerthan1999 = cars.filter(car => car.year > 1999);

// Car models from Volvo
var volvoModels = cars.filter(car => car.make === 'Volvo');

// All cars below the price range of 5000
var priceBelow5000 = cars.filter(car => car.price < 5000);

// 4A
var SQLString = cars.map(car => "INSERT INTO cars (id,year,make,model,price) VALUES (" + car.id + "," + car.year + "," + car.make + "," + car.model + "," + car.price + ");");

// Asynchronous Callbacks

// 1
// It would send:
// aaaaaaaaaa first
// dddddddddd
// ffffffffff
// eeeeeeeeee
// bbbbbbbbbb

// 2 
// Javascript named asynchronous and the answer were right

// this and constructor functions
// 1
function Person(name){
  this.name = name;
  console.log("Name: "+ this.name);
  setTimeout(function(){
      // We get hi undefined because the term this.name have already been used and deleted. the correct way would be to use name from the function
    console.log("Hi  "+ this.name);  //Explain this
  },2000);
}
// Calls the function like calling a class
Person("Kurt Wonnegut");
// This call for the name that we in the previous function made sure to be sendt to that function through this.name
console.log("I'm global: "+ name);

// 2
var p = new Person("Kurt Wonnegut");  //Create an instance using the constructor function
console.log("I'm global: "+ name);  //What’s different ?
// Changes the person from a global this to a variable instead

// 3
//Store a reference to the outer this
//function Person(name){
//  this.name = name;
//  var self = this;
//  console.log("Name: "+ this.name);
//  setTimeout(function(){
//    console.log("Hi  "+self.name);  
//  },2000);
//}

////Using the bind(..) function
//function Person(name){
//  this.name = name;  
//  console.log("Name: "+ this.name);
//  setTimeout(function(){
//    console.log("Hi  "+this.name);  
//  }.bind(this),2000);
//}

// 4
var greeter = function () {
     console.log(this.message);
 };
var comp1 = { message: "Hello World" };
var comp2 = { message: "Hi" };

var g1 = greeter.bind(comp1 );//We can store a reference, with a specific “this” to use
var g2 = greeter.bind(comp2 );//And here another “this”
setTimeout(g1,500);
setTimeout(g2,1000);

// 5
var testObjecter = {name: "Nikolaj", age: 25, superpower: "Laser"};

var loopObject = function (obj) {
    for (prop in obj) {
        console.log(prop, obj[prop]);
    }
};

// Gives you the list of things from testObjecter
loopObject(testObjecter);
// Deletes the testObjeter's age value
delete testObjecter.age;
// To see that we deleted the age from testObjecter
loopObject(testObjecter);
// Overwrites the information stored as name in the testObjecter
testObjecter.name = "JoJo";
// To see that we overwrote the name on testObjecter
loopObject(testObjecter);

// 2
class Person {
    // Constructor to create a person
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    // A get method to get more details about a person
    get details() {
        for (prop in Person) {
            console.log(prop, obj[prop]);
        }
    }
}



