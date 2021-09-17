for (let y = 0; y < subNames.length; y++){
    const main = document.querySelector('.main');
    const table = document.createElement('table');
    const tableRow = document.createElement('tr');
    tableRow.classList.add('tableRow');

    const divider = document.createElement('div');
    divider.classList.add('divider');


    const idCell = document.createElement('td');
    const nameCell = document.createElement('td');
    idCell.classList.add('idcell');
    nameCell.classList.add('nameCell');

    const link = document.createElement('a');
    link.classList.add('link');

    const p = document.createElement('p');
    p.classList.add('id');

    divider.innerHTML = subjects[y].toUpperCase();
    divider.id = subjects[y].toLowerCase();
    main.appendChild(divider);
    table.classList.add('table');
    main.appendChild(table.cloneNode(true));



    const tables = document.querySelectorAll('.table');
    for (let z = 0; z < subNames[y].length; z++){
        p.innerHTML = (z+1).toString();
        idCell.appendChild(p);
        tableRow.appendChild(idCell);
        link.innerText = subNames[y][z];
        link.setAttribute('href', `./files/${subjects[y].toLowerCase()}/${subNames[y][z]}`);
        link.setAttribute('target', "_blanc");
        nameCell.appendChild(link);
        tableRow.appendChild(nameCell);

        tables[y].appendChild(tableRow.cloneNode(true));
    }
}
