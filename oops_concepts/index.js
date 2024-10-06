// // function user(username, password){
// //     this.username = username
// //     this.password = password
// //     this.greeting=function(){
// //         return `${this.username} ${this.password}`
// //     }
    
   

// //     }
// // let user1= new user("Prashant","123")
// // let user2= new user("rathour","1234")
// // console.log(user1)
// // user.prototype.getname=function(){
// //     return `${this.username}`
// // }
// // console.log(user1.getname())



// // let name="Prashant"
// // function getlength(str){
// //     this.str=str
// // }


// // getlength.prototype.truelength=function(){
// //     return `true length of this str is ${this.str.trim().length}`
// // }
// // let truelength=new getlength("Prashant.     ")
// // console.log(truelength.truelength())
//   class Userfun{
//     constructor(username){
//         this.username=username
//     }
//   }

//   class getinfo extends Userfun{
//       constructor(username,age){
//         super(username)
//         this.age=age


//       }
//       info(){
//         return `${this.username} age is ${this.age}`
//       }
//       addage(age){            
//        return this.age=this.age+age
//       }
//   }
//   const user=new Userfun("Prashant")
//   console.log(user)
//   const getdata=new getinfo("prashant",15)
//   getdata.addage(30)
//   console.log(getdata.info())



function CoffeeMachine() {
  let coffeeBeans = 100;

  function grindBeans() {
      console.log("Grinding beans...");
      coffeeBeans -= 10;
  }

  this.makeCoffee = function() {
      grindBeans();
      console.log("Making standard coffee...");
  };

  this.showBeans = function() {
      console.log(`Beans remaining: ${coffeeBeans}`);
  };
}
function SpecialCoffeeMachine() {
  CoffeeMachine.call(this); // Inherit from CoffeeMachine

  let originalMakeCoffee = this.makeCoffee;
  // method overriding
  this.makeCoffee = function() {
      originalMakeCoffee.call(this); // Call the original method
      console.log("Adding special ingredients for special coffee...");
  };
}
let myMachine = new CoffeeMachine();
myMachine.makeCoffee(); // Outputs: Grinding beans... Making standard coffee...

let mySpecialMachine = new SpecialCoffeeMachine();
mySpecialMachine.makeCoffee(); // Outputs: Grinding beans... Making standard coffee... Adding special ingredients for special coffee...
