var a=[1,2,3,4,5,6,7];
function min(a){
if(a.length==1){
    return a[0];
}
    var first=a[0];
    var last=a[a.length-1];
    var beginning=a.slice(0,a.length-1);
    var end=a.slice(1);
    
    return first<=last? min(beginning):min(end);
}
min(a);