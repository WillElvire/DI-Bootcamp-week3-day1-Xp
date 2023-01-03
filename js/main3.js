/**
 * @author : Wilfried koua
 * @description : Master dom element using dom elements
 * @param navbar : HTMLElement
 * @param myUlList : HTMLElement
 */

/******************** EXERCICE 3 ****************/

//declaration des variables
let navbar       = document.querySelector("#navBar");
let myUlList     = document.querySelector("ul");
let newLiCreated = document.createElement("li");
let textCreated  = document.createTextNode("Logout");

//utilisation des methodes 
navbar.setAttribute("id","socialNetworkNavigation");
newLiCreated.appendChild(textCreated);
myUlList.appendChild(newLiCreated);


console.log(myUlList.firstElementChild.textContent);
console.log(myUlList.lastElementChild.textContent);