var num=145;
var arr=num.toString().split("");
console.log(arr.length);
console.log(arr);
var sum=0; var mul=1;
for(var i=0;i<arr.length;i++){
if(arr.length>1){
 mul=arr[0]*arr[arr.length-1];
sum+=mul;
arr.shift();
arr.pop();
}else{
    break;
}
}
console.log(arr);
if(arr.length==0){
sum;
}else{
sum=sum+parseInt(arr);
}
console.log(sum);