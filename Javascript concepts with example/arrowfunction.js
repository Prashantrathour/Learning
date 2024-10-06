function narmalfun(){
    console.log(this)
}
let arrow=()=>{
    console.log(this)
}
// narmalfun()
// arrow()

const obj={
    name:"Prashant",
    info:()=>{
        console.log(this)
    },
    info2:function(){
        console.log(this)
    }
}

let obj1 = {
    name:"test",
    valueOfThis:function(){
  return this;
    }
  }
  let obj2 = {
    name:"test",
    valueOfThis: ()=>{
  return this;
    }
  }
  
//   let res1=; // Will return the object obj1
//   let res2=; // Will return window/global object
//   console.log(obj1.valueOfThis(),obj2.valueOfThis());


// Traditional Function
// function Person() {
//     this.age = 0;
//     setInterval(function growUp() {
//           this.age++; // This refers to the global object, not the Person object
//     console.log(age,this.age)
//     }, 1000);
//     return [age]  }
  // Arrow Function
  function Person() {
    this.age = 0;
    setInterval(() => {
      this.age++; // 'this' refers to the Person object
     console.log(age,this.age)
    }, 1000);
    
}
Person()
  
  