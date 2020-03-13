var arr=[[1,2,3],[4,5,6],[7,8,9]];
var sum=0;var sum2=0
for(var i=0;i<3;i++){
    for(var j=0;j<3;j++)
    {
        if(i==j){
           sum+=arr[i][j]; 
        }
    }
}
console.log(sum);
for(var i=0;i<3;i++){
    sum2+=arr[i][3-i-1]; 
}
console.log(sum2);