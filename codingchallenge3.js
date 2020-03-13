
var total;
function tip(bill){
if(bill<=50){
    percent=0.2;
}else if(bill>50 && bill<200){
    percent=0.15;
}else{
   perecent=0.10;
}
return percent*bill
};
var bills=[124,48,268];
var tips=[tip(bills[0]),tip(bills[1]),tip(bills[2])];
console.log('Tips='+ ' '+ tips);
var total=[bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];
console.log('Total='+ ' '+ total);