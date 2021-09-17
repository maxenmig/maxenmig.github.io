const div = document.querySelector(".subs");
const button = document.createElement('button');
const a = document.createElement('a');

const subjects = ["Aardrijkskunde", "Biologie", "Chemie", "Duits", "Engels", "Frans", "Fysica", "Geschiedenis", "Godsdienst", "Nederlands", "Wiskunde"];
for (let x = 0; x < subjects.length; x++){
    button.classList.add('subjectNameButton');
    a.innerHTML = subjects[x];
    a.setAttribute('href', `#${subjects[x].toLowerCase()}`)
    a.classList.add('subLink');
    button.appendChild(a);
    div.appendChild(button.cloneNode(true));
}