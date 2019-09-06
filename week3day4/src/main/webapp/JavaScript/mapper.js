/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//
let divtext = document.getElementById("divtext");

let people = ["Karen", "Peter", "Lisa", "Tommy"];

function makeList() {

    let text = people.map(person => "<li>" + person + "</li>");

    text.unshift("<ul>");
    text.push("</ul>");

    divtext.innerHTML = text.join("");
}
makeList();

