//content
const body = document.querySelector('body');
const header = document.createElement('header');
const button = document.createElement('button');
button.innerHTML = 'VAKKEN';

body.appendChild(header);
header.appendChild(button);

//table...
const subjects = ['aardrijkskunde', 'biologie', 'chemie', 'duits', 'engels', 'frans', 'fysica', 'geschiedenis', 'godsdienst', 'nederlands', 'wiskunde'];
const arrayProt = [];
const fileGroups = [aa, bio, che, de, eng, fr, fys, gesch, gods, ned, wisk];
const allFiles = arrayProt.push(...aa,...bio, ...che, ...de,...eng,...fr,...fys,...gesch,...gods,...ned,...wisk);
console.log(arrayProt);



var addClass = (location, className) => {
    location.classList.add(className);
};

for (var a = 0; a < subjects.length; a++){
    //TABLE TITLE
    var tableTitle = document.createElement('div');
    tableTitle.id = subjects[a];
    addClass(tableTitle, 'tableTitle');
    body.appendChild(tableTitle);
    tableTitle.innerHTML = subjects[a].toUpperCase();

    //TABLE
    var table = document.createElement('table');
    addClass(table, 'table');
    body.appendChild(table);

    var headRow = document.createElement('tr');
    addClass(headRow, 'rowH');
    table.appendChild(headRow);

    var row = document.createElement('tr');
    addClass(row, 'rowN');

    var head = document.createElement('th');
    for (let b = 0; b<3; b++){
        headRow.appendChild(head.cloneNode(true));
    }

    for (var c = 0; c<fileGroups[a].length; c++){

        table.appendChild(row.cloneNode(true));
        var idTd = document.createElement('td');
        idTd.classList.add('idTd');
        var nameTd = document.createElement('td');
        nameTd.classList.add('nameTd');
    }
}

var tr = document.querySelectorAll('.rowN');
//console.log(tr);
for (let d = 0; d < tr.length; d++){
    //console.log(tr[e]);
    tr[d].appendChild(idTd.cloneNode(true));
    tr[d].appendChild(nameTd.cloneNode(true));
}

var idTdQuant = document.querySelectorAll('.idTd');
var nameTdQuant = document.querySelectorAll('.nameTd');

var link = document.createElement('a');
link.classList.add('link');


for (var e = 0; e < idTdQuant.length; e++){
    link.setAttribute('href', `./files/${arrayProt[e]}`);
    link.setAttribute('target', '_blank');
    idTdQuant[e].innerHTML = e;
    nameTdQuant[e].appendChild(link.cloneNode(true));
}

var linkQuant = document.querySelectorAll('.link');

for (let f = 0; f<arrayProt.length; f++){
    linkQuant[f].innerHTML = arrayProt[f];
}









