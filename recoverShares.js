"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shamir_bip39_1 = require("shamir-bip39");
var shamir_bip39_2 = require("shamir-bip39");
var reader = require("readline-sync"); //npm install readline-sync
var threshold = reader.question("thresholds: ");
var shares = {};
for (var ii = 1; ii <= threshold; ii++) {
    var no = reader.question("number of share ".concat(ii, ": "));
    //let word: string = reader.question(`complete share phrase for ${i}: `);
    var mnemonic = "";
    for (var i = 1; i <= 24; i++) {
        var word = reader.question("word no ".concat(i, " for share ").concat(no, ": "));
        if (shamir_bip39_2.wordlist.indexOf(word) > -1) {
            if (i < 24)
                word = word + " ";
            mnemonic = mnemonic + word;
        }
        else {
            console.log("ERROR word not in wordlist!");
        }
    }
    shares[no] = mnemonic;
}
//console.log(JSON.stringify(shares))
var originalMnemonic = (0, shamir_bip39_1.recoverMnemonic)(shares);
console.log("the original Mnemonic phrase is: " + originalMnemonic);
