/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// Starting 

// A
var boys = ["Peter", "lars", "Ole"]; 
var girls = ["Janne", "hanne", "Sanne"];

// B
var all = boys.concat(girls);

// C
console.log(all.join());
console.log(all.join('-'));

// D
all.push("Lone", "Gitte");
// Cheacking to make sure
console.log(all);

// E
all.unshift("Hans", "Kurt");
// Checking
console.log(all);

// F
all.shift();
// Alternative if you need the first name in the array
var first = all.shift();
// Check to see if Hans is removed
console.log(all);

// G
all.pop();
// Alternative if you need the last name in the array
var last = all.pop();
// Check
console.log(all);

// H
//First to find what number Ole and Janne is at in the array
console.log(all);
// removing Ole and Janne
all.splice(3, 2);
// Check
console.log(all);

// I
// Reversing the array so the girl names comes first
all.reverse();
// Check 
console.log(all);

// J
// Sorts the array
console.log(all.sort());

// K
// Sorts the all array without being case sensitive
all.sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
});