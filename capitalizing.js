var a='hello world';
var arr=a.split(" ");
for(var i=0;i<arr.length;i++){
arr[i]=arr[i][0].toUpperCase()+arr[i].slice(1);
}
let str=arr.join(" ");
console.log(str);