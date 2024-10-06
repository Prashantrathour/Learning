// function sayHello(loc) {
//     this.location=loc
//     return ("Hello! ", this);
//   }
  
//   const john = {
//     name: "John Doe",
//     age: 30
//   };
  
//   const james = {
//     name: "James Bond",
//     age: 30
//   };
  
//   sayHello.call(james,"tilhar");
//   sayHello.apply(john,["spn"]);
//   const bind=sayHello.bind(john);
//   bind("bareilly")
  


var john = { name: "John Doe", age: 25 };

var sayArrowHello = () => {
  console.log("Arrow Hello ", this);
};

function sayRegularHello() {
  console.log("Regular Hello ", this);
}

function sayRegularName() {
  console.log("My Regular name is ", this.name, this); // points to john because of line no.42
  sayRegularHello();
  sayArrowHello();
  var sayArrowGoodBye = () => {
    console.log("Arrow GoodBye ", this); // lexically resolves to john
  };
  sayArrowGoodBye();
}

sayRegularName.call(john);
console.log('%cHello','color:green;')