// var generateName = require('sillyname');


import generateName from "sillyname";

import superheroes from "superheroes";

var sillyName = generateName();
var sup = superheroes.random();    

console.log("My name is "+ " "+ sillyName);
console.log("I am a " + sup);