class Car{
    constructor(Brand){
        this.carName=Brand;
    }
    present(){
        return "I have "+ this.carName;
    }
}
mycar= new Car("Ford");
console.log(mycar.present());