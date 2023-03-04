class Vehicle {
    constructor(model){
      this.model = model
    }
    drive(){
      return this.model + " " + "drives"
    }
}
            
class Suv extends Vehicle {
    constructor(model, offroadPackage){
        super(model)
        this.offroadPackage = offroadPackage;
    }
    drive(){
        return this.model + " " + "drives"
    }
}

class Truck extends Vehicle {
    constructor(model, towingCapacity){
        super(model)
        this.towingCapacity = towingCapacity;
    }
    drive(){
        return this.model + " " + "drives"
    }
}

class Sedan extends Vehicle {
    constructor(model, backupCamera){
        super(model)
        this.backUpCamera = backupCamera;
    }
    drive(){
        return this.model + " " + "drives"
    }
}

// class EVSedan extends Sedan {
//     constructor(model){
//         super(model)
//     }
//     drive(){
//         return this.model + " " + "drives"
//     }
//     recharge(){
//         return this.model + " " + "recharge"
//     }
// }


// class Vehicle {
//     constructor(model){
//       this.model = model
//     }
//     drive(){
//       return this.model + " " + "drives"
//     }
//   }
            
// class Suv extends Vehicle{
//     constructor(model, offroadPackage){
//         super(model)
//         this.offroadPackage = offroadPackage;
//         // this.model = model
//     }
//     drive(){
//         return this.model + " " + "drives"
//     }
// }
// class Truck extends Vehicle{
//     constructor(model, towingCapacity){
//         super(model)
//         this.towingCapacity = towingCapacity;
//         // this.model = model
//     }
//     drive(){
//         return this.model + " " + "drives"
//     }
// }

// class Sedan extends Vehicle{
//     constructor(model, backupCamera){
//         super(model)
//         this.backupCamera = backupCamera;
//         // this.model = model
//     }
//     drive(){
//         return this.model + " " + "drives"
//     }
// }

// class EVSedan extends Sedan {
//     constructor(model){
//         super(model)
//         this.model = model
//     }
//     drive(){
//         return `${this.model} drives`
//     }
//     recharge(){
//         return `${this.model} recharges`
//     }
// }