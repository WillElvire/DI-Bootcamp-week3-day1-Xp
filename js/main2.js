/**
 * @author : Wilfried koua
 * @description : Master dom element using js
 */

/******************** EXERCICE 2 ****************/

let userElement = document.getElementsByTagName("div")[0];
let elementList = document.getElementsByTagName("ul")[0];
let children   = elementList.children;

userElement.style.backgroundColor = "blue";
userElement.style.padding = "20px";

children[0].style.visibility = children[0].innerHTML == "John" ?  "hidden"           : "visible";
children[1].style.border     = children[1].innerHTML == "Pete" ?  "1px solid black"  : "none";

document.body.style.background = "gray";