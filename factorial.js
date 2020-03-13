var fact=1;
function factorial(num){
	for(var i=1; i<=num;i++){
		fact*=i;
	}
	return fact;
}
console.log(factorial(8));

//recursion
var factorial=function(n){
	if(n==0){
		return 1;
	}else{
		return n* factorial(n-1);
	}
}

console.log(factorial(8));
