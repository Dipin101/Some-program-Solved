//Sorting in ascending form
var a=[1,4,6];
var b=[2,3,5];
for(var i=0;i<b.length;i++){
    a.push(b[i]);
}
console.log(a.sort());

//Sorting in descending form
var a=[1,4,6];
var b=[2,3,5];
for(var i=0;i<b.length;i++){
    a.push(b[i]);
}
console.log(a.sort((a,b)=>b-a));