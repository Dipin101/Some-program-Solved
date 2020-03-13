var a=1;
var b=1;
var c=1;
console.log(a);
console.log(b);
console.log(c);
var result=0;
var n=prompt("Enter number");
for(var i=0;i<n;i++){
	result=a+b+c;
	console.log(result);
	a=b;
	b=c;
	c=result;
}

