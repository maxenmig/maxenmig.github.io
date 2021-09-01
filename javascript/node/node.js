const files = ['aardrijkskunde', 'biologie', 'chemie', 'duits', 'engels', 'frans', 'fysica', 'geschiedenis', 'godsdienst', 'nederlands', 'wiskunde']
const fs = require('fs');


for(let x = 0; x < files.length; x++){
    console.log(fs.readdirSync(`./files/${files[x]}`));
}