// classes in javascript are synthetic suger of constructor function that give another syntex to create constructor function
class employe{
   constructor (name,salary,location){
    this.name = name;
    this.salary = salary;
    this.location = location;
   }
   getinfo(){
    return `${this.name} ${this.salary} ${this.location}`;
   }
}
let createConstruct=new employe("prashant",500000,"noida")
console.log(createConstruct.getinfo())