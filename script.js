"use strict"

// Pasirinkite 5 pasaulio šalis. Suraskite (Google, Wikipedia) jų valstybės plotą (km²) ir gyventojų skaičių.

// Sukurkite naują masyvą su penkių pasaulio šalių objektais, kuriuose būtų nurodyta: šalies pavadinimas, valstybės plotas ir gyventojų skaičius.

// Suskaičiuokite ir suapvalinkite su toFixed(2) koks plotas tenka vienam gyventojui (m²) kiekvienoje šalyje. P.s. reikės padauginti nurodytą skaičių km2 iš 1000000, kad gautumėte m2.

// Atspausdinkite tokią informaciją apie šalis per console.log naudodamiesi for loop arba for/of loop pagal tokį šabloną:

// Šalis: Portugalija, joje gyvena 10.26 mln. gyventojų.
// Valstybės plotas: 92212 km², plotas tenkantis vienam gyventojui: 8987.52 m².

// Papildomai
// Sudėkite sukoduotą skaičiavimą ir spausdinimą į funkcijos ciklą ir jį paleiskite per for loop arba for/of loopnurodydami informaciją iš masyvo.

document.write(`<br><br> ===> TEAMS UŽDUOTIS <=== <br><br><br><br>`);

var salys = [
    {
        pavadinimas: "Portugalija",
        plotas: 92212,
        gyventojuSk: 10260000 / 1000000
    },
    {
        pavadinimas: "Lietuva",
        plotas: 65300,
        gyventojuSk: 2784279 / 1000000
    },
    {
        pavadinimas: "Lenkija",
        plotas: 41865,
        gyventojuSk: 38268000 / 1000000
    },
    {
        pavadinimas: "Nederlandai",
        plotas: 92212,
        gyventojuSk: 17629200 / 1000000
    },
    {
        pavadinimas: "Italija",
        plotas: 301338,
        gyventojuSk: 60317116 / 1000000
    }
]

function apieSalis(pavadinimas, plotas, gyventojuSk){

    var plotasGyventojui = plotas / gyventojuSk;

    document.write(`Šalis: ${pavadinimas}, joje gyvena ${gyventojuSk.toFixed(2)} mln. gyventojų.`);

    document.write(`Valstybės plotas: ${plotas} km², plotas tenkantis vienam gyventojui: ${plotasGyventojui.toFixed(2)} m².`);

    document.write(`<br><br>+++++++++++++++<br><br>`);
}


for(var x of salys){
    apieSalis(x.pavadinimas, x.plotas, x.gyventojuSk);
}


