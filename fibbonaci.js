var a=0;
var b=1;
console.log(a);
console.log(b);
var res;
	for(var i=1;i<10;i++){
	res=a+b;
	console.log(res);
	a=b;
	b=res;
}
