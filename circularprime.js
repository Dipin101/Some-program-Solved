//var n=prompt("Enter number");
var a=[];
for(var i=1;i<100;i++){
    var flag=true;
    for(var j=2;j<i;j++){
        if(i%j==0){
            flag=false;
            break;
        }
    }
    if(flag==true){
      a.push(i);  
    }
}
var circularPrime=true;
var rev=0;
var di;
for(var i=0;i<a.length;i++){
       if(a[i]<=9){
           circularPrime=false;
           break;
       }
    while(a[i]>9){
    di=a[i]%10;    
    rev=rev*10+di;
    a[i]/=10;
    }
    if(a[i]==rev){
        circularPrime=true;
    }
    }
console.log(a);