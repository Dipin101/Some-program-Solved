let str="A brown fox jumped accross";
var locate=str.indexOf("jumped");
console.log(locate);


let str="A brown fox jumped accross jumped in the well and jumped again";
var locate=str.lastIndexOf("jumped");
console.log(locate);


let str="A brown fox jumped accross jumped in the well and jumped again";
var locate=str.search("jumped");
console.log(locate);

//index takes second parameter on where to start

let str="A brown fox jumped accross jumped in the well and jumped again";
var locate=str.indexOf("jumped",13);
console.log(locate);

//extracting the strings

let str="A brown fox jumped accross jumped in the well and jumped again";
var locate=str.slice(4,13);
console.log(locate);

//substring doesn't take negative numbers to extract else similar to slice 
let str="A brown fox jumped accross jumped in the well and jumped again";
var locate=str.substring(4,13);
console.log(locate);

//substr starts from an index but the second parametere specifies up to how much we wanna extract
let str="A brown fox jumped accross jumped in the well and jumped again";
var locate=str.substr(4,13);
console.log(locate);

//replace the value
let str="A brown fox jumped accross jumped in the well and jumped again";
var locate=str.replace("jumped","slid");
console.log(locate);

//converting to upper and lower case 
let str="A brown fox jumped accross jumped in the well and jumped again";
var locate=str.toUpperCase();
console.log(locate);
let stri="A brown fox jumped accross jumped in the well and jumped again";
var locate=stri.toLowerCase();
console.log(locate);

//joining two or more strings
let str="A brown fox jumped ";
let stri="accross jumped in the well and jumped again";
var locate=str.concat(stri);
console.log(locate);

//trimming the whitespace
let str="          A brown fox jumped accross jumped in the well and jumped again              ";
var locate=str.trim();
console.log(locate);

//extracting characters
let str="A brown fox jumped accross jumped in the well and jumped again";
var locate=str.charAt(13);
console.log(locate);

let str="A brown fox jumped accross jumped in the well and jumped again";
var locate=str.charCodeAt(13);
console.log(locate);

//converting string into array
let str="A brown fox jumped accross jumped in the well and jumped again";
var locate=str.split(" ");
console.log(locate[5]);