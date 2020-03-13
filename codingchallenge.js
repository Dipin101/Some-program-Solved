var massJohn=100;
var massMark=60;
var heightJohn=6;
var heightMark=5;
var BMI;
var higher
var johnBMI=massJohn/(heightJohn*heightJohn);
var markBMI=massMark/(heightMark*heightMark);
console.log(johnBMI);
console.log(markBMI);
console.log("Is Mark's BMI higher than John's?");
if(johnBMI>markBMI){
    higher=false
}else{
    higher=true
}

console.log(higher);
