//to find the containing number like if number is from 1 to 20 and the digit is 9 then output is 2
function isDigit(x,y){
	while(x>0){
	if(x%10 ==y){
		break;
	}
	x=x/10;
}
return x;
}
function print(x,y){
for(var i=0;i<=x;i++){
	if(i==y||isDigit(i,y)){
		console.log(i+" ");
	}
}
}
print(20,5);