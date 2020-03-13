var a=0;
var b=0;
var arr=[[1,2,4,0,2],[2,3,4,1,2],[5,7,3,7,9]];
for(var i=0;i<3;i++){
for(var j=0;j<5;j++){
	if(arr[i][j]==0){
		a=i;
		b=j;
	}
}
}
for(var i=0;i<3;i++){
for(var j=0;j<5;j++){
	if(i==a){
		arr[a][j]=0;	
	}
	else if(j==b){
		arr[i][b]=0;
	}
	else{
	console.log("invalid");
	}
}}
for(var i=0;i<3;i++){
    for(var j=0;j<5;j++){
        console.log(arr[i][j]);
    }
    console.log("\n");
}