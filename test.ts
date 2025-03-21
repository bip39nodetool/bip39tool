import { splitMnemonic } from 'shamir-bip39';
import { recoverMnemonic } from 'shamir-bip39';

const reader = require("readline-sync"); //npm install readline-sync

let username = reader.question("Username: ");
const password = reader.question("Password: ", { hideEchoBack: true });
if (username == "admin" && password == "foobar") {
  console.log("Welcome!")
}