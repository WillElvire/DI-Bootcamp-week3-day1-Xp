/**
 * @author : Wilfried koua
 * @description : Master dom element using dom elements
 * @param allBooks : Object
 * @param listBooks : HTMLElement
 * @param table     : HTMLElement
 * @param tblBody   : HTMLElement
 * @param tableHead : Array
 * @param row       : HTMLElement
 * @param cell      : HTMLElement
 * @param cellText  : HTMLElement
 * @param row2      : HTMLElement
 */

/******************** EXERCICE 4 ****************/

let allBooks = [
  {
    title  : "Reflechissez et devenez riche",
    author : "Napoleon hill",
    image  :  "https://bibliotheque-du-bien-etre-et-du-succes.com/wp-content/uploads/2021/05/Reflechissez-et-devenez-riche_3.jpg",
    alreadyRead: true,
  },
  {
    title  : "Père pauvre père riche",
    author : "Robert Kiyosaki",
    image  : "https://des-livres-pour-changer-de-vie.com/wp-content/uploads/2020/01/Pere-riche-pere-pauvre-livre-robert-kiyosaki.jpg",
    alreadyRead: false,
  },
];

let listBooks  = document.querySelector(".listBooks");
let table      = document.createElement("table");
let tblBody    = document.createElement("tbody");
let tblHead    = document.createElement("thead");
let tableHead  = ["title","author","image","alreadyRead"];
let row;
let cel;
let cellText;
let row2 ;

row = document.createElement("tr");

for (let i = 0; i < tableHead.length; i++) {
  
  cell     = document.createElement("th");
  cellText = document.createTextNode(tableHead[i]);
  
  cell.appendChild(cellText);
  row.appendChild(cell);
  tblHead.appendChild(row);
}


for(let book of allBooks) {

  row2 = document.createElement("tr");

  for(let i = 0 ; i < tableHead.length ; i++) {

    cell = document.createElement("td");

    if(tableHead[i] == "image"){

      const image = document.createElement('img');
      image.setAttribute("src",book[tableHead[i]]);
      image.setAttribute("width",100);
      image.setAttribute("height",100);
      cell.appendChild(image);

    }
    else{
      cell.appendChild(document.createTextNode(book[tableHead[i]] != undefined ? book[tableHead[i]] : " ** " ));
    }
    row2.appendChild(cell);
  }

  row2.style.background  = book.alreadyRead ? "forestgreen" : "red";
  row2.style.color       = "white",
  
  tblBody.appendChild(row2);
}


table.appendChild(tblHead);
table.appendChild(tblBody);
listBooks.appendChild(table);
table.setAttribute("border", "1");