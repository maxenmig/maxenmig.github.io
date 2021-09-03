const aa = [ 'basisijzerindustrieenindustrieindevs.pdf',
'basiskennis.pdf',
'blindekaartoverhoring.pdf',
'chineeenindustrielereus.pdf',
'overhoringbevolking.pdf' ];

const bio = [ 'energiestroomineenecosysteem.pdf',
'icttaakbelangvaneenduurzameontwikkeling.pdf',
'overhoringbiodiversiteitclassificerendeterminerenvansoorten.pdf',
'overhoringdomeinarchaeaeneukaryotenclassificatieniveausomstredenplaatsvanvirussenmicroorganismeninrelatietotdemenselijkegezondheid.pdf',
'overhoringhetplantenrijk.pdf',
'overhoringinteractiestussenverschillendesoorten.pdf',
'overhoringmicroorganismeninrelatietotdemenselijkegezondheidvervolgbacterieleinfectiesnuttigebacterien.pdf',
'overhoringmolsbroekconcurrentieencooperatie.pdf',
'overhoringtreeoflifedomeinbacterien.pdf',
'overhoringwerkingvaneenecosysteemvoedselrelatiesineenecosysteem.pdf',
'practicumdeterminerenvanzaadplantenaandehandvaneenflora.pdf',
'practicummicroscopievanbacterienuityoughurtviaenkelvoudigekleuring.pdf',
'practicummicroscopievankorstmossen.pdf',
'practicummilieuverstoring.pdf',
'practicumonderzoeknaarbacterienschuursponsalsbiotischmedium.pdf',
'practicumonderzoeknaardebiodiversiteit.pdf',
'practicumstudievandehoningbij.pdf',
'practicumverscheidenheidaanmicroorganismen.pdf',
'practicumvoedselrelatiesineenecosysteem.pdf' ];

const che = [ 'anorganischestofklassen.pdf',
'chemischeelementen.pdf',
'chemischereacties.pdf',
'concentraties.pdf',
'herhaling3de.pdf',
'ionenreacties.pdf',
'oefeningen.pdf',
'onderzoeksopdrachtzuurbaseindicator.pdf',
'organischestoffen.pdf',
'polaireenapolairestoffenelektrolyten.pdf',
'practicumbereidenvanoplossingenverdunning.pdf',
'practicumchemischeeigenschappenvanoxiden.pdf' ];

const de = [ 'l1-10test.pdf',
'leestest1.pdf',
'luisteroefening.pdf',
'luistertoetskap3essenundzeit.pdf',
'testdeutschkap2.pdf',
'testdeutschkap3.pdf',
'testdeutschkap4.pdf' ];

const eng = [ '5peoplewhoclaimedtobespacetravelers.pdf',
'grammaru4passivevoiceandconditionals.pdf',
'nasawecouldfindalienlifein20years.pdf',
'readingassignment.pdf',
'verbtest.pdf' ];

const fr = [ '21lesstructuressociales.pdf',
'erreurscourantesdelexamenecritdedecembre.pdf',
'lesvetementsp37-39.pdf',
'testceetredifferentmaledictionoubenediction.pdf',
'testcolafamilledaujourdhui.pdf',
'testdecouteinterviewavecelise.pdf',
'testinfothequep300-326pluslesubjonctifp333-343.pdf',
'testinterrogationcolesannoncesalagarealaeroport.pdf',
'testinterrogationoscaretladamerosepartie1.pdf',
'testinterrogationunite3lafamilledaujourdhuigrammoutilseviterlarepetition.pdf',
'testlesindefinis.pdf',
'testmediathequep280-299pluslegerondifp327-332.pdf',
'testunite2grammoutils3.2.pdf',
'testverbes.pdf',
'testverbesen-re.pdf',
'testvoc2.1.pdf',
'testvoc2.pdf',
'testvoclesgenslafamillelavielamort.pdf',
'toetsfransonderwerponbekend.pdf',
'unite1infothequetestdece.pdf',
'unite3mediathequeplusinfotheque2.1plusgrammoutils3.1.pdf' ];

const fys = [ 'arbeidenenergie.pdf',
'bepaalkostprijselektriciteit.pdf',
'energieomzettingenvermogenenrendement.pdf',
'metenentoepassenvandruk.pdf',
'practicumgaswetboyleenmariotte.pdf',
'practicumhydrostatischedruk.pdf',
'warmteenenrgie.pdf' ];

const gesch = [ 'overhoringdriehoekshandel.pdf',
'overhoringhoofdstuk1.pdf',
'overhoringhoofdstuk2en3.pdf',
'toetseuropeseontdekkingsreizen.pdf' ];

const gods = [ 'demonotheistischegodsdiensteninrelatietotelkaar.pdf',
'demytheendefabel.pdf',
'hetboekjona.pdf',
'hetboekjona2.pdf',
'humanisme.pdf',
'pkg.pdf',
'vredeswerk.pdf' ];

const ned = [ 'bouwstenenvaneenverhaal.pdf',
'luistertoets27.pdf',
'sageenlegendesprookje.pdf',
'sospelling.pdf',
'sowerkwoorden.pdf',
'spellingwerkwoorden.pdf',
'taalhumortaalvariatieenbzlt3.pdf',
'theathertaalschat.pdf',
'verwijswoordenvoornaamwoorden.pdf',
'zinsleer.pdf' ];

const wisk = [ 'afstanden.pdf',
'decirkel1.pdf',
'decirkel2.pdf',
'decirkel3.pdf',
'decirkel4.pdf',
'driehoeksmeting.pdf',
'formulevanlaplace.pdf',
'goniometrischegetallenvaneenhoek.pdf',
'herhaling3de1.pdf',
'herhaling3de2.pdf',
'kansrekenen1.pdf',
'kansrekenen2.pdf',
'kansrekenen3.pdf',
'rekenenmetveeltermen.pdf',
'tweedegraadsfuncties1.pdf',
'tweedegraadsfuncties2.pdf',
'vierkantsvergelijkingen.pdf' ];

const files = [aa, bio, che, de, eng, fr, fys, gesch, gods, ned, wisk];
const subjectName = ['aardrijkskunde', 'biologie', 'chemie', 'duits', 'engels', 'frans', 'fysica', 'geschiedenis', 'godsdienst', 'nederlands', 'wiskunde'];

for (let x = 0; x < subjects.length; x++){
    var inner = document.querySelector('.inner');
    var title = document.createElement('div');
    title.classList.add('title');
    title.id = subjects[x];
    title.innerHTML = subjects[x].toUpperCase();

    inner.appendChild(title);
    
    var table = document.createElement('table');
    table.classList.add('table');
    
    inner.appendChild(table.cloneNode(true));

    var tables = inner.querySelectorAll('table');

    for (let y = 0; y < files[x].length; y++){
        var row = document.createElement('tr');
        row.classList.add('row');
        tables[x].appendChild(row);
        
        var idTd = document.createElement('td');
        idTd.classList.add('idTd');

        row.appendChild(idTd);
        idTd.innerHTML = y+1;

        var nameTd = document.createElement('td');
        nameTd.classList.add('nameTd');

        row.appendChild(nameTd)
        
        var fileLink = document.createElement('a');
        fileLink.classList.add('fileLink');

        nameTd.appendChild(fileLink);

        fileLink.setAttribute('href', `./files/${subjectName[x]}/${files[x][y]}`);
        fileLink.innerHTML = `${files[x][y]}`;
        fileLink.setAttribute('target', '_blank');

    }
}
