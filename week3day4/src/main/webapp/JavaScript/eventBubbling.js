/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

Array.from(document.getElementsByClassName("divs"))
        .forEach(function (element) {
            element.addEventListener("click", function () {
                hi(this.id);
            });
        });

function hi(name) {
    document.getElementById("divtext").innerHTML += "Hi from: " + name + "<br>";
}
