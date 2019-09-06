/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// 1
function divcolor() {
    let divarray = Array.from(document.body.getElementsByTagName('div'));
    divarray.forEach(element => {
        element.style.backgroundColor = "red";
    });
}
divcolor();

// 2
function colorChanger() {
    document.getElementById('div1').style.backgroundColor = "green";
    document.getElementById('div2').style.backgroundColor = "yellow";
    document.getElementById('div3').style.backgroundColor = "white";
}

