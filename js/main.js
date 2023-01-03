/**
 * @author : Wilfried koua
 * @description : Master dom element using js
 */

/******************** EXERCICE 1 ********************/

//setting up variables

const container   = selector("#container",0);
const containerUl = document.getElementsByTagName("ul");
const containerLI = selector("ul > li");



for(item of containerLI) {   
    if(item.innerText == 'John'){
        item.innerText = "Richard";
        continue;
    }
}

for(let child of containerUl){
    child.children[0].innerText =  "Wilfried";
    child.classList.add("student_list");
}

for(let item of containerLI) {
    if(item.innerText  == "Sarah") {
        item.closest('ul').removeChild(item);
    }
}

//containerUl[0]..add("university").add("attendance");

containerUl[0].className =  containerUl[0].className  + " attendance" + " university";



function selector(selector,type=1){
    if(type == 1) return  document.querySelectorAll(selector);
    return  document.querySelector(selector);
}







