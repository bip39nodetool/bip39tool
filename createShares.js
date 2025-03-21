"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shamir_bip39_1 = require("shamir-bip39");
var shamir_bip39_2 = require("shamir-bip39");
var reader = require("readline-sync"); //npm install readline-sync
var readline = require("readline");
/*const mnemonicIn = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});*/
//console.log("zoo: " + wordlist.indexOf("zoo"));
var mnemonic = "";
for (var i = 1; i <= 24; i++) {
    var word = reader.question("word no ".concat(i, ": "));
    if (shamir_bip39_2.wordlist.indexOf(word) > -1) {
        if (i < 24)
            word = word + " ";
        mnemonic = mnemonic + word;
    }
    else {
        console.log("ERROR word not in wordlist!");
    }
}
// Frage den Benutzer nach einer Eingabe
//mnemonicIn.question('Wie heiß die Mnemonic Phrase: ', (mnemonic) => {
// Ausgabe der eingegebenen Antwort
console.log("Du hast eingegeben: ".concat(mnemonic));
//mnemonicIn.close();
var numSharesIn = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
numSharesIn.question('numShares: ', function (numShares) {
    // Ausgabe der eingegebenen Antwort
    console.log("numShares: ".concat(numShares));
    numSharesIn.close();
    var thresholdIn = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    thresholdIn.question('threshold: ', function (threshold) {
        console.log(numShares + " " + threshold);
        var shares = (0, shamir_bip39_1.splitMnemonic)(mnemonic, Number(numShares), Number(threshold));
        console.log(shares);
        thresholdIn.close();
    });
});
//});
//const mnemonic =
//  'daring viable gentle scare myself wait possible assist more middle kitchen surge erupt define announce awkward enemy addict you follow promote six royal lizard';
// Generate 3 shares and require 2 to recover the mnemonic
/*const shares = splitMnemonic(mnemonic,  6, 3);

console.log(shares)

let shares3 = shares;

const shares2 = {
  '6': 'blood machine pole engine pole chalk picture palm tiny goose fabric half width castle seminar tornado outer knife cycle casino area hurdle isolate depth',
  '3': 'win roof rabbit strong foil scare segment always turkey invest moment frozen staff citizen art fall motion curious assault tennis debris bubble quit warrior',
  '2': 'parade cabin gentle creek front region warrior enter tray soda shield giggle middle harvest until ostrich lonely bulb adapt cream notice latin garage faculty',
};

const originalMnemonic = recoverMnemonic(shares2);


console.log(originalMnemonic)
*/
// https://github.com/danielstreit/shamir-bip39
