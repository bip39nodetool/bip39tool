import { splitMnemonic } from 'shamir-bip39';
import { recoverMnemonic } from 'shamir-bip39';
import { wordlist } from 'shamir-bip39';

const reader = require("readline-sync"); //npm install readline-sync


import * as readline from 'readline';

/*const mnemonicIn = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});*/

//console.log("zoo: " + wordlist.indexOf("zoo"));

let mnemonic = "";
for (var i=1; i<=24; i++){

  let word: string = reader.question(`word no ${i}: `);
  if (wordlist.indexOf(word)> -1){
    if (i <24) word = word + " "; 

    mnemonic = mnemonic + word;
  }
  else {
    console.log("ERROR word not in wordlist!");
  }

  

  

}


// Frage den Benutzer nach einer Eingabe
//mnemonicIn.question('Wie heiß die Mnemonic Phrase: ', (mnemonic) => {
  // Ausgabe der eingegebenen Antwort
  console.log(`Du hast eingegeben: ${mnemonic}`);

  //mnemonicIn.close();
  const numSharesIn = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  numSharesIn.question('numShares: ', (numShares) => {
    // Ausgabe der eingegebenen Antwort
    console.log(`numShares: ${numShares}`);

    numSharesIn.close();
    const thresholdIn = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    thresholdIn.question('threshold: ', (threshold) => {

      console.log(numShares + " " + threshold)

      const shares = splitMnemonic(mnemonic, Number( numShares), Number(threshold));
  
      console.log(shares)

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