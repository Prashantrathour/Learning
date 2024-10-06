// tradition way
// parent
// function Animal(name){
//     this.name = name;
// }

// Animal.prototype.species = function(){
//     console.log("animal species")
// }
// // child
// function Dog(breed, name){
//     Animal.call(this,name)
//     this.breed =breed;
// }
// // inharite dog with animal
// Dog.prototype=Object.create(Animal.prototype)
//  Dog.prototype.sounds = function(){
//     console.log("Bhoo")
//  }

//  let mydog=new Dog("german","doggy")
//  console.log(mydog.sounds())
 

 class Animal{
    constructor(name){
        this.name = name
    }
    soundes(){
        console.log("Bhoo bhoo")
      
    }
 }

 class Dog extends Animal{
    constructor(name,breed){
        super(name)
        this.breed=breed
    }
    getinfo(){
        console.log("Dog"+this.name)
       
    }
 }

 const classdog=new Dog("chintu","german sepherd")
classdog.getinfo()
classdog.soundes()