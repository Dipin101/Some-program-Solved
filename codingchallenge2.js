var john={
    firstname:'John',
    mass:100,
    height:6,
    calcbmi:function(){
        this.bmi=this.mass/(this.height*this.height);
    }
};
var mark={
    firstname:'Mark',
    mass:60,
    height:5,
    calcbmi:function(){this.bmi=this.mass/(this.height*this.height);}
}


if(john.calcbmi()>mark.calcbmi()){
    console.log('higher jon');
}
else if(john.calcbmi()<mark.calcbmi()){
    console.log('higher mark');
}else{
    console.log('equal');
}
