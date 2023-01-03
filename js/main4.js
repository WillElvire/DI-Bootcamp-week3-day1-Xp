let allBooks = [
  {
    title  : "Reflechissez et devenez riche",
    author : "Napoleon hill",
    image  :  "https://images-na.ssl-images-amazon.com/images/I/41uxaJSJ7iL._SX307_BO1,204,203,200_.jpg+",
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
let tableHead   = ["title","author","image","alreadyRead"];
let row;
let cel;
let cellText;

for (let i = 0; i < 4; i++) {

    row      = document.createElement("tr");
    cell     = document.createElement("th");
    cellText = document.createTextNode(tableHead[i]);
    
    cell.appendChild(cellText);
    row.appendChild(cell);
    tblHead.appendChild(row);
}


for(let book of allBooks) {

    row  = document.createElement("tr");
    cell = document.createElement("td");

    cell.appendChild(document.createTextNode(book.title));
    row.appendChild(cell);
    cell.appendChild(document.createTextNode(book.author));
    row.appendChild(cell);
    cell.appendChild(document.createTextNode(book.image));
    row.appendChild(cell);
    tblBody.appendChild(row);
}


table.appendChild(tblHead);
table.appendChild(tblBody);
listBooks.appendChild(table);
table.setAttribute("border", "2");