import { splitMnemonic } from 'shamir-bip39';
import { recoverMnemonic } from 'shamir-bip39';
import { Shares } from 'shamir-bip39';
import { wordlist } from 'shamir-bip39';


const reader = require("readline-sync"); //npm install readline-sync



let threshold: number = reader.question("thresholds: ");

let shares = {};

for (var ii = 1; ii <= threshold; ii++) {
  let no: string = reader.question(`number of share ${ii}: `);
  //let word: string = reader.question(`complete share phrase for ${i}: `);

  let mnemonic = "";
  for (var i = 1; i <= 24; i++) {

    let word: string = reader.question(`word no ${i} for share ${no}: `);
    if (wordlist.indexOf(word) > -1) {
      if (i < 24) word = word + " ";

      mnemonic = mnemonic + word;
    }
    else {
      console.log("ERROR word not in wordlist!");
    }





  }

  shares[no] = mnemonic;









}

//console.log(JSON.stringify(shares))

const originalMnemonic = recoverMnemonic(shares);


console.log("the original Mnemonic phrase is: " + originalMnemonic)
