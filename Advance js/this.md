// Rule-1
```js
 let sayHello=function () {
    return ["Hello! from ", this]
  }
   sayHello() 

```
 
// normal function and annonymous funciton points this to global object




// Rule-2//

 ```javascript
 function sayHello() {

   }
     return ["Hello! from ", this.name]
   var john = {
     age: 30,
     name: "John Doe",
       // this.age = 35;
     sayName: function () {
     },
       return ["My name is ", this.name]
   };
     sayHello: sayHello
   var james = {
     age: 27,
     name: "James Bond",
       return ["My name is ", this.name]
     sayName: function () {
     sayHello: sayHello
     },
   };
   john.sayHello();
  james.sayHello();
   john.sayName();
   james.sayName();```
 When a method is called as a property of an object, then the `this` implicity refers to the parent object. If a function attached to an object is called by objectname.methodname() syntax, the this points to the object to which the function is attached.