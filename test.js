"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reader = require("readline-sync"); //npm install readline-sync
var username = reader.question("Username: ");
var password = reader.question("Password: ", { hideEchoBack: true });
if (username == "admin" && password == "foobar") {
    console.log("Welcome!");
}
