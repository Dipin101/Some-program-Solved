var arr1=[[1,2,4,0,2],[2,3,4,1,2],[5,7,3,7,9]];
var arrmax=[];
var arrmin=[];
for(var i=0;i<arr1.length;i++){
    arrmax.push(Math.max.apply(Math,arr1[i]));
}
//largest number
var max=Math.max.apply(Math,arrmax);
//minimum number
for(var i=0;i<arr1.length;i++){
    arrmin.push(Math.min.apply(Math,arr1[i]));
}
var min=Math.max.apply(Math,arrmin);
console.log(max);
console.log(min);
//difference
var diff=max-min;
console.log("The difference of largest and smallest is "+ diff);
