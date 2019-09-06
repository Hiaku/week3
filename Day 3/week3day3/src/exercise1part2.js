/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// Random values for testing
var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne", "Ian"];
var all = boys.concat(girls);

// A
const map1 = all.map(x => x.toUpperCase());
// Check to make sure
console.log(map1);

// B

function filter(isLetter) {
    function isLetter(value) {
        return value === "L" || value === "l";
    }
    // creates a new empty array
    var results2 = [];
    // for loop
    for (var i = 0; i < all.length; i++) {
        // Checks to see what is at the first letter of each name and match it with the filter function
        if (isLetter(all[i].charAt(0)) === true)
            results2.push(all[i]);
    }
    console.log(results2);
}
// Tells you the person who matches
filter();