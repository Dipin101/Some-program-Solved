
var arr=['Ram','Shyam','Gopal','Hawa'];
var arr2=['Shyam','Hawa'];
var i=arr.length;
var j=arr2.length;
console.log(i);
console.log(j);
res = arr.filter(f => !arr2.includes(f));
console.log(res);

/*for (var i = 0; i<arr2.length; i++) {
    for (var j = 0; j<arr.length; j++) {
        if (arr2[i] == arr[j]) {
            arr = arr.slice(0, j).concat(arr.slice(j+1, arr.length));
        }
    }
}
console.log(arr);*/
/*res = arr.filter(myCallBack);
function myCallBack(num){
  return arr2.indexOf(num) < 0;
}
console.log(res);*/