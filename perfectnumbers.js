var a=prompt("Enter a number");
var b=prompt("Enter a number");
var arr=[];
var sum=0;
if(b>a){
for(var i=a;i<=b;i++){
 for(var j=2;j<=i;j++){
	if(j*j==i){
		arr.push(j*j);
	}
	}
}
for(var i=0;i<arr.length;i++){
sum+=arr[i];
}
console.log(arr);
console.log("The sum of Perfect number is "+sum);
}
else{
console.log("return -1");
}