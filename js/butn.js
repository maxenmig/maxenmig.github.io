const subjects = ['aardrijkskunde', 'biologie', 'chemie', 'duits', 'engels', 'frans', 'fysica', 'geschiedenis', 'godsdienst', 'nederlands', 'wiskunde'];

for (let a = 0; a < 11; a++){
    var button = document.createElement('button');

    var dropDownMenu = document.querySelector('.dropDownMenu');
    dropDownMenu.appendChild(button);

    var subjectLink = document.createElement('a');
    subjectLink.setAttribute('href', `#${subjects[a]}`);

    const buttons = dropDownMenu.querySelectorAll('button');
    buttons[a].appendChild(subjectLink);    

    const subjectLinks = dropDownMenu.querySelectorAll('a');
    subjectLinks[a].innerHTML = `${subjects[a].toUpperCase()}`;
}


